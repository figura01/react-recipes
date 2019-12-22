// == import : npm
import React from 'react';

// == import : local
import './footer.scss';

// == Composant
const Footer = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  return (
    <footer>
      <p>DevOfThrones, le blog du développeur React - {currentYear}&copy;</p>
    </footer>
  );
};

// == Export
export default Footer;
