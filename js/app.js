document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#form");
  form.addEventListener('submit', handleFormSubmit);

  const reset = document.querySelector("#form");
  form.addEventListener('submit', resetFunction);

  const deleteAll = document.querySelector("#delete")
  deleteAll.addEventListener('click', deleteAllFunction)

});

const handleFormSubmit = function (event) {
  event.preventDefault();   // event - need to have it there

  const sportStarItem = createSportStarItem(event.target);
  const sportStarList = document.querySelector('#sport-star-list');
  sportStarList.appendChild(sportStarItem);

}

const createSportStarItem = function(form) {
  console.log(form);
  const sportStarItem = document.createElement('li')
  sportStarItem.classList.add('sport-start-item')

  const name = document.createElement('h2')
  name.textContent = form.name.value;
  sportStarItem.appendChild(name)

  const sport = document.createElement('h3')
  sport.textContent = form.sport.value;
  sportStarItem.appendChild(sport)

  const ageRange = document.createElement('h4')
  ageRange.textContent = form.ageRange.value;
  sportStarItem.appendChild(ageRange)

  return sportStarItem;
}

const resetFunction = function() {
  this.reset()
}

const deleteAllFunction = function() {
  content = document.querySelector('#sport-star-list');
  content.innerHTML = "";
}
