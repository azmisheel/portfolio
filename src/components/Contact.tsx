import React from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
  const contactInfo = {
    email: "misheelazj@gmail.com",
    phone: "(289) 823-3450",
    linkedin: "https://www.linkedin.com/in/misheel-azjargalbayar-762165197/",
    github: "https://github.com/azmisheel",
    location: "Welland, Canada"
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Get In Touch</h1>
          <p>I'm always open to discussing new opportunities, projects, or just having a chat about technology!</p>
          
          {/* Contact Methods Grid */}
          <Box className="contact-methods">
            <div className="contact-grid">
              {/* Email */}
              <Button 
                href={`mailto:${contactInfo.email}`}
                className="contact-card"
                startIcon={<EmailIcon />}
              >
                <div className="contact-content">
                  <h3>Email</h3>
                  <p>{contactInfo.email}</p>
                  <span className="contact-cta">Send me an email</span>
                </div>
              </Button>

              {/* Phone */}
              <Button 
                href={`tel:${contactInfo.phone}`}
                className="contact-card"
                startIcon={<PhoneIcon />}
              >
                <div className="contact-content">
                  <h3>Phone</h3>
                  <p>{contactInfo.phone}</p>
                  <span className="contact-cta">Call or text me</span>
                </div>
              </Button>

              {/* LinkedIn */}
              <Button 
                href={contactInfo.linkedin}
                target="_blank"
                className="contact-card"
                startIcon={<LinkedInIcon />}
              >
                <div className="contact-content">
                  <h3>LinkedIn</h3>
                  <p>Connect professionally</p>
                  <span className="contact-cta">View my profile</span>
                </div>
              </Button>

              {/* GitHub */}
              <Button 
                href={contactInfo.github}
                target="_blank"
                className="contact-card"
                startIcon={<GitHubIcon />}
              >
                <div className="contact-content">
                  <h3>GitHub</h3>
                  <p>See my code</p>
                  <span className="contact-cta">View my projects</span>
                </div>
              </Button>
            </div>

            {/* Location */}
            <div className="location-section">
              <LocationOnIcon className="location-icon" />
              <p>Based in {contactInfo.location}</p>
            </div>
          </Box>

          {/* Quick Note */}
          <div className="contact-note">
            <p>💡 <strong>Prefer direct contact?</strong> Email or call me directly - I typically respond within 24 hours!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;