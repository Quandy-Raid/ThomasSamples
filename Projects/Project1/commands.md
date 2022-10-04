tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/Bootcamp$ cd /html
-bash: cd: /html: No such file or directory
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/Bootcamp$ cd html
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/Bootcamp/html$ cdproject1
cdproject1: command not found
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/Bootcamp/html$ cd project1
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/Bootcamp/html/project1$ mkdir soups
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/Bootcamp/html/project1$ cd soups
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/Bootcamp/html/project1/soups$ touch chickennoodle.html
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/Bootcamp/html/project1/soups$ touch bakedpotato.css
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/Bootcamp/html/project1/soups$ mkdir js
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/Bootcamp/html/project1/soups$ cd js
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/Bootcamp/html/project1/soups/js$ cd ..
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/Bootcamp/html/project1/soups$ touch creamytomato.js
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/Bootcamp/html/project1/soups$ mv creamytomato.js ./js/
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/Bootcamp/html/project1/soups$ touch readme.txt
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/Bootcamp/html/project1/soups$ del readme.txt
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/Bootcamp/html/project1/soups$ rm readme.txt
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/Bootcamp/html/project1/soups$ mv creamytomato.js broccolicheddar.js
mv: cannot stat 'creamytomato.js': No such file or directory
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/Bootcamp/html/project1/soups$ cd js
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/Bootcamp/html/project1/soups/js$ mv creamytomato.js broccolicheddar.js
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/Bootcamp/html/project1/soups/js$ 
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop$ bootcamp
bootcamp: command not found
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop$ cd bootcamp
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/bootcamp$ mkdir drinks 
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/bootcamp$ mkdir smoothies ./drinks
mkdir: cannot create directory ‘./drinks’: File exists
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/bootcamp$ mkdir drinks/smoothies
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/bootcamp$ mkdir drinks/frozendrinks drinks/icedspecialtydrinks
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/bootcamp$ mv drinks/smoothies drinks/powersmoothies
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/bootcamp$ touch powersmoothies/peachandblueberry.txt powersmoothies/greenpassion.txt powersmoothies/superfruit.txt
touch: cannot touch 'powersmoothies/peachandblueberry.txt': No such file or directory
touch: cannot touch 'powersmoothies/greenpassion.txt': No such file or directory
touch: cannot touch 'powersmoothies/superfruit.txt': No such file or directory
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/bootcamp$ powersmoothies
powersmoothies: command not found
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/bootcamp$ touch peachandberry.txt greenpassion.txt superfruit.txt
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/bootcamp$ mv peachandberry.txt drinks/powersmoothies
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/bootcamp$ mv greenpassion.txt drinks/powersmoothies
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/bootcamp$ mv superfruit.txt drinks/powersmoothies
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/bootcamp$ touch watermelonstrawberrylemonade.html caramel.html mocha.html
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/bootcamp$ mv watermelonstrawberrylemonade.html/frozendrinks
mv: missing destination file operand after 'watermelonstrawberrylemonade.html/frozendrinks'
Try 'mv --help' for more information.
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/bootcamp$ watermelonstrawberrylemonade.html drinks/frozendrinks
watermelonstrawberrylemonade.html: command not found
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/bootcamp$ watermelonstrawberrylemonade.html drinks/frozendrinks
watermelonstrawberrylemonade.html: command not found
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/bootcamp$ mv watermelonstrawberrylemonade.html drinks/frozendrinks
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/bootcamp$ mv caramel.html drinks/frozendrinks
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/bootcamp$ mv mocha.html drinks/frozendrinks
tom@Super-Toaster:/mnt/c/Users/Tom/Desktop/bootcamp$ 