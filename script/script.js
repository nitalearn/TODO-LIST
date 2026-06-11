// Start Nav-btn

const navBtn = document.querySelector(".nav-btn__line");
const headerMobile = document.querySelector(".mobile")
let btn = false;
navBtn.addEventListener("click", () => { 
  if (btn) {
    btn = false
    headerMobile.classList.add("mobile--open")
    navBtn.classList.add("nav-btn__line--opern")
    
  }else{ 
    btn = true
    headerMobile.classList.remove("mobile--open")
    navBtn.classList.remove("nav-btn__line--opern")

  }
})
// Finish Nav-btn

// Start Darkmood
const toggleBtn = document.querySelector(".header__darkmode");
const body = document.body;

toggleBtn.addEventListener("click", () => { 
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    toggleBtn.classList.remove("bi-moon-stars-fill");
    toggleBtn.classList.add("bi-brightness-high-fill");
  } else { 
    toggleBtn.classList.remove("bi-brightness-high-fill");
    toggleBtn.classList.add("bi-moon-stars-fill");
  }
})

const toggleBtn2 = document.querySelector(".mobile-darkmode");
const body2 = document.body;

toggleBtn2.addEventListener("click", () => { 
  body2.classList.toggle("dark-mode");
  if (body2.classList.contains("dark-mode")) {
    toggleBtn2.classList.remove("bi-moon-stars-fill");
    toggleBtn2.classList.add("bi-brightness-high-fill");
  } else { 
    toggleBtn2.classList.remove("bi-brightness-high-fill");
    toggleBtn2.classList.add("bi-moon-stars-fill");
  }
})
// Finish Darkmode


// Start Add Task 
document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const errorMsg = document.getElementById("errorMsg");
  const clearAllbtn = document.querySelector(".clear-complate__link");
  const taskStatus = document.getElementById("taskStatus");
  const filterLinks = document.querySelectorAll(".header-filter__link");
  const filtermobile = document.querySelectorAll(".mobile-filter__link")
  let tasks = [];

  addBtn.addEventListener("click", () => {
    const taskValue = taskInput.value.trim();
    errorMsg.textContent = "";

    if (!taskValue) {
      errorMsg.textContent = "Please enter a task.";
      setTimeout(() => errorMsg.textContent = "", 2000);
      return;
    }

    const taskItems = taskStatus.querySelectorAll(".task-status__item");
    let placed = false;

    for (let item of taskItems) {
      const textElement = item.querySelector(".task-status__text");

      if (textElement && textElement.textContent.trim() === "Personal Work No.") {
        textElement.textContent = taskValue;
        placed = true;
        break;
      }
    }

    if (!placed) {
      const newTaskItem = document.createElement("div");
      newTaskItem.className = "task-status__item";
      newTaskItem.innerHTML = `
        <div class="task-status__circale">
          <div class="rounded-circle"></div>
          <span class="task-status__text">${taskValue}</span>
        </div>
        <span class="task-status__delete">
          <svg viewBox="0 0 20 24" xmlns="http://www.w3.org/2000/svg" class="task-status__delete-icon"> 
            <path d="M1.99999 21.3333C1.99999 22.8 3.19999 24 4.66666 24H15.3333C16.8 24 18 22.8 18 21.3333V5.33333H1.99999V21.3333ZM4.66666 8H15.3333V21.3333H4.66666V8ZM14.6667 1.33333L13.3333 0H6.66666L5.33332 1.33333H0.666656V4H19.3333V1.33333H14.6667Z"/> 
          </svg> 
        </span>
      `;
      taskStatus.appendChild(newTaskItem);
    }

    taskInput.value = ""; 

  });


  taskStatus.addEventListener("click", (e) => {
    const circle = e.target.closest(".rounded-circle");
    if (!circle) return;

    const taskItem = circle.closest(".task-status__item");
    if (!taskItem) return;

    const textSpan = taskItem.querySelector(".task-status__text");
    if (!textSpan) return;

    if (textSpan.textContent.trim() === "Personal Work No.") {
      errorMsg.textContent = "No task to mark as done.";
      setTimeout(() => errorMsg.textContent = "", 2000);
      return;
    }

    const isDone = textSpan.classList.toggle("done-task");
    if (isDone) {
      circle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="checked-orange__check">
        <path d="M13.485 1.929l-7.07 7.07-3.536-3.536-1.414 1.414 4.95 4.95 8.485-8.485z" class="checked-orange__check"/>
      </svg>`;
      circle.classList.add("checked-orange");
    } else {
      circle.innerHTML = "";
    }
  });



  // delete task
  taskStatus.addEventListener("click", (e) => {
    if (e.target.closest(".task-status__delete")) {
      const taskItem = e.target.closest(".task-status__item");
      const textSpan = taskItem.querySelector(".task-status__text");
      const circle = taskItem.querySelector(".rounded-circle");
  
      if (textSpan.textContent.trim() === "Personal Work No.") {
        errorMsg.textContent = 'No task to delete.';
        setTimeout(() => errorMsg.textContent = "", 2000);
      } else {
        if (taskItem.classList.contains('default-task')) {
          textSpan.classList.remove("done-task");
          if (circle) {
            circle.innerHTML = "";
            circle.classList.remove("checked-orange")
          }
          textSpan.textContent = "Personal Work No.";
        } else {
          taskItem.remove();
        }
      }
    }
  });


  filterLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = link.dataset.filter;
  
      const allTasks = taskStatus.querySelectorAll(".task-status__item");
  
      allTasks.forEach(task => {
        const textSpan = task.querySelector(".task-status__text");
        const isDone = textSpan.classList.contains("done-task");
  
        if (filter === "all") {
          task.style.display = "flex";
        } else if (filter === "waiting") {
          if (isDone) {
            task.style.display = "none";
          } else {
            task.style.display = "flex";
          }
        } else if (filter === "done") {
          if (isDone) {
            task.style.display = "flex";
          } else {
            task.style.display = "none";
          }
        }
      });
    });
  });
  filtermobile.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = link.dataset.filter;
  
      const allTasks = taskStatus.querySelectorAll(".task-status__item");
  
      allTasks.forEach(task => {
        const textSpan = task.querySelector(".task-status__text");
        const isDone = textSpan.classList.contains("done-task");
  
        if (filter === "all") {
          task.style.display = "flex";
        } else if (filter === "waiting") {
          if (isDone) {
            task.style.display = "none";
          } else {
            task.style.display = "flex";
          }
        } else if (filter === "done") {
          if (isDone) {
            task.style.display = "flex";
          } else {
            task.style.display = "none";
          }
        }
      });
    });
  });
  
});
