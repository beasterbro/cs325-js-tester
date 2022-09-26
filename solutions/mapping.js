export const subArray = (array,indexes) => indexes.map( ind => array.at(ind))//array.filter(val => indexes.includes(array.indexOf(val)))

//returns true if it is not the last(or the  only) index in the array storing its value 
export const getRepeats = (array) => array.filter( (val, ind, array) => (ind < array.findLastIndex( (ele) => ele == val ) && ind == array.indexOf(val)) )

//takes in a  array of objects with fields and returns who is over 21
export const over21 = (array) => array.filter(person => person.age >= 21)

export const makeHtmlList = (array) => {
    var resultList = document.createElement("ul");//creating outer unordered list
    for(let i of array){//loop for creating list items and adding them to the resultList HTML
    let li = document.createElement("li");
    li.innerHTML = i;
    resultList.appendChild(li);
    }
    return resultList.innerHTML == '' ? resultList.innerHTML : resultList.outerHTML//ternary for the case where the given list is blank
}