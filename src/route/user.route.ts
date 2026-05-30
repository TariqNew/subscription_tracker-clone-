import { Router } from "express";

const userRoute = Router();

// Fetching all users
userRoute.get("/", (req, res) => {
  res.send("All users are retrieved");
});

// Fetching a single user
userRoute.get("/:id", (req, res) => {
  res.send("User data is fetched");
});

// Creating a user
userRoute.post("/", (req, res) => {
  res.send("User created succesfully");
});

// Updating a user data
userRoute.put("/:id", (req, res) => {
  res.send("User data is updated");
});

// Fetching all users
userRoute.delete("/:id", (req, res) => {
  res.send("User data is deleted");
});

export default userRoute;
