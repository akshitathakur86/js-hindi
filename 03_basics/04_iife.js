// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log("I am IIFE");
}());

( (name) => {
    console.log(`DB connected two ${name}`);
    
} )("Akshita")