import config from '../config';
import * as line from '@line/bot-sdk';
import axios from 'axios';

module.exports = async (app, option, next) => {
    app.post('/webhook', async (req, reply) => {
        const event =  req.body;
        const data = event.events[0]
        const url = config.apiUrl;
        try {
          await axios.post(`${url}/messenger/receive/`,{ data });
        } catch(err) {
          console.log(`Error webhook : ${err.stack}`);
        }
        
        reply.status(200).send({ status: 'ok'});
    });
    next();
}