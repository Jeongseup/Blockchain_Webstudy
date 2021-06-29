function getAgeGroup(userList, keyAge) {
    let userAgeGroup = {};

    for (var user of userList) {
        // console.log(user.age);

        var ageGroup = user[keyAge].toString().charAt(0) + "0"; // 20
        // console.log(userAgeGroup[ageGroup]);

        if (userAgeGroup[ageGroup]) {
            userAgeGroup[ageGroup]++;
        } else {
            userAgeGroup[ageGroup] = 1;
        }
    }

    return userAgeGroup;
}


/**
 * 함수 설명 
 * @param {*} userList 
 * @param {*} keyAge 
 * @returns 
 */

function getAgeGroup2(userList, keyAge) {


    let myMap = new Map();

    for (let user of userList) {
        var ageFirtStr = user[keyAge].toString()[0];
        var ageGroup = ageFirtStr.padEnd(2, "0");

        // 2가 올텐데.. 
        if (myMap.has(ageGroup)) {
            myMap.set(ageGroup, myMap.get(ageGroup) + 1);
        } else {
            myMap.set(ageGroup, 1);
        }

    }

    return myMap;
}