import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { SECRETE_KEY } from "../config/env.js";
import { prisma } from "../infrastructure/database/prisma.js";

export const Signup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    //values from the user's form
    const { name, email, password } = req.body;

    //Fetch data from the database
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      const error = new Error("User already exist");
      throw error;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const token = jwt.sign({ userId: newUser.id }, SECRETE_KEY, {
      expiresIn: "1d",
    });

    res.status(201).json({
      token,
      user: newUser,
    });
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req: Request, res: Response) => {
  // Receiving the user data
  const { email, password } = req.body;

  //check if user existed
  const existingUser = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
    },
  });

  //check if user found
  if (!existingUser) {
    const error = new Error("The user not found");
    throw error;
  }

  //Validate the user's password
  const isPasswordValid = await bcrypt.compare(password, existingUser.password);

  if (!isPasswordValid) {
    const error = new Error("Invalid credentials");
    throw error;
  }

  const token = jwt.sign({ userId: existingUser.id }, SECRETE_KEY, {
    expiresIn: "1d",
  });

  res.status(200).json({
    success: true,
    message: "user signed succesfully",
    data: {
      token,
      existingUser,
    },
  });
};

export const signOut = (req: Request, res: Response) => {};
