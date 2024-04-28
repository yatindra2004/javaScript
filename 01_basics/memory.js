// stack(premitive) and Heap(non Premitive)

// let myName = "yatindra";

// let anotherName = myName;
// anotherName = "priyanshu";

// console.log(anotherName);
// console.log(myName);

// stack memory provide the copy of the original value therefore it is not change in original value

let user = {
    email : "abc@gmail.com",
    upi : "user@ybl"
};

let userOne = user;
userOne.email = "xyz@gmial.com";

console.log(user.email);
console.log(userOne.email);

