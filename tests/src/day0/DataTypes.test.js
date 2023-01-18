import { performOperation } from "../../../src/day0/DataTypes.js";
import sinon from "sinon";
import { expect } from "chai";

describe("performOperation", () => {
    let sandbox;
    let consoleLogStub;
    let secondInteger = "12";
    let secondDecimal = "4.32";
    let secondString = "is the best place to learn and practice coding!";
    
    beforeEach(() => {
        sandbox = sinon.createSandbox();
        consoleLogStub = sandbox.stub(console, "log");
    });
    
    afterEach(() => {
        sandbox.restore();
    });
    
    it("should log the sum of the firstInteger and secondInteger", () => {
        performOperation(secondInteger, secondDecimal, secondString);
        expect(consoleLogStub.firstCall.args[0]).to.equal(16);
    });
    
    it("should log the sum of the firstDecimal and secondDecimal", () => {
        performOperation(secondInteger, secondDecimal, secondString);
        expect(consoleLogStub.secondCall.args[0]).to.equal(8.32);
    });
    
    it("should log the concatenation of the firstString and secondString", () => {
        performOperation(secondInteger, secondDecimal, secondString);
        expect(consoleLogStub.thirdCall.args[0]).to.equal("HackerRank " + secondString);
    });
});