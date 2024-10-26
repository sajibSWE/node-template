import express from "express";
import userRouter from "./UserRouter.js";
import CustomError from "../exception/CustomError.js";

class RootRouter {

  constructor() {

    this.router = express.Router();
    this.initRoutes();

  }

  initRoutes() {

    //root route
    this.router.get("/", (req, res) => {
      res.send("Hello, ES6 in Node.js!");
    });

    //add user router
    this.router.use("/users", userRouter);

    // Error handling for undefined routes
    this.router.use((req, res, next) => {
      next(new CustomError(`Can't find ${req.originalUrl} on this server!`, 404));
    });

  }

  getRouter() {

    return this.router;

  }

}

// Export an instance of Routing
const rootRouter = new RootRouter();
export default rootRouter.getRouter();
