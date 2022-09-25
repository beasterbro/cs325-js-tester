export const sumOfSquares = (x, y) => x*x + y*y;
export const maxOfThree = (x, y, z) => x > y && x > z ? x : (y > x && y > z ? y : z)
export const isLeapYear = (x) => (x % 4 == 0 && x % 100 != 0) || x % 400 == 0 
export const allEvens = (array) =>  array.filter( val => val % 2 == 0)
export const listSquares = (array) =>  array.map( val => val * val)
export const listSum = (array) =>  array.reduce( (prevVal, currVal) => prevVal + currVal, 0);
export const listSquaresSum = (array) =>  array.reduce( (prevVal, currVal) => prevVal + currVal * currVal, 0);