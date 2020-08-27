const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  //instead of passing in and running a callback function, return a promise
  //promise takes in a callback with two parameters
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

// createPost({ title: "Post Three", body: "This is post three" })
//   .then(getPosts) //once it resolves, then it will call getPosts
//   .catch((err) => console.log(err)); //if there is an error and it rejects, otherwise you will have uncaught promise error

//Async / Await
// async function init() {
//   //has to be labeled async if want to use await inside of it
//   await createPost({ title: "Post Three", body: "This is post three" });
//   getPosts();
// }

// init();

//Async / Await / Fetch
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users"); //this returns a promise
  const data = await res.json();
  console.log(data);
}

fetchUsers();

// //Pomise.all
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Goodbye")
// );

// //need 2 .then when use fetch bc first need to format it (usually to json), and next will give you the data
// const promise4 = fetch(
//   "https://jsonplaceholder.typicode.com/users"
// ).then((res) => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );
