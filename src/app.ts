import express, { type Application } from "express";
//import router from "./routes/index.routes"
import { user_router } from "./routes/index.routes";
const app: Application = express();




app.use(express.json());
app.use("/api/v1", user_router)

export default app;