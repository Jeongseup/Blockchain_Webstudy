// Spread Operator
// 배열, 문자열같은 형태의 데이터를 요소 하나 하나 모두 분리해서 사요할 수 있게해주는 문법

var arr1 = [4, 5, 6];
var arr2 = [1, 2, 3];

var arr3 = [...arr2, ...arr1];
var arr4 = arr2.concat(arr1);


console.log("spread values", ...arr2);
console.log("spread & associate", arr3);
console.log("concatenate", arr4);

var cd = "CD";
var alphabet = ["A", "B", ...cd];
console.log(alphabet);