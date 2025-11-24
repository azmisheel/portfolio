import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import ArticleIcon from '@mui/icons-material/Article';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/azmisheel" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/misheel-azjargalbayar-762165197/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href={`${process.env.PUBLIC_URL}/Resume.pdf`} target="_blank" rel="noopener noreferrer"><ArticleIcon /></a>

          </div>
          <h1>Misheel Azjargalbayar</h1>
          <p>Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/azmisheel" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/misheel-azjargalbayar-762165197/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href={`${process.env.PUBLIC_URL}/Resume.pdf`} target="_blank" rel="noopener noreferrer"><ArticleIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;