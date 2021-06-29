// Rest Parameter
function add1(x1, x2) {
    return x1 + x2;
}

function add2(x1, x2, x3) {
    return x1 + x2 + x3;
}

// ... 이렇게 사용자가 던지는 파라미터의 개수가 몇인지 모를 때!

function add(...nums) {

    var sum = 0;

    for (var n of nums) {
        sum += n;
    }

    return sum;
}

console.log(add(1, 2, 2, 2, 2, 3, ));
console.log("adadad");