<div align="center">

# ⚡ Pathan Sameer Khan — Developer Portfolio

**Python Full Stack Developer & Machine Learning Engineer**

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)

[**Explore Live Demo**](https://github.com/Sameer200425/portfolio) • [**LinkedIn**](https://www.linkedin.com/in/sameerkhan252004) • [**GitHub**](https://github.com/Sameer200425) • [**Email**](mailto:sameerkhan28083@gmail.com)

</div>

---

## 🌟 Overview

Welcome to the official repository of **Pathan Sameer Khan's** developer portfolio. This web application is engineered with high-performance modern web technologies, combining a responsive **Three.js WebGL 3D neural canvas**, rich micro-interactions, an interactive command-line terminal, and a dynamic project showcase.

Designed to demonstrate proficiency across full-stack software architecture, machine learning model deployment (ViT, XAI, FastAPI), and responsive user interface engineering.

---

## ✨ Key Features

- **🌐 Interactive 3D WebGL Lattice**: A GPU-accelerated background particle field powered by `@react-three/fiber` and `@react-three/drei` that reacts fluidly to mouse movement while keeping all typography accessible in standard semantic HTML for top-tier SEO.
- **💻 In-Browser Interactive CLI**: A fully functional retro-modern terminal allowing visitors to run commands like `help`, `about`, `skills`, `projects`, `contact`, `cat resume`, and `clear`.
- **📄 Interactive Resume Modal**: In-browser curriculum vitae viewer with one-click direct PDF download capability.
- **🎵 Ambient Soundscape Player**: Built-in sound toggle with animated audio visualizer bars for immersive reading.
- **📱 Responsive Glassmorphic UI**: Tailored with Tailwind CSS v4, smooth glowing borders, responsive cards, and Framer Motion layout transitions.
- **📬 Working Contact Form**: Integrated with FormSubmit AJAX and dynamic confetti celebration triggers (`canvas-confetti`).
- **🚀 Production Optimized**: Sub-second bundle loads with Vite, optimized image assets, and modern font rendering.

---

## 🛠️ Technology Stack

| Domain | Technologies |
|---|---|
| **Core Framework** | React 19, Vite 8, JavaScript (ES2024) |
| **Styling & Design System** | Tailwind CSS v4, Modern Glassmorphism, CSS Custom Properties |
| **3D & Graphics** | Three.js, `@react-three/fiber`, `@react-three/drei` |
| **Motion & Animation** | Framer Motion, Canvas Confetti |
| **Icons & Media** | Lucide React, Custom SVG Vector Icons |
| **Backend & ML Focus** | Python, FastAPI, PyTorch, Scikit-Learn, Grad-CAM XAI, Node.js, Express |
| **Databases** | PostgreSQL, MySQL, SQLite, MongoDB |
| **Deployment** | Vercel (zero-config preset with `vercel.json`) |

---

## 📂 Project Structure

```text
portfolio/
├── frontend/
│   ├── public/
│   │   ├── favicon.svg          # Custom vector favicon
│   │   ├── profile.jpg          # Profile photography
│   │   └── resume.pdf           # Downloadable curriculum vitae
│   ├── src/
│   │   ├── assets/              # Static artwork and vector marks
│   │   ├── components/
│   │   │   ├── canvas/          # 3D WebGL Neural Lattice background
│   │   │   ├── layout/          # Navbar, Footer
│   │   │   ├── sections/        # Hero, Skills, TechStack, Experience,
│   │   │   │                    # Education, Projects, InteractiveCli, Contact
│   │   │   └── ui/              # AudioBar, ResumeModal, SVG Icons
│   │   ├── data/
│   │   │   └── portfolioData.js # Centralized content configuration
│   │   ├── App.jsx              # Application root
│   │   ├── index.css            # Tailwind CSS v4 core rules
│   │   └── main.jsx             # React DOM entry point
│   ├── package.json             # Frontend dependencies and scripts
│   └── vite.config.js           # Vite build configurations
├── .gitignore                   # Ignored artifacts and dependency directories
├── AGENTS.md                    # Project development guidelines & rules
├── README.md                    # Project documentation
├── vercel.json                  # One-click deployment settings
└── updated_resume_2026.pdf      # Root copy of curriculum vitae
```

---

## 🚀 Featured Projects Highlighted

### 1. Vision Transformer (ViT) Banking Fraud Recognition Engine
- **Stack**: Vision Transformers (ViT), PyTorch, Grad-CAM XAI, FastAPI
- **Highlights**: Banking document fraud classification using transformer and CNN backbones. Implemented Grad-CAM Explainable AI (XAI) for decision interpretability with sub-25ms inference latency.

### 2. University Admission Prediction System
- **Stack**: Python, FastAPI, React 18, Scikit-Learn, Random Forest, JWT Auth
- **Highlights**: ML decision support for Tamil Nadu Engineering Admissions (TNEA) reaching 94.5% accuracy across 125+ accredited colleges utilizing 5 years of historical cutoff trends.

### 3. Full-Stack Todo Application with Productivity Timers
- **Stack**: React, Node.js, Express, SQLite, REST API
- **Highlights**: Comprehensive task management application featuring cookie-based session auth, task categorization, and per-item productivity timers with start, pause, and reset controls.

### 4. Car Price Prediction Engine
- **Stack**: Python, Scikit-Learn, Pandas, NumPy, GridSearchCV, Joblib
- **Highlights**: Machine learning vehicle market valuation pipeline benchmarking OLS, Random Forest, and Gradient Boosting with cross-validation and interactive CLI inference.

---

## ⚡ Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js) or `pnpm` / `yarn`
- [Git](https://git-scm.com/)

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sameer200425/portfolio.git
   cd portfolio/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:5173](http://localhost:5173).

5. **Build for production:**
   ```bash
   npm run build
   ```
   The optimized production bundle will be generated in `frontend/dist/`.

---

## 🚢 Deployment

This repository includes a [`vercel.json`](./vercel.json) configuration file for seamless zero-configuration deployment to [Vercel](https://vercel.com/):

1. Link this repository in the [Vercel Dashboard](https://vercel.com/new).
2. Set Root Directory to `frontend` (or leave default to let `vercel.json` handle the build).
3. Click **Deploy**.

---

## 📬 Contact & Connect

- **Name**: Pathan Sameer Khan
- **Email**: [sameerkhan28083@gmail.com](mailto:sameerkhan28083@gmail.com)
- **LinkedIn**: [linkedin.com/in/sameerkhan252004](https://www.linkedin.com/in/sameerkhan252004)
- **GitHub**: [github.com/Sameer200425](https://github.com/Sameer200425)
- **WhatsApp**: [+91 63054 56431](https://wa.me/916305456431)
- **YouTube**: [@SameerKhan-44-ferrari](https://www.youtube.com/@SameerKhan-44-ferrari)

---

<div align="center">
  <sub>Built with ❤️ by Pathan Sameer Khan</sub>
</div>