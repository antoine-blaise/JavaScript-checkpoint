// This section contains solutions to the problems provided in project 2 under the JavaScript checkpoint.

//PART 1: STRING MANIPULATION FUNCTIONS
// Problem 1: Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

//Problem 2: Count characters in a String
function countCharacters(str) {
    const charCount = new Map();
    
    for (let char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    return charCount;
}

//Problem 3: Capitalize the first letter of each word
function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

//PART 2: ARRAY MANIPULATION FUNCTIONS
//Problem 1: Find the maximum and minimum in an array
function findMaxAndMin(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return { min, max };
}

//Problem 2: Sum of all elements in an array
function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

//Problem 3: Filter operation on an array
const ages = [21, 22, 25, 16, 14, 24, 20, 19, 17, 18];
function getAge(ages) {
    return ages.filter(age => age >= 18);
}

//PART 3: MATH FUNCTIONS
//Problem 1: Calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

//Problem 2: Check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

//Problem 3: Generate Fibonacci sequence up to n terms
function fibonacci(n) {
    if (n === 0) return [];
    if (n === 1) return [0];
    
    const seq = [0, 1];
    let count = 2;
    
    while (count < n) {
        seq.push(seq[count-1] + seq[count-2]);
        count++;
    }
    
    return seq;
}