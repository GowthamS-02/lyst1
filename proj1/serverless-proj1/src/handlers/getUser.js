const Sequelize = require('sequelize');
const sequelize = require('../database/database.js');
const User = require('../models/user.js')


module.exports.userdata = async (event) => {
    await User.sync({ alter: true });
    try {
        const { email } = event.pathParameters;
        userObj = await User.findOne({ where: { email } });

        if (userObj) {
            return {
                statusCode: 201,
                body: JSON.stringify(userObj)
            };
        }
        else {
            return {
                statusCode: 404,
                body: JSON.stringify({
                    error: "Requested user is not found"
                })
            }
        }

    }
    catch (error) {
        console.log(error);
        return {
            statusCode: error.statusCode,
            body: JSON.stringify({ error: error.message })
        }
    }
};