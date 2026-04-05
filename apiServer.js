import express from "express";
import models from "./modelData/models.js";

/**
 * Factory so dev (Vite middleware) và server độc lập (port 3001) dùng hai instance tách biệt.
 */
export function createApiApp() {
  const app = express();

  app.get("/test/info", (req, res) => {
    res.json(models.schemaInfo());
  });

  app.get("/user/list", (req, res) => {
    res.json(models.userListModel());
  });

  app.get("/user/:id", (req, res) => {
    const user = models.userModel(req.params.id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.json(user);
  });

  app.get("/photosOfUser/:id", (req, res) => {
    res.json(models.photoOfUserModel(req.params.id));
  });

  return app;
}
