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
const user2 = {
    id: 1,
    email: "test@test.com",
    firstName: "Peter",
    lastName: "Parker",
    isAdmin: true,
    job: "admin",
    hobby: {
        id: 2,
        name: "Some inner object"
    }
};
const user3 = {
    id: 1,
    email: "test@test.com",
    firstName: "Peter2",
    lastName: "Parker",
    isAdmin: true,
    hobby: {
        id: 2,
        name: "Some inner object"
    }
};
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
        //console.log('target', target);
        return target;
    }
}

function SameCheck(origin, target)
{
    const keys = Object.keys(origin);
    const values = Object.values(origin);
    const keys1 = Object.keys(target);
    const values1 = Object.values(target);
    console.log("keys", keys);
    console.log("values", values);
    console.log("keys1", keys1);
    console.log("values1", values1);
    if (countObjectKeys(target) === countObjectKeys(origin)) {
        if (target.key == origin.key && values == values1) {
            console.log("samee");
            return true;
        }
    }
}

console.log(user, user1);
SameCheck(user, user1);
Copy(user, user1);
SameCheck(user, user2);
SameCheck(user, user3);
SameCheck(user, user1);
console.log(user, user1);