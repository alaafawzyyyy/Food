# React Vite Project – Codebase Structure

This project is a React application bootstrapped with [Vite](https://vitejs.dev/). Below is an overview of the codebase structure and the purpose of each main directory and file.

## Project Structure

```
codespaces-react/
│
├── index.html                # Main HTML file loaded by Vite
├── jsconfig.json             # JS tooling configuration
├── LICENSE                   # Project license
├── package.json              # Project dependencies and scripts
├── README.md                 # Project documentation (this file)
├── vite.config.js            # Vite configuration
│
├── public/                   # Static assets served as-is
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── Octocat.png
│   ├── robots.txt
│   └── assets/               # Additional images/icons
│       ├── cart-icon.svg
│       └── meals.jpg
│
├── src/                      # Source code for the React app
│   ├── App.jsx               # Main app component
│   ├── App.css               # App-level styles
│   ├── App.test.jsx          # App component tests
│   ├── index.jsx             # Entry point for React
│   ├── index.css             # Global styles
│   ├── logo.svg              # Logo asset
│   ├── reportWebVitals.js    # Web vitals reporting
│   ├── setupTests.js         # Test setup
│   └── components/           # Reusable UI components
│       ├── food/             # Food-related components
│       │   ├── food.js
│       │   ├── FoodItem.jsx
│       │   ├── FoodItem.css
│       │   ├── FoodList.jsx
│       │   └── FoodList.css
│       ├── info/             # Info section components
│       │   ├── Info.jsx
│       │   └── Info.css
│       └── nav/              # Navigation bar components
│           ├── NavBar.jsx
│           ├── NavBar.css
│           └── NavBar_Cart_Button.css
```

## Key Concepts

- **public/**: Static files and images available at the root URL. Not processed by Vite.
- **src/**: All React source code. Contains the main app, entry point, and components.
- **components/**: Organized by feature (food, info, nav) for modularity and clarity.
- **App.jsx**: Main application component, typically renders the layout and routes.
- **App.test.jsx**: Contains tests for the main app component.
- **vite.config.js**: Configuration for Vite's build and dev server.
- **package.json**: Lists dependencies and npm scripts (start, build, test, etc).

## Scripts

- `npm start` – Start the development server.
- `npm run build` – Build the app for production.
- `npm test` – Run tests in watch mode.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open [http://localhost:3000/](http://localhost:3000/) to view the app.

---

For more information, see the [Vite documentation](https://vitejs.dev/guide/) and [React documentation](https://reactjs.org/).
