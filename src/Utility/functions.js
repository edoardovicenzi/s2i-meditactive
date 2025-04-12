export function isStringLettersOrSpacesOnly(input) {
    if (typeof input === "object") {
        return false
    }

    //Search for other characters other than [a-zA-Z\s]
    const regex = new RegExp("[^a-zA-Z\s]+");
    //If there are then return false
    return !regex.test(input.toString().trim());
}

export function isValidEmail(input) {
    if (typeof input === "object") {
        return false
    }
    //Geek for Geeks pattern
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(input.toString());
}

export function isObjectEmpty(object) {
    if (Object.keys(object).length == 0) {
        return true
    }
    return false
}
