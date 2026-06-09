# React Router App

A multi-page React application built with React Router v7, Vite, and Tailwind CSS v4.

## 🚀 Live Demo

[View on Vercel](https://react-router-gux34a8ji-sonali1502-sonas-projects.vercel.app)

## 📸 Screenshot

[![App Screenshot](https://image.thum.io/get/width/1280/crop/800/https://react-router-gux34a8ji-sonali1502-sonas-projects.vercel.app)](https://react-router-gux34a8ji-sonali1502-sonas-projects.vercel.app)

## 🛠 Tech Stack

- **React 19** — UI library
- **React Router v7** — client-side routing
- **Vite 8** — build tool
- **Tailwind CSS v4** — utility-first styling

## 📄 Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/contact` | Contact |
| `/github` | GitHub Profile (fetched via loader) |
| `/user/:id` | Dynamic User Page |

## ✨ Features

- **Shared layout** with `Header` and `Footer` via `<Outlet />`
- **GitHub data loader** — fetches follower count and avatar on page load using React Router's `loader` API
- **Dynamic routes** — `/user/:id` renders per-user content from URL params
- **Active nav links** — `<NavLink>` highlights the current page in orange
- **Responsive design** — mobile-friendly layout with Tailwind CSS

## 🏁 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── About/
│   ├── Contact/
│   ├── Footer/
│   ├── Github/
│   ├── Header/
│   ├── Home/
│   └── User/
├── Layout.jsx
├── main.jsx
└── index.css
```
