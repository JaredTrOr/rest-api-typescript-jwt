import mongoose from 'mongoose';
import config from 'config';
import logger from './logger'

function connect () {

    const dbUri = config.get<string>('dbUri');

    mongoose.connect (dbUri)
        .then(() => {
            logger.info('Connection succesfull');
        })
        .catch((error) => {
            logger.error('Could not connect to db');
            process.exit(1);
        });
}

export default connect;