import { Link, useLocation } from 'react-router-dom';
import { Download } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">
          <img src="https://i.ibb.co/0pWyPDfL/logo-website.png" alt="TrainBot Logo" style={{ height: '40px' }} />
        </Link>
        
        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/marketplace" className={`nav-link ${isActive('/marketplace')}`}>Marketplace</Link>
        </div>
        
        <div className="nav-actions">
           <Link to="/download" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
             <Download size={16} style={{ marginRight: '8px' }} />
             Get App
           </Link>
        </div>
      </div>
    </nav>
  );
};
