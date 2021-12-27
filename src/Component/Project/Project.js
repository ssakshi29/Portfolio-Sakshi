import React from 'react'
import './Project.css'


const Project = ({img,desc,s1,s2,s3,date,title}) =>
{
    return (
        <>
           <div className="card">
             <img src={img} alt="" />
            
            <div className="card-title">
                <div className="card-title-left">
                {title}
                </div>
                <div className="card-title-right"> 
                {date}
                </div> 
            </div>

            <div className="">
              {desc}
            </div>

            <div className="bttn">
             <button className="btn1">{s1}</button>
             <button className="btn1">{s2}</button>
             <button className="btn1">{s3}</button>
             </div>
           </div>

        </>
    )
}

export default Project
