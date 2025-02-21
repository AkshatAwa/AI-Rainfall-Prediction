import React, { useState } from 'react';
import './Shelter.css'

const shelterData = {
    'Andhra Pradesh': [
      { name: 'Shelter A1', address: 'Address A1, Andhra Pradesh' },
      { name: 'Shelter A2', address: 'Address A2, Andhra Pradesh' },
    ],
    'Arunachal Pradesh': [
      { name: 'Shelter B1', address: 'Address B1, Arunachal Pradesh' },
      { name: 'Shelter B2', address: 'Address B2, Arunachal Pradesh' },
    ],
    'Assam': [
      { name: 'Shelter C1', address: 'Address C1, Assam' },
      { name: 'Shelter C2', address: 'Address C2, Assam' },
    ],
    'Bihar': [
      { name: 'Shelter D1', address: 'Address D1, Bihar' },
      { name: 'Shelter D2', address: 'Address D2, Bihar' },
    ],
    'Chhattisgarh': [
      { name: 'Shelter E1', address: 'Address E1, Chhattisgarh' },
      { name: 'Shelter E2', address: 'Address E2, Chhattisgarh' },
    ],
    'Goa': [
      { name: 'Shelter F1', address: 'Address F1, Goa' },
      { name: 'Shelter F2', address: 'Address F2, Goa' },
    ],
    'Gujarat': [
      { name: 'Shelter G1', address: 'Address G1, Gujarat' },
      { name: 'Shelter G2', address: 'Address G2, Gujarat' },
    ],
    'Haryana': [
      { name: 'Shelter H1', address: 'Address H1, Haryana' },
      { name: 'Shelter H2', address: 'Address H2, Haryana' },
    ],
    'Himachal Pradesh': [
      { name: 'Shelter I1', address: 'Address I1, Himachal Pradesh' },
      { name: 'Shelter I2', address: 'Address I2, Himachal Pradesh' },
    ],
    'Delhi': [
      { name: 'Shelter J1', address: 'Address J1, Delhi' },
      { name: 'Shelter J2', address: 'Address J2, Delhi' },
    ],
    'Punjab': [
      { name: 'Shelter K1', address: 'Address K1, Punjab' },
      { name: 'Shelter K2', address: 'Address K2, Punjab' },
    ],
    'Jharkhand': [
      { name: 'Shelter L1', address: 'Address L1, Jharkhand' },
      { name: 'Shelter L2', address: 'Address L2, Jharkhand' },
    ],
    'Karnataka': [
      { name: 'Shelter M1', address: 'Address M1, Karnataka' },
      { name: 'Shelter M2', address: 'Address M2, Karnataka' },
    ],
    'Kerala': [
      { name: 'Shelter N1', address: 'Address N1, Kerala' },
      { name: 'Shelter N2', address: 'Address N2, Kerala' },
    ],
    'Madhya Pradesh': [
      { name: 'Shelter O1', address: 'Address O1, Madhya Pradesh' },
      { name: 'Shelter O2', address: 'Address O2, Madhya Pradesh' },
    ],
    'Maharashtra': [
      { name: 'Shelter P1', address: 'Address P1, Maharashtra' },
      { name: 'Shelter P2', address: 'Address P2, Maharashtra' },
    ],
    'Manipur': [
      { name: 'Shelter Q1', address: 'Address Q1, Manipur' },
      { name: 'Shelter Q2', address: 'Address Q2, Manipur' },
    ],
    'Meghalaya': [
      { name: 'Shelter R1', address: 'Address R1, Meghalaya' },
      { name: 'Shelter R2', address: 'Address R2, Meghalaya' },
    ],
    'Mizoram': [
      { name: 'Shelter S1', address: 'Address S1, Mizoram' },
      { name: 'Shelter S2', address: 'Address S2, Mizoram' },
    ],
    'Nagaland': [
      { name: 'Shelter T1', address: 'Address T1, Nagaland' },
      { name: 'Shelter T2', address: 'Address T2, Nagaland' },
    ],
    'Odisha': [
      { name: 'Shelter U1', address: 'Address U1, Odisha' },
      { name: 'Shelter U2', address: 'Address U2, Odisha' },
    ],
    'Rajasthan': [
      { name: 'Shelter V1', address: 'Address V1, Rajasthan' },
      { name: 'Shelter V2', address: 'Address V2, Rajasthan' },
    ],
    'Sikkim': [
      { name: 'Shelter W1', address: 'Address W1, Sikkim' },
      { name: 'Shelter W2', address: 'Address W2, Sikkim' },
    ],
    'Tamil Nadu': [
      { name: 'Shelter X1', address: 'Address X1, Tamil Nadu' },
      { name: 'Shelter X2', address: 'Address X2, Tamil Nadu' },
    ],
    'Telangana': [
      { name: 'Shelter Y1', address: 'Address Y1, Telangana' },
      { name: 'Shelter Y2', address: 'Address Y2, Telangana' },
    ],
    'Tripura': [
      { name: 'Shelter Z1', address: 'Address Z1, Tripura' },
      { name: 'Shelter Z2', address: 'Address Z2, Tripura' },
    ],
    'Uttar Pradesh': [
      { name: 'Shelter AA1', address: 'Address AA1, Uttar Pradesh' },
      { name: 'Shelter AA2', address: 'Address AA2, Uttar Pradesh' },
    ],
    'Uttarakhand': [
      { name: 'Shelter BB1', address: 'Address BB1, Uttarakhand' },
      { name: 'Shelter BB2', address: 'Address BB2, Uttarakhand' },
    ],
    'West Bengal': [
      { name: 'Shelter CC1', address: 'Address CC1, West Bengal' },
      { name: 'Shelter CC2', address: 'Address CC2, West Bengal' },
    ],
    'Andaman and Nicobar Islands': [
      { name: 'Shelter DD1', address: 'Address DD1, Andaman and Nicobar Islands' },
      { name: 'Shelter DD2', address: 'Address DD2, Andaman and Nicobar Islands' },
    ],
    'Chandigarh': [
      { name: 'Shelter EE1', address: 'Address EE1, Chandigarh' },
      { name: 'Shelter EE2', address: 'Address EE2, Chandigarh' },
    ],
    'Dadra and Nagar Haveli and Daman and Diu': [
      { name: 'Shelter FF1', address: 'Address FF1, Dadra and Nagar Haveli and Daman and Diu' },
      { name: 'Shelter FF2', address: 'Address FF2, Dadra and Nagar Haveli and Daman and Diu' },
    ],
    'Lakshadweep': [
      { name: 'Shelter GG1', address: 'Address GG1, Lakshadweep' },
      { name: 'Shelter GG2', address: 'Address GG2, Lakshadweep' },
    ],
    'Puducherry': [
      { name: 'Shelter HH1', address: 'Address HH1, Puducherry' },
      { name: 'Shelter HH2', address: 'Address HH2, Puducherry' },
    ],
  };
  

  const Shelter = () => {
    const [selectedState, setSelectedState] = useState('');
    const [shelters, setShelters] = useState([]);
  
    const handleStateChange = (event) => {
      const state = event.target.value;
      setSelectedState(state);
      setShelters(shelterData[state] || []);
    };
  
    return (
      <div className="shelter-container">
        <div className="shelter-image">
          <img src="../../../public/images/shelter.jpg" alt="Shelter" />
        </div>
        <div className="shelter-content">
          <h1 style={{color:'#fff', marginBottom: '2rem'}}>Find Nearby Shelters</h1>
          <div className="state-select">
            <label htmlFor="state">Select State:</label>
            <select id="state" value={selectedState} onChange={handleStateChange} style={{textAlign:'center'}}>
              <option value="">--Select a State--</option>
              {Object.keys(shelterData).map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
  
          {shelters.length > 0 && (
            <div className="shelter-list">
              <h2 style={{color:'#fff'}}>Nearby Shelters</h2>
              <ul>
                {shelters.map((shelter, index) => (
                  <li key={index}>
                    <strong>{shelter.name}</strong>
                    <p>{shelter.address}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };
  
export default Shelter;
