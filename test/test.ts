import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../src/index';

chai.use(chaiHttp);

const server = app.listen(5000);

describe('/', () => {
    describe('GET', () => {
        it('Test test case', () => {
            assert.strictEqual(true, true, 'Test assertion.');
        });
    });
});

server.close();
