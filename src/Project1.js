import React from 'react';
import "./Projects.css";
import starbucks from "./starbucks.png";
import FR from "./FR.png";
import Data from "./DataScience.png";
import Robo from "./robofriends.png";
const Project1 = () => {
  return (
    <div>
      <div className="Projects">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <a href='https://sony9905.github.io/RoboFriends/' target="blank_">
              <img
                src={Robo}
                alt=""
                className="a-img"
              />
            </a>
          </div>
        </div>
        <div className="a-right">
          <h1 className="title">RoboFriends</h1>
          <p className="a-sub">
            Fun creative project using class based React and a free Robots API.
          </p>
          <p className="a-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
          </p>
          <a href='#Project2'>
            <button className='draw'>Next Project:</button>
          </a>
        </div>
      </div>
      <div className="Project2" id='Project2'>
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <a href='https://stephanie-yung.github.io/capstone-frontend/#/' target="blank_">
            <img
              src={starbucks}
              alt=""
              className="a-img"
            />
            </a>
          </div>
        </div>
        <div className="a-right">
          <h1 className="title">Starbucks Clone</h1>
          <p className="a-sub">
            Working in an agile based environment, this Starbucks clone is created using functional React on the front-end and MondoDB/Flask for the back-end
          </p>
          <p className="a-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
          </p>
          <a href='#P3'>
            <button className='draw'>Next Project:</button>
          </a>
        </div>
      </div>
      <div className="Project3" id='P3'>
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <a href='https://sony9905.github.io/DataScienceProject/#home' target="blank_">
            <img
              src={Data}
              alt=""
              className="a-img"
            />
            </a>
          </div>
        </div>
        <div className="a-right">
          <h1 className="title">Data-Science Study</h1>
          <p className="a-sub">
            A study showing a full analysis of NYC open data that demonstrates the utilization of python's libaries, such as pandas, seaborn and matplotlib. The website was created using vanilla Javascript, CSS and HTML5
          </p>
          <p className="a-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
          </p>
          <a href='#P4'>
            <button className='draw'>Next Project:</button>
          </a>
        </div>
      </div>
      <div className="Project4" id="P4">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <a href='https://sony9905.github.io/FaceRecognition/' target="blank_">
            <img
              src={FR}
              alt=""
              className="a-img"
            />
            </a>
          </div>
        </div>
        <div className="a-right">
          <h1 className="title">Face Recognition App</h1>
          <p className="a-sub">
            Fun creative project using functional React to create a responsive front-end where users can upload images to detect Faces within the image. 
          </p>
          <p className="a-desc" style={{marginBottom: 35}} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
          </p>
          <a href='#Contact'>
            <button className='draw' onClick={()=> {
                        let pageHeight = window.innerHeight;
                        window.scrollBy(0, pageHeight);
                    }}>If you wish to contact me directly:</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project1;