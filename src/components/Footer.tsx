import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/azmisheel" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/misheel-azjargalbayar-762165197/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
         <a href={`${process.env.PUBLIC_URL}/Resume.pdf`} target="_blank" rel="noopener noreferrer"><ArticleIcon /></a>
      </div>
      <p>Misheel Azjargalbayar {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;