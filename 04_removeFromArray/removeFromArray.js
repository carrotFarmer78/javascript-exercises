const removeFromArray = function() {
    const arr = arguments[0]
    for(let l = 1; l <= arguments.length; l++){
        let num = arguments[l]
        for(let i = 0; i <= arr.length; i++){
        if(arr[i] === num){
            arr.splice(i,1)
        }
    }
    }
    
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
