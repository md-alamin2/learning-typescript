// union type -> By using union symbol ("|") use can define many input type
var userId;
userId = 12345;
userId = "12345";
// userId = true; // Error
function displayUserId(id) {
    console.log(id);
}
displayUserId(123456);
displayUserId("123456");
