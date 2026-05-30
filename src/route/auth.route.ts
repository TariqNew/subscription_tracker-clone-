import Router from "express";

const authRoute = Router();

authRoute.get("/sign-up", (req, res) => {
  res.send({ message: "signUp" });
});

authRoute.get("/sign-in", (req, res) => {
  res.send({ message: "signIn" });
});

authRoute.get("/sign-out", (req, res) => {
  res.send({ message: "signOut" });
});

export default authRoute;
