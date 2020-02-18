//defines and exports the course model
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Course extends Sequelize.Model {}
  Course.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
// userId (id from the Users table)

    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
              msg: 'Please provide a value for "userId"',
            },
            notEmpty: {
              msg: 'Please provide a value for "userId"',
            },
          },
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
              msg: 'Please provide a value for "title"',
            },
            notEmpty: {
              msg: 'Please provide a value for "title"',
            },
          },
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notNull: {
              msg: 'Please provide a value for "description"',
            },
            notEmpty: {
              msg: 'Please provide a value for "description"',
            },
          },
    },
    estimatedTime: {
        type: Sequelize.STRING,
        allowNull: true
    },
    materialsNeeded: {
        type: Sequelize.STRING,
        allowNull: true
    },
  }, { sequelize });

  Course.associate = (models) => {
    // Add a one-to-one association between the Course and User model
    Course.belongsTo(models.Person, { 
      as: "instructor",
      foreignKey: {
        fieldName: 'instructorPersonId',
        allowNull: false,
      },
    });
  }
  return Course;
};



// Model Spec Notes:
    // Course
    // id (Integer, primary key, auto-generated)
    // userId (id from the Users table)
    // title (String)
    // description (Text)
    // estimatedTime (String, nullable)
    // materialsNeeded (String, nullable)