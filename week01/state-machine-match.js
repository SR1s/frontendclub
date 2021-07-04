function match(string) {
    let state = start;
    for (let char of string) {
        state = state(char)
    }
    return state == end;
}

function start(char) {
    if (char == 'a') {
        return foundA;
    } else {
        return start;
    }
}

function foundA(char) {
    if (char == 'b') {
        return foundB;
    } else {
        return start(char);
    }
}

function foundB(char) {
    if (char == 'c') {
        return foundC;
    } else {
        return start(char);
    }
}

function foundC(char) {
    if (char == 'd') {
        return foundD;
    } else {
        return start(char);
    }
}

function foundD(char) {
    if (char == 'e') {
        return foundE;
    } else {
        return start(char);
    }
}

function foundE(char) {
    if (char == 'f') {
        return end;
    } else {
        return start(char);
    }
}

function end(char) {
    return end;
}

function test(string) {
    console.log(string + " match abcdef ? " + match(string))
}

test("abcedf")
test("abcabcdef")