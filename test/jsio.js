(function() {
	
	"use strict";
	
	var grunt = require('grunt');
	var vm = require('vm');
	
	/*
		======== A Handy Little Nodeunit Reference ========
		https://github.com/caolan/nodeunit

		Test methods:
			test.expect(numAssertions)
			test.done()
		Test assertions:
			test.ok(value, [message])
			test.equal(actual, expected, [message])
			test.notEqual(actual, expected, [message])
			test.deepEqual(actual, expected, [message])
			test.notDeepEqual(actual, expected, [message])
			test.strictEqual(actual, expected, [message])
			test.notStrictEqual(actual, expected, [message])
			test.throws(block, [error], [message])
			test.doesNotThrow(block, [error], [message])
			test.ifError(value)
	*/
	
	exports.namespaced = {
		compile: function(test) {
			test.expect(8);
			
			var js = grunt.file.read('dist/js/jsio-resources.js');
			var sandbox = {};
			
			vm.runInNewContext(js, sandbox);
			
			test.notEqual(null, sandbox.jsio, 'Should contain JSIO namespace');
			
			test.notEqual(null, sandbox.jsio.resources, 'Should contain resources object');
			
			test.notEqual(null, sandbox.jsio.resources['grunt-force.jpg'], 'Resources should contain "grunt-force.jpg" key');
			
			test.notEqual(null, sandbox.jsio.resources['grunt-force.png'], 'Resources should contain "grunt-force.png" key');
			
			test.notEqual(null, sandbox.jsio.resources['grunt-force.gif'], 'Resources should contain "grunt-force.gif" key');
			
			test.equal(
				grunt.file.read('test/expected/grunt-force.gif.dataUrl'),
				sandbox.jsio.resources['grunt-force.gif'],
				'Resources should contain correct data URL for "grunt-force.gif"'
			);
			
			test.equal(
				grunt.file.read('test/expected/grunt-force.jpg.dataUrl'),
				sandbox.jsio.resources['grunt-force.jpg'],
				'Resources should contain correct data URL for "grunt-force.jpg"'
			);
			
			test.equal(
				grunt.file.read('test/expected/grunt-force.png.dataUrl'),
				sandbox.jsio.resources['grunt-force.png'],
				'Resources should contain correct data URL for "grunt-force.png"'
			);
			
			test.done();
		}
	};
}());