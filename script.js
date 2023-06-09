const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}


window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++) {

        var windowheight =window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
    }
    else{
        reveals[i].classList.remove('active');
    }
    }
}

// Check for saved theme in local storage
    if (localStorage.getItem("theme")) {
      var theme = localStorage.getItem("theme");
      document.body.classList.add(theme);
      updateButtonText(theme);
    }

    function myFunction() {
      var element = document.body;
      element.classList.toggle("light-mode");
      var theme = element.classList.contains("light-mode") ? "light-mode" : "";
      localStorage.setItem("theme", theme); // Save theme to local storage
      updateButtonText(theme);
    }

    function updateButtonText(theme) {
      var button = document.getElementById("myButton");
      if (theme === "light-mode") {
        button.innerHTML = "Switch to Dark Mode";
      } else {
        button.innerHTML = "Switch to Light Mode";
      }
    }
