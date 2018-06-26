function autenticar(){
	let email = $("#email").val();
	let password = $("#pwd").val();
	localStorage.setItem("email", email);
	let sucesso = function(data){
		localStorage.setItem("JS_ACESS_TOKEN", data.token);
		$(location).attr('href', 'index.html');
	};

	let ferror = function(){
		alert("Login ou senha incorreta.");
	};
	

	postAjax('http://localhost:3000/auth/authenticate', {email: email, password: password}, sucesso, ferror);
}

function registrar(){	
	$(location).attr('href', 'register.html');
}