import dotenv from 'dotenv';
import { AuthServer } from './AuthServer';

dotenv.config();
const port = Number(process.env.SERVER_PORT); // default port to listen
const authServer: AuthServer = new AuthServer(Number(port), process.env.API_BASE_URL);

if (require.main === module) {
    // start the Express server
    authServer.start();
}

export default authServer;
