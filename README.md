# Type 'string[]' is not assignable to type 'string' in TypeScript
This example demonstrates a common TypeScript error that occurs when passing an array of strings to a function that expects a single string.

The error message 'Type 'string[]' is not assignable to type 'string' indicates that the function `greeter` is expecting a single string argument, but it received an array of strings.  This is a type mismatch. 

The solution involves modifying either the function signature or how the array is handled.