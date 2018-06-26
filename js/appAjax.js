var JS_ACESS_TOKEN = "";
var emailUsuario="";

function getAjax(url, success, error, context){
	$.ajax({
		method: 'GET',
		url: url,
		contentType: 'json',
		context: context,
		headers: {
			'Authorization' :  'Bearer '+ JS_ACESS_TOKEN
		},
		success: function(data){
			success && success.call(context, data);
		},
		error: function(err){
			console.log('get-err: '+url);
		}
	})
}

function postAjax(url, object, success, error, context){
	$.ajax({
		method: 'POST',
		url: url,
		contentType: "application/json",
		context: context,
		timeout: 30000,
		data: JSON.stringify(object),
		headers: {
			'Authorization' :  'Bearer '+ localStorage.getItem("JS_ACESS_TOKEN")
		},
		success:  function(data){
			success && success.call(context, data);
		},
		error:  function(err){
			console.log('post-err: '+ url);
			error && error.call(context);
		}
	})
}
