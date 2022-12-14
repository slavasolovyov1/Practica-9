let input = document.querySelector('#input');
let title = document.querySelector('#title');

input.addEventListener("keyup", (e)=>{
  e.preventDefault();
  setTimeout(replaceTitle, 300);
});

function replaceTitle() {
  title.textContent = input.value;
  document.title = input.value;
}