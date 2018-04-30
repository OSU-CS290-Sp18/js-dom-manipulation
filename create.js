var loremCard = document.querySelector('.lorem-card');
var userSuppliedValue = "<img src=x onerror=\"alert('Uh oh.')\">";
// loremCard.innerHTML = userSuppliedValue;
loremCard.textContent = userSuppliedValue;

var newDiv = document.createElement('div');

var photoCardContainer = document.getElementById('photo-card-container');
photoCardContainer.appendChild(newDiv);
// photoCardContainer.insertBefore(newDiv, photoCardContainer.firstChild);

var newSpan = document.createElement('span');
newSpan.textContent = "This is the content of the div";

newDiv.appendChild(newSpan);

// newDiv.style.border = "3px solid #000";
newDiv.classList.add('lorem-card');
newDiv.classList.add('some-other-class');

newDiv.classList.remove('some-other-class');

newDiv.setAttribute('id', 'my-newly-created-card');
newDiv.setAttribute('some-random-attr', 'value');

console.log("== newDiv:", newDiv);

// newDiv.parentNode.removeChild(newDiv);
newDiv.remove();
