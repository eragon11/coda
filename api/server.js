
//include all the packages necessary
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from 'morgan';
import http from 'http';

//include the files 
import connectToMongoDb from './src/config/database.config';
import apiRouters from './router';

//set the port
const port = 8282;

const app = express();

const server = http.createServer(app)

connectToMongoDb();

app.use(cors());
app.use(bodyParser.json({ extended: true, limit: '500mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }));

//healthcheck 
app.get('/api/health_check', function (req, res, next) {
    console.log("ok");
    res.sendStatus(200);
});

//include all the necessary routes in the express
app.use('/api', apiRouters);

server.listen(port, () => {
    console.info(`Server started on port : ${port}`);
});