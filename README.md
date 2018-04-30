# Developer's Brew

## Introduction

My first try at big boy's web development. The website in this repository will contain all the skills I acquired thoughout my short career as a developer. 
It will grow gradually and I hope that every visitor will be impressed by the tasteful design and cutting-edge technology behind it.

## Some code snippets in case I will forget them

Let's track my progress of what I did on my local machine to get started. This can become usefull later on when I will attempt to improve my workflow 
```
npm install -g express-generator

express --view=hbs --css=sass developers-brew

npm install

npm install -g gulp
```
To run the server I used this snippet from [express-generator tutorial] (https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website):
```
SET DEBUG=express-locallibrary-tutorial:* & npm start
http://localhost:3000/
```

Step-by-step guide on how to add, commit and push to github (hey, don't laugh. I'm new at this):
```
git config --global user.name "<Your Name>"
git config --global user.email "<youremail@example.com>"
git init
git status
```
```
git add <FILENAME>
```
or
```
git add .
```
```
git commit -m "<your commit message>"
git remote add <REMOTENAME> <URL>
git pull <REMOTENAME> <BRANCH>
git push <REMOTENAME> <BRANCH>
```