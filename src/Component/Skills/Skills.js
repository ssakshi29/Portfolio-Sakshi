import React from 'react'
import {skills} from './skill_data'
import Skill from '../Skill/Skill'
import './Skills.css'
function Skills() {
    return (
        <div>
           <div className="Skills">
              <h3 className="Skills-heading">Skills</h3>
              <div className="Skills-list">  
                 {
                    skills.map((item) => (<Skill key={item.id}  s1={item.skill} width={item.width}/>))
                 } 
              </div>
        </div>

        </div>
    )
}

export default Skills
