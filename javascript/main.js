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
