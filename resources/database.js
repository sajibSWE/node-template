import { Sequelize } from "sequelize";

const sequelize = new Sequelize("test", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres", // Using PostgreSQL
  logging: console.log,
  pool: {
    max: 5, // Maximum number of connections in the pool
    min: 0,  // Minimum number of connections in the pool
    acquire: 30000, // Maximum time (in ms) that pool will try to get connection before throwing error
    idle: 10000,    // Maximum time (in ms) that a connection can be idle before being released
  },
});

export default sequelize;
