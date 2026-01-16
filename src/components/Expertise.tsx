import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faJava, faNode } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "C#",
    "SQL",
    "HTML/CSS",
    "JavaScript",
    "Python",
    "TypeScript",
    "Java"
];

const labelsSecond = [
    "ASP.NET",
    "MVC",
    "MAUI (MVVM)",
    "React",
    "Bootstrap",
    "NumPy",
    "Pandas",
    "Prisma",
    "Matplotlib"
];

const labelsThird = [
    "Network Security",
    "Azure",
    "Git",
    "Windows/Linux",
    "System Administration",
    "Android Development"
];

function Expertise() {
    return (
    <div className="container container-top" id="expertise">
        <div className="skills-container">
            <h1>Skills and Technology</h1>
            <div className="skills-grid">
                <div className="skill">
                    <div className="flex-chips">
                        <span className="chip-title">Language:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div className="flex-chips">
                        <span className="chip-title">Framework/Library:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div className="flex-chips">
                        <span className="chip-title">Additional Skills:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;