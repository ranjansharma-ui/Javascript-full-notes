// Immediately Invoked Function Expression (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})(); // semicoln is mandatary when we create more than two IIFE function Implement

( function aurcode(){
    console.log(`DB CONNECted TWO`);
    
} )();

( (name) => {
    console.log(`DB CONNECted TWO ${name}`);
    
} )("Ranjan");