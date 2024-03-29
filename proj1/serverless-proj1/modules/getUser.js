const {database, User} = require('../database.js');
const {UserModel} = require('../controller/user.js');
const {response} = require('../helper/helper.js');

module.exports.userdata = async (event) => {
  await database();
  try {
        const { email } = event.pathParameters;
        userObj = await User.findOne({ where: { email } });

        if (userObj) {
            return response(201, userObj, "Data Found");
        }
        else {
            return response(404, "", "Requested user is not found")
        }
     
  }
  catch (error) {
    console.log(error);
    return response(error.statusCode, { error: error.message }, error);

  }
};