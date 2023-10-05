
 /*your own array : think of your favorite mode of transportation such as a motorcycle or car ,
 make a list that stores a serverl explain. use your list to print a serviesof statments
 about this items such has, "i would like own honda motorcycle."
*/


let favoritetransportation: Array <[transport: string, brand: string]> = []


favoritetransportation.push(["Motorcycle","HONDA"]) 
favoritetransportation.push(["car", "Bmw"])
favoritetransportation.push(["bicycel", "sohrab"])

 console.log(favoritetransportation);
//  I would like a own a Honda motorcycle.

// using for each loop to print a series of statments


favoritetransportation.forEach(([transpor,brand])=>
{console.log(`I would like to own a ${brand} $ {transport}. `) }

)
    


