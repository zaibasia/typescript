// stripping name:store a person's name, include some whitespace character at the beginning and end of the name.
// make sure you use  characters combination,"\t" and "\n", at least once.print the name once, 
// once so the whilespace around the name of displayed.then print name after striping the white spaces.


let PersonName: string = "\t Asia Orangzaib \n";

console.log("Name with whitespace", PersonName)

let strippedName: string = PersonName.trim()

console.log("stripped Name:" , strippedName)
