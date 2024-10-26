
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import {PORT, CONTEXT_PATH, VERSION_ONE} from '../../resources/properties.js';


class Swagger {

  constructor() {

    this.swaggerDefinition = {

      openapi: '3.0.0',
      
      info: {

        title: 'Your API Title',
        version: '1.0.0',
        description: 'API documentation for your project',

      },

      servers: [
        {
          url:  `http://localhost:${PORT}`, // Update with your server URL ${CONTEXT_PATH}${VERSION_ONE}
        },
      ],
    };

    this.options = {

      swaggerDefinition: this.swaggerDefinition,
      apis: ['./src/route/*.js'], // Adjust path according to your project structure

    };

    this.swaggerSpec = swaggerJSDoc(this.options);

  }

  setup(app) {

    app.use(`${CONTEXT_PATH}${VERSION_ONE}/api-docs`, swaggerUi.serve, swaggerUi.setup(this.swaggerSpec));

  }

}

export default Swagger;
