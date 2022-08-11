const sumAll = function(num1, num2) {
   const args = [num1,num2];
   console.log(args)
   for(let i =0; i<args.length; i++){
    if (args[i] < 0){
        console.log(args[i] + 'Less than 0')
        return 'ERROR'
    }else if (typeof args[i] !== 'number'){
        console.log(typeof args[i])
        return 'ERROR'
    }
   }
   args.sort(function(a, b){return a - b});
   console.log(args);
   return ((args[0]+args[1])/2)*args[1];
};

// Do not edit below this line
module.exports = sumAll;
