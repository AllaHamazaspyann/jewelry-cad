
let menuList = document.querySelector("#menu-nav ul");
function menuToggler(para){
     para.classList.toggle("open");
     menuList.classList.toggle("mobile-open");
}

const menuItem = document.querySelectorAll("#menu-nav a");

menuItem.forEach(function (val){
    val.onclick = function (){
        let clearId = this.getAttribute('class');
        let sections = document.getElementById(clearId);
        var top = sections.offsetTop - 50;
        if (screen.width < 992) {
            top = sections.offsetTop;
        }
        if( menuList.classList.contains("mobile-open")){
            menuList.classList.remove("mobile-open");
            let toggler = document.getElementById("nav-icon3");
            toggler.classList.remove("open");
        }
        window.scrollTo(0, top);
    }
});

document.getElementById("services-more").onclick = function () {
    let hiddenPart = document.getElementsByClassName("unvisible-menu")[0];
    let compStyles = window.getComputedStyle(hiddenPart);
    let display = compStyles.getPropertyValue('display');
    console.log(display);
    if(display === "none") {
        hiddenPart.setAttribute("style", "display:block;");
    }else if(display === "block"){
        hiddenPart.setAttribute("style", "display:none;");
    }
};
