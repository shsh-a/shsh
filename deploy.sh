#! /bin/bash

cd dist
git init 
git add .
git commit -m "added built files"
git remote add origin https://github.com/shsh-a/site.git
git push -f origin master
expect "Username for 'https://github.com': "
send "shsh-a"
