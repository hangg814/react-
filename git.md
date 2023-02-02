# git
git可以理解为是一个工具，这个工具帮助我们管理代码，Git是目前世界上最先进的分布式版本控制系统，他是安装到电脑上的一个命令行工具

# 操作流程
1、在github或gitee中新建远程仓库
2、克隆或新建自己的项目
3、初始化本地仓库
4、新建修改代码
5、add到暂存区
6、commit到本地仓库
7、push到远程仓库

# 使用git
使用git的第一步就是新建一个git仓库，一个git仓库可以理解为是一个目录，每一个目录都可以当成仓库使用，每一个仓库中又有很多文件和目录

1、git init     初始化一个仓库
2、git add .    提交到暂存区
3、git commit -m '注释内容' 添加到本地仓库的分支中
4、git push origin master 提交本地仓库到远程仓库中



# git常用命令
git config --global user.name "Your Name"
git config --global user.email "email@example.com"

git init
git status  查看当前工作区是否有修改
git diff <file> 查看修改的内容

git add <file>  将修改的文件添加到暂存区
git commit -m '描述' 将暂存区的修改添加到当前分支

git log 查看提交记录
git log --pretty=oneline

git reset --hard HEAD^  退回到上一个版本
git reset --hard HEAD^^  退回到上上一个版本
git reset --hard commitId  退回到指定版本

git checkout -- <file>  放弃当前工作区的修改，仅限于没有被add的文件


