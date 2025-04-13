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
function addTwo(num: number): number {
  return num + 1;
}
addTwo(5);

// this is automatic context/inference switching of type script, if aman has
// string item will be string, and if it has number item's type will be number
const aman = [1, 2, 3];
// const aman = ["aman", "raj", "aman1"];
aman.map((item) => {
  console.log(item);
});

// void return type
function consoleError(errMsg);
