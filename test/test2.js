var expect = require("chai").expect;
var store = 59;

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
                    "message": "Request method PUT not supported"
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
                    "message": "Request method DELETE not supported"
                }
            ]
        }
    }
]

typeRequest.forEach((currValue, index) => {
    describe("[STEP" + (index + 1) + "] test_cassette_materials invalid method in the request changed from POST to " + currValue, () => {
        it(" Power StatusCode is 205 - Check1", function (done) {
            expect(cicle[index].statusCode).to.equal(405);
            done();
        });
        it("message - Request method \'" + currValue + "\' not supported - Check2", function (done) {
            expect(cicle[index].body.errors[0].message).to.equal("Request method \'" + currValue + "\' not supported");
            done();
        });
    });
});