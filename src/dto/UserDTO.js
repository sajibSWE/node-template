// dto/UserDTO.js
import Joi from 'joi';

class UserDTO {

    constructor(userData) {

        this.userName = userData.userName;
        this.email = userData.email;
        this.age = userData.age;
        this.country = userData.country;

    }

    static get schema() {

        return Joi.object({

            userName: Joi.string().required().messages({
                'any.required': 'Username is required',
                'string.empty': 'Username cannot be empty',
            }),

            email: Joi.string().email().required().messages({
                'any.required': 'Email is required',
                'string.email': 'Email must be a valid email address',
            }),

            age: Joi.number().integer().min(0).required().messages({
                'any.required': 'Age is required',
                'number.base': 'Age must be a number',
                'number.min': 'Age must be a positive integer',
            }),

            country: Joi.string().required().messages({
                'any.required': 'Country is required',
                'string.empty': 'Country cannot be empty',
            }),

        });

    }

    // Method to validate the user data
    static validate(userData) {

        const { error } = this.schema.validate(userData);

        if (error) {

            throw new Error(error.details[0].message);

        }

    }

}

export default UserDTO;
