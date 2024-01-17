function toggleDropdown(dropdownID) {
    var dropdown = document.getElementById(dropdownID);
    dropdown.classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches(".dropdown_menu_button")) {
        var dropdownButtons = document.querySelectorAll(".dropdown_menu_button");
        dropdownButtons.forEach(function(button) {
            var dropdownID = button.dataset.dropdown;
            var dropdown = document.getElementById(dropdownID);

            if (dropdown.classList.contains("show")) {
                dropdown.classList.remove("show");
            }
        });
    }
}