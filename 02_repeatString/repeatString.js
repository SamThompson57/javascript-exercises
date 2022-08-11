const repeatString = function(word, nRepeat) {
    let ans ='';
    if (nRepeat < 0){
        return 'ERROR'
    }

    for(let i = 0; i < nRepeat; i++){
        ans += word;
    }
    return ans;


};

// Do not edit below this line
module.exports = repeatString;
