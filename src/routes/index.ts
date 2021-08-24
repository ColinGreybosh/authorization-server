import express from 'express';

const router: express.Router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Hello, world!');
    next();
});

router.post('/', (req, res, next) => {
    res.json(req.body);
    next();
});

export default router;
