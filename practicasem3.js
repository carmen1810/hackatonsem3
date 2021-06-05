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
///function ask(question, yes, no) {
///    if (confirm(question)) yes();
///    else no();
///  }
  
 /// ask(
 ///   "Do you agree?",
 ///   function() { console.log("You agreed."); },
 ///   function() { console.log("You canceled the execution."); }
 /// )

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => console.log("You agreed."),
    () => aconsole.log("You canceled the execution.")
  );
  //ejercicio 6///
           
function makeCounter() {
    let count = 0;
  
    function counter() {
      return count++;
    }
  
    counter.set = value => count = value;
  
    counter.decrease = () => count--;
  
    return counter;
  }
  let counter = makeCounter()
  console.log(counter())
 ///ejercicio 7////
           
           
           
 ///ejercicio 8///
 let list = {
    value: 1,
    next: {
    value: 2,
    next: {
    value: 3,
    next: {
    value: 4,
    next: null
    }
    }
    }
    };
    console.log(list)
           
           
  //con buble///

    function printList(list) {
        let a = list;
      
        while (a) {
          console.log(a.value);
          a = a.next;
        }
      
      }
      
      printList(list);
           
           
           
           
