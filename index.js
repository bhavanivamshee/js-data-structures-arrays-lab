// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
    drivers.push(name)
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function destructivelyRemoveFirstDriver(){
    drivers.shift()
}

function destructivelyRemoveLastDriver(){
    drivers.pop()
}

function appendDriver(name){
    const append_drivers = [...drivers,name];
    return append_drivers
}

function prependDriver(name){
    const prepend_drivers = [name, ...drivers];
    return prepend_drivers
}

function removeLastDriver(){
    const new_array = drivers.slice(0, drivers.length-1);
    return new_array;
}

function removeFirstDriver(){
    const new_array = drivers.slice(1);
    return new_array
}