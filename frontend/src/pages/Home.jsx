import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

/**
 * Home page component
 */
const Home = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Welcome to PLP Task Manager
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          A modern React application built with Tailwind CSS for managing tasks and integrating with external APIs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/tasks">
            <Button variant="primary" size="lg">
              Get Started with Tasks
            </Button>
          </Link>
          <Link to="/api-data">
            <Button variant="secondary" size="lg">
              Explore API Data
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card title="Task Management" className="text-center">
          <div className="text-4xl mb-4">📝</div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Create, complete, and organize your tasks with ease. Filter by status and track your progress.
          </p>
          <Link to="/tasks">
            <Button variant="primary" size="sm">
              Manage Tasks
            </Button>
          </Link>
        </Card>

        <Card title="API Integration" className="text-center">
          <div className="text-4xl mb-4">🌐</div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Fetch and display data from external APIs with search functionality and pagination.
          </p>
          <Link to="/api-data">
            <Button variant="primary" size="sm">
              View API Data
            </Button>
          </Link>
        </Card>

        <Card title="Modern UI" className="text-center">
          <div className="text-4xl mb-4">🎨</div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Beautiful, responsive design with dark mode support built with Tailwind CSS.
          </p>
          <Button variant="secondary" size="sm" disabled>
            Experience Design
          </Button>
        </Card>
      </div>

      {/* Technology Stack */}
      <Card title="Built With" className="mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">⚛️</div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">React</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Component-based UI</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Tailwind CSS</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Utility-first styling</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Vite</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Fast build tool</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🔗</div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">React Router</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Client-side routing</p>
          </div>
        </div>
      </Card>

      {/* Getting Started */}
      <Card title="Getting Started">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                Navigate to Tasks
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Start by creating and managing your tasks. Add new tasks, mark them as complete, and filter by status.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                Explore API Data
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                View posts from JSONPlaceholder API with search functionality and pagination.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                Toggle Theme
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Switch between light and dark modes using the theme toggle in the navigation bar.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home; 