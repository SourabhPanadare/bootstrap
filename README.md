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

# HTML5 Important Points

  ## <details> Tag behaves similar to bootstrap accordion(Hide And Show Element)

    <body>
      <details>
        <summary>What is HTML?</summary>
        <p>HTML is a markup language for describing the structure of web pages.</p>
      </details>
    </body>

  ## <base> Sets up a common url link

      <head>
         <base href="/angularshoppingcart/">
      </head>

      <body>
        <p>Learn <a href="/products">Products</a>.</p>
      </body>

      O/p:- http://sourabhportfolio.in/angularshoppingcart/products

  ## <basefont> Specifies the base font i.e. default font-color, font-size, or font-family for all the text in an HTML document.

      <head>
        <basefont color="red" size="5" face="arial, sans-serif">
      </head>

  ## <datalist> Used to provide the quick choices for an input field like an "autocomplete" feature.

    <body>
      <form action="" method="post">
        <input type="text" list="browsers" name="favorite_browser">

        <datalist id="browsers">                /*---------------Select Dropdown with autocomplete------*/
          <option value="Firefox">
          <option value="Chrome">    
          <option value="Internet Explorer">
          <option value="Opera">
          <option value="Safari">
        </datalist>

        <input type="submit" value="Submit">
      </form>
    </body>

  ## <fieldset> Used to group logically related controls and labels within a web form. 

     <form action="" method="post">
        <fieldset>                            /*---------Creates rectangular box around the form-------*/

            <legend>Gender</legend>           /*---------Title For Rectangular Box---------------------*/

            <input type="radio" name="gender" value="male" id="male">
            <label for="male">Male</label>
            <input type="radio" name="gender" value="female" id="female">
            <label for="female">Female</label>

        </fieldset>
     </form>

  ## <dl> Definition List (List With Items And Its SubItems)

     <body>
      <dl>
          <dt>term1</dt>                             term1
            <dd>– definition1</dd>                      – definition1
            <dd>– definition2</dd>                      – definition2 
                                          => 
          <dt>term2</dt>                             term2              
            <dd>– definition1</dd>                      – definition1
            <dd>– definition2</dd>                      – definition2
      </dl>
     </body>