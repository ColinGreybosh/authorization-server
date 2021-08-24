import dotenv from 'dotenv';
import { AuthServer } from './AuthServer';

dotenv.config();
const port = Number(process.env.SERVER_PORT); // default port to listen
const apiBaseURI = process.env.API_BASE_URL;
const authServer: AuthServer = new AuthServer(port, apiBaseURI);

if (require.main === module) {
    // start the Express server
    authServer.start();
}

export default authServer;
