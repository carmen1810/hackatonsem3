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
