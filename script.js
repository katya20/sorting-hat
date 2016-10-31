var nameInput = $("#name-input")
var sortButton = $("#sort-button")
var enrolledStudentList = $(".enrolled-students")

var houses = [
  "Ravenclaw",
  "Hufflepuff",
  "Gryfindor",
  "Slytherin"
]

function chooseRandomHouse() {
  var index = Math.floor(Math.random() * houses.length)

  return houses[index]
}

sortButton.click(function() {
  var name = nameInput.val()
  addListItem("enrolledStudents", {
    name: name,
    house: chooseRandomHouse()
  })
})

onNewListItem("enrolledStudents", function(student) {
  return ("student", student)

  var newStudentElement = $("<div></div>")
  // what here?

  enrolledStudentList.append(newStudentElement)
})