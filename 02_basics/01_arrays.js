//array

const myArr = [0,1,2,3,4];
// console.log(myArr[0 ]);

const arr2 = new Array(1,2,3,4);

// console.log(arr2[2]);

//Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);

// myArr.shift();
// console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join()
// console.log(myArr)
// console.log(typeof newArr);


//slice , splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);

const myn2 = myArr.splice(1,3);
console.log("B",myArr)
console.log(myn2);