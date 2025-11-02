// Immediately Invoked Function Expressions (IIFE)


// why we use?

// runs as soon as it is defined
// to  Avoiding polluting the global namespace by creating a new scope.






(function chai(){  //named IIFE
    // named IIFE
    console.log(`DB CONNECTED`);
})();   // we have to end by semicolumn compulsory if we write two IIFE

( (name) => {   //Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('deep')