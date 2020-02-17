//defines and exports the user model
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class User extends Sequelize.Model {}
  User.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
              msg: 'Please provide a value for "firstName"',
            },
            notEmpty: {
              msg: 'Please provide a value for "firstName"',
            },
          },
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
              msg: 'Please provide a value for "lastName"',
            },
            notEmpty: {
              msg: 'Please provide a value for "lasstName"',
            },
          },
    },
    emailAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
              msg: 'Please provide a value for "emailAddress"',
            },
            notEmpty: {
              msg: 'Please provide a value for "emailAddress"',
            },
          },
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
              msg: 'Please provide a value for "password"',
            },
            notEmpty: {
              msg: 'Please provide a value for "password"',
            },
          },
    },
  }, { sequelize });

  User.associate = (models) => {
    // adds one to many association with Course (one user, many coursess)
    User.hasMany(models.Course, { 
      as: "instructor",
      foreignKey: {
        fieldName: 'instructorPersonId',
        allowNull: false,
      },
    });
  };

  return User;
};


//Model Spec Notes:
// User
// id (Integer, primary key, auto-generated)
// firstName (String)
// lastName (String)
// emailAddress (String)
// password (String)