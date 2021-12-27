import React from 'react'
import Typical from 'react-typical'
import './Portfolio.css'

function Portfolio() {
    return (
        <div>
            <div className="main">
                <div className="left">
                    <div className='Portfolio-container'>
                            <div className="profile-details">
                                <div className="col">
                                        <a href="https://www.linkedin.com/in/sakshi-s-1667911b0/">
                                            <i className="bi bi-linkedin"></i>
                                        </a>
                                        <a href="https://github.com/ssakshi29">
                                            <i class="bi bi-github"></i>   
                                        </a>
                                </div>

                                <div className="profile-details-name">
                                    <span className="profile-text-name">
                                    Hello <span className="hand">👋</span>,I'am <span className="highlighted-text">Sakshi Singh</span>
                                    </span>
                            
                                </div>
                                
                                <div className="role">
                                    <h3>
                                    <Typical
                                        loop={Infinity}
                                        steps={[
                                            "DSA Lover<>",
                                            1000,
                                            "Frontend Developer 💻",
                                            2000,
                                            
                                        ]}
                                    />
                                    </h3>
                                </div>
                            
                                <div className="profile-content">
                                I am an undergraduate student at Chhatrapti Shahuji Maharaj Univeristy. I love to code and create stuff. 
                                </div>


                                <a href="SakshiSingh_UIET_KANPUR .pdf" download="SakshiSingh.pdf">
                                    <button className="btn  highlighted-btn" >Resume</button>
                                </a>
                            

                            </div> 

                        
                    </div>
                </div>
                <div className="right">
                     right
                </div>
            </div>      
        
        </div>
    )
}

export default Portfolio


