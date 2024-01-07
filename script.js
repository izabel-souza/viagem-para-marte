function drop_function() {
    document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(e) {
    if(!e.target.matches(".dropdown_menu_button")) {
        var dropdown = document.getElementById("dropdown");
        if(dropdown.classList.contains("show")) {
            dropdown.classList.remove("show");
        }
    }
}