import express from 'express';
import { router as authRouter } from './auth';

const router: express.Router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, world!');
});

router.post('/', (req, res) => {
    res.json(req.body);
});

router.use('/', authRouter);

export default router;
