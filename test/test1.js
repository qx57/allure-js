var allure = require('allure-mocha/runtime');
var expect = require("chai").expect;

const step1 = {
    "statusCode": 200,
    "body": {
        "productId": "12903354_PimStd_Product",
        "quantity": 88,
        "price": 21824
    }
}

const step2 = {
    "statusCode": 200,
    "body": {
        "productId": "12903354_PimStd_Product",
        "quantity": 88,
        "price": 21824
    }
}


describe("JS-tests ", () => {
    before('Connect to DB', () => {});

    it("JS-test 1 ", () => {
        describe("StatusCode is 200 - Check1", (done) => {
            expect(step1.statusCode).to.equal(200);
            done();
        });
        describe("Correct productId - Check2", (done) => {
            expect(step1.body.productId).to.equal('12903354_PimStd_Product');
            done();
        });
        describe("Quantity - 88- Check3", (done) => {
            expect(step1.body.quantity).to.equal(88);
            done();
        });
        describe("Price - 21824- Check4", (done) => {
            expect(step1.body.price).to.equal(21824);
            done();
        });
    });


    it("JS-test 2 ", () => {
        describe("StatusCode is 200 - Check1", (done) => {
            expect(step2.statusCode).to.equal(200);
            done();
        });
        describe("√ productId - Check2", (done) => {
            expect(step2.body.productId).to.exist;
            done();
        });
        describe("√ quantity - Check3", (done) => {
            expect(step2.body.quantity).to.exist;
            done();
        });
        describe("√ price - Check4", (done) => {
            expect(step2.body.price).to.exist;
            done();
        });
    });

    after('Disconnect from DB', async () => {});
});
