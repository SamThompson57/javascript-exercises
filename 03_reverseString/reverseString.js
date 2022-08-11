const reverseString = function(text) {
    //let textArray = text.split();
    let answer = ''; 
    for (let i = 1; i <= text.length; i++){
        answer += text.charAt(text.length - i);
    }
    return answer;

};

// Do not edit below this line
module.exports = reverseString;
