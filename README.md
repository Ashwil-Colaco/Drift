<div align="center">
  <h1>Drift</h1>
  <p><strong>A super fast CLI to bootstrap React & Node.js in seconds.</strong></p>
</div>

##  Why Drift?

Setting up a modern full stack application usually involves a tedious checklist. Drift entirely removes that friction by automating the initial setup process. 

With **one command**, you get:
-  **Express Backend**: Pre-configured with CORS and JSON parsing.
-  **React(vite) Frontend**: Fully set up and ready for development.
-  **Concurrent Dev Scripts**: Run your whole stack with a single `npm run dev` command.
-  **Clean Architecture**: Minimalist folder structure.

##  Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/<username>/drift.git
cd drift

# 2. Install dependencies
npm install
npm link

# 3. You can now use drift anywhere
cd ..
drift my-app
cd my-app
npm run dev
```

##  What Drift Generates

```text
my-app/
├── server/
│   ├── node_modules/
│   ├── index.js          # Express app entry point
│   ├── package-lock.json
│   ├── package.json      # Backend setup & scripts
│   
├── client/               # Standard Vite React frontend
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
```

##  Working

When you run `drift`, here's what happens:
1. Creates a root folder with the given project name.
2. Generates an Express backend (`server/`) with `dotenv` and `cors` installed.
3. Generates a React frontend (`client/`) using `vite`.
4. Bootstraps a root `package.json` that uses `concurrently` to run both the frontend and backend simultaneously using the `npm run dev` command.

##  Contributing

Please see our [Contributing Guidelines](CONTRIBUTING.md) for more details on how to get started.



