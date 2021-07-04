function match(string) {
    for (let char of string) {
        if (char == 'a') {
            return true;
        }
    }
    return false
}

console.log("I am groot match a ? " + match('I am groot'))