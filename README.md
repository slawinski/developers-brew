# Developer's Brew

## Introduction

My first try at big boy's web development. The website in this repository will contain all the skills I acquired thoughout my short career as a developer. The app will grow gradually and I hope that every visitor will be impressed by the tasteful design and cutting-edge technology behind it.

Let' use this readme to track my progress of what I did on my machine. This can become usefull later on when I will attempt to improve my workflow.

## The workflow

### The basic app structure

I used express-generator to create a basic app structure which I later modified slightly. Below you will find the commands used. Most of it is from this [express-generator tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website). 
```
npm install -g express-generator
express --view=hbs --css=sass developers-brew
npm install
npm install -g gulp
SET DEBUG=express-locallibrary-tutorial:* & npm start
http://localhost:3000/
```
I decided to use Sass as the CSS preprocessor and Handlebars as the template engine. Don't ask me why, they just happened to caugh my eye first and I just stuck with them.

### The task runner

By reading and watching quite a lot of Gulp tutorials I managed to introduce a couple of tasks like:
- concatenating and minifying scripts and styles,
- cleaning up static files and building new ones,
- starting nodemon,
- initializing browsersync,
- watching over changes in the files.

### The version control

It was long overdue but I finally caught up with the version control using git. It's not so scary anymore but I still do not fully understand all those 'forks' and 'branches'.

###### Some commands just in case I will forget them

Here's a cheat-sheet on how to configure, add, commit, push and pull from github (hey, don't laugh. I'm new at this):
```
git config --global user.name "<Your Name>"
git config --global user.email "<youremail@example.com>"
git init
git status
git add <FILENAME> or git add .
git commit -m "<your commit message>"
git remote add <REMOTENAME> <URL>
git pull <REMOTENAME> <BRANCH>
git push <REMOTENAME> <BRANCH>
```
### The template engine

It's beyond all reasoning why I wasn't able to grasp the idea of templating engine, layouts and partials. There's still a lot to learn but I finally made handlebars work for me. The [documentation](https://github.com/ericf/express-handlebars) was very helpful.

### The Gulp, the Node and the BrowserSync

Oh boy, what I had to put up with! I just couldn't make browserSync and node work together with gulp until I read this [Gist](https://gist.github.com/dstroot/22525ae6e26109d3fc9d). If only the website could reload on change without running gulp all over again (on my to-do list).

### The Kanban board

Since I wanted to develop this app in a most proffessional manner available I decided to keep track of issues on a Kanban board (by Zenhub).

## The Front-End

TBDD