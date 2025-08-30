// built in data type: number, string, boolean, void, undefine, ull
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 113200;
firstName = "Alamin";
lastName = " Hossain";
fullName = firstName.concat(lastName);
isActivated = true;
console.log("I am ".concat(fullName, ", my userId is: ").concat(userId, ", is my id active? ans: ").concat(isActivated));
function message() {
    console.log("Hello! I am learning TypeScript");
}
message();
