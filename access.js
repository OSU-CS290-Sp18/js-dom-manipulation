console.log("== document.body:", document.body);

var bodyChildren = document.body.childNodes;
console.log("== bodyChildren:", bodyChildren);

var bodyFirstChild = document.body.firstChild;
var bodyLastChild = document.body.lastChild;
console.log("== bodyFirstChild:", bodyFirstChild);
console.log("== bodyLastChild:", bodyLastChild);

var firstChildParent = bodyFirstChild.parentNode;
console.log("== firstChildParent:", firstChildParent);

var firstChildNextSibling = bodyFirstChild.nextSibling;
console.log("== firstChildNextSibling:", firstChildNextSibling);

var lastChildPrevSibling = bodyLastChild.previousSibling;
console.log("== lastChildPrevSibling:", lastChildPrevSibling);

bodyChildren.forEach(function (child) {
  console.log("== child:", child);
});

var currNode = document.body;
while (currNode) {
  console.log("== currNode:", currNode);
  currNode = currNode.firstChild;
}
