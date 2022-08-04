function myCallback(a,b){
    return a + b;
}

function useFunction(param) {
    console.log(param(1,2))
}


useFunction(myCallback)