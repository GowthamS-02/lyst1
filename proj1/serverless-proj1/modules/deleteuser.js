const {database, User} = require('../database.js');
const {UserModel} = require('../controller/user.js');
const {response} = require('../helper/helper.js');

module.exports.userdata = async (event) => {

  try {
    const { user_id } = event.pathParameters;
    userObj = await User.destroy(userObj, { where: { user_id } });
    
    if (userObj) {
        return response(201, userObj, "Data Deleted");
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