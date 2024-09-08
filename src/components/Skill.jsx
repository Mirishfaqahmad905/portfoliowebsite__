 import React from 'react'
 import Skills from '../skill/Skill.json';
 import './Skills.css';
 const Skill = () => {
   return (
     <div> 
         
          <h2 style={{textAlign:'center', fontFamily:'fantasy'}} id='skill'>skills </h2>
             
       {
          Skills.skills.map((data)=>{
              return(<>
               <div className="container_myskill_" style={{textAlign:'center'}}>
               <div className="container_skills" key={data.id}>
             <div className="skills_title_image"><h2>{data.skillName}</h2></div>
              <div className="image">
                 <img src={data.imageUrl} alt="" />
              </div>
               <div className="skills_description">
                  <h4>{data.description}</h4>
               </div>
          </div>
               </div>
              </>)
          })
         
       }
     </div>
   )
 }
 
 export default Skill