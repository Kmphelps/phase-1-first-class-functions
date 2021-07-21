function receivesAFunction(cbf) {
    return cbf();
}
receivesAFunction(function () {return 1 + 2;})


function returnsANamedFunction(named) {
    return function named() {
        return (1 + 2);
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        return (1 + 2);
    }
}