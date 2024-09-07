import { NextFunction, Request, Response } from "express";
import { CustomError } from "../interfaces/customError";

const globalError = (error: CustomError, req: Request, res: Response, next: NextFunction) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || 'Server error';
  if(process.env.MODE_ENV === "development") {
    res.status(error.statusCode).json({
      error,
      message: error.message,
      stack: error.stack,
    });
  } else {
    res.status(error.statusCode).json({
      status: error.status,
      message: error.message
    });
  }
}

export default globalError;
