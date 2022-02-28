import React from 'react';
import Me from "./profile.png";
import './Intro.css';
const Intro = () => {
  return <div>
    <div className='Intro'>
            <div className='Intro-Left'>
                <div className='left-wrapper'>
                    <h2 className='introduction'>Hello my name is</h2>
                    <h1 className='name'>Sony Singh</h1>
                    <div className='bio'>My name is Sony Singh, I am a upcoming graduate leveraging studies in computer science. I am seeking real-world experience as a front-end developer, as well as to maintain a full-time position that offers professional challenges, utilizing interpersonal skills, excellent time management, and problem-solving skills. My tech stack includes:</div>
                    <div className='Title'>
                        <div className='animation'>
                            <div className='item'>
                                Git Flow Control
                            </div>
                            <div className='item'>
                                JS
                            </div>
                            <div className='item'>
                                CSS
                            </div>
                            <div className='item'>
                                HTML
                            </div>
                            <div className='item'>
                                React
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