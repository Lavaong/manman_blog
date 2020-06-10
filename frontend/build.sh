#!/usr/bin/env bash


yarn add -D vuepress
nohup yarn docs:build &
#停止60s等待构建完成
t1=`date +%s`
t2=`date +%s`
i=$(( $t2 - $t1 ))
while [[ "$i" -ne "90"  ]]
do
    t2=`date +%s`
	  i=$(( $t2 - $t1 ))
done
#重命名
mv ./docs/.vuepress/dist ./docs/.vuepress/blog
