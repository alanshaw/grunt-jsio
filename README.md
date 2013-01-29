# grunt-jsio [![Dependency Status](http://david-dm.org/alanshaw/grunt-jsio/status.png)](http://david-dm.org/alanshaw/grunt-jsio)

Grunt task to create JSIO resources file(s).

[JSIO](https://github.com/alanshaw/JavaScript-Image-Optimiser) is a tiny library that allows you to make fewer requests to your server by packaging all your site image data in a JavaScript file in data uri format.

## Getting Started

Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-jsio`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-jsio');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/wiki/Getting-started

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