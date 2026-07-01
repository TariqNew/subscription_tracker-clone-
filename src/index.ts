import express from "express";
import { PORT } from "./config/env.js";
import userRoute from "./route/api/v1/user.route.js";
import authRoute from "./route/api/v1/auth.route.js";
import subscriptionRoute from "./route/api/v1/subscription.route.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/subscriptions", subscriptionRoute);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
