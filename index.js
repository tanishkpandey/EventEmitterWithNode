// This makes EventEmitter into a class. 
// It has 2 functions to emit events and to respond to events.
const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-pizza", (size, topping) => {
    console.log(`Order received! Baking a ${size} Pizza with ${topping}`);
});

// this is used to catch the response fo the event.
emitter.on("order-pizza",(size)=> {
    if (size === "large"){
        console.log('Serving is complementory');
    }
});

// .emit is used to create event in the programme
emitter.emit("order-pizza", "large", "peri-pari");