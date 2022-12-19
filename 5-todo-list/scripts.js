'use strict';

let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let priority = document.querySelector('.todo-priority');
let form = document.querySelector('.todo-form');

priority.onclick = () => {
  priority.classList.toggle('is-important');
  if (priority.classList.contains('is-important')) {
    priority.textContent = 'Важная задача';
  } else {
    priority.textContent = 'Обычная задача';
  }
};

form.onsubmit = function (evt) {
  evt.preventDefault();
  let newTask = document.createElement('li');
  if (input.value) {
    if (priority.classList.contains('is-important')) {
      newTask.classList.add('is-important');
    }
    newTask.textContent = input.value;
    list.append(newTask);
    input.value = '';
  }
};
