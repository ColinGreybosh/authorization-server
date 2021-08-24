import express, { Application } from 'express';
import { Server } from 'http';
import { logger } from './logging';
import router from './routes';

export class AuthServer {

    private readonly app: Application;
    private server: Server|undefined;

    public constructor(
        private readonly requestedPort: number,
        private readonly baseURI: string
    ) {
        this.app = express();

        this.app.use(baseURI, express.json());

        this.app.use(baseURI, (req, res, next) => {
            logger.info(`Request received: ${req.method} ${req.url} ${req.path}`);
            next();
        });

        this.app.use(baseURI, router);
    }

    public start(): void {
        this.server = this.app.listen(this.requestedPort, () => {
            logger.info(`server started at http://localhost:${this.requestedPort}`);
        });
    }

    public stop(): void {
        this.server?.close();
        logger.info(`server stopped`);
    }
}
