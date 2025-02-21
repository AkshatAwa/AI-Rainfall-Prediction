import React from 'react';
import ShowData from './components/ShowingData/ShowData';
import AQI from './components/AQI/AQI';
import Shelter from './components/Shelter/Shelter';
import EarlyWarningSystem from './components/EWS/EWS';
import EWSChatbot from './components/Chatbot/Chatbot';
// import Footer from './components/Footer/Footer';
// import Homepage from './components/Homepage/Homepage';

const App = () => {
  return (
    <>
    {/* <Homepage/> */}
    <ShowData/>
    {/* <AQI/> */}
    {/* <EarlyWarningSystem/>
    <Shelter/> */}
    <EWSChatbot/>
    {/* <Footer/> */}
    </>
  );
};

export default App;
