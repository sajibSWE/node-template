import express from "express";
import userController from "../controller/UserController.js";

class UserRouter {

    constructor() {

        this.router = express.Router();
        this.initRoutes();

    }

    initRoutes() {

        /**
         * @swagger
         * /users:
         *   post:
         *     summary: Create a new user
         *     responses:
         *       201:
         *         description: User created successfully
         */
        this.router.post("/", userController.createUser);

        /**
         * @swagger
         * /users:
         *   get:
         *     summary: Retrieve a list of users
         *     responses:
         *       200:
         *         description: A list of users
         */
        this.router.get("/", userController.getUsers);

    }

    getRouter() {

        return this.router;

    }

}

// Export an instance of Routing
const userRouter = new UserRouter();
export default userRouter.getRouter();
