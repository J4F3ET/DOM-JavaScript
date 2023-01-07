import { addTask } from './components/addTask.js';
import { diasplayTasks } from './components/diasplayTasks.js';

const btn = document.querySelector('[data-form-btn]');

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);

diasplayTasks();
