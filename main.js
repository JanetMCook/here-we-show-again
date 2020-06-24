const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

const numbersArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20
];

//kata1//
let kata1Heading = document.createElement('h2');
kata1Heading.append('Kata1')
document.body.append(kata1Heading)
let kata1 = []
for (let index = 1; index <= 20; index++) {
    console.log(index)
    kata1.push(index)
}
let kata1Answer = document.createElement('div');
kata1Answer.append(kata1)
document.body.append(kata1Answer)

//kata2//
let kata2Heading = document.createElement('h2');
kata2Heading.append('Kata2')
document.body.append(kata2Heading)
let kata2 = []
for (let index = 2; index < 21; index += 2) {
    console.log(index)
    kata2.push(index)
}
let kata2Answer = document.createElement('div');
kata2Answer.append(kata2)
document.body.append(kata2Answer)

//kata3//
let kata3Heading = document.createElement('h2');
kata3Heading.append('Kata3')
document.body.append(kata3Heading)
let kata3 = []
for (let index = 1; index < 20; index += 2) {
    console.log(index)
    kata3.push(index)
}
let kata3Answer = document.createElement('div')
kata3Answer.append(kata3)
document.body.append(kata3Answer)

// kata4//
let kata4Heading = document.createElement('h2');
kata4Heading.append('Kata4')
document.body.append(kata4Heading)
let kata4 = []
for (let index = 5; index <= 100; index += 5) {
    console.log(index)
    kata4.push(index)
}
let kata4Answer = document.createElement('div')
kata4Answer.append(kata4)
document.body.append(kata4Answer)

// kata5//
let kata5Heading = document.createElement('h2');
kata5Heading.append('Kata5')
document.body.append(kata5Heading)
let kata5 = []
for (let index = 1; index <= 10; index += 1) {
    console.log(index * index)
    kata5.push(index * index)
}
let kata5Answer = document.createElement('div')
kata5Answer.append(kata5)
document.body.append(kata5Answer)

// kata6//
let kata6Heading = document.createElement('h2');
kata6Heading.append('Kata6')
document.body.append(kata6Heading)
let kata6 = []
for (let index = 20; index >= 1; index -= 1) {
    console.log(index)
    kata6.push(index)
}
let kata6Answer = document.createElement('div')
kata6Answer.append(kata6)
document.body.append(kata6Answer)

// kata7//
let kata7Heading = document.createElement('h2');
kata7Heading.append('Kata7')
document.body.append(kata7Heading)
let kata7 = []
for (let index = 20; index >= 1; index -= 2) {
    console.log(index)
    kata7.push(index)
}
let kata7Answer = document.createElement('div')
kata7Answer.append(kata7)
document.body.append(kata7Answer)

// kata8//
let kata8Heading = document.createElement('h2');
kata8Heading.append('Kata8')
document.body.append(kata8Heading)
let kata8 = []
for (let index = 19; index >= 0; index -= 2) {
    console.log(index)
    kata8.push(index)
}
let kata8Answer = document.createElement('div')
kata8Answer.append(kata8)
document.body.append(kata8Answer)

// kata9//
let kata9Heading = document.createElement('h2');
kata9Heading.append('Kata9')
document.body.append(kata9Heading)
let kata9 = []
for (let index = 100; index >= 5; index -= 5) {
    console.log(index)
    kata9.push(index)
}
let kata9Answer = document.createElement('div')
kata9Answer.append(kata9)
document.body.append(kata9Answer)

// kata10//
let kata10Heading = document.createElement('h2');
kata10Heading.append('Kata10')
document.body.append(kata10Heading)
let kata10 = []
for (let index = 10; index >= 1; index -= 1) {
    console.log(index * index)
    kata10.push(index * index)
}
let kata10Answer = document.createElement('div')
kata10Answer.append(kata10)
document.body.append(kata10Answer)

// kata11//
let kata11Heading = document.createElement('h2');
kata11Heading.append('Kata11')
document.body.append(kata11Heading)
let kata11 = []
for (let index = 0; index < sampleArray.length; index++) {
    console.log(sampleArray[index])
    kata11.push(sampleArray[index])
}
let kata11Answer = document.createElement('div')
kata11Answer.append(kata11)
document.body.append(kata11Answer)

// kata12//
let kata12Heading = document.createElement('h2');
kata12Heading.append('Kata12')
document.body.append(kata12Heading)
let kata12 = []
for (let index = 0; index < sampleArray.length; index++) {
    if (sampleArray[index] % 2 === 0) {
        kata12.push(sampleArray[index])
        console.log(sampleArray[index])
    }
}

let kata12Answer = document.createElement('div')
kata12Answer.append(kata12)
document.body.append(kata12Answer)

// kata13//
let kata13Heading = document.createElement('h2');
kata13Heading.append('Kata13')
document.body.append(kata13Heading)
let kata13 = []
for (let index = 0; index < sampleArray.length; index++) {
    if (sampleArray[index] % 2 === 1) {
        kata13.push(sampleArray[index]),
            console.log(sampleArray[index])
    }
}

let kata13Answer = document.createElement('div')
kata13Answer.append(kata13)
document.body.append(kata13Answer)

// kata14//
let kata14Heading = document.createElement('h2');
kata14Heading.append('Kata14')
document.body.append(kata14Heading)
let kata14 = []

let result = sampleArray.map(index => index ** 2);
console.log(result);
kata14.push(result)

let kata14Answer = document.createElement('div')
kata14Answer.append(kata14)
document.body.append(kata14Answer)

// kata15//
let kata15Heading = document.createElement('h2');
kata15Heading.append('Kata15')
document.body.append(kata15Heading)
let kata15 = []

let sum = numbersArray.reduce(function (a, b) {
    return a + b;
}, 0);
console.log(sum);
kata15.push(sum)

let kata15Answer = document.createElement('div')
kata15Answer.append(kata15)
document.body.append(kata15Answer)

// kata16//
let kata16Heading = document.createElement('h2');
kata16Heading.append('Kata16')
document.body.append(kata16Heading)
let kata16 = []

let sumElements = sampleArray.reduce(function (a, b) {
    return a + b;
}, 0);
console.log(sumElements);
kata16.push(sumElements)

let kata16Answer = document.createElement('div')
kata16Answer.append(kata16)
document.body.append(kata16Answer)

// kata17//
let kata17Heading = document.createElement('h2');
kata17Heading.append('Kata17')
document.body.append(kata17Heading)
let kata17 = []

let arrMin = Math.min(...sampleArray); {
    console.log(arrMin)
    kata17.push(arrMin)
}

let kata17Answer = document.createElement('div')
kata17Answer.append(kata17)
document.body.append(kata17Answer)

// kata18//
let kata18Heading = document.createElement('h2');
kata18Heading.append('Kata18')
document.body.append(kata18Heading)
let kata18 = []

let arrMax = Math.max(...sampleArray); {
    console.log(arrMax)
    kata18.push(arrMax)
}

let kata18Answer = document.createElement('div')
kata18Answer.append(kata18)
document.body.append(kata18Answer)
