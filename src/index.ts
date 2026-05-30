import express from "express";
import { PORT } from "./config/env.js";
import userRoute from "./route/user.route.js";
import authRoute from "./route/auth.route.js";
import subscriptionRoute from "./route/subscription.route.js";

const app = express();

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/subscriptions", subscriptionRoute);

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
