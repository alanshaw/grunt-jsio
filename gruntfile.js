module.exports = function(grunt) {
	
	"use strict";
	
	grunt.initConfig({
		
		jsio: {
			dist: {
				src: ['test/images/*'],
				dest: 'dist/js/jsio-resources.js'
			}
		},
		
		nodeunit: {
			files: ['test/**/*.js']
		},
		
		watch: {
			files: '<%= jshint.files %>',
			tasks: 'default'
		},
		
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				node: true,
				es5: true
			},
			files: ['grunt.js', 'tasks/**/*.js', 'test/**/*.js']
		}
	});
	
	grunt.loadTasks('tasks');
	
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.registerTask('default', ['jshint', 'jsio', 'nodeunit']);
};