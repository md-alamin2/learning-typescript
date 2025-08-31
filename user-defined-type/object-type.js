// object type -> The object type represents non-primitive types, i.e., anything that is not number, string, boolean, symbol, null, or undefined.
var users;
users = [];
var user1;
user1 = { name: "jon", id: 113200 };
users.push(user1);
var user2;
user2 = { name: "smith", id: 113201 };
users.push(user2);
// id is optional
var user3;
user3 = { name: "tom" };
users.push(user3);
console.log(users);
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var obj = users_1[_i];
    console.log(obj);
}
