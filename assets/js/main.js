
var userBlock = document.querySelector(".user-block");
var popup = document.querySelector(".modal-content");
var popupClose = popup.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=pass]");
var form = popup.querySelector(".login-form");
var storage = localStorage.getItem("login");
var mapButton = document.querySelector(".js-open-map");
var mapButtonFooter = document.querySelector(".js-footer-open-map");
var map = document.querySelector(".modal-content-map");
var mapClose = map.querySelector(".modal-content-close");

//Открытие формы входа
userBlock.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	console.log("Открываем Popup");
	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

// Закрытие формы входа по крестику
popupClose.addEventListener("click", function(event) {
	popup.classList.remove("modal-content-show");
	popup.classList.remove("modal-form-error");
	console.log("Закрываем Popup по крестику");
});

// Анимация ошибки входа, если незаполнено коно логина или пароля. 
// Запоминание Логина
form.addEventListener("submit", function(event) {
	if (!login.value || !password.value) {
		event.preventDefault();
		popup.classList.remove("modal-form-error");
		setTimeout(function() {
		popup.classList.add("modal-form-error");	
		}, 1)
		console.log("Не введен логин или пароль")
} else {
	event.preventDefault();
	localStorage.setItem("login", login.value);
	console.log("Отправляем форму");
	console.log("Ваш логин:" + login.value);
	console.log("Ваш пароль:" + password.value);
	};
});

// Закрытие формы входа по escape
window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
			console.log("Закрываем Popup через Escape");
		} else {
			console.log("Popup не открыт");
		}
		if (map.classList.contains("open-map")) {
			map.classList.remove("open-map");
			console.log("Закрываем Map через Escape");
		} else {
			console.log("Map не открыт");
		}
	}
});

// Открытие карты
mapButtonFooter.addEventListener("click", function(event) {
	event.preventDefault();
	map.classList.add("open-map");
	console.log("Открываем карту");
});

// Закрытие карты
mapClose.addEventListener("click", function(event) {
	event.preventDefault();
	map.classList.remove("open-map");
	console.log("Закрываем карту по крестику");
});






