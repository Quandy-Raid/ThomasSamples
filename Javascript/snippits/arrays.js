//Arrays can store multiple things - starts counting at at '0'

//var names = ['Tom', 'Dick', 'Harry', 'Styles', 'Blob'];

//names[0]; //spits back 'Tom'

//names[3]; //spits back 'Styles'


//var names = ["Tom", "Susan", "Ben", "Johnny", "Franklin"];

//console.log(names[0])



//Arrays - starts counting at at '0'

//var names = ['Tom', 'Dick', 'Harry', 'Styles', 'Blob'];

//names[0]; //spits back 'Tom'

//names[3]; //spits back 'Styles'


//var names = ["Tom", "Susan", "Ben", "Johnny", "Franklin"];

//console.log(names[0])
//console.log(names[4])



//Indexing an array
//var pets = ['Chubs', 'Lily', 'Doggo'];

//pets[2] = 'JP';

//['Chubs', 'Lily', 'JP'];




//Array Length tells us how many are in the array
//var pets = ['Chubs', 'Lily', 'JP'];
//pets.length gives '3'

//pets.length = 4; adds an extra empty space for a 4th



//To target the last member of an array use:
//var pets = ['Chubs', 'Lily', 'JP'];
//var lastPet = pets[pets.length - 1];  the math is there are 3 units, 3 - 1 = 2 which is the placeholder for 'JP'
//JP




//toString converts an array to a string of comma separated values. Doesn't change the array 
//var pets = ['Chubs', 'Lily', 'JP'];
//pets.toString();
//would spit out: "Moxxi, Pickle, Hootchie"



//join() joins all array elements into a string, but allows you to specify the separator:
//var pets =['Chubs', 'Lily', 'JP']
//pets.join(" * "); joins list with Chubs * Lily * JP
//pets.join(" - "); joins list with Chubs - Lily - JP
//pets.join(" _ "); joins list with Chubs _ Lily _ JP





//concat() is used to join arrays
//var pets = ['Chubs', 'Lily', 'JP'];
//var people = ['Ken', 'Mom', 'Tom'];

//var family = pets.concat(people);




//indexOf() performs a search for us - for an item - and it will return it's location
//var fruits = ['apple', "banana", 'orange', 'apple', 'mango']
//var apple = fruite.indexOf("apple");
//spits back '2'
//fruits.indexOf('Tangerine')
//spits back '-1' which means it couldn't be found

//fruits.indexOf('Apple'); gives 0
//fruits.indexOf('Apple', 1); gives 3 - it starts the count at position 1/0 and adds 2 positions (1/2 Banana) which give us place 2/3

//var fruits = ['apple', "banana", 'orange', 'apple', 'mango', 'apple']
//console.log(fruits.indexOf('Apple')) gives us '0'
//console.log(fruits.indexOf('Apple', 1)) gives us '3'
//console.log(fruits.indexOf("Apple", 4)) gives us -1





//push() adds a new element to the end of the array
//var fruits = ['apple', "banana", 'orange'];
//fruits.push('pear')
//console.log(fruits) - gives us ['apple', "banana", 'orange', 'pear']





//pop() removes the last element from an array, or pops it
//var fruits = ['apple', "banana", 'orange'];
//fruits.pop(); //orange gets popped from the array
//var veggie = fruits.pop(); assigns popped element orange to variable veggie
//now fruits = ['apple', 'banana'] and veggie = ['orange']






//shift() removes the first element 
//var fruits = ['apple', "banana", 'orange'];
//fruits.shift(); apple gets shifted from the array
//var veggie = fruits.shift(); assigns shifted element apple to variable veggie
//now fruits = ['banana', 'orange'] and veggie = ['apple']






//unshift() adds a new element to the beginning of an array
//var fruits = ['apple', "banana"];
//var veggies = ['orange']
//fruits.unshift(orange); //orange gets unshifted to the beginning array
//now fruits = ['orange','apple', 'banana']





//slice() returns the elements in a new array
//var fruits = ['orange','apple', 'banana', 'pear', 'tomato']
//fruits.slice(2,4) begins at banana, ends at tomato so only removes banana and pear
//now, var fruits = ['orange','apple', 'tomato']
//so slice doesn't include the penultimate item, not the item listed as the end
//so slice(2,3) only targets banana





//var newFruit = fruits.slice(2,3)
//console.log(newFruit) spits back banana




//var newFruit = fruits.slice()
//console.log(newFruit) copies whole array






//Iterating over an Array modifies an entire array - gives everything a buff or weakens all
//var numbers = [1, 2, 3, 4, 5]

//for(var i =0; < numbers.length; i++) {
//    numbers[i] = numbers[i]*2;
//}
//numbers are now [2, 4, 6, 8, 10]
//console.log(number) will spit out 2, 4, 6, 8, 10







//using forEach() method, runs a function once for each element in order

//var pets = ['Moxxi', 'Pickle', 'Hootchie'];

//pets.forEach(function(element) {
//    console.log(element);
//});







var numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(element){
    console.log(element+1);
})







//var numbers = [1, 2, 3, 4, 5];

//numbers.forEach(function(element){
//    document.write("<h1>"+element+1+"</h1>");
//})














//var farts = ['the gurgler', 'S-D', 'the streak', 'lost gamble']

//farts.forEach(function(farts) {
//    document.write("<h1>" + farts + " is an expression of gas between the gluteus cheeks.</h1>");
//})







//map is another way to iterate - runs a function for every array element

var numbers = [4, 9, 16, 25];

//var squareRoots = numbers.map(Math.sqrt); //math.sqrt is a built in java function!

//document.write(squareRoots)







//filter creates an array that pass a test (provided as a function) doesn't affect original array

var words = [' spray', ' limit', ' elite', ' exuberant', " destruction", " present"];

//var longWords = words.filter(function(thisword){
//    return thisword.length > 6; //  .length is a built in javascript function
//});

//document.write(longWords)
//console.log(longWords)







//reverse() reverses the order of the array

var pets = ['Moxxi', 'Pickle', 'Hootchie'];
//pets.reverse();
//words.reverse()







//sort() based on UTF Unicode sorts an array alphabetically or numerically (based on first digit) - ascending or descending
//document.write(pets.sort())
//document.write(numbers.sort()) //sorts numbers badsed on first digit, so 10 becomes 1 then 0, is put in front of 2.



//instead use
//numbers.sort(function(a, b){return a-b}); //this sorts based on subtracting the numbers and seeing which is highest



var fruit=['APPLE', 'Apple Cider', 'applesauce', "apple pie", 'green apples'];

var test1 = fruit.filter(function(data) {
    return data === 'apple';   // the "===" makes it too specific to call anything back
})

console.log(test1);
