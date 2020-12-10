var expect = require("chai").expect;
const allure = require('allure-mocha/runtime');

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
    // before('Connect to DB', () => {});

    const stepOne = () => allure.allure.step("StatusCode is 200 - Check1", () => {
            expect(step1.statusCode).to.equal(200);
        });

    const stepTwo = () => allure.allure.step("StatusCode is 200 - Check1", () => {
            expect(step1.body.productId).to.equal('12903354_PimStd_Product');
        });

    const stepThree = () => allure.allure.step("StatusCode is 200 - Check1", () => {
            expect(step1.body.quantity).to.equal(88);
        });

    const stepFour = () => allure.allure.step("StatusCode is 200 - Check1", () => {
            expect(step1.body.price).to.equal(21824);
        });

    it("JS-test 1 ", () => {
        allure.allure.feature("JS-001");
        allure.allure.story("JS-tests");

        stepOne();

        stepTwo();

        stepThree();

        stepFour();
    });


    it("JS-test 2 ", () => {
        describe("StatusCode is 200 - Check1", (done) => {
            expect(step2.statusCode).to.equal(200);
        });
        describe("√ productId - Check2", (done) => {
            expect(step2.body.productId).to.exist;
        });
        describe("√ quantity - Check3", (done) => {
            expect(step2.body.quantity).to.exist;
        });
        describe("√ price - Check4", (done) => {
            expect(step2.body.price).to.exist;
        });
    });

    // after('Disconnect from DB', async () => {});
});
