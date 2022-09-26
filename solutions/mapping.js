export const subArray = (array,indexes) => {
    let result = []
    indexes.forEach(ind => {
        result.push(array.at(ind))//find and add values at given indexes
    });
    return result;
}
export const getRepeats = (array) => {
    let tempResult = []//stores repeat values
    let tempArray = []//stores values we have seen while iterating
    let result = []//the tempResult after organizing the data to be in the requested format
    array.forEach(val => {
        
        if(tempArray.includes(val) && !tempResult.includes(val)){//if we have seen this value before and have not recorded it as repeat
            tempResult.push(val)
        }
        else{//else record that this value has been seen
            tempArray.push(val)
        }
    });
    array.forEach(val =>{//this is a second loop to make sure the data is in the order that it appeared in the original array
        if(tempResult.includes(val) && !result.includes(val)){
            result.push(val)
        }
    });
    return result;
}
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