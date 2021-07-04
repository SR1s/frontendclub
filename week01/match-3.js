function match(string) {
    let foundA = false;
    let foundB = false;
    let foundC = false;
    let foundD = false;
    let foundE = false;

    for (let char of string) {
        if (char == 'a') foundA = true;
        else if (foundA && char == 'b') foundB = true;
        else if (foundB && char == 'c') foundC = true;
        else if (foundC && char == 'd') foundD = true;
        else if (foundD && char == 'e') foundE = true;
        else if (foundE && char == 'f') return true;
        else {
            foundA = false;
            foundB = false;
            foundC = false;
            foundD = false;
            foundE = false;
        }
    }
    return false;
}

function test(string) {
    console.log(string + " match abcdef ? " + match(string));
}

test("abcdef")
test("abcdeeeeeef")