import React from 'react';
import './Homepage.css';
import { FaSearch } from 'react-icons/fa';

const Homepage = () => {
  return (
    <div className="homepagecontainer">
      <div className="homepageheader">
        <div className="homeimage">
          <img src="../../../public/assets/Logo.png" alt="logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
          <FaSearch className="search-icon" />
        </div>
      </div>
      <div className="secondhead">
        <div className="secondhead1">
          <select className='homeselect'>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
    
          <select className='homeselect'>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
    
          <select className='homeselect'>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
    
          <select className='homeselect'>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>
      <div className="notify">
      <div className="content-box">
        <h2>Get</h2>
        <h1>#DisasterReady</h1>
        <p>
          Being <strong>#DisasterReady</strong> means understanding the risks of
          natural calamities and taking the necessary steps to avoid them...
        </p>
        <div className="button-box">
          <button>#GetNotified</button>
        </div>
      </div>
      <div className="video-container">
        <video autoPlay loop muted>
          <source src="../../../public/assets/Homepage_Hero_V8_07.11.23_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
      <div className="maincontent">
        <div className="maincontentbox">

        </div>
      </div>
    </div>
  );
}

export default Homepage;
