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
		
		// Get the files to process
		var filePaths = grunt.file.expandFiles(this.file.src);
		var dest = this.file.dest;
		
		var unreadFiles = filePaths.length;
		var js = '(function(_this){ _this.jsio = _this.jsio || {};' + grunt.utils.linefeed;
		
		js += 'jsio.resources={' + grunt.utils.linefeed;
		
		grunt.verbose.writeln('Processing:');
		
		filePaths.forEach(function(filePath) {
			
			grunt.verbose.writeln(filePath);
			
			var reader = new FileReader();
			
			reader.onload = function() {
				
				var filename = path.basename(filePath);
				
				js += '"' + filename + '":"' + reader.result + '"';
				unreadFiles = unreadFiles - 1;
				
				if(unreadFiles === 0) {
					
					js += '};})(this);' + grunt.utils.linefeed;
					
					// Write the new file
					grunt.file.write(dest, js);
					
					grunt.log.ok('JSIO resources file "' + dest + '" created.');
					
					done();
					
				} else {
					js += ',' + grunt.utils.linefeed;
				}
			};
			
			reader.readAsDataURL(new File(filePath));
		});
	});
};