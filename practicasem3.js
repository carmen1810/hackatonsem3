///EJERCICIO 1///
function getUniqueArray(array){
    var uniqueArray = [];
    if (array.length > 0) {
       uniqueArray[0] = array[0];
    }
    for(var i = 0; i < array.length; i++){
        var isExist = false;
        for(var j = 0; j < uniqueArray.length; j++){
            if(array[i] == uniqueArray[j]){
                isExist = true;
                break;
            }
            else{
                isExist = false;
            }
        }
        if(isExist == false){
            uniqueArray[uniqueArray.length] = array[i];
        }
    }
    return uniqueArray;
}
let a = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log(getUniqueArray(a));

///EJERCICIO 2///
function aclean(arr) {
    let obj = {};
  
    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split("").sort().join("");
      obj[sorted] = arr[i];
    }
  
    return Object.values(obj);
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
console.log( aclean(arr) );


//EJERCICIO 3///

///let map = new Map();

//map.set("name", "John");
//7console.log(map)
///let keys = map.keys();
///console.log(keys)
///keys.push("more");///

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());///Podemos convertirlo en una matriz usando Array.from:///

keys.push("more");
console.log(keys);
////ejercicio 4////

let i = 3;
while (i) { alert( i-- ); /// es 3 porque bucle tiene una sola sentencia//
//ejercicio 5////        
           
