import { greeting } from "../../../src/day0/HelloWorld.js";
import { expect } from 'chai';
import sinon from 'sinon';

describe('greeting', () => {
  let sandbox;
  let consoleLogStub;
  let parameter = 'Hello, Mocha!';

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    consoleLogStub = sandbox.stub(console, 'log');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should log "Hello, World!"', () => {
    greeting(parameter);
    expect(consoleLogStub.firstCall.args[0]).to.equal('Hello, World!');
  });

  it('should log the passed parameter', () => {
    greeting(parameter);
    expect(consoleLogStub.secondCall.args[0]).to.equal(parameter);
  });
});