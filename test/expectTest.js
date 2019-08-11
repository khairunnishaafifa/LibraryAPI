var expect = require('chai').expect
    , foo = 'bar'
    , beverages = { tea: ['chai', 'matcha', 'oolong'] }
    , name = 'khairunnisha'
    , email = 'nasha.@mail.com'

describe('Array', function () {
    describe('#indexOf', function () {
        it('should return result of assertion 1', function () {
            expect(foo).to.be.a('string')
            expect(foo).to.equal('bar')
            expect(foo).to.have.lengthOf(3)
        })

        it('should return result of assertion 2', function() {
            expect(beverages).to.have.property('tea').with.lengthOf(3)
        })

        it('should return result of assertion 3', function() {
            expect(name).to.not.have.property('b')
            expect(email).to.include('@mail.com');
        })
    })
})