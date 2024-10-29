import { Model,DataTypes } from 'sequelize';
import sequelize from '../../resources/database.js';


class User extends Model {}
 
User.init({
    name: {   // Alias used in the code
        type: DataTypes.STRING,
        allowNull: false,
        //field: 'user_name',  // Maps to 'user_name' column in the database
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,          // Pass the connection instance
    modelName: 'User',  // Model name (used internally by Sequelize)
    tableName: 'users', // Table name in the database
    timestamps: false,  // Assuming no `createdAt` and `updatedAt`
});

export default User;
