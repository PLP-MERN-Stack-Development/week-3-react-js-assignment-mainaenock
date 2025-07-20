import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout component that includes Navbar and Footer
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to be rendered between navbar and footer
 * @param {boolean} props.isDarkMode - Whether dark mode is enabled
 * @param {function} props.toggleTheme - Function to toggle theme
 * @returns {JSX.Element} - Layout component
 */
const Layout = ({ children, isDarkMode, toggleTheme }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Layout; 