const menu = document.getElementById("menu");
function mobilemenu(){
    if(menu.style.display === "block"){
        menu.style.display = "none";
    }
    else{
        menu.style.display="block"
    }
};
const projects = document.querySelector(".projects");
const morebtn = document.getElementById("morebtn");

function more(event) {
    if (projects.style.display === "block") {
        morebtn.setAttribute('href', 'projects.html');
    } else {
        projects.style.display = "block";
        event.preventDefault();
    }
}

