var chai = require('chai')
var chaiHttp = require('chai-http')
var app = require('../../../app')
var expect = chai.expect

chai.use(chaiHttp)

describe('Root Function', function () {
    it("should show OK", function (done) {
        this.timeout(5000)
        chai.request(app)
            .get('/api/v1/test')
            .end(function (err, res) {
                expect(res).to.have.status(200)
                expect(res.body).to.have.property('success', true)
                expect(res).to.be.a('object')


                done()
            })
    })
})

