import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (res.headersSent) {
    return next(err);
  }

  let statusCode = 500;
  let message = "Internal Server Error";
  let details: unknown;

  if (err instanceof ZodError) {
    statusCode = 400;
    message = "Validation error";
    details = err.issues;
  }

  if (typeof err === "object" && err !== null && "message" in err) {
    message = String(err.message);
  }

  if (typeof err === "object" && err !== null && "statusCode" in err) {
    statusCode = Number(err.statusCode);
  }

  if (statusCode >= 500) {
    console.error(err);
  }

  res.status(statusCode).json({
    status: statusCode >= 500 ? "error" : "fail",
    statusCode,
    message,
    errors: details,
    ...(process.env.NODE_ENV === "development" &&
      err instanceof Error && {
        stack: err.stack,
      }),
  });
};
