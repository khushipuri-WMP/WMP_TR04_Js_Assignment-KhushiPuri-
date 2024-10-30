function merge(obj1, obj2){
    const mergedobj = { ...obj1};
    for(let key in obj2){
        if(key in mergedobj){
            if(mergedobj[key] === obj2[key]){
                continue;
            }
            else{
                mergedobj[key] = [mergedobj[key], obj2[key]];
            }
        }
        else{
            mergedobj[key] = obj2[key];
        }
    }
    return mergedobj;
}
const obj1 = {name: 'khushi', age: 21, id: 1234};
const obj2 = {name: 'puri', id: 34, place: "Greater Noida"};

console.log("New merged Object = ", merge(obj1, obj2));