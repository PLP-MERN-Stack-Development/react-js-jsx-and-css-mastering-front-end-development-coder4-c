# React Task Manager — React + Vite + Tailwind

This repository contains a small React application (starter/assignment) that demonstrates building a task manager UI using React, Vite, and Tailwind CSS. It includes reusable components, context for theming, custom hooks, and a simple API layer.

Live demo: https://taskmanager34.netlify.app/

## Table of contents
- Project overview
- Features
- Tech stack
- Quick start (install & run)
- Available scripts
- Project structure (key files)
- Development notes and conventions
- Extending the project
- License & contact

## Project overview

The app in this repository lives in the `react-task-manager/` folder. It's a Vite + React app scaffolded for learning component composition, hooks, context, styling with Tailwind, and simple client-side routing.

Primary goals:
- Provide a small, well-structured starter app for frontend practice
- Show clear separation of concerns (components, pages, utils, api)
- Demonstrate using Tailwind CSS for utility-first styling

## Features
- Task manager UI (add/remove tasks, local state & localStorage support)
- Componentized UI: `Button`, `Card`, `Navbar`, `Footer`, `TaskManager`, `UsersList`
- Theme context (`context/ThemeContext.jsx`) to toggle light/dark themes
- Simple API abstraction in `src/api/userService.js` for user-related calls
- Custom hook `useLocalStorage` for persisting state

## Tech stack
- React (v19)
- Vite (dev server + build)
- Tailwind CSS + PostCSS
- ESLint for linting
- React Router for routing

## Quick start (Windows PowerShell)

Prerequisites:
- Node.js >= 18 (recommended)
- npm or Yarn installed

Open a PowerShell in the repository root and run:

```powershell
# change into the app folder
cd .\react-task-manager

# install dependencies (npm or yarn)
npm install
# or
# yarn install

# start development server
npm run dev
# or
# yarn dev

# build for production
npm run build

# preview production build locally
npm run preview

# run linter
npm run lint
```

Notes:
- The `package.json` scripts are defined in `react-task-manager/package.json` and use Vite. Use either npm or yarn depending on your preference — both will work.

## Available scripts (from `react-task-manager/package.json`)

- `dev` — start Vite development server
- `build` — create a production build with Vite
- `preview` — preview the production build locally
- `lint` — run ESLint across the project

Example:

```powershell
npm run dev
```

## Project structure (high level)

Top-level folder: `react-task-manager/`

```
react-task-manager/
├── index.html               # Vite HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS config
├── postcss.config.js      # PostCSS plugins config
├── eslint.config.js       # ESLint configuration
└── src/                   # Source code
    ├── main.jsx          # Application entry point
    ├── App.jsx           # Root app component
    ├── App.css           # App-specific styles
    ├── index.css         # Global styles
    ├── api/              # API services and endpoints
    │   └── userService.js
    ├── assets/           # Static assets (images, fonts)
    ├── components/       # Reusable UI components
    │   ├── layout/      # Layout components
    │   │   ├── Navbar.jsx
    │   │   └── Footer.jsx
    │   ├── tasks/       # Task-related components
    │   │   └── TaskManager.jsx
    │   ├── ui/          # Generic UI components
    │   │   ├── Button.jsx
    │   │   └── Card.jsx
    │   └── users/       # User-related components
    │       └── UsersList.jsx
    ├── context/         # React Context providers
    │   └── ThemeContext.jsx
    ├── hooks/           # Custom React hooks
    │   └── useLocalStorage.js
    ├── pages/           # Page components
    │   └── Home.jsx
    └── utils/           # Utility functions
        └── constants.js
```

Each directory serves a specific purpose:
- `api/`: Services for external API communication
- `assets/`: Static files like images, icons, and fonts
- `components/`: Reusable UI components grouped by feature/type
- `context/`: React Context for global state management
- `hooks/`: Custom React hooks for shared logic
- `pages/`: Full page components with routing
- `utils/`: Helper functions and constants

## Development notes & conventions

- Styles: Tailwind classes are used inside JSX components. Use the utility-first approach for layout and spacing.
- State: small features use local state and the `useLocalStorage` hook to persist tasks between reloads.
- Context: The `ThemeContext` demonstrates using React Context for app-wide settings (theme toggle).
- APIs: `src/api/userService.js` is a good place to centralize fetch/axios calls and error handling. Swap implementation to add real endpoints.

Edge cases to consider when extending:
- Empty task list UX
- Validation for task input
- Large number of tasks (consider virtualization)
- Network errors / loading states for API calls

## Extending the project

Ideas for next steps:
- Add user authentication and a backend to persist tasks
- Add edit and complete task functionality with timestamps
- Add tests (Jest + React Testing Library)
- Add deployment scripts and CI (GitHub Actions)

## Troubleshooting

- If the dev server fails to start, ensure your Node version meets the requirement and reinstall dependencies.
- If Tailwind styles don't appear, verify `tailwind.config.js` content paths include `./src/**/*` and `postcss` is configured.

## License

This repository uses no specific license file by default. Add a `LICENSE` file if you want to open-source it.

## Contact / Author

If this is your assignment workspace, you're the author — update this section with your name and contact info if you want to share it.

Live demo: https://taskmanager34.netlify.app/

---

Single-file README created and intended to be the canonical project description for this repository. If you'd like I can also:

- Add a brief demo GIF or screenshots
- Add a CONTRIBUTING.md or ISSUE_TEMPLATE
- Add tests and a quick CI workflow

If you want any of those, tell me which one to add next.

