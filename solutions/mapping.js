export const subArray = (array,indexes) => indexes.map( ind => array.at(ind))

//returns true if it is not the last(or the  only) index in the array storing its value 
export const getRepeats = (array) => array.filter( (val, ind) =>
     (ind < array.lastIndexOf(val) && ind == array.indexOf(val)) )

//takes in a  array of objects with fields and returns who is over 21
export const over21 = (array) => array.filter(person => person.age >= 21)

//Converts a given aray into an HTML list
export const makeHtmlList = (array) => {
  return array == "" ? "" : "<ul><li>" + array.join('</li><li>') + "</li></ul>" 
}