// 用于关联本地仓库和远程仓库： 
// git remote add origin https://github.com/zhuliudan001/project_02.git
  // remote: 表示远程的意思
  // add: 添加
  // origin：就是后面 git 仓库地址的别名
  // 远程仓库的全路径：https://github.com/zhuliudan001/project_02.git


// 把默认的 mastr 分支名称改为 main：git branch -M 


// 表示第一次本地仓库朝远程仓库提交的时候 必须这么写：
//  git push -u origin main
  // push: 表示推送
  // -u: 表示第一次推送的时候，必须添加 -u 参数
  // origin: 就是表示那要把工程往哪退 这个名字表示的地址就是要推送的地址
  // mian: 表示上面那个地址所有的某一个点 （房间，分支）

// 后面 修改完代码之后 再次提交时：只需要走：git push 即可
