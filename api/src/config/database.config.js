const Mongoose = require('mongoose');
const settings = require('../../setting');

let config = require('./' + settings.environment + '.config');

Mongoose.Promise = global.Promise;

const connectToMongoDb = async () => {
    let host = config.mongo.host;
    let port = config.mongo.port;
    let username = config.mongo.username;
    let password = config.mongo.password;
    let database_name = config.mongo.database_name;
    let connectionString = "";

    if(settings.environment === "local")
        connectionString = 'mongodb+srv://'+username+':'+password+'@cluster0-kysrb.mongodb.net/ticket_system?retryWrites=true&w=majority';
        // connectionString = connect_string
    else
        connectionString = `mongodb://${username}:${password}@${host}:${port}/${database_name}`;

    try {
        await Mongoose.connect(connectionString, { useNewUrlParser: true,
            useUnifiedTopology: true });
        console.info(`MongoDB Connected to ${database_name}`);

    } catch (error) {
        console.log(error);
        
        console.error(`Error Connecting to MongoDB  ${database_name}`);
    }

};

module.exports = connectToMongoDb;    