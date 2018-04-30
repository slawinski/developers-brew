# Developer's Brew

## Introduction

My first try at big boy's web development. The website in this repository will contain all the skills I acquired thoughout my short career as a developer. The app will grow gradually and I hope that every visitor will be impressed by the tasteful design and cutting-edge technology behind it.

Let' use this readme to track my progress of what I did on my machine. This can become usefull later on when I will attempt to improve my workflow.

## The workflow

### Item number one - The basic app structure

I used express-generator to create a basic app structure which I later modified slightly. Below you will find commands I used. Most of it is from this [express-generator tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website). 
```
npm install -g express-generator
express --view=hbs --css=sass developers-brew
npm install
npm install -g gulp
SET DEBUG=express-locallibrary-tutorial:* & npm start
http://localhost:3000/
```
I decided to use Sass as the CSS preprocessor and Handlebars as the template engine. Don't ask me why, they just happened to caugh my eye first and I just stuck with them.

### Item number two - The task runner

By reading and watching quite a lot of tutorials on Gulp I managed to introduce a couple of tasks like:
- concatenating and minifying scripts and styles,
- cleaning up static files and building new ones,
- watching over changes in the files.

### Item number three - The version control

It was long overdue but I finally caught up with the version control using git. It's not so scary anymore but I still do not fully understand all those 'forks' and 'branches'.

## Some commands just in case I will forget them

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

