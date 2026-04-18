const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./db/dbConnect");
const UserRouter = require("./routes/UserRouter");
const PhotoRouter = require("./routes/PhotoRouter");

const PORT = process.env.PORT || 8081;

async function startServer() {
  await dbConnect();

  app.use(cors());
  app.use(express.json());
  app.use("/", UserRouter);
  app.use("/", PhotoRouter);

  app.get("/", (request, response) => {
    response.send({ message: "Hello from photo-sharing app API!" });
  });

  app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start server.", error);
  process.exit(1);
});
