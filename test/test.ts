import chai from 'chai';
import chaiHttp from 'chai-http';
import { AuthServer } from '../src/AuthServer';

chai.use(chaiHttp);

const server: AuthServer = new AuthServer(5000, '/', false);

describe('/', () => {
    describe('GET', () => {
        it('Should receive "Hello, world!"', () => {
            return chai.request(server.app)
                .get('/')
                .then(res => {
                    chai.expect(res.text).to.eql('Hello, world!');
                });
        });
    });
});

describe('/auth', () => {
    describe('GET', () => {
        it('Should receive "Hello, /auth!"', () => {
            return chai.request(server.app)
                .get('/auth')
                .then(res => {
                    chai.expect(res.text).to.eql('Hello, /auth!');
                });
        })
    });

    describe('POST', () => {
        it('Should receive the JSON that was sent', () => {
            const data = {
                'message': 'Hello!'
            };
            return chai.request(server.app)
                .post('/auth')
                .type('json')
                .send(data)
                .then(res => {
                    chai.expect(res.body).to.eql(data);
                });
        });
    });
})
