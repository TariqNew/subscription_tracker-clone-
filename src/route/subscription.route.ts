import { Router } from "express";

const subscriptionRoute = Router();

// Fetch all the subscriptions
subscriptionRoute.get("/", (req, res) => {
  res.send({ message: "All the subscriptions!" });
});

// Get a subscription
subscriptionRoute.get("/:id", (req, res) => {
  res.send({ message: "Get a subscriptions!" });
});

// Create a subscription
subscriptionRoute.post("/", (req, res) => {
  res.send({ message: "Subscription is created!" });
});

// Update a subscription
subscriptionRoute.put("/:id", (req, res) => {
  res.send({ message: "Subscription is updated!" });
});

// Delete a subscription
subscriptionRoute.delete("/:id", (req, res) => {
  res.send({ message: "Subscription is deleted!" });
});

// Get a user subscription
subscriptionRoute.get("user/:id", (req, res) => {
  res.send({ message: "Cancel all users Subscriptions!" });
});

// Remove all user subscriptions
subscriptionRoute.put("/:id/cancel", (req, res) => {
  res.send({ message: "Subscription is deleted!" });
});

// Get upcoming subscriptions
subscriptionRoute.get("/upcoming-renewals", (req, res) => {
  res.send({ message: "Get upcoming Subscriptions!" });
});

export default subscriptionRoute;
