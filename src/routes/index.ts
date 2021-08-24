import express from 'express';

import { logger } from '../logging';

const router: express.Router = express.Router();

router.use((req, res, next) => {
    logger.info(`Request received: ${req.method} ${req.url} ${req.path}`);
    next();
});

router.get('/', (req, res) => {
    res.send('Hello, world!');
});

export default router;
