import userService from "../service/UserService.js";

class UserController {

  async getUsers(req, res) {

    try {

      const users = await userService.getUsers();
      res.status(201).json(users);

    } catch (error) {

      res.status(500).json({ error: error.message });

    }

  }

  async createUser(req, res, next) {

    try {

      const user = await userService.createUser(req.body);

      if (!user) {

        return next(new CustomError('User not created.', 404));  // Throwing operational error

      }

      res.status(201).json({

        status: 'success',
        data: { user },

      });

    } catch (error) {

      next(error);

    }

  }

}

const userController = new UserController();
export default userController;

