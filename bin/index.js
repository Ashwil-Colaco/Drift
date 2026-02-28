#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const appName = process.argv[2];

if (!appName) {
  console.log("Please provide a project name.");
  process.exit(1);
}

const root = path.resolve(appName);

if (fs.existsSync(root)) {
  console.log("Directory already exists.");
  process.exit(1);
}

console.log("\nInitializing project...\n");


fs.mkdirSync(root); // create root folder
process.chdir(root);


console.log("Setting up backend...\n"); // backend setup

fs.mkdirSync("server");
process.chdir("server");


execSync("npm init -y", { stdio: "inherit" }); // initialize package.json for server


execSync("npm install express cors dotenv", { stdio: "inherit" }); // install backend dependencies
execSync("npm install -D nodemon concurrently", { stdio: "inherit" });


fs.writeFileSync( // create backend entry file
  "index.js",
  `
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend running" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
`
);


const serverPkg = JSON.parse(fs.readFileSync("package.json")); // update server's package.json

serverPkg.type = "module";
serverPkg.scripts = {
  dev: "concurrently -n SERVER,CLIENT -c blue,green \"nodemon index.js\" \"npm run dev --prefix ../client\""
};

fs.writeFileSync("package.json", JSON.stringify(serverPkg, null, 2));

process.chdir(root);

console.log("Backend setup complete.\n");


console.log("Setting up frontend...\n"); // frontend setup

execSync(
  "npx --yes create-vite@latest client --template react",
  { stdio: "pipe" }
);
console.log("Frontend setup complete.\n");
process.chdir("client");
execSync("npm install", { stdio: "inherit" });

const viteConfigPath = path.join(process.cwd(), "vite.config.js");
let viteConfig = fs.readFileSync(viteConfigPath, "utf-8");


if (/server\s*:\s*{/.test(viteConfig)) {   // If server exists, just add proxy
  viteConfig = viteConfig.replace(
    /server\s*:\s*{([^}]*)}/,
    `server: {
$1,
    proxy: {
      "/api": "http://localhost:3000"
    }
  }`
  );
} else {
  viteConfig = viteConfig.replace(
    /export\s+default\s+defineConfig\(\s*{/,
    `export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000"
    }
  },`
  );
}

fs.writeFileSync(viteConfigPath, viteConfig);

console.log("Vite proxy configuration added to frontend.\n");

process.chdir(root);


console.log("Project created successfully.\n");
console.log("Next steps:");
console.log(` cd ${appName}/server`);
console.log(" npm run dev\n");