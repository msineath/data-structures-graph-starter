function numRegions(graph) {
    let ref = Array.from(Object.keys(graph));
    let counter = 0;
    while(ref.length) {
        let ref2 = Array.from(graph[ref[0]]);
        if(ref2.length === 0) {
            ref.shift();
            counter++;
            continue;
        }
        
        ref2.forEach(el => {
            let values = graph[el];
            values.forEach(val => ref2.push(val))
        })
        
        ref2.forEach(el => {
            ref.splice(ref.indexOf(el), 1);
            ref.shift();
            ref2.shift();
        })        
        counter++;
    }    
    return counter;
}





module.exports = {
    numRegions
};