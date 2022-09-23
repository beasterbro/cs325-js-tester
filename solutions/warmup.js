export const sumOfSquares = (x, y) => x*x + y*y;
export const maxOfThree = (x, y, z) => x > y && x > z ? x : (y > x && y > z ? y : z)
export const isLeapYear = (x) => (x % 4 == 0 && x % 100 != 0) || x % 400 == 0 ? true : false//modulo funnies
export const allEvens = (array) =>  array.filter( val => val % 2 == 0)
export const listSquares = (array) =>  array.flatMap( val => val * val)
export const listSum = (array) =>  {
    let sum = 0;
        array.forEach(val => {
         sum += val
    }); 
    return sum;
}
export const listSquaresSum = (array) =>  {
    let sum = 0;
        array.forEach(val => {
         sum += val*val
    });
     return sum;
}