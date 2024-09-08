import React, { useState } from 'react';
import ProjectData from '../skill/Project.json';
import '../components/project.css';

const Project = () => {
  const [data] = useState(ProjectData.projects);

  return (
    <div className="container project_section" id='project'>
      <h3 style={{ fontFamily: 'cursive', textAlign: 'center' }}>My Projects</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          data.map((item, index) => (
            <div className="container_projects" key={index}>
              <div className="project_title">
                <span>{item.projectName}</span>
              </div>
              <div className="project_image">
                <img src={item.imageUrl} alt="project" />
              </div>
              <div className="project_content">
                <p>{item.description}</p>
                <div className="container" style={{ textAlign: 'center', marginTop: 20 }}>
                  <button onClick={() => window.location.href = `${item.code_link}`} className="btn btn-primary">
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Project;
