<div align="center">
  <h1> Drift</h1>
  <p><strong>A super fast CLI to bootstrap full-stack React & Express apps in seconds.</strong></p>
</div>

---

##  Why Drift?

Setting up a modern full-stack application usually involves a tedious checklist. Drift entirely removes that friction by automating the initial setup process. 

With **one command**, you get:
-  **Express Backend**: Pre-configured with CORS and JSON parsing.
-  **React + Vite Frontend**: Rapid and modern frontend development.
-  **API Ready**: Frontend and backend are primed for seamless communication.
-  **Concurrent Dev Scripts**: Run your whole stack with a single `npm run dev` command.
-  **Clean Architecture**: Minimalist folder structure.

---

##  Quick Start

Initialize your new full-stack application instantly:

```bash
drift my-app
cd my-app
npm run dev
```

*(This command uses `npx` to execute `drift` and set up the environment for you)*

---

##  What Drift Generates

```text
my-app/
├── server/
│   ├── index.js          # Express app entry point
│   ├── package.json      # Backend setup & scripts
│   
├── client/               # Standard Vite React frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
└── package.json          # Root configuration for running client & server simultaneously
```

---

##  How it works under the hood
When you run `drift`, here's what happens:
1. Creates a root folder with the given project name.
2. Generates an Express backend (`server/`) with `dotenv` and `cors` installed.
3. Generates a blazing-fast React frontend (`client/`) using `vite`.
4. Bootstraps a root `package.json` that uses `concurrently` to run both the frontend and backend simultaneously using the `npm run dev` command.

---

##  Current Status

Drift is currently in its **MVP stage**, heavily optimized for:
-  Rapid prototyping and hackathons.
-  Learning full-stack architecture.
-  Streamlining daily development workflows.

**Upcoming features:**
- [ ] Database ORM integration presets (Prisma, Mongoose, etc.)
- [ ] Production build and unified deployment scripts.
- [ ] Tailwind CSS pre-configuration options.

---

##  Contributing

Please see our [Contributing Guidelines](CONTRIBUTING.md) for more details on how to get started.

---

##  License

This project is licensed under the MIT License.