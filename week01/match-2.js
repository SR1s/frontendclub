function match(string) {
    let foundA = false;
    for (let char of string) {
        if (char == 'a') {
            foundA = true;
        } else if (foundA && char == 'b') {
            return true;
        } else {
            foundA = false;
        }
    }
    return false;
}

console.log(
    "I acbm groot match ab ? " + match("I acbm groot ab")
);