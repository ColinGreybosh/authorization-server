import express from 'express';

const ENDPOINT = '/auth';
const router: express.Router = express.Router();

router.get(ENDPOINT, (req, res) => {
    res.send(`Hello, ${ENDPOINT}!`);
});

router.post(ENDPOINT, (req, res) => {
    res.json(req.body);
});

export { router };
