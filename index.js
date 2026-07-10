let nav = document.querySelector("#NavigationArea");
let btn = document.querySelector("#ToggleButton");
let video = document.querySelector("#LessonVideo");
let text = document.querySelector("#Text");
let download = document.querySelector("#Download");
var selected_menu;

function OpenMenu(){
  nav.classList.toggle("open");
  setTimeout(function(){
    document.querySelector(selected_menu).classList.toggle("selected");
    document.querySelector(selected_menu).classList.toggle("non_selected");
    document.querySelector("#Root").classList.toggle("selected");
    document.querySelector("#Root").classList.toggle("non_selected");
    selected_menu = "#Root";
  }, 200)
}

function SelectMenu(fr, to){
  document.querySelector(fr).classList.toggle("selected");
  document.querySelector(fr).classList.toggle("non_selected");
  document.querySelector(to).classList.toggle("selected");
  document.querySelector(to).classList.toggle("non_selected");
  selected_menu = to;
}