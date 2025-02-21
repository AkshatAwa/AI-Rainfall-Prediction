import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AQI = () => {
  const [data, setData] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.waqi.info/feed/@2553/?token=98068cca18c627396cc475b6afa52f29fabf2f25')
      .then(response => {
        const apiData = response.data;
        setData(apiData);
        generatePredictions(apiData);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const generatePredictions = (apiData) => {
    if (apiData && apiData.data && apiData.data.forecast && apiData.data.forecast.daily && apiData.data.forecast.daily.pm25) {
      const forecastData = apiData.data.forecast.daily.pm25;
      const predictedData = forecastData.map(day => ({
        date: day.day,
        predictedAQI: day.avg + 10, 
      }));
      setPredictions(predictedData);
    } else {
      setError('Forecast data is unavailable.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const chartData = {
    labels: predictions.map(p => p.date),
    datasets: [
      {
        label: 'Predicted AQI',
        data: predictions.map(p => p.predictedAQI),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Pollutant Levels Over Time',
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Level',
        },
      },
    },
  };

  return (
    <div className="AQIdiv" style={{display:'flex', justifyContent:'center', flexDirection:'column', maxWidth: '90vw', margin: 'auto', padding: '20px'}}>
      <h1 style={{fontFamily: "Montserrat",fontWeight:'400', textAlign: 'center', color: '#333', margin:'2rem'}}>Delhi Air Quality Monitoring and Prediction</h1>

      <section style={{fontWeight:'500', marginBottom: '20px', textAlign: 'center' }}>
        <h2 style={{fontFamily: "Montserrat", color: '#555', borderBottom: '2px solid #ddd', paddingBottom: '5px', marginBottom: '15px' }}>Current Air Quality</h2>
        <p style={{fontFamily: "Montserrat"}}><strong>Union Territory:</strong> Delhi</p>
        <p style={{fontFamily: "Montserrat"}}><strong>Current AQI:</strong> {data?.data?.aqi}</p>
      </section>

      <section style={{fontFamily: "Montserrat",marginBottom: '70px', textAlign: 'center', width: '100%', height: '400px' }}>
        <h2 style={{fontFamily: "Montserrat", color: '#555', borderBottom: '2px solid #ddd', paddingBottom: '5px', marginBottom: '15px' }}>AQI Prediction for the Next Days</h2>
        <div style={{fontFamily: "Montserrat", position: 'relative', height: '100%' }}>
          <Line data={chartData} options={lineChartOptions} />
        </div>
      </section>

      <footer style={{fontFamily: "Montserrat", textAlign: 'center', fontSize: '0.9em', color: '#777' }}>
        <p style={{fontFamily: "Montserrat"}}><strong>Data Last Synced:</strong> {data?.data?.debug?.sync}</p>
      </footer>
    </div>
  );
};

export default AQI;
