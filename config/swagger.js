import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NTC Bus Tracking API",
      version: "1.0.0",
      description: "API documentation for NTC Bus Tracking System",
    },
    servers: [
      {
        url: "http://13.62.127.164:3000/api", // your deployed URL
      },
    ],
  },
  apis: ["./routes/*.js"], // path to your route files with Swagger comments
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
