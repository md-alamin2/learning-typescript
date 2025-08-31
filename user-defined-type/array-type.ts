// Array type -> By using square brackets ("[]") we can define array type
let userNames : string[];

userNames = ["jon", "smith", "tom" ]
// userNames = [123, "smith", "tom" ] // Error

// we can also use generic array type
let userIds : Array<number>;

userIds = [123, 456, 789]
// userIds = [123, "456", 789] // Error

console.log(userNames[0], userIds[2])

// We can also define array with union type
let mixedArray : (string | number)[];
mixedArray = [123, "jon", 456, "smith"]
// mixedArray = [123, true, "jon", 456, "smith"] // Error

console.log(mixedArray[1], mixedArray[2])