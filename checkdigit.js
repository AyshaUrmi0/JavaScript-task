function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }
    for (let i = 0; i < name.length; i++) {
        if (!isNaN(name[i]) && name[i] !== ' ') {
            return true;
        }
    }
    return false;
}

 console.log( checkDigitsInName("e mu 3")); 
console.log(checkDigitsInName(["Raj"]));
console.log(checkDigitsInName("Suman"));
console.log(checkDigitsInName(["Raj"]));

