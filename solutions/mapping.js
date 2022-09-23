export const subArray = (array,indexes) => {
    let result = []
    indexes.forEach(val => {
        result.push(array.at(val))
    });
    return result;
}
export const getRepeats = (array) => {
    let tempResult = []
    let tempArray = []
    let result = []
    //tempArray.push(array.at(0))//gives a double virst value
    array.forEach(val => {
        
        if(tempArray.includes(val) && !tempResult.includes(val)){
            tempResult.push(val)
        }
        else{
            tempArray.push(val)
        }
    });
    array.forEach(val =>{
        if(tempResult.includes(val) && !result.includes(val)){
            result.push(val)
        }
    });
    return result;
}
//takes in a  array of objects with fields and returns who is over 21
export const over21 = (array) => array.filter(person => person.age >= 21)
export const makeHtmlList = (array) => {
    var resultList = document.createElement("li");
    for(let i of array){
    let li = document.createElement("li");
    li.innerHTML = i;
    resultList.appendChild(li);
    }
    return resultList;
}