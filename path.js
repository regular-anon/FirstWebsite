function print(message) {
    document.getElementById("output").innerText += message;
}
function println(message) {
    print(message + "\n");
}

var idCount = 1;

function createNode() {
    return { id: idCount++, links: [] };
}
function createLink(node1, node2, weight) {
    if (node1 == node2)
        return;
    for (var i = 0; i < node1.links.length; ++i) {
        if (node1.links[i].target == node2) {
            node1.links[i].weight = weight;
            return;
        }
    }
    node1.links.push({ target: node2, weight: weight });
}
function printLinks(node) {
    for (var i = 0; i < node.links.length; ++i) {
        println(node.id + " connected to " + node.links[i].target.id + " with weight " + node.links[i].weight);
    }
}


function sp(node, target, path) {
    println("Entered function");
    if (node == target) {
        path.nodes.push(node);
        return path;
    }
    println("Entered function 2");
    for (var i = 0; i < path.nodes.length; ++i) {
        if (path.nodes[i] == node) {
            path.nodes.push(node);
            path.totalDistance = -1;
            return path;
        }
    }
    println("Entered function 3");
    var pathList = [];
    for (var i = 0; i < node.links.length; ++i) {
        var pathCopy = { totalDistance: path.totalDistance + node.links[i].weight, nodes: path.nodes };
        pathList[i] = sp(node.links[i].target, target, pathCopy);
    }
    println("Entered function 4");
    if (pathList.length == 0) {
        pathList.totalDistance = -1;
    }
    println("Entered function 5");
    var index = 0;
    /*
    while(pathList[index].totalDistance == -1) 	   {
    	index ++;
    }
    println("Entered function 6");
    var shortestPath = pathList[index];
    for(index = index;index < pathList.length;++index) {
    if(pathList[index].totalDistance < shortestPath.totalDistance && pathList[index].totalDistance > -1) {
    	shortestPath = pathList[index];
    }
    }
    */
    for (index = 0; index < pathList.length; ++index) {
        if (pathList[index].totalDistance) == 
    }
    println("Entered function 7");
    return shortestPath;
}
/*
node {id, links}
path {totalDistance, nodes}
link {target, weight}
*/
var node1 = createNode();
var node2 = createNode();
var node3 = createNode();

createLink(node1, node2, 12);
createLink(node1, node2, 21);
createLink(node1, node3, 13);

var shortestPath = sp(node1, node3, { totalDistance: 0, nodes: [] });
for (var i = 0; i < shortestPath.nodes.length; ++i) {
    println(shortestPath.nodes[i].id);
}