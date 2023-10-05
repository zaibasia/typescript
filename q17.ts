/* shrinking guest list: you just found out that your new dinner table won't arrive
  in time for the dinner, and you have space for only two guests.

 .start with your program from Exercise 16.Add a new line that prints a message 
 saying that you can invite only two people for dinner.

.Remove guests from your list one at a time until only two names remain in your
  list,print a message to that person letting them know you're sorry you can't 
   invite them to dinner.

 .print a message to each of the two people still on your list, letting them know 
 thet're still invited.

 Remove the last two names from your list, so you have an empty list .print your
 list to make sure you actuually have an empty list at the end of your program.*/

 let guestList: Array<string> = [
      'Aliya',
      'Zia sir',
      'Jahanzaib sir',
      'kamran sir',
      'albert',
 ]
//  Message About Only Two people
console.log(`I can invite only two people for dinner`)

//2rd step  Remove guest from  the list only untill only two name remain.
while(guestList.length > 2){
let RemoveGuest = guestList.pop()
console.log(`Sorry, ${RemoveGuest}, I can't invite to dinner`);
}

// 3rd step .print a message to each of the two people still on your list, letting them know 
// list to make sure you actuually have an empty list at the end of your program.

for (let guest of guestList) {
console.log(`Hello, $(guest), you are still to invited to dinner!`)
}
 
// step 4 Remove the last two names from your list, so you have an empty list .print your
// list to make sure you actuually have an empty list at the end of your program.
guestList.pop()
guestList.pop()
// print empty string
console.log(`guest list after dinner:` ,guestList)
