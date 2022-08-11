const removeFromArray = function() {
let ansArray = Array.from(arguments[0]);
let targets = Array.from(arguments);
targets.shift();

targets.forEach(remove)

function remove(value){
    for (let i = 0; i < ansArray.length; i++){
        if(value === ansArray[i]){
            ansArray.splice(i,1);
        }
    }

}

return ansArray;

};

// Do not edit below this line
module.exports = removeFromArray;
