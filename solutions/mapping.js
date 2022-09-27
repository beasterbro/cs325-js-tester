export const subArray = (array,indexes) => indexes.map( ind => array.at(ind))

//returns true if it is not the last(or the  only) index in the array storing its value 
export const getRepeats = (array) => array.filter( (val, ind) =>
     (ind < array.lastIndexOf( val ) && ind == array.indexOf(val)) )

//takes in a  array of objects with fields and returns who is over 21
export const over21 = (array) => array.filter(person => person.age >= 21)

export const makeHtmlList = (array) => {
    var resultList = ""//resultList now a string instead of using createElement
    resultList = "<ul><li>" + array.join('</li><li>') + "</li></ul>" //using strings instead of createElement

    return resultList == "<ul><li></li></ul>" ? '' : resultList//ternary for the case where the given list is blank
}