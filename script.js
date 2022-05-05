"use strict";

const user = {
    id: 1,
    email: "test@test.com",
    firstName: "Peter",
    lastName: "Parker",
    isAdmin: true,
    hobby: {
        id: 2,
        name: "Some inner object"
    }
};
const user1 = {
    id: 3,
    email: "est.com",

};

function countChar(str) {
  return str.split("").reduce((a, b) => (a[b] = (a[b] || 0) + 1, a), {});
}


function isObject(x)
{
    return typeof x === "object" && x !== null;
}

function countObjectKeys(x) {
    let count = 0;
    for (const key in x) {
        count++;
    }
    return count;
}

function Copy(origin, target)
{
    // target.id = origin.id;
    // target.email = origin.email;
    // target.firstName = origin.firstName;
    // target.lastName = origin.lastName;
    // target.isAdmin = origin.isAdmin;
    //console.log('target', target);
    if (isObject(target) && isObject(origin)) {
        for (let key in origin) {
            target[ key ] = origin[ key ];
        }
        console.log('target', target);
        return target;
    }
}

function SameCheck(object1, object2)
{
    let propsObj1 = Object.getOwnPropertyNames(object1);
    let propsObj2 = Object.getOwnPropertyNames(object2);

    if (countObjectKeys(object1) === countObjectKeys(object2)) {
        if (object1.key === object2.key) {
            for (let i = 0; i < propsObj1.length; i++) {
                let value = propsObj1[ i ];
                if (object1[ value ] === object2[ value ]) {
                    return true;
                }
            }
        }
    }
}

console.log("user", user);
console.log("user1", user1);
SameCheck(user, user1);
Copy(user, user1);
console.log("user1 after Copy: ", user1);
SameCheck(user, user1);
console.log(countChar("aabbaccd"));