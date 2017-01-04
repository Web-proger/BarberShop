
var userBlock = document.querySelector(".user-block");
var popup = document.querySelector(".modal-content");
var popupClose = popup.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=pass]");
var sendForm = popup.querySelector("[name=enter]");

userBlock.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	console.log("Открываем Popup");
});

popupClose.addEventListener("click", function(event) {
	popup.classList.remove("modal-content-show");
	console.log("Закрываем Popup");
})


sendForm.addEventListener("submit", function(event) {
	if (!login.value || !password.value) {
		event.preventDefault();
		console.log("Не введен логин или пароль")
} else {
	console.log("Отправляем форму");
}
	
})


