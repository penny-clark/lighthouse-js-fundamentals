//console.log
const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);

}
sayHelloToConsole('John');

//return
const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);
/*
//say hello function
const sayHello = function(name) {
  console.log("Hello, " + name);
}

sayHello("Zaphod");*/