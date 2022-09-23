export const sumOfSquares = (x, y) => x*x + y*y;
export const maxOfThree = (x, y, z) => x > y && x > z ? x : (y > x && y > z ? y : z)//hmm
export const isLeapYear = (x) => (x % 4 == 0 && x % 100 != 0) || x % 400 == 0 ? true : false//modulo funnies