import { Github, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-logo">
              <img src="https://i.ibb.co/0pWyPDfL/logo-website.png" alt="TrainBot Logo" style={{ height: '32px', filter: 'invert(100%)' }} />
            </div>
            <p className="footer-description">
              Empowering the next generation of robotics through advanced simulation training environments.
            </p>
          </div>
          
          <div>
            <h3>Platform</h3>
            <ul>
              <li><a href="#">Download Windows App</a></li>
              <li><Link to="/api-reference">API Reference</Link></li>
              <li><a href="#">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3>Legal</h3>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <small>&copy; 2025 TrainBot Inc. All rights reserved.</small>
          <div className="footer-social-links">
            <a href="#" aria-label="GitHub" className="footer-social-link"><Github size={20} /></a>
            <a href="https://x.com/TrainbotX" aria-label="Twitter" className="footer-social-link"><Twitter size={20} /></a>
            <a href="#" aria-label="Email" className="footer-social-link"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
