import React from 'react';
import Me from "./profile.png";
import './Intro.css';
const Intro = () => {
  return <div>
    <div className='Intro'>
            <div className='Intro-Left'>
                <div className='left-wrapper'>
                    <h2 className='introduction'>Hello my name is</h2>
                    <h1 className='name'>Maninder Singh</h1>
                    <div className='bio'>I am a recent Hunter College graduate leveraging studies in computer science. I am seeking a jr front-end developer role in a company that will allow me to grow as a developer, offer professional challenges, utilize my interpersonal skills and excellent time management. My tech stack includes:</div>
                    <div className='Title'>
                        <div className='animation'>
                            <div className='item'>
                                React
                            </div>
                            <div className='item'>
                                JS
                            </div>
                            <div className='item'>
                                HTML/CSS3
                            </div>
                            <div className='item'>
                                Node
                            </div>
                            <div className='item'>
                                Git Flow Control
                            </div>
                        </div>
                    </div>
                    <button  className= "draw" onClick={()=> {
                        let pageHeight = window.innerHeight;
                        window.scrollBy(0, pageHeight);
                    }}>
                        Click here to see my projects:
                    </button>
                </div>
            </div>
            <div className='Intro-Right'>
                <div className='img-bg'></div>
                <img src={Me} alt='' className='image'></img>
            </div>
    </div>
  </div>;
};

export default Intro;
