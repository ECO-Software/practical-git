#!/bin/sh
git push -u origin master
ssh root@192.168.1.250 bash deployment.sh