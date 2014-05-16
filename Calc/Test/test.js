var chai = require('chai');
var expect = chai.expect;

var calculations = require('../calculations');

describe('calculator', function() {
	it('adds', function() {
		expect(calculations.add(1, 5)).to.eql(6);
	});

	it('subtracts', function() {
		var result = calculations.subtract(1, 5);
		expect(result).to.eql(-4);
	});

	it.skip('differentiates', function() {
		expect(calculations.derivative('x^2')).to.eql('2x');
	});

	it.skip('integrates', function(){
		expect(calculations.integral('2x')).to.eql('x^2 + C');
	});
});