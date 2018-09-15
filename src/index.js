/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) { 
    let  count = 0;
    for(let i=0; i < preferences.length; i++) {   
        let size=0;
        let j=i;
        while(size!==3) {
            if(j+1 === preferences[j]) break;
            j = preferences[j]-1;
            size++;
        }
        if(i===j) {
            count++;
        }
    }
    return parseInt(count/3);
};