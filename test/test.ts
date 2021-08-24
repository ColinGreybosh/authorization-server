import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { AuthServer } from '../src/AuthServer';

chai.use(chaiHttp);

const server: AuthServer = new AuthServer(5000, '/')
server.start();

describe('/', () => {
    describe('GET', () => {
        it('Test test case', () => {
            assert.strictEqual(true, true, 'Test assertion.');
        });
    });
});

server.stop();
