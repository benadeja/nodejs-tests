const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {

    describe('get(/)', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found'
                    });
                })
                .end(done);
        });
    })

    describe('get(/names)', () => {
        it('should return names response', (done) => {
            request(app)
                .get('/names')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Jaco',
                        age: 35
                    });
                })
                .end(done);
        });
    })
})
