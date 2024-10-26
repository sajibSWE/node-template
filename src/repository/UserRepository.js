import User from "../model/User.js";
// import sequelize from "../../resources/database.js";
// import { UnknownConstraintError } from "sequelize";

class UserRepository {

  async fetchUsers() {

    try {

      const users = await User.findAll();
      return users;

    } catch (error) {

      throw error;

    }

  }

  async createUser(userDTO) {

    try {

      // Map the DTO to the Sequelize model
      const user = await User.create({
        user_name: userDTO.userName,
        email: userDTO.email,
        age: userDTO.age,
        country: userDTO.country,
      });

      return user;

    } catch (error) {

      throw error;

    }

  }


}

const userRepository = new UserRepository();
export default userRepository;

// const [users, metadata] = await sequelize.query(
//     "SELECT * FROM public.users u WHERE u.id = :id OR u.age > :age",
//     {
//         replacements: { id: 1, age: 18 }, // Use parameter replacements
//         type: sequelize.QueryTypes.SELECT // Specify that this is a SELECT query
//     }
// );

// const sql = "SELECT id, user_name FROM public.users"; // A simple select to see how it behaves

//       const queryType = {
//         type: sequelize.QueryTypes.SELECT, // Specify that this is a SELECT query
//       };
//       const users = await sequelize.query(sql, queryType);

// const user = await User.findOne({
//   where: { id: 1 }
// }) ?? {};

