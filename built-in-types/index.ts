// built in data type: number, string, boolean, void, undefine, ull

let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;

userId = 113200;
firstName = "Alamin";
lastName= " Hossain";
fullName = firstName.concat(lastName);
isActivated = true;

console.log(`I am ${fullName}, my userId is: ${userId}, is my id active? ans: ${isActivated}`)

function message(): void{
    console.log("Hello! I am learning TypeScript")
}

message()