from flask import Flask, request, jsonify
import pandas as pd
from statsmodels.tsa.statespace.sarimax import SARIMAX
from sklearn.metrics import mean_absolute_error
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load the data once when the app starts
df = pd.read_csv('../assets/Sub_Division_IMD_2017.csv')
df['YEAR'] = pd.to_datetime(df['YEAR'], format='%Y')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        subdivision = data.get('state')
        season = data.get('season')

        state_data = df[df['SUBDIVISION'] == subdivision].set_index('YEAR')

        # Forward fill missing values for the selected season
        state_data[season] = state_data[season].ffill()

        # Check if we have enough data
        if len(state_data[season].dropna()) < 10:
            return jsonify({'error': 'Insufficient data for the selected subdivision and season.'}), 400

        try:
            model = SARIMAX(state_data[season], order=(2, 1, 2), seasonal_order=(1, 1, 1, 8), freq='YS')
            model_fit = model.fit(disp=False)

            forecast_steps = 19  # Forecast from 2010 to 2028
            forecast = model_fit.get_forecast(steps=forecast_steps)
            forecast_values = forecast.predicted_mean

            # Mean absolute error calculation for the year 2010
            y_true = state_data[season].dropna().iloc[-1:]  # Last available year
            y_pred = forecast_values[:1]
            mae = mean_absolute_error(y_true, y_pred)
            percentage_mae = (mae / y_true.mean()) * 100

            # Return the prediction for each year till 2028
            forecast_years = pd.date_range(start='2010', periods=forecast_steps, freq='YS').year
            forecast_data = list(zip(forecast_years, forecast_values))

            response = {
                'forecast': forecast_data,  # Forecast values with years
                'accuracy': 100 - percentage_mae  # Return accuracy as (100 - error)
            }

            return jsonify(response), 200

        except Exception as e:
            return jsonify({'error': str(e)}), 500

    except KeyError:
        return jsonify({'error': 'Invalid input data. Please provide state and season.'}), 400

if __name__ == '__main__':
    app.run(debug=True)
