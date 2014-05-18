var chai = require('chai');
var expect = chai.expect;

var calculations = require('../calculations');

describe('calculator', function() {
	it('adds', function() {
		expect(calculations.add(1, 5)).to.eql(6);
	});

	it('adds', function() {
		expect(calculations.add(-1, 5)).to.eql(4);
	});

	it('subtracts', function() {
		var result = calculations.subtract(1, 5);
		expect(result).to.eql(-4);
	});

	it('subtracts', function() {
		var result = calculations.subtract(5, 1);
		expect(result).to.eql(4);
	});

	it('subtracts', function() {
		var result = calculations.subtract(-1, -5);
		expect(result).to.eql(4);
	});

	it('multiplies', function() {
		var result = calculations.multiply(5, 6);
		expect(result).to.eql(30);
	});

	it('multiplies', function() {
		var result = calculations.multiply(5, -6);
		expect(result).to.eql(-30);
	});

	it('multiplies', function() {
		var result = calculations.multiply(-5, -6);
		expect(result).to.eql(30);
	});


	it.skip('differentiates', function() {
		expect(calculations.derivative('x^2')).to.eql('2x');
	});

	it.skip('integrates', function(){
		expect(calculations.integral('2x')).to.eql('x^2 + C');
	});
});