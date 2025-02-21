import React, { useEffect, useState } from 'react';
import './EWS.css'

const EarlyWarningSystem = () => {
  const [airQuality, setAirQuality] = useState(null);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.waqi.info/feed/@2553/?token=98068cca18c627396cc475b6afa52f29fabf2f25');
      const data = await response.json();

      setAirQuality(data);
      checkForAlert(data);
    };

    fetchData();
  }, []);

  const checkForAlert = (data) => {
    const threshold = 150;
    if (data.qualityIndex > threshold) {
      setAlert({
        message: 'Poor Air Quality Alert',
        severity: 'High',
        recommendedAction: 'Stay indoors and limit outdoor activities.'
      });
    }
  };

  return (
    <div className='ewsdiv' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column', padding: '20px', fontFamily: 'Montserrat, sans-serif', fontWeight:'300' }}>
      <h1 style={{fontWeight:'300'}}>Early Warning System</h1>
      {alert ? (
        <div style={{
          border: '1px solid red',
          backgroundColor: '#ffe5e5',
          padding: '10px',
          borderRadius: '5px'
        }}>
          <h2 style={{ color: 'red' }}>{alert.message}</h2>
          <p>Severity: {alert.severity}</p>
          <p>{alert.recommendedAction}</p>
        </div>
      ) : (
        <p>No current alerts.</p>
      )}
    </div>
  );
};

export default EarlyWarningSystem;
