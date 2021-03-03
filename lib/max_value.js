function maxValue(node, visited=new Set(), maxVal = node.val) {
    if(!visited.has(node)) {
        if(node.val > maxVal) maxVal = node.val;
        visited.add(node);
        node.neighbors.forEach(neighbor => {
            maxVal =  maxValue(neighbor, visited, maxVal);
        })
    }
    return maxVal;
}

module.exports = {
    maxValue
};