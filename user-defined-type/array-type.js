// Array type -> By using square brackets ("[]") we can define array type
var userNames;
userNames = ["jon", "smith", "tom"];
// userNames = [123, "smith", "tom" ] // Error
// we can also use generic array type
var userIds;
userIds = [123, 456, 789];
// userIds = [123, "456", 789] // Error
console.log(userNames[0], userIds[2]);
// We can also define array with union type
var mixedArray;
mixedArray = [123, "jon", 456, "smith"];
// mixedArray = [123, true, "jon", 456, "smith"] // Error
console.log(mixedArray[1], mixedArray[2]);
