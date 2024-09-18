import { Application, NextFunction, Request, Response } from "express";
import categoriesRoute from "./categoriesRoute";
import subCategoriesRoute from "./subCategoriesRoute";
import globalError from "../middlewares/globalError";
import ApiError from "../utils/apiError";
import productsRoute from "./productsRoute";
import usersRoute from "./usersRoute";
import authRoute from "./authRoute";
import wishlistRoute from "./wishlistRoute";
import addressRoute from "./addressRoute";
import couponsRoute from "./couponsRoute";
import reviewsRoute from "./reviewsRoute";

const mountRouts = (app: Application) => {
  app.use("/api/v1/categories", categoriesRoute);
  app.use("/api/v1/subCategories", subCategoriesRoute);
  app.use("/api/v1/products", productsRoute);
  app.use("/api/v1/reviews", reviewsRoute);
  app.use("/api/v1/coupons", couponsRoute);
  app.use("/api/v1/users", usersRoute);
  app.use("/api/v1/wishlist", wishlistRoute);
  app.use("/api/v1/address", addressRoute);
  app.use("/api/v1/auth", authRoute);
  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    return next(new ApiError(`the route ${req.originalUrl} not found`, 400))
  });
  app.use(globalError);
}

export default mountRouts;