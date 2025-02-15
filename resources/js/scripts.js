const burger_button = document.getElementById("burger-icon-button");
const menu_container = document.getElementById("navbar-links-container");

// Toggle menu visibility on burger button click:
burger_button.addEventListener("click", (event) => {
	event.preventDefault();
	event.stopPropagation(); // Prevent event from bubbling up
	menu_container.style.display = "flex";
});

// Hide menu when clicking outside of it:
document.addEventListener("click", (event) => {
	if (!menu_container.contains(event.target) && !burger_button.contains(event.target)) {
		menu_container.style.display = "none";
	}
});
