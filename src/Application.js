import express from "express";
import rootRouter from "./route/RootRouter.js";
import { PORT, CONTEXT_PATH, VERSION_ONE, ENVIRONMENT_DEV } from "../resources/properties.js";
import GlobalErrorMiddleware from "./middleware/GlobalErrorMiddleware.js";
import Swagger from "./config/Swagger.js";
import morgan from "morgan";
import CustomError from "./exception/CustomError.js";
import sequelize from "../resources/database.js";

class Application {
rootRouter
  start() {

    const app = express();

    // Add morgan to log requests to the console
    app.use(morgan(ENVIRONMENT_DEV));

    // Add swagger for API documentation
    const swagger = new Swagger();
    swagger.setup(app);

    // Add router
    app.use(`${CONTEXT_PATH}${VERSION_ONE}`, rootRouter);

    // Handle unmatched routes
    app.use((req, res, next) => {
      next(new CustomError(`Can't find ${req.originalUrl} on this server!`, 404));
    });

    // Add global error middleware after all middleware added
    app.use(GlobalErrorMiddleware.handleError);

    // Start server
    const port = process.env.PORT || PORT;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

    // Listen for termination signals
    process.on("SIGINT", this.shutdown.bind(this));
    process.on("SIGTERM", this.shutdown.bind(this));

  }

  // Graceful shutdown function
  async shutdown() {
    try {
      await sequelize.close(); // Close Sequelize connection
      console.log("Database connection closed.");
      process.exit(0); // Exit the process
    } catch (error) {
      console.error("Error closing the database connection:", error);
      process.exit(1); // Exit with an error code
    }
  }
  
}

// Start execution
const application = new Application();
application.start();
