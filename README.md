#Sample ES6 module

This is a small project to illustrate how to export custom HTML elements that contain static assets (png, jpg, etc) as part of the component.

*NOTE* you need to be running chrome 60 and have "Experimental Web Platform features" enabled. As of chrome 61 this will be enabled by default.

## Building
```
npm install
gulp
```

## Using
This stoplight component is published as an npm package. See the sample directory for an example of a downstream npm project that would include this stoplight and use it.

In the sample directory run:
```
npm install http-server -g
http-server -p 8000 --cors
```

navigate to your browser and see the stoplight




