import { Sequelize } from "sequelize";

const DB_NAME="test_ymnh";

const DB_USER="root";

const DB_PASSWORD="6fkSivvcNpb2YPT4A2NcAqRuXdjvzApl";

const DB_HOST="dpg-csggrfrqf0us73atkuqg-a.oregon-postgres.render.com";

const DB_DIALECT="postgres";


const sequelize = new Sequelize(
  DB_NAME,DB_USER , DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT, // Using PostgreSQL
  logging: console.log,
  pool: {

    max: 5, // Maximum number of connections in the pool
    min: 0,  // Minimum number of connections in the pool
    acquire: 30000, // Maximum time (in ms) that pool will try to get connection before throwing error
    idle: 10000,   
     // Maximum time (in ms) that a connection can be idle before being released
  },

}

);

export default sequelize;
