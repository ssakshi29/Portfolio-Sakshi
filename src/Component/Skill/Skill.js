import React from 'react'
import './Skill.css'

const Skill = ({s1,width}) => 
{
    return (
        <div>
            <div className='skill-card'>
               
                <div  ClassName="skill-set">
                       {s1}
                </div>

                <div className="progress">
                    <div className={ width == 70 ? "progressBar": "progressBar1" }>
                    </div>
                   
                </div>
                  
            </div>
        </div>
    )
}

export default Skill

