// Showing outputs scopes of global and local variables

// Variables should always be declared with either let or const
const myGlobal = 10;

function fun1() {
     oopsGlobal = 5
}

function fun2() {
     let output = "";
     if (typeof myGlobal != "undefined") {
          output += "myGlobal: " + myGlobal;
     }
     if (typeof oopsGlobal != "undefined") {
          output += " oopsGlobal: " + oopsGlobal;
     }
     console.log(output);
}
