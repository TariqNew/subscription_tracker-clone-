import Router from "express";
import {
  Signup,
  signIn,
  signOut,
} from "../../../controller/auth.controller.js";

const authRoute = Router();

authRoute.post("/sign-up", Signup);

authRoute.post("/sign-in", signIn);

authRoute.post("/sign-out", signOut);

export default authRoute;
