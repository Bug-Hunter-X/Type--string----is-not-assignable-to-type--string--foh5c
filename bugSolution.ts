function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane Doe", "John Smith"];

// Solution 1: Iterate through the array and call the function for each element
user.forEach(name => console.log(greeter(name)));

// Solution 2: Modify the function to accept an array
function greeterArray(people: string[]): string {
    return "Hello, " + people.join(', ');
}
console.log(greeterArray(user));

// Solution 3: Use a different approach, perhaps template literal for array output
console.log(`Hello, ${user.join(', ')}`);