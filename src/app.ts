import express from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes';

const app = express();
const port = config.get<number>('port') ?? 4000;

app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
    connect();

    routes(app);
});