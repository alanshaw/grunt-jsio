/*
 * grunt-jsio
 * https://github.com/alanshaw/grunt-jsio
 *
 * Copyright (c) 2013 Alan Shaw
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
	
	"use strict";
	
	var path = require('path');
	var File = require('File');
	var FileReader = require('FileReader');
	
	grunt.registerMultiTask('jsio', 'Creates JSIO resources files', function() {
		
		// Tell grunt this is an asynchronous task
		var done = this.async();
		
		var srcDestTodo = this.files.length;
		
		this.files.forEach(function(srcDest) {
			
			var srcsTodo = srcDest.src.length;
			var dest = srcDest.dest;
			
			var js = '(function(_this){ _this.jsio = _this.jsio || {};' + grunt.util.linefeed;
			
			js += 'jsio.resources={' + grunt.util.linefeed;
			
			grunt.verbose.writeln('Processing:');
			
			srcDest.src.forEach(function(src) {
				
				grunt.verbose.writeln(src);
				
				var reader = new FileReader();
				
				reader.onload = function() {
					
					var filename = path.basename(src);
					
					js += '"' + filename + '":"' + reader.result + '"';
					srcsTodo = srcsTodo - 1;
					
					if(srcsTodo === 0) {
						
						js += '};})(this);' + grunt.util.linefeed;
						
						// Write the new file
						grunt.file.write(dest, js);
						
						grunt.log.ok('JSIO resources file "' + dest + '" created.');
						
						srcDestTodo = srcDestTodo - 1;
						
						if(srcDestTodo === 0) {
							done();
						}
						
					} else {
						js += ',' + grunt.util.linefeed;
					}
				};
				
				reader.readAsDataURL(new File(src));
			});
		});
		
	});
};