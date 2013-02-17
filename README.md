# grunt-jsio [![Dependency Status](https://david-dm.org/alanshaw/grunt-jsio/status.png)](https://david-dm.org/alanshaw/grunt-jsio)

Grunt task to create JSIO resources file(s).

[JSIO](https://github.com/alanshaw/JavaScript-Image-Optimiser) is a tiny library that allows you to make fewer requests to your server by packaging all your site image data in a JavaScript file in data uri format.

## Getting Started

Install this [grunt][grunt] plugin next to your project's [Gruntfile.js][getting_started] with: `npm install grunt-jsio`

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/wiki/Getting-started

_Note: as of version 0.2.0 this plugin requires grunt 0.4. Install version 0.1.0 for grunt 0.3 support._

Then add this line to your project's `Gruntfile.js`:

```javascript
grunt.loadNpmTasks('grunt-jsio');
```

Next configure the JSIO task in your `Gruntfile.js`:

```javascript
  jsio: {
    dist: {
		src: ['path/to/images/*'],
		dest: 'dist/js/jsio-resources.js'
    }
  }
```

Run the task by invoking `grunt jsio`