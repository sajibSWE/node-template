import userRepository from "../repository/UserRepository.js";
import UserDTO from "../dto/UserDTO.js";


class UserService {

  async getUsers() {

    try {

      const users = await userRepository.fetchUsers();
      return users;

    } catch (error) {

      throw error;

    }

  }

  async createUser(data) {

    try {

      const userDTO = new UserDTO(data);

      UserDTO.validate(userDTO)  // Validate data

      const user = await userRepository.createUser(userDTO);

      return user;

    } catch (error) {

      throw error;

    }

  }

}

const userService = new UserService();
export default userService;


