//Object Literal Syntax Extension

var firstName = "John";
var lastName = "Doe";

var person = {
    firstName: firstName,
    lastName: lastName
};

console.log(person);

var type = "student";
var user = {
    [type]: "John Doe",
    score: 95
};


// 접근 방법
// score.student
// score["student"]
// score[type]

console.log(user);