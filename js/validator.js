const formGroups = document.querySelectorAll(".form-group"),
	inputFields = document.querySelectorAll(".input-field"),
	checkFields = document.querySelectorAll(".check-field"),
	passwordField = document.getElementById("password");

// var emailPattern = `.+@.+\..+`;
// var emailPattern = "^[A-Za-z0-9]{3,16}$";
// var emailPattern = `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`;

// formGroups.forEach(formGroup => {
// 	let errorMessage = document.createElement("span");
// 	errorMessage.className = "error-message";
// 	errorMessage.innerText = "hello"
// 	formGroup.append(errorMessage);
// });

let passwordChecker = document.querySelector(".password-checker");
// let myClass = "fa fa-eye";
passwordChecker.innerHTML = `<i class="fa fa-eye"></i>`;
// passwordError.textContent = "Hello world"

passwordChecker.onclick = function () {
	let passwordIcon = document.querySelector(".password-checker > i");
	if (passwordField.type === "password") {
		passwordField.type = "text";
		passwordIcon.classList.add("fa-eye-slash");
	} else {
		passwordField.type = "password";
		passwordIcon.classList.remove("fa-eye-slash")
	}
}

passwordField.onblur = () => {
	let passwordError = document.querySelector("#pwd-error");
	
	if (passwordField.value.length < 8) {
		passwordError.innerText = "Password must at least 8 characters long"
	} 
	//else if (!passwordField.value === new RegExp(`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`)) {
	// 	passwordError.innerText = "lol"; }
	else {
		passwordError.innerText = "";
	}

	// console.log(passwordField.value === ;
}

inputFields.forEach((inputField, index) => {
	let errorMessage = document.createElement("span");
	errorMessage.className = "error-message";
	inputField.insertAdjacentElement("afterend", errorMessage);
	return (
		inputField.addEventListener("blur", ($event) => {
			$event.preventDefault();
			let checkBox = document.querySelector(`.check_box${index}`);

			if ($event.target.value === "") {
				errorMessage.innerText = "Please fill out these field"
			} else {
				checkBox.style.visibility = "visible";
				errorMessage.innerText = "";
			}
		})
	)
});

for (let index = 0; index < checkFields.length; index++) {
	const checkField = checkFields[index];
	let checkBox = document.createElement("div");
	checkBox.className = `check-box check_box${index}`;

	let checkIcon = document.createElement("i");
	checkIcon.className = "fa fa-check-circle";

	checkBox.appendChild(checkIcon);
	checkField.insertAdjacentElement("afterend", checkBox);
}

const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", function (evt) {
	evt.preventDefault();
	
})



// for (const checkField of checkFields) {
// 	let checkBox = document.createElement("div");
// 		checkBox.className = "check-box";
// 		// checkBox.id =  "checkBox";
// 	let checkIcon = document.createElement("i");
// 		checkIcon.className = "fa fa-check-circle";
// 		// checkIcon.id = "checkIcon"
// 	checkBox.appendChild(checkIcon);
// 	checkField.insertAdjacentElement("afterend", checkBox);
// }
