export const subArray = (array,indexes) => {
    var result = []
    indexes.forEach(val => {
        result.push(array.at(val))
    });
    return result;
}
export const getRepeats = (array) => {
    var tempResult = []
    var tempArray = []
    var result = []
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
//takes in a 2d array of people and fields and returns who is over 21
export const over21 = (array) => array
export const makeHtmlList = (array) => array