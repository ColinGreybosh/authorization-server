import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe('/', () => {
    describe('GET', () => {
        it('Test test case', () => {
            assert.strictEqual(true, true, 'Test assertion.');
        });
    });
});