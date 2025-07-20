import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import ApiDataPage from './pages/ApiData';

/**
 * App component with routing
 */
const AppContent = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Layout isDarkMode={isDarkMode} toggleTheme={toggleTheme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/api-data" element={<ApiDataPage />} />
      </Routes>
    </Layout>
  );
};

/**
 * Main App component with providers
 */
function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
