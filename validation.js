function validateName(name) {
    // Trim the input to remove leading and trailing spaces
    name = name.trim();

    // Define the regular expression to match the name format
    const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;

    // Check if the trimmed name matches the regex
    if (nameRegex.test(name)) {
        return true; // Name is valid
    } else {
        return false; // Name is invalid
    }
}

// Examples
console.log(validateName("skc                   d")); // Output: true
console.log(validateName("Sai     Vijay")); // Output: false
console.log(validateName("")); // Output: false
console.log(validateName("Sai ")); // Output: false
console.log(validateName(" Vijay")); // Output: false
