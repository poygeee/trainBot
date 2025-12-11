# TrainBot: Precision Robotics Simulation Platform

![TrainBot Simulation Screenshot](https://i.ibb.co/bgWCjdGw/image-3-1.png)

## 🚀 Project Overview

TrainBot is a cutting-edge, high-fidelity robotics simulation platform designed for developing, training, and validating autonomous systems. It provides a deterministic, physics-based environment where engineers and researchers can prototype robot behaviors, train AI models, and perform rigorous testing with frame-perfect reproducibility.

This repository contains the frontend application for the TrainBot platform, built with React, TypeScript, and Vite. It serves as the primary interface for users to interact with the simulation environment, browse the marketplace for assets, and access documentation.

## ✨ Features

*   **Deterministic Physics Engine:** Ensures identical simulation results across different machines, crucial for reliable testing and debugging.
*   **High-Fidelity 3D Environment:** Realistic rendering and physics for accurate simulation of robot interactions.
*   **Extensible Marketplace:** Discover and integrate a wide range of robots, environments, parts, and plugins from the TrainBot ecosystem.
*   **Seamless Integration:** Designed to fit into existing CI/CD pipeline with support for ROS2, TensorFlow, and PyTorch.
*   **Powerful API:** Programmatic control over simulations, robots, and sensors via Python and C++ APIs for advanced automation and AI training.
*   **Enterprise-Grade Security:** Offline operation with optional cloud syncing for marketplace assets, keeping your IP secure.
*   **High-Performance:** Optimized for multi-core processing and headless execution, enabling rapid reinforcement learning at 100x real-time speeds.
*   **Intuitive User Interface:** A clean and responsive web interface for managing simulations and marketplace assets.

## 🛠️ Technologies Used

*   **Frontend:**
    *   [React](https://react.dev/) - A JavaScript library for building user interfaces.
    *   [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
    *   [Vite](https://vitejs.dev/) - A fast frontend build tool that provides an excellent development experience.
    *   [React Router DOM](https://reactrouter.com/en/main) - For declarative routing in React applications.
    *   [Lucide React](https://lucide.dev/) - A beautiful and customizable icon library.
*   **Styling:**
    *   Pure CSS with CSS Variables for theming.
    *   Responsive design for various screen sizes.

## 📂 Project Structure

```
.
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   └── Navbar.tsx
│   ├── data/
│   │   └── products.ts
│   ├── pages/
│   │   ├── ApiReference.tsx
│   │   ├── CookiePolicy.tsx
│   │   ├── LandingPage.tsx
│   │   ├── Marketplace.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   ├── ProductDetail.tsx
│   │   ├── TermsOfService.tsx
│   │   └── Marketplace_old.tsx  # Old marketplace component, kept for reference
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

*   `public/`: Static assets served directly by the web server.
*   `src/assets`: Contains static assets used by components (e.g., `react.svg`).
*   `src/components`: Reusable UI components like `Navbar`, `Footer`, and `Layout`.
*   `src/data`: Mock data for marketplace products (`products.ts`).
*   `src/pages`: Top-level components representing different views/pages of the application (e.g., `LandingPage`, `Marketplace`, `ApiReference`, `PrivacyPolicy`, `TermsOfService`, `CookiePolicy`, `ProductDetail`). `Marketplace_old.tsx` is kept as a previous iteration of the marketplace.
*   `src/App.tsx`: Main application component, setting up routing using `react-router-dom`.
*   `src/main.tsx`: Entry point for the React application, rendering the `App` component.
*   `src/index.css`, `src/App.css`: Global styles and component-specific styles, utilizing CSS variables for a consistent theme.
*   `vite.config.ts`: Vite configuration file.
*   `tsconfig.*.json`: TypeScript configuration files for the project.
*   `package.json`: Project metadata and dependencies.
*   `.eslintrc.cjs`: ESLint configuration for code quality.
*   `.gitignore`: Specifies intentionally untracked files to ignore.
*   `index.html`: The main HTML file served by Vite.

## ⚙️ Installation and Local Development

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (LTS version recommended)
*   npm or Yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/trainbot-frontend.git
    cd trainbot-frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This will start the Vite development server, usually at `http://localhost:5173`. The application will automatically reload as you make changes.

## 📦 Building for Production

To build the application for production, run:

```bash
npm run build
# or
yarn build
```
This command bundles the React application into static files in the `dist/` directory, ready for deployment.

## 🚀 Deployment

This project is configured for easy deployment with platforms like Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/examples/tree/main/framework-boilerplates/vite-react&template=vite-react)

_Live Example: https://vite-react-example.vercel.app_ (Note: This link points to a generic Vite React example. Replace with your actual deployment link if available.)

### Deploying From Your Terminal (Vercel CLI)

You can deploy your new Vite project with a single command from your terminal using [Vercel CLI](https://vercel.com/download):

```shell
$ vercel
```

## 🤝 Contributing

We welcome contributions to the TrainBot frontend! If you have suggestions for improvements, bug reports, or want to contribute code, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature` or `bugfix/FixBug`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add new feature'`).
5.  Push to the branch (`git push origin feature/YourFeature`).
6.  Open a Pull Request.

Please ensure your code adheres to the existing style and passes linting checks.

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details (if applicable, otherwise specify your license or remove this section).

## 📞 Contact

For support, inquiries, or partnership opportunities, please contact us at:

*   **Email:** info@trainbot.com
*   **Website:** [trainbot.com](https://trainbot.com) (placeholder)
*   **GitHub:** [github.com/trainbot](https://github.com/trainbot) (placeholder)

---
© 2024 TrainBot Inc. All rights reserved.
