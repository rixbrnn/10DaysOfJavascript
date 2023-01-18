const sinon = require('sinon');
const expect = require('chai').expect;

describe('should ensure LoadAndConst is logging values', () => {
    let sandbox;
    let consoleLogStub;
    
    beforeEach(() => {
        sandbox = sinon.createSandbox();
        consoleLogStub = sandbox.stub(console, 'log');
    });
    
    afterEach(() => {
        sandbox.restore();
        consoleLogStub = null;
    });
    
    it('should print all the correct values for a radius of 2.6', () => {
        require('../../../src/day1/LetAndConst.cjs');
        expect(consoleLogStub.firstCall.args[0]).to.equal("2.6");
        expect(consoleLogStub.secondCall.args[0]).to.equal(21.237166338267002);
        expect(consoleLogStub.thirdCall.args[0]).to.equal(16.336281798666924);
    });
    
})