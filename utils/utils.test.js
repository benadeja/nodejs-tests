const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    it('should add two numbers', () => {
        var res = utils.add(33, 11);
        expect(res).toBe(44).toBeA('number');
    });
    
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
    
    it('should square two numbers', () => {
        var res = utils.square(3);
        expect(res).toBe(9).toBeA('number');
    });
    
    it('should async square two numbers', (done) => {
        utils.asyncSquare(4, (sum) => {
            expect(sum).toBe(16).toBeA('number');
            done();
        });
    });
    
    it('should set firstName and lastName', () => {
        var user = { location: 'South Africa', age: 35 };
        var res = utils.setName(user, 'Jaco Benade');
    
        expect(res).toInclude({
            firstName: 'Jaco',
            lastName: 'Benade'
        });
    });
    
    it('should expect some values', () => {
        expect(12).toNotBe(10);
        expect({name: 'jaco'}).toNotEqual({name: 'Jaco'});
        expect([2,3,4]).toExclude(1);
        expect({
            name: 'Jaco',
            age: 35,
            location: 'South Africa'
        }).toExclude({
            age: 23
        })
    });

})

