import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function PersonalBio() {
  return (
    <div id="personalBio">
      <div className="items-container">
        <h1>Personal Bio</h1>
        <div className="about-container">
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

      </div>
    </div>
  );
}

export default PersonalBio;