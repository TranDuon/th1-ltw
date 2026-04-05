import { createApiApp } from "./apiServer.js";

const PORT = Number(process.env.PORT) || 3001;
const app = createApiApp();

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`);
});
