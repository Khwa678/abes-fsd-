

import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>MyWebsite</div>
      <ul style={styles.navLinks}>
        <li><a href="#" style={styles.link}>Home</a></li>
        <li><a href="#" style={styles.link}>About</a></li>
        <li><a href="#" style={styles.link}>Services</a></li>
        <li><a href="#" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
};

// Inline CSS styles
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#222',
    color: '#fff',
    padding: '10px 30px',
  },
  logo: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
  },
};

export default Navbar;
