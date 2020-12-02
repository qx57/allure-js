const { allure } = require('allure-mocha/runtime');

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

const step3 = {
    "statusCode": 200,
    "body": {
        "productId": "12903354_PimStd_Product",
        "quantity": 88,
        "price": 21824
    }
}

var expect = require("chai").expect;
var store = 59;


describe("JS-test 1 ", () => {
    it("StatusCode is 200 - Check1", (done) => {
        expect(step1.statusCode).to.equal(200);
        done();
    });
    it("Correct productId - Check2", (done) => {
        expect(step1.body.productId).to.equal('12903354_PimStd_Product');
        done();
    });
    it("Quantity - 88- Check3", (done) => {
        expect(step1.body.quantity).to.equal(88);
        done();
    });
    it("Price - 21824- Check4", (done) => {
        expect(step1.body.price).to.equal(21824);
        done();
    });
});


describe("JS-test 2 ", () => {
    it("StatusCode is 200 - Check1", (done) => {
        expect(step2.statusCode).to.equal(200);
        done();
    });
    it("√ productId - Check2", (done) => {
        expect(step2.body.productId).to.exist;
        done();
    });
    it("√ quantity - Check3", (done) => {
        expect(step2.body.quantity).to.exist;
        done();
    });
    it("√ price - Check4", (done) => {
        expect(step2.body.price).to.exist;
        done();
    });
});


describe("JS-test 2 ", () => {
    it("StatusCode is 200 - Check1", (done) => {
        expect(step3.statusCode).to.equal(200);
        done();
    });
    it("Correct productId - Check2", (done) => {
        expect(step3.body.productId).to.equal('12903354_PimStd_Product');
        done();
    });
    it("Quantity - 88- Check3", (done) => {
        expect(step3.body.quantity).to.equal(88);
        done();
    });
    it("Price - 21824- Check4", (done) => {
        expect(step3.body.price).to.equal(21824);
        done();
    });
});