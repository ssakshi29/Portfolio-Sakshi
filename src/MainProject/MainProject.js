import React from 'react'
import './MainProject.css'
import {projects} from './data'
import Project from '../Component/Project/Project'



function MainProject() {
    return (
        <div>
            <div className="Project">
              <h3 className="Project-heading">Projects</h3>
              <div className="Project-list">  
                 {
                    projects.map((item) => (<Project key={item.id} title={item.title} img={item.img} desc={item.description} date={item.date} s1={item.skill_1} s2={item.skill_2} s3={item.skill_3}/>))
                 } 
              </div>
        </div>
        </div>
    )
}

export default MainProject
