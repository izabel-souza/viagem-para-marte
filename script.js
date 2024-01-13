function drop_function() {
    document.getElementById("dropdown").classList.toggle("show");
    document.getElementById("dropdown_2").classList.toggle("show");
}

window.onclick = function(e) {
    if(!e.target.matches(".dropdown_menu_button")) {
        var dropdown = document.getElementById("dropdown");
        var dropdown_2 = document.getElementById("dropdown_2");
        if((dropdown.classList.contains("show")) || (dropdown_2.classList.contains("show"))) {
            dropdown.classList.remove("show");
        }
    }
}