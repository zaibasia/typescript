/* Changing guest list: you just heard that one of the guest can't make the dinner, so you need  
send out a new set of inviation you'll have to think of someone  else to invite.

start with your program excerices 14. add a print statment at the of program starting the name of  the
 guest who can't make it.

 modify your list, replacing the name of guest who make it with the name of the new person yoy are inviting
*/ 

let guestlist: Array<string> = [
    "zia sir",
    "jahanzaib sir",
    "kamran sir",
];

//   step 1 print the name of person who can't make it.

 let guesthowcantmakeit: string = "kamran sir"
 console.log(`${guesthowcantmakeit} can't make it to dinner`)

// step 2. replace the name of guest who cant make it.
 let Newguest: string = "Abid shirwani"
 let indexofguesthowcantMakeIt: number = guestlist.indexOf('guesthowcantmakeit')
 console.log(indexofguesthowcantMakeIt)
 if (indexofguesthowcantMakeIt !== -1)
  {
     guestlist[indexofguesthowcantMakeIt] = Newguest
 }
 console.log(guestlist[2])
//  step 3.print a second set of invitation messages.
console.log("set of invitation messages:")
guestlist.forEach((guest:string) =>{
    console.log(`Dear ${guest},you are invited to diner.`)
})