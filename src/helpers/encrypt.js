const bcrypt= require( "bcryptjs");

const saltRounds = 10;

const salt = bcrypt.genSaltSync(saltRounds);

const hashPassword = (password) => bcrypt.hashSync(password, salt);

const comparePassword = (hashedPassword, password) => bcrypt.compareSync(password, hashedPassword);


module.exports = { hashPassword, comparePassword };
