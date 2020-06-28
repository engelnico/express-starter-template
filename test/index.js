var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
let should = chai.should();


var app = require('../lib/app');

chai.use(chaiHttp);


describe('Status Codes', function () {

    describe('Index', function () {
        it('should return statuscode 200', async function () {
            const res = await chai.request(app).get('/');
            expect(res.statusCode).to.equal(200);
               
        });
    });

});
