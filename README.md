# Git Commands

  git config --global user.name "Sam Smith"
  git config --global user.email sam@example.com
  
  git init
  git clone /path/to/repository(on github)
  git remote add origin <server>
  git remote -v

  git status
  git branch -a
  git fetch origin
  git checkout -b <branchname>
  git checkout <branchname>

  git branch -d <branchname>(Delete the feature branch) 

  git add *
  git add <filename>
  git commit -a
  git commit -m "Commit message"
  git pull
  git push origin master
  git push origin <branchname>
  git push --all origin

  git push origin :<branchname>(Delete a branch on your remote repository:)

  git diff
  git diff --base <filename>
  git diff <sourcebranch> <targetbranch>

