function myCallback(a,b){
    return a + b;
}

function useFunction(param) {
    param(1,2);
}

console.log(useFunction(myCallback))