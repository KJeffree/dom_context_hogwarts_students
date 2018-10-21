document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  document.querySelector('#new-student-form').addEventListener('submit', handleFormSubmit);

  document.querySelector('#button').addEventListener('click', handleButtonClick)
})

const handleButtonClick = function () {
  document.querySelector('#student-list').textContent = '';
}

const handleFormSubmit = function (event) {
  event.preventDefault();

  const newNameItem = document.createElement('h2');
  newNameItem.textContent = `${ this.first_name.value } ${ this.last_name.value }`

  const newBirthdayItem = document.createElement('p');
  newBirthdayItem.textContent = `${ this.bday.value } `

  const newPetItem = document.createElement('p');
  newPetItem.textContent = `${ this.pet.value } `

  const newItemsItem = document.createElement('p');
  var checkedValue = [];
  var inputElements = document.querySelectorAll('#items');
  for(var i=0; i < inputElements.length; ++i){
    if(!inputElements[i].checked){
      checkedValue.push(inputElements[i].value);
    }
  }
  console.log(checkedValue);
  let checkedValueString = ""
  if (checkedValue.length !== 0) {
    checkedValueString = checkedValue.reduce((x, y) => x + ', ' + y)
} else {
  checkedValueString = "None"
}

  newItemsItem.textContent = `Items Required: ${ checkedValueString } `

  const newStudentItem = document.createElement('div');
  newStudentItem.setAttribute("id", "student-list-item")
  newStudentItem.appendChild(newNameItem)
  newStudentItem.appendChild(newBirthdayItem)
  newStudentItem.appendChild(newPetItem)
  newStudentItem.appendChild(newItemsItem)

  if (this.house.value === 'Gryffindor') {
    newStudentItem.classList.add('gryffindor');
  } else if (this.house.value === 'Slytherin') {
    newStudentItem.classList.add('slytherin');
  } else if (this.house.value === 'Hufflepuff') {
    newStudentItem.classList.add('hufflepuff');
  } else if (this.house.value === 'Ravenclaw') {
    newStudentItem.classList.add('ravenclaw');
  }

  const studentList = document.querySelector('#student-list')
  studentList.appendChild(newStudentItem)

  const form = document.querySelector('#new-student-form')
  form.reset()
}
