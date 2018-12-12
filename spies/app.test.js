const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App()', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Jaco', 35);
        expect(spy).toHaveBeenCalledWith('Jaco', 35);
    })

    it('should call saveUser with user object', () => {
        var email = 'jaco.benade@gmail.com';
        var password = '123pass';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    });


})