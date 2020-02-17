//Configures Sequelize ORM for use with models
const Sequelize = require('sequelize'); //requires sequelize so that it can be used in the program

//define a variable(sequelize) that holds a Sequelize instance you can interact with.
const sequelize = new Sequelize({ // instantiates Sequlized using the Sequelize() constuctor
    dialect: 'sqlite', //then connects to the database by passing he Sequelize() constructor an object with connection parameters.
    storage: 'fsjstd-restapi.db',
    logging: true // controls whether or not Sequelize logs SQL statements being executed to the console (false value will stop the logging, true will keep the logging /(which ahs a default setting of true)) 

});


// IIFE that's tagged with the keyword async: (immediately invoked function expression)
(async () => { //keyword async defines an asynchronous function
    try { //use the await keyword to wait for a Promise (await must be used inside an async function)
        await sequelize.authenticate(); //Sequelize's authenticate() function returns a promise that resolves to a successful, authenticated connection to the database.
        console.log('Connection to the database successful!');
    } catch (error) {
        console.error('Error connecting to the database: ', error);
    }
})();