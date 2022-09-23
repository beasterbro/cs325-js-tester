export const subArray = (array,indexes) => {
    var result = []
    indexes.forEach(val => {
        result.push(array.at(val))
    });
    return result;
}
export const getRepeats = (array) => {
    var result = []
    var tempArray = []
    tempArray.push(array.at(0))//gives a double virst value
    array.forEach(val => {
        if(tempArray.includes(val) && !result.includes(val)){
            result.push(val)
        }
        else{
         tempArray.push(val)
        }
    });
    return result;
}
export const over21 = (array) => array
export const makeHtmlList = (array) => array