#!/usr/bin/env bash
yarn add -D vuepress
nohup yarn docs:build &
#停止60s等待构建完成
t1=`date -d "$date1" +%s`
t2=`date -d "$date2" +%s`
i=$(($ti2 - $ti1 ))
while [[ "$i" -ne "60"  ]]
do
    ti2=`date +%s`
	  i=$(($ti2 - $ti1 ))
done
#重命名
mv ./docs/.vuepress/dist ./docs/.vuepress/blog
