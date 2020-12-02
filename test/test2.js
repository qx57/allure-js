var expect = require("chai").expect;

const typeRequest = ["GET", "PUT", "DELETE"];
const cicle = [
    {
        "statusCode": 200,
        "body": {
            "errors": []
        }
    },
    {
        "statusCode": 405,
        "body": {
            "errors": [
                {
                    "code": 123,
                    "message": "Request method 'PUT' not supported"
                }
            ]
        }
    },
    {
        "statusCode": 405,
        "body": {
            "errors": [
                {
                    "code": 123,
                    "message": "Request method 'DELETE' not supported"
                }
            ]
        }
    }
]

describe("Parametrized tests ", () => {
    typeRequest.forEach((currValue, index) => {
        describe("Parametrized JS-test " + (index + 1) + " ", () => {
            it(" Power StatusCode is 205 - Check1", function (done) {
                expect(cicle[index].statusCode).to.equal(405);
                done();
            });
            it("message - Request method \'" + currValue + "\' not supported - Check2", function (done) {
                expect(cicle[index].body.errors[0].message).to.equal("Request method \'" + currValue + "\' not supported");
                done();
            });
        });
    })
});