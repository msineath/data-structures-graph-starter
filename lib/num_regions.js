function numRegions(graph) {
    //[a,b,c,d,e]
let ref = Array.from(Object.keys(graph));
let counter = 0;
    // for (let i = 0; i < ref.length; i++) {
    while(ref.length) {
        console.log(`iteration: ${counter}, Ref: ${ref}`)
        let arr = graph[ref[0]];
        arr.forEach(el => {
            ref.splice(ref.indexOf(el), 1);
            delete(graph[el]);
            ref.shift();
        })
        counter++;
    }
    // }
    return counter;
}





module.exports = {
    numRegions
};