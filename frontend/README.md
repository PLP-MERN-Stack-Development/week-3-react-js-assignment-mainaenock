# 🎨 PLP Task Manager - React.js Assignment

A modern React application built with Vite, Tailwind CSS, and React Router that demonstrates component architecture, state management, hooks usage, and API integration.

## 🚀 Features

### ✅ Task Management
- **Add new tasks** with a simple form
- **Mark tasks as completed** with checkboxes
- **Delete tasks** with confirmation
- **Filter tasks** by status (All, Active, Completed)
- **Local storage persistence** - tasks are saved between sessions
- **Task statistics** showing remaining and completed tasks

### ✅ API Integration
- **Fetch data** from JSONPlaceholder API
- **Search functionality** to filter posts by title
- **Pagination** with next/previous navigation
- **Loading states** with spinners
- **Error handling** with retry functionality
- **Responsive grid layout** for displaying posts

### ✅ Modern UI/UX
- **Responsive design** that works on mobile, tablet, and desktop
- **Dark/Light mode** toggle with system preference detection
- **Beautiful animations** and transitions
- **Accessible components** with proper ARIA labels
- **Modern card-based layout** with hover effects

### ✅ Component Architecture
- **Reusable Button component** with multiple variants (primary, secondary, danger, success, warning)
- **Card component** for consistent content display
- **Navbar component** with navigation and theme toggle
- **Footer component** with links and copyright
- **Layout component** that wraps the entire application

### ✅ State Management & Hooks
- **useState** for component state management
- **useEffect** for side effects and localStorage persistence
- **useContext** for theme management across components
- **Custom hooks** for localStorage tasks management
- **React Router** for client-side routing

## 🛠️ Technology Stack

- **React 19** - Component-based UI library
- **Vite** - Fast build tool and development server
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **PropTypes** - Runtime type checking
- **JSONPlaceholder API** - External data source

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Button component with variants
│   ├── Card.jsx        # Card component for content display
│   ├── Navbar.jsx      # Navigation bar with theme toggle
│   ├── Footer.jsx      # Footer with links
│   ├── Layout.jsx      # Layout wrapper component
│   ├── TaskManager.jsx # Task management functionality
│   └── ApiData.jsx     # API data display component
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Tasks.jsx       # Tasks page
│   └── ApiData.jsx     # API data page
├── context/            # React context providers
│   └── ThemeContext.jsx # Theme management context
├── api/                # API integration functions
│   └── postsApi.js     # JSONPlaceholder API functions
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── assets/             # Static assets
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles (Tailwind CSS)
```

## 🎯 Assignment Requirements Met

### ✅ Task 1: Project Setup
- ✅ React application using Vite
- ✅ Tailwind CSS configured and working
- ✅ Project structure with components, pages, and utility folders
- ✅ React Router configured for basic routing

### ✅ Task 2: Component Architecture
- ✅ Button component with different variants (primary, secondary, danger)
- ✅ Card component for displaying content in a boxed layout
- ✅ Navbar component for site navigation
- ✅ Footer component with links and copyright information
- ✅ Layout component that includes Navbar and Footer
- ✅ Props used to make components customizable and reusable

### ✅ Task 3: State Management and Hooks
- ✅ TaskManager component with full CRUD functionality
- ✅ useState for managing component state
- ✅ useEffect for side effects (localStorage persistence)
- ✅ useContext for theme management (light/dark mode)
- ✅ Custom hook (useLocalStorageTasks) for persisting tasks

### ✅ Task 4: API Integration
- ✅ Fetch data from JSONPlaceholder API
- ✅ Display fetched data in a responsive grid layout
- ✅ Loading and error states implemented
- ✅ Pagination functionality
- ✅ Search feature to filter API results

### ✅ Task 5: Styling with Tailwind CSS
- ✅ Responsive design for mobile, tablet, and desktop
- ✅ Theme switcher (light/dark mode) using Tailwind's dark mode
- ✅ Tailwind utility classes for layout, spacing, typography, and colors
- ✅ Custom animations and transitions for interactive elements

## 🎨 Design Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts that adapt to screen size

### Dark Mode
- System preference detection
- Manual toggle in navigation
- Persistent theme selection
- Smooth transitions between themes

### Accessibility
- Proper semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast ratios
- Focus indicators

## 🚀 Deployment

The application can be deployed to various platforms:

### Vercel
```bash
npm run build
# Deploy the dist folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy the dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the dist folder to GitHub Pages
```

## 📸 Screenshots

*[Screenshots will be added here after deployment]*

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for educational purposes as part of the PLP React.js assignment.

## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the API data
