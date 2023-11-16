let loopCounter = 0;

function binarySearch(numbersArray, wantedNumber){
    let lastIndex = numbersArray.length - 1;
    let firstIndex = 0;
    while(firstIndex <= lastIndex ){
        loopCounter++;
        let midIndex = Math.floor((lastIndex + firstIndex) / 2);

        const midValue = numbersArray[midIndex];

        if(midValue == wantedNumber){
            return midIndex;
        }
        if(midValue > wantedNumber){
            lastIndex = midIndex - 1;
        }
        if(midValue < wantedNumber){
            firstIndex = midIndex + 1; 
        }
    }
    return null;
}

const testArray = [1, 2, 3, 4, 5];
const findNumber = 5;
const foundNumberIndex = binarySearch(testArray, findNumber);
console.log("attempts-number:");
console.log(loopCounter);
console.log("found-index:");
console.log(foundNumberIndex);
console.log("value-found:");
console.log(testArray[foundNumberIndex]);