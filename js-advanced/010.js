// Array Destructuring

function getScores() {
    return [70, 21, 100, 76, 11, 12, 3, 4, 1];

}

var scores = getScores();
console.log(scores);


var [x, y] = getScores();
// 이런 형태로 애초에 할당할 때 값들에 대한 의미가 함축된 변수명으로 지정할 때 유용함

//좋은 예시
// var coodinates = getScore();
// coodinates[0]
// coodinates[1] 보다는 아래 처럼
var [longititue, latitude] = getScores();



var [x, y, ...args] = getScores();
console.log(args);

function getPerson() {
    return [
        "John",
        "Doe",
        ["R", "G", "B"]
    ];
}