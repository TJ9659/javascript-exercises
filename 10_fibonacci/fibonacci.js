const fibonacci = function (fibNumStr) {

    const fibNum = Number(fibNumStr);

    if(fibNum < 0){
        return "OOPS";
    }

    if (fibNum === 0) {
        return 0;
    }
    
    if (fibNum === 1 || fibNum === 2) {
        return 1;
    }


    return fibonacci(fibNum - 2) + fibonacci(fibNum - 1);

};


// Do not edit below this line
module.exports = fibonacci;
