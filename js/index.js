let inputText = document.querySelector("#habit");
let addBtn = document.querySelector("#addBtn");
let clearBtn = document.querySelector("#clearBtn");
let main = document.querySelector("main");


function renderHabits(habit) {
  let li = document.createElement("li");
  ul.appendChild(li);
  li.textContent = habit.habit;
  let checkBx = document.createElement("input");
  checkBx.type = "checkbox";
  li.prepend(checkBx);
  let span = document.createElement("span");

  li.appendChild(span);
  span.textContent = `Streak: 🔥 ${habit.streak} days`;
  checkBx.addEventListener("change", () => {
    if (checkBx.checked) {
      habit.streak++;

    }
    else {
      habit.streak--;
    }

    localStorage.setItem("myHabits", JSON.stringify(habits));
    span.textContent = `Streak: 🔥 ${habit.streak} days`;
  })
}
//container
let container = document.createElement("div");
main.appendChild(container);

let ul = document.createElement("ul");
container.appendChild(ul);

container.classList.add("container");

let habits = JSON.parse(localStorage.getItem("myHabits")) || [];

habits.forEach((habit) => {
 return renderHabits(habit);

});





addBtn.addEventListener("click", () => {
  let streak = 0;

  if (inputText.value === "") {
    alert("Enter a habit")
  }
  else {

    let habitText = inputText.value.trim();

    //clear input
    inputText.value = "";

    //creating habit object
    let habitObj = { habit: habitText, streak: streak };

    let exists = false;

    for (let i = 0; i < habits.length; i++) {
      if (habitText === habits[i].habit) {
        alert("Already have it");
        exists = true;
        break; // stop checking further
      }
    }

    if (!exists) {
      //  list

      renderHabits(habitObj);
      habits.push(habitObj);

    }
  }

  localStorage.setItem("myHabits", JSON.stringify(habits));

})

clearBtn.addEventListener("click", () => {
  localStorage.clear();
  ul.innerHTML = "";
})


