import React, { useState } from 'react';
import ExperienceData from '../components/Data/experience.json';

const Experience = () => {
  const [data] = useState(ExperienceData);

  return (
    <div className="container experience_section" id='experience'>
      <h1>Experience</h1>
      {
        data.map((item) => (
          <div className='ex-items' key={item.id}>
            <div className="left">
              <img src={''} alt="Company Logo" />
            </div>
            <div className="right">
              <h2>{item.role}</h2>
              <h4>{item.startDate} {item.endDate} - {item.location}</h4>
              <p>{item.experiences[0]}</p>
              <p>{item.experiences[1]}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Experience;
