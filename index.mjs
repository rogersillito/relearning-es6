import header from "./header.mjs";
import {x,z as myZ} from "./some_mod.mjs";
import * as someMod from "./some_mod.mjs";
// use default exports
import myfunc from "./default_func_mod.mjs";
import MyClass from "./default_class_mod.mjs";

header('referencing imports');
myfunc(4);
x(3);
console.log(someMod.y);
console.log(myZ);
const myc = new MyClass();
myc.m(5);
console.log(myc.n);


header('ES6 Temporal Dead Zone (let bindings)');
let p1 = 1;
if (true)
{
    try {
        console.log(p1); // p1 is currently in Temporal Dead Zone because of declaration within block below!
    } catch (error) {
        console.log("ERROR = " + error);
    }
    let p1;
    console.log(p1); // p1 now undefined - OK
}


header('destructuring');
function destructureArgs(a,{b=1,c=2} = {})
{
    console.log('destructureArgs');
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
    return [a,b,c];
}
destructureArgs(9,{b: 7});
const [o1,o2,o3] = destructureArgs(5);
console.log(`o1 = ${o1}`);
console.log(`o2 = ${o2}`);
console.log(`o3 = ${o3}`);


header('rest and spread');
/*
  Rest operator: collects the remaining items of an iterable into an Array and is used for rest parameters and destructuring.
  Spread operator: turns the items of an iterable into arguments of a function call or into elements of an Array.
*/
function sumAll(num1, ...args) { // a named param (num1), and all remaining params in 'args' array
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum + num1;
}
console.log(sumAll(1, 2, 3, 4)); // 10

const nums = [2,2938,3838,38,7];
console.log(Math.max(...nums)); // spread: expand array to args

const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];
console.log([...arr1, ...arr2, ...arr3]); // spread: concat alternative

header('for-of + entries() + destructuring');
for (const [index, elem] of nums.entries()) {
  console.log(index+': '+elem);
}
