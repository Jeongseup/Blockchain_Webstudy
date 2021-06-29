// Object Destructring

function getPerson() {

    return {
        firstName: "John",
        lastName: "Doe",
        age: 37,
        email: "example@gmail.com",
        city: "city"
    }
}

var person = getPerson();

// 데이터 내에서 key값에 바로 접근해서 필요한 value만을 가져오는 방법

// 진짜 많이 쓰임
var {
    firstName,
    lastName
} = getPerson();

console.log(fistName);
console.log(lastName);