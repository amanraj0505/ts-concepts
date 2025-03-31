// string
let greetings: string = "Hello Aman";

// greetings = 10 will give error

// number
let myNum: number = 10;

// myNum.toUpperCase() will give error

//boolean
let isLoggedIn: boolean = false;

// dont use any
let hero;

function getHero() {
  return "Thor";
}
hero = getHero();

// ts in Functions
function addTwo(num: number) {
  return num + 1;
}
addTwo(5);

console.log(greetings);
