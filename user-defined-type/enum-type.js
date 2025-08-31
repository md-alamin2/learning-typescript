// enum -> Enum type is a special type that allows us to define a set of named constants, which can be either numeric or string values.
// enum types : numeric, string, heterogenous
// numeric enum
var requestType;
(function (requestType) {
    requestType[requestType["getData"] = 1] = "getData";
    requestType[requestType["saveData"] = 5] = "saveData";
    requestType[requestType["deleteData"] = 6] = "deleteData";
})(requestType || (requestType = {}));
// console.log(requestType)
// console.log(requestType.saveData)
// console.log(requestType["deleteData"])
// string enum
var requestType2;
(function (requestType2) {
    requestType2["getData"] = "Get data";
    requestType2["saveData"] = "Save data";
    requestType2["deleteData"] = "Delete data";
})(requestType2 || (requestType2 = {}));
// console.log(requestType2)
// console.log(requestType2.deleteData)
// console.log(requestType2["getData"])
// heterogenous enum
var requestType3;
(function (requestType3) {
    requestType3["getData"] = "Get data";
    requestType3["saveData"] = "Save data";
    requestType3["deleteData"] = "Delete data";
    requestType3[requestType3["id"] = 113200] = "id";
})(requestType3 || (requestType3 = {}));
console.log(requestType3);
console.log(requestType3.deleteData);
console.log(requestType3["id"]);
