/*seeing the world: think of at least five places in the world you'd like to visit.
.store the location in a array. make sure the array is not in alphabetical order.
.print your array in alphabetical order without modifying the actual list.
. show that your array is still in its original order by printing it.
.print your array in reserse alphabetical order without changing the order of the
 original list.
reserse alphabetical order without changing the order of the original list.
 .reverse the order of your list .print the array to show that its order has changed.
 .reverse the order of your list .print the array to show that its order has changed.
 sort to change your array so its stored in alphabetical order. print the array to
  show that its orderhas been changed.
  . sort to change your array so its store in reverse alphabetical order print the to show that
   its order has changed*/ 

// 1st step: create and array to store travel  destiantion.
let travelDestiantion: string[] = ["Turkish", "makka and madina", "paris", "canada","UK"]
// 2rd step:print your array in its original order.
console.log("original order:")
console.log(travelDestiantion)

// 3rd step: print your array in alphabetical order without modifying the actual list.
console.log("\n  alphabetical order without modifying the actual list")
console.log([...travelDestiantion].sort())

// step 4:.order show that your array is still in its original  by printing it.

console.log("\n showing array is still in its original")
console.log(travelDestiantion)

// step 5: print your array in reserse alphabetical order without changing the order of the
//  original list.

console.log("\n Reserse alphabetical order without modifing actual list.")
console.log([...travelDestiantion].sort().reverse())

// step 6:. show that your array is still in its original order by printing it again .

console.log("\nshowing  array is still in its original order")
console.log(travelDestiantion)

//step 7:reverse the order of your list .print the array to show that its order has changed

console.log("\nReverse order")
travelDestiantion.reverse()
console.log(travelDestiantion)

// step 8:reverse the order of your list .print the array to show that its order has
//  changed original order.
console.log("\nback to original order")
travelDestiantion.reverse()
console.log(travelDestiantion)

//step 9:  sort to change your array so its stored in alphabetical order. print the array 
// to  show that its orderhas been changed.

console.log("/nchange  to alphabetical order")
travelDestiantion.sort()
console.log(travelDestiantion)

// step 10: sort to change your array so its store in reverse alphabetical order print
//  the to show that its order has changed*
console.log("/nChange to  reverse alphabetical order ")
travelDestiantion.sort().reverse()
console.log(travelDestiantion)


