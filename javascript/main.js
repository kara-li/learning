//var (globally scoped, can cause conflicts so don't use as much anymore), let, const
//primitive data types: String, Numbers, Boolean, null, undefined, Symbol
let z; //undefined

const name = "Kara";
const age = 20;
//console.log(typeof name);
//type of null is an object (bogus return value)

//Concatenation
console.log("My name is " + name + " and I am " + age);
//Template String
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

const s = "Hello World";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5));
console.log(s.split(""));
const t = "technology, computers, it, code";
console.log(t.split(", "));

//Arrays
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);
const fruits = ["apples", "oranges", "pears", 10, true];
console.log(fruits);
fruits[3] = "grapes";
console.log(fruits);
fruits.push("mangos"); //add to end
console.log(fruits);
fruits.unshift("strawberries"); //add to beginning
console.log(fruits);
fruits.pop(); //pop last one off
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf("oranges"));

//object literals
const person = {
  firstName: "Kara",
  lastName: "Li",
  age: 20,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};

console.log(person, person.lastName, person.hobbies[1]);

const {
  firstName,
  lastName,
  address: { city },
} = person;
console.log(firstName);
console.log(city);

person.email = "kara@gmail.com";
console.log(person);

//arrays of objects
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false,
  },
];

console.log(todos);
console.log(todos[2].text);

const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

// loops
//for
for (let i = 0; i < 10; i++) {
  console.log(`for loop number ${i}`);
}

//while
let i = 0;
while (i < 10) {
  console.log(`while loop number ${i}`);
  i++;
}

//array loops
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i]);
}

//for of
for (let todo of todos) {
  //todo can be named anything, todos is name of array
  console.log(todo.text);
}

//high order array methods - suggested way for array iteration
//forEach, map. filter
todos.forEach(function (todo) {
  console.log(todo.text);
});

const todoText = todos.map(function (todo) {
  //.map returns an array
  return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function (todo) {
  return todo.isCompleted === true;
});

console.log(todoCompleted);

const todoCompletedText = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoCompletedText);

//conditionals
const x = "10";
const y = 10;
if (x == 10 || y > 10) {
  //&& for and
  //will be true
  //double equals doesn't match data type, only value
  //triple equals also matches data types - mostly always use triple equals bc you normally want to match types
  console.log("x is 10");
} else if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
}

//ternary operator - used a lot to assign variable based on condition
const w = 10;
//? is like "then" (its the ternary operator); : is "else"
const color = w > 10 ? "red" : "blue";
console.log(color);

//switches
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
    break;
}

//functions
function addNums(num1, num2) {
  console.log(num1 + num2);
}
addNums(5, 4);

const addNumsWithDefaultValues = (num1 = 1, num2 = 1) => {
  //fat arrow
  console.log(num1 + num2);
  //usuallly return the value and if want to log do it outside
  //return num1 + num2
};
//if wanted to return smtg, or not multiline, don't need {}
//const someFunction = num1 => num1 + 5; //if put return, wouldnt' work, don't need paranthesees if only 1 parameter
addNumsWithDefaultValues();
addNumsWithDefaultValues(5, 5); //will override default values

todos.forEach((todo) => console.log(todo));

//constructor function should start w/ capital, pass in properties you wnat to be able to set
//objects pre-classes (which were inntroduced in es 2015)
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
//   // this.getBirthYear = function () {
//   //   return this.dob.getFullYear();
//   // };
//   // this.getFullName = function () {
//   //   return `${firstName} ${lastName}`;
//   // };
// }

// Person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// };

// Person.prototype.getFullName = function () {
//   return `${firstName} ${lastName}`;
// };

//with es6, classes added to javascript (same under the hood, just syntactic sugar)
//Class
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${firstName} ${lastName}`;
  }
}

//instantiate object
const person1 = new Person("Kara", "Li", "4-3-1900");
const person2 = new Person("John", "Doe", "5-4-1901");
console.log(person1); //will look like object literal but is prefixed w/ name of object (Person)
console.log(person2.dob);
console.log(person2.dob.getFullYear());
console.log(person2.getBirthYear());
console.log(person1.getFullName());

//the DOM
console.log(window);
//Single element selectors
const form = document.getElementById("my-form");
console.log(form);

console.log(document.querySelector(".container")); //works like jQuery for most part in terms of selecting single element
console.log(document.querySelector("h1")); //single element selector so will only select the first one

//Multiple element selectors
const items = document.querySelectorAll(".item"); //gives NodeList which is like array, can use array methods on
// console.log(document.getElementsByClassName("item")); //older, gives HTMLCollection, can't use array methods on
// console.log(document.getElementsByTagName("li"));

items.forEach((item) => console.log(item));

const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Brad";
ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

const btn = document.querySelector(".btn");
// btn.style.background = "red";
// btn.addEventListener("click", (e) => {
//   // btn.addEventListener("mouseover", (e) => {
//   // btn.addEventListener("mouseout", (e) => {
//   e.preventDefault();
//   console.log("click");
//   console.log(e.target);
//   console.log(e.target.className);
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   ul.lastElementChild.innerHTML = "<h1>Goodbye</h1>";
// });

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value == "" || emailInput.value == "") {
    //alert("Please enter fields"); //stops your code and doesn't look good so try to avoid using
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    // console.log("success");
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    userList.appendChild(li);

    //Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
