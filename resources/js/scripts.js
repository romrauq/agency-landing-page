const burger_button = document.getElementById("burger-icon-button");
const menu_container = document.getElementById("navbar-links-container");

burger_button.addEventListener("click", (event) => {
	event.preventDefault();
	menu_container.style.display = "flex";
});
