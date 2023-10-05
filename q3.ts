// Name case:store a person's Name in a variable and then print that person's name is lowercase,
//Uppercase,titlecase

let personName: string = "Hello shahzaib";

//step 1 show in lower case:


let lowercase: string = personName.toLowerCase();

console.log(lowercase); 

//step 2 show name in UpperCase

let Uppercase: string = personName.toUpperCase();

console.log(Uppercase);

//step 3 show name in titlecase


let words: string[] = personName.split (" ")

let titlecaseName: string =  ""

for (let i = 0 ; i < words . length; i++){

    titlecaseName +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+" "
};
console.log (titlecaseName)




//step 3 show name in titlecase

let world: string 