#!/bin/sh
git push -u origin master
ssh root@192.168.1.250 cd ../var/www/html/course-git
git pull origin master 
sudo systemctl restart apache2