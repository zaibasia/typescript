/*they think of something you could store in a typescript object.write
a program that creates objects cantining these items 
*/
const bouquet:{} =
{

     name: "spring delights",
     price: 250,
     descripetion: "Beauitful arrangment of spring flower",
}
// define an array of object.
let bouquets: Array<typeof bouquet>= []

// pushing multipule object.

bouquets.push(bouquet);
bouquets.push({name:"summer bliss",
price: 350,
description: "beauitful arrangment of summer flowers"
})
let bouquet3 =
{
  name: "Red hot",
  price:350,
  description: "beauitful arrangment of red roses"  
}

bouquets.push(bouquet3);
console.log(bouquet);

bouquets.push({name: "freshness", price:250, description: "A beauitful  arrengment of white and yellow roeses"});
// console.log(bouquets);

// function display bouquets

function displayBouquets(bouquets: Array<typeof bouquet>)
{
    for(let i = 0; i < bouquets.length; i++)
    {
        console.log(bouquets[i].name);
    }
}