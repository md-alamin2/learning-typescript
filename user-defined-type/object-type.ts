// object type -> The object type represents non-primitive types, i.e., anything that is not number, string, boolean, symbol, null, or undefined.

let users: object[];
users=[];

let user1 : {name: string, id: number};
user1 = {name: "jon", id: 113200};
users.push(user1);

let user2 : {name: string, id: number};
user2 = {name: "smith", id: 113201};
users.push(user2);

// id is optional
let user3 : {name: string, id?: number};
user3 = {name: "tom"};
users.push(user3);

console.log(users)


for (const obj of users) {
    console.log(obj)
}