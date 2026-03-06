# Questions and Answers

### 1. What is the difference between var, let, and const?<br>
Ans: **var** is the old way of declaring variables in JS.<br> It's function-scoped and allows to redeclare the same variables multiple times, which often leads to bugs.<br>
**let** is the modern replacement for variables that need to change. It's block-scoped and prevents redeclaration in the same scope.<br>
**const** is for values that's also block-scoped,must be initialized immediately and cannot be reassigned.


### 2. What is the spread operator (...)?<br>
Ans:In Js the spread operator (...) is like taking items out of a box and laying them on a table.<br>
It basically "spreads" elements out of their container.Example : <br>
```
let numbers = [1, 2, 3];
let moreNumbers = [...numbers, 4, 5]; 
// Result: [1, 2, 3, 4, 5] 
```


### 3. What is the difference between map(), filter(), and forEach()?<br>
Ans: **map()** loops through an array of each item and returns a new array of same length. <br>
**filter()** loops through an array, checks each item against a condition and returns a new array with the items that passed.<br>
**forEach()** just loops through an array of each item but doesn't give new array.


### 4. What is an arrow function?<br>
Ans: Arrow function is a modern way to write functions in JS. It's a part of ES6 which was a huge update in JS.<br> 
Instead of writing **function() {}**,we can write
**()=>{}**.<br>It's simple one-liners where we can skip the curly braces and return keyword.<br>
For Example :
```Using funcion()
let double = function(n){
    return n*2;
}
```
```Using arrow function
let double = (n) => n * 2;
```
<br>

### 5. What are template literals?
Ans: In JS, template literals are just strings that let us embed variables directly inside them using 
**${}**. We create them with backticks **(``)**. <br>
Example:
<br>
```
//Normal Way 
let name = "John";
let message = "Hello " + name + "!";

//Using template literals <br>
let name = "John";
let message = `Hello ${name}!`;
// Output : Hello John!
```




