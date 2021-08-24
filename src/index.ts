import dotenv from 'dotenv';
import express from 'express';

import router from './routes';
import { logger } from './logging';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT; // default port to listen

app.use(process.env.API_BASE_URL, router);

// start the Express server
app.listen(port, () => {
    logger.info(`server started at http://localhost:${ port }`);
});
