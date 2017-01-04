
var userBlock = document.querySelector(".user-block");
var popup = document.querySelector(".modal-content");
var popupClose = popup.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=pass]");
var form = popup.querySelector(".login-form");
var storage = localStorage.getItem("login");

userBlock.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.add("modal-content-show");
		/*login.focus();*/
		console.log("Открываем Popup");
});


popupClose.addEventListener("click", function(event) {
	popup.classList.remove("modal-content-show");
	popup.classList.remove("modal-form-error");
	console.log("Закрываем Popup");
});


form.addEventListener("submit", function(event) {
	if (!login.value || !password.value) {
		event.preventDefault();
		popup.classList.add("modal-form-error");
		console.log("Не введен логин или пароль")
} else {
	event.preventDefault();
	localStorage.setItem("login", login.value);
	console.log("Отправляем форму");
	console.log(login.value);
	console.log(password.value);
};
});







