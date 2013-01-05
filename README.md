# grunt-jsio

Grunt task to create [JSIO](https://github.com/alanshaw/JavaScript-Image-Optimiser) resources file.

## Getting Started

Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-jsio`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-jsio');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

Next configure the JSIO task in your `grunt.js` gruntfile:

```javascript
  jsio: {
    dist: {
		src: ['path/to/images/*'],
		dest: 'dist/js/jsio-resources.js'
    }
  }
```

Run the task by invoking `grunt jsio`