function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
	if (!event.target.matches('.search div:nth-child(1)')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

const togglePassword = document.querySelector('#password-viewer');
const password = document.querySelector('#inputPassword');

togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

function passwordToggle() {
	var p = document.getElementById("inputPassword"),
		P = document.getElementById('inputNewPassword');

	if (p.type === "password") {
		p.type = "text";
	} else {
		p.type = "password";
	};

	if (P.type === 'password') {
		P.type = 'text';
	} else {
		P.type = 'password';
	};

	var icon = document.getElementById('eyeIcon'),
		iconSign = document.getElementById('eyeToggler'),
		iconAccount = document.getElementById('pswIcon');

	icon.classList.toggle('fa-eye-slash');
	iconSign.classList.toggle('fa-eye-slash');
	iconAccount.classList.toggle('fa-eye-slash')
};