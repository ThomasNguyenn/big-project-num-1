var darkBtn = document.getElementById("dark-btn");
var showMenuBtn = document.getElementById("btn--setting_container");
var showMenu = document.getElementById("nav_menu--setting");
var main = document.getElementById("main");
var headerdark = document.getElementById("header");
var aTag = document.querySelectorAll("#a");


darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-on");
    headerdark.classList.toggle("header-dark");
    aTag.forEach((e) =>{
        e.classList.toggle("text-white");
    })
    main.classList.toggle("main-dark");
    
};
showMenuBtn.onclick = function() {
    showMenu.classList.toggle("show");
    if(showMenu.classList.contains("show")){
        main.onclick = function() {
            showMenu.classList.remove("show");
        }
    }
};
