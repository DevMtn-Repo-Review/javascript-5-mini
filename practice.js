////////// PROBLEM 1 //////////

/*
  Add a getUserName property on the user object below
  This property should be a function that returns the username on the object ( bencallis )
  
  You must use the this keyword
*/

let user = {
	username: "bencallis",
	email: "bencallis1@gmail.com",
    // Code here
};



////////// PROBLEM 2 //////////

/*
  Modify the getUsername function to return the username property of an object
  
  You must use the this keyword
*/


let user1 = {
	username: "iliketurtles",
	age: 13,
	email: "iliketurtles@gmail.com",
};

const getUsername = function () {
    // Code here
};

const username = getUsername.call(user1);



////////// PROBLEM 3 //////////

/*
  Create an otherUsername variable to call getOtherUsername with user2 to get its username property
  
  You must use the call method
*/

let user2 = {
	username: "BillyBob",
	age: 19,
	email: "billybob21@gmail.com",
};

function getOtherUsername() {
	return this.username;
};

// Code here



////////// PROBLEM 4 //////////

/*
  Using the user1 and user2 objects and the getOtherUsername function defined above,
  create two variables username1 and username2 that call getOtherUsername to get the respective user usernames
  
  You must use the call method
  username1 results in a value of "iliketurtles"
  username2 results in a value of "BillyBob"
*/

// Code here



////////// PROBLEM 5 //////////

/*
  Create a variable called result that uses the apply method to call add and return the value 11
  
  You must use the apply method
*/

const obj = {
	num: 5,
};

const nums = [1, 2, 3];

function add(a, b, c) {
	return this.num + a + b + c;
}

// Code here



////////// PROBLEM 6 //////////

/*
  Using the favRapper and getName function below,
  create a variable called name that uses the bind method to call getName and return the name from the favRapper object
  
  You must use the bind method
*/

const favRapper = {
    name: "Xzibit",
    birthYear: 1974,
};

const getName = function () {
	return this.name;
};

// Code here



////////// PROBLEM 7 //////////

/*
  Here we have a constructor function named Car. 
  Finish the code so that this constructor function will create an object using the given parameters.
  
  Make sure the property names match the parameter names
*/

function Car (color, make, year){
    // Code here
}



////////// PROBLEM 8 //////////

/*
  Add another property called moveCar to the CarMaker constructor function
  This function should increment the value of move by 10 every time it is called
  
  You must use the this keyword
*/

function CarMaker (make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
    this.move = 0;
    
    // Code here
};



////////// PROBLEM 9 //////////

/*
  Create a constructor function called Player
  Player should take in four parameters: name, age, team, and pointsScored
  The function should use these four parameters to return a new object 
  You should also create a method named addPoints inside of this constructor function
  This method should take in a number parameter
  This number parameter should be added to the player's pointsScored value and should then return that same updated pointsScored value
*/

// Code here



////////// PROBLEM 10 //////////

/*
  Here we have a constructor function named Restaurant that has a method inside the function
  Remove the existing method addStars and use it to create a prototype method for this constructor function
  
  Make sure to use the same naming convention for the prototype method
*/

function Restaurant(name, type, stars) {
    this.name = name;
	this.type = type;
    this.stars = stars;
    
    this.addStars = function (num) {
        this.stars += num;
        return this.stars;
    };
}

// Code here



////////// PROBLEM 11 //////////

/*
  Here we have a constructor function named Person
  This function takes in 5 parameters, the last being an array of strings representing the person's friends
  
  Create a prototype method named addFriend that will take in a string parameter (new friend)
  This function will add that new friend to the person's friends array

  Also, create a second prototype method named removeFriend that will take in a string parameter (person to unfriend)
  find that friend in the user's friends array (don't worry about capitalization) and remove it from the array
*/

function Person(name, age, hometown, email, friends) {
	this.name = name;
	this.age = age;
	this.hometown = hometown;
	this.email = email;
	this.friends = friends;
}

// Code here



////////// PROBLEM 12 //////////

/*
  Write a constructor function called User
  This function should take in 4 parameters: name, age, email, and savedPosts
  Name and email will be strings, age will be a number and savedPosts will be an array of objects
  These objects will each have 3 properties: id (a number), title (a string), and rating (a number between 1 and 5)
  These objects are the posts that the user will have saved to their account 

  Once the User constructor function is created, write a prototype method for the User function
  Name this method addSavedPost
  It should take in three parameters: id (a number), title (a string) and rating (a number)
  Use these parameters to create a new object and add it to the savedPosts array
  Make sure to name the properties the same as described previously (id, title, rating)
*/

// Code here



////////// PROBLEM 13 //////////

/*
  Using the User constructor function built as part of Problem 11, write a prototype method named removeSavedPost
  This function will take in a number parameter representing the post id
  Use this id to find and remove the matching object from the savedPosts array

*/

// Code here



////////// PROBLEM 14 //////////

/*
  Using the User constructor function built as part of Problem 11 & 12, write a prototype method named changePostRating
  This function will take in 2 number parameters: id (a number) and newRating (a number)
  Use this id to find the matching object in the savedPosts array and update its rating with the newRating parameter

*/

// Code here