import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/styles/PersonalBio.scss';

// Import specific icons
import { 
  faJava, 
  faPython, 
  faJs, 
  faReact, 
  faMicrosoft, 
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import { faDatabase } from '@fortawesome/free-solid-svg-icons';

// For TypeScript, we'll use a code icon or similar - you can replace this
import { faCode } from '@fortawesome/free-solid-svg-icons';

function PersonalBio() {
  const technologies = [
    { icon: faMicrosoft, name: "C#", color: "#512BD4" },
    { icon: faJava, name: "Java", color: "#f89820" },
    { icon: faJs, name: "JavaScript", color: "#F7DF1E" },
    { icon: faCode, name: "TypeScript", color: "#3178C6" }, // Using code icon for TypeScript
    { icon: faReact, name: "React", color: "#61DAFB" },
    { icon: faPython, name: "Python", color: "#e4f136ff" },
    { icon: faGithub, name: "GitHub", color: "#ffffff" },
    { icon: faDatabase, name: "SQL", color: "#336791" },
  ];

  return (
    <div id="personalBio">
      <div className="items-container">
        <h1>Personal Bio</h1>
        
        <div className="bio-container">
          {/* Left Column - Bio Text */}
          <div className="bio-text">
            <p>
              I am a dedicated Software Developer with a passion for creating innovative solutions to complex problems. 
              I have experience in C#, Python, and web development, which allows me to tackle a variety of projects effectively. 
              I am currently in my final term at Niagara College, enrolled in the Computer Programming and Analysis program, 
              and am on track to graduate with honors. During my studies, I gained hands-on experience developing projects for clients, 
              collaborating with teams, and communicating effectively to meet client needs. I also improved my leadership and 
              communication skills, learning how to coordinate between teams and clarify requirements.
            </p>
            <p>
              Outside of work, I enjoy playing volleyball, spending time with friends, and traveling to explore different cultures. I also stay engaged with the latest trends in technology, continuously seeking to expand my knowledge and skills.
            </p>
          </div>

          {/* Right Column - Big Icons Only */}
          <div className="icons-filler">
            <div className="big-icons-grid">
              {technologies.map((tech, index) => (
                <FontAwesomeIcon 
                  key={index}
                  icon={tech.icon} 
                  className="big-icon"
                  style={{ color: tech.color }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalBio;