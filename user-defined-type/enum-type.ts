// enum -> Enum type is a special type that allows us to define a set of named constants, which can be either numeric or string values.

// enum types : numeric, string, heterogenous

// numeric enum
enum requestType{
    getData=1,
    saveData=5,
    deleteData
}

// console.log(requestType)
// console.log(requestType.saveData)
// console.log(requestType["deleteData"])


// string enum
enum requestType2{
    getData = "Get data",
    saveData = "Save data",
    deleteData = "Delete data"
}

// console.log(requestType2)
// console.log(requestType2.deleteData)
// console.log(requestType2["getData"])

// heterogenous enum
enum requestType3{
    getData = "Get data",
    saveData = "Save data",
    deleteData = "Delete data",
    id = 113200
}

console.log(requestType3)
console.log(requestType3.deleteData)
console.log(requestType3["id"])