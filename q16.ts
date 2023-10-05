/* More gueste: you just found a bigger dinner table, so now more space is available
 , think of three more guests to invite to dinner.

 .start with your program from Exercise 15. Add a print statment to the end of
 your program a bigger dinner table.

.Add one new guest to the beginning of your array.

 .Add one new guest to the middle of your array. use append()
  to add one new guestto the end of your list.
 print a new set of invitation messages, one for each person in your list*/




let guestList: Array<string> =[
     "Zia sir",
     "Jahanzaib sir",
     "Kamran sir",
] 
// step 1 informaing people  that  you found a bignner dinner table.
for (let guest of guestList) {
    console.log(`Hello, ${guest}, we found a bignner dinner table `)
}
// step 2 add the new guest to the beginnig of array.
let newGuestAtbeginnibg: string = " Aliya"
guestList.unshift(newGuestAtbeginnibg)

console.log(guestList)

// step 3 Add one guest to middle of Array
let newguestInmiddle: string = "albert"
let middleIndex: Number = Math.floor(guestList.length/2)
guestList.splice(2, 0,newGuestAtbeginnibg)
console.log(newguestInmiddle)



