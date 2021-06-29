// Arrow Function 

//함수 선언식
function add() {

}

// 함수 표현식 
var add = function add(x1, x2) {

    // var sum = x1 + x2;
    return x1 + x2;
};

// 화살표 함수 -실무에서 자주 사용

// 1. function keyword delete
// var arrowAdd = (x1, x2) => {
//     return x1 + x2
// };

var arrowAdd = (x1, x2) => x1 + x2;


var arrowAdd2 = (x1, x2) => {
    var sum = x1 + x2;
    return sum;
}

console.log(arrowAdd(3, 4));

function say(msg) {

}

var say = (msg) => {};

function myFunction() {

}

var myFunction = () => {};