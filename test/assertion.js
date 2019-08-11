var assert = require('assert')

describe('Array', function () {
    describe('#indexOf', function () {
        it('should return -l when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1)
        })

        it('should compare the right length of a string', function () {
            assert.equal('hello'.length, 5)
        })
    })
})