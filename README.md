# Developer's Brew

My first try at big boy's web development. The website in this repository will contain all the skills I acquired thoughout my short career as a developer. The app will grow gradually and I hope that every visitor will be impressed by the tasteful design and cutting-edge technology behind it.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install and how to install them

```
Node.js
```

### Installing

A step by step series of examples that tell you how to get a development env running

After cloning the repo install the dependencies and gulp.js as a global dependency
```
npm install

npm install -g gulp
```

To run the app locally in your command line just type

```
gulp
```

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Node.js](https://nodejs.org/en/) - runtime environment
* [Express](https://expressjs.com/) - web framework for Node.js
* [Gulp.js](https://gulpjs.com/) - task runner for development purposes
* [Sass](https://sass-lang.com/) - CSS preprocessor
* [Handlebars](https://handlebarsjs.com/) - templating engine

### The basic app structure

I used express-generator to create a basic app structure which I later modified slightly. Most of it is from this [express-generator tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website).

### The task runner

For the neverending development phase I chose Gulp.js. By reading and watching quite a lot of tutorials I managed to introduce a couple of tasks like:
- concatenating and minifying scripts and styles,
- cleaning up static files and building new ones,
- watching over changes in the files.

### The template engine

It's beyond all reasoning why I wasn't able to grasp the idea of a templating engine, layouts and partials. There's still a lot to learn but I finally made handlebars work for me. The [documentation](https://github.com/ericf/express-handlebars) was very helpful.

### The Gulp, the Node and the BrowserSync

Oh boy, what I had to put up with! I just couldn't make browserSync and node work together with gulp until I read this [Gist](https://gist.github.com/dstroot/22525ae6e26109d3fc9d). It stil feels like the task are running few times too many than required (on my to-do list).

## Authors

* **Piotr Slawinski** - *Initial work* - [Slawinski](https://github.com/slawinski)

## License

## Acknowledgments

