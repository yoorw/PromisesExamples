// Examples of Promise function
// https://codeburst.io/a-simple-guide-to-es6-promises-d71bacd2e13a

// //Example 1
// const myPromise = new Promise((resolve, reject) => {
//     if (Math.random() * 100 < 90) {
//         console.log('resolving the promise.....');
//         resolve('Hello, Promise!! WuTang!');
//     }
//     reject(new Error('In 10% of the cases - I failed'));
// });

// // Two Functions 
// const onResolved = (resolvedValue) => console.log(resolvedValue);
// const onRejected = (error) => console.log(error);

// myPromise.then(onResolved, onRejected);

// // Same as above, written concisely
// myPromise.then((resolvedValue) => {
//     console.log(resolvedValue);
// }, (error) => {
//     console.log(error);
// });

// Example 2
const delay = (ms) => new Promise(
    (resolve) => {
        // console.log('Entered Pre Promise!!');
        setTimeout(resolve, ms);
        // console.log('Entered Post Promise!!');
    }
);

// delay(5000).then(() => console.log('Resolved after 5 seconds'));
// // delay(5000);
// console.log('Check to see out[put');
delay(2000)
    .then(() => {
        console.log('Resolved after 2 seconds');
        return delay(1500);
    })
    .then(() => {
        console.log('Resolved after 1.5 seconds');
        return delay(3000);
    })
    .then(() => {
        console.log('Resolved after 3 seconds');
        throw new Error();
    }).catch(() => {
        console.log('Caught an error');
    }).then(() => {
        console.log('Done');
    }); 

    