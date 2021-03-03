function breadthFirstSearch(startingNode, targetVal) {
    const visited = new Set;
    const q = [startingNode];

    while(q.length) {
        let currNode = q.shift();
        if (visited.has(currNode)) continue;
        if (currNode.val === targetVal) return currNode;
        visited.add(currNode);
        q.push(...currNode.neighbors)
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};