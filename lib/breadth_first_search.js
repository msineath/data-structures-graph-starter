function breadthFirstSearch(startingNode, targetVal) {
    const visited = new Set;
    const q = [startingNode];

    while(q.length) {
        let currNode = q.shift();
        // console.log(currNode)
        if (visited.has(currNode)) continue;
        if (currNode.val === targetVal) return currNode;
        visited.add(currNode);
        // if (currNode.neighbors)
        q.push(...currNode.neighbors)
        // console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^")
        // console.log(currNode.neighbors)
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};