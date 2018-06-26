function autenticar(){
	let user = $("#nome").val();
	let email = $("#email").val();
	let password = $("#pwd").val();

	let sucesso = function(){
		$(location).attr('href', 'index.html');
	};

	let ferror = function(){
		alert("Erro no cadastro.");
	};
	

	postAjax('http://localhost:3000/auth/register', {user: user, email: email, password: password}, sucesso, ferror);
}