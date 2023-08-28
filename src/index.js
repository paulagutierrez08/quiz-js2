// /**
//  * This quiz is to test your knowledge of if-statements.
//  *
//  * 1. Create a repository by cloning: https://github.com/jorgecarmona/npm-project-template
//  * 2. Follow the README for instructions
//  * 3. When you finish the quiz, create a PR on you repository
//  * 4. Submit to your lead
//  */

/**
 * Question 1
 * Declare a const named initialValue and set its value to 10.
 */

const initialValue = 10;
console.log("[Question #1]: ", initialValue);

/**
 * Question 2
 * Declare a let variable named result and set its initial value to 0.
 */

let result = 0;
console.log("[Question #2]: ", result);

/**
 * Question 3 hola
 * Using an if statement, check if initialValue is greater than 5. If true, set result to initialValue times 2.
 */

if (initialValue > 5);
console.log("[Question #3]: ", initialValue * 2);

/**
 * Question 4
 * Declare an array named numbers containing the first five prime numbers.
 */

const primeNumbers = [2, 3, 5, 7, 11];
console.log("[Question #4]: ", primeNumbers);

/**
 * Question 5
 * If the fifth value in the numbers array is greater than initialValue, add 5 to result.
 */

if (primeNumbers[4] > initialValue);
console.log("[Question #5]: ", initialValue + 5);

/**
 * Question 6
 * Declare an object named settings with two properties: theme set to "light" and notifications set to true.
 */

const settings = {
  theme: "light",
  notifications: "true"
};
console.log("[Question #6]: ", settings);

/**
 * Question 7
 * Using an if statement, if notifications property is true, add 3 to result.
 */

if (settings.notifications === "true");
console.log("[Question #7]: ", result + 3);

/**
 * Question: 8
 * Change the theme property of settings to "dark".
 */

settings.theme = "dark";
console.log("[Question #8]: ", settings.theme);

/**
 * Question: 9
 * If theme property is "dark" and result is less than 30, push the number 13 to the numbers array.
 */

if (settings.theme === "dark" && result < 3);
console.log("[Question #9]: ", (primeNumbers.includes = 13));

/**
 * Question: 10
 * Declare a let variable named index and set its value to 4.
 */

let index = 4;
console.log("[Question #10]: ", index);

/**
 * Question: 11
 * If the value at the index position in the numbers array is equal to 7, multiply result by 2.
 */

if ((index === primeNumbers[index]) === 7);
console.log("[Question #11]: ", result * 2);

/**
 * Question 12
 * Change the value of index to the first position in the numbers array that has a value of 13.
 */

primeNumbers.reverse();
console.log("[Question #12]: ", primeNumbers);

/**
 * Question 13
 * If the index is odd, set notifications property to false.
 */

if (index % 2 === 1 ? (settings.notifications = false) : "false");
console.log("[Question #13]: ", settings);

/**
 * Question 14
 * If the notifications property is false, subtract initialValue from result.
 */

if (settings.notifications === "false");
console.log("[Question #14]: ", (result = result - initialValue));

/**
 * Question 15
 * If initialValue minus result is less than 10, add an array containing three zeros to the end of the numbers array.
 */

initialValue - result < 10 ? primeNumbers.push(0, 0, 0) : "false";
console.log("[Question # 15]: ", primeNumbers);

/**
 * Question 16
 * If the numbers array contains more than 7 elements, update the theme property of settings to "blue".
 */

primeNumbers.length > 7 ? (settings.theme = "blue") : "flase";
console.log("[Question # 16]: ", settings);

/**
 * Question 17
 * Declare a const named multiplier with a value of 5.
 */

const multiplier = 5;
console.log("[Question # 17]: ", multiplier);

/**
 * Question 18
 * If the multiplier is a multiple of initialValue, assign the product of multiplier and result to result.
 */

multiplier % initialValue == 0 ? (result = multiplier * result) : "false";
console.log("[Question # 18]: ", result);

/**
 * Question 19
 * Create a new object userData with properties name set to "Alex", and score set to the value of result.
 */

const userData = {
  name: "Alex",
  score: result
};
console.log("[Question # 19]: ", userData);

/**
 * Question 20
 * If score is greater than 50, add a new property to userData named membership and set its value to "gold".
 */

if (userData.score > 50);
console.log("[Question # 20]: ", (userData.membership = "gold"));

/**
 * Question 21
 * If userData name property starts with the letter "A", add 10 to the score property of userData.
 */

userData.name.startsWith("A") ? (userData.score += 10) : "false";
console.log("[Question # 21]: ", userData);

/**
 * Question 22
 * Push the score property of userData to the numbers array.
 */

primeNumbers.push = userData.score;
console.log("[Question # 22]: ", primeNumbers);

/**
 * Question 23
 * If the last element of the numbers array is odd, add a hasBonus property to userData and set its value to true.
 */

primeNumbers.length - (0 % 2) === 1 ? (userData.hasBonus = true) : "false";
console.log("[Question # 23]: ", userData);

/**
 * Question 24
 * If settings.theme is not "red", add 15 to the score property of userData.
 */

settings.theme != "red" ? (userData.score += 15) : "false";
console.log("[Question # 24]: ", userData);

/**
 * Question 25
 * If userData has a hasBonus property and its value is true, set result to the sum of result and the score property of userData.
 */

"hasBonus" in userData && userData.hasBonus === true
  ? (result = result + userData.score)
  : "false";
console.log("[Question # 25]: ", result);
