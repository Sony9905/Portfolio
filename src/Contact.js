import React from 'react'
import "./Contact.css";
import lk from"./lk.png";
import git from "./git.png";
function Contact() {
  return (
    <div id="body">
    <section id="contact">
        <h1 className="section-header">Contact Me</h1>
        <div className="contact-wrapper">
        <div className="direct-contact-container">
  
          <ul className="contact-list">
            <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Queens, New York</span></i></li>
            
            <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(347) 866-0287</a></span></i></li>
            
            <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">1sony9905@gmail.com</a></span></i></li>

            <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail">Monday-Friday, 9am-1pm</span></i></li>
            <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail">Saturday/Sunday, 9am-9pm EST</span></i></li>
            
          </ul>

          <ul className="social-media-list">
            <li>
              <a href="https://github.com/Sony9905"  target="_blank" className="contact-icon" className="c">
                <img src={git} alt="github"/>
              </a>
            </li> 
            <li><a href="https://www.linkedin.com/in/sony-singh-a8494a162/" target="_blank" className="contact-icon" className="c">
              <img src={lk} alt="linkdin"/></a>
            </li>       
          </ul>
  
        </div>
    </div>
    <div className='btn'>
        <button style={{color:"black"}} className='draw' onClick={()=> {
                            let pageHeight = window.innerHeight;
                            window.scrollBy(0, -(pageHeight *5));
                        }}>Back up
        </button>
    </div>
    </section>
  </div>
  )
}

export default Contact;