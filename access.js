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

console.log("===============================");
console.log("===============================");

var photoCardContainer = document.getElementById('photo-card-container');
console.log("== photoCardContainer:", photoCardContainer);

var photoCards = document.getElementsByClassName('photo-card');
console.log("== photoCards:", photoCards);

for (var i = 0; i < photoCards.length; i++) {
  console.log("  -- photoCards[" + i + "]:", photoCards[i]);
}

var photoCards2 = photoCardContainer.getElementsByClassName('photo-card');
console.log("== photoCards2:", photoCards2);

var images = document.getElementsByTagName('img');
console.log('== images:', images);

var photoCardsWithAnotherClass = document.querySelectorAll('.photo-card.another-class');
console.log('== photoCardsWithAnotherClass:', photoCardsWithAnotherClass);

var firstPhotoCardWithAnotherClass = document.querySelector('.photo-card.another-class');
console.log('== firstPhotoCardWithAnotherClass:', firstPhotoCardWithAnotherClass);


console.log("===============================");
console.log("===============================");

var loremCard = document.querySelector('.lorem-card');
console.log("== loremCard.innerHTML:", loremCard.innerHTML);
console.log("== loremCard.textContent:", loremCard.textContent);

console.log("== images[0].src:", images[0].src);
images[0].src = "http://placekitten.com/320/320?image=2";

console.log("== loremCard.clientWidth:", loremCard.clientWidth);
console.log("== loremCard.clientHeight:", loremCard.clientHeight);

console.log("== loremCard.offsetWidth:", loremCard.offsetWidth);
console.log("== loremCard.offsetHeight:", loremCard.offsetHeight);

console.log("== loremCard.scrollWidth:", loremCard.scrollWidth);
console.log("== loremCard.scrollHeight:", loremCard.scrollHeight);

console.log("== loremCard.scrollLeft:", loremCard.scrollLeft);
console.log("== loremCard.scrollTop:", loremCard.scrollTop);

console.log("== window.scrollX:", window.scrollX);
console.log("== window.scrollY:", window.scrollY);
