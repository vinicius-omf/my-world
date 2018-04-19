
function mudarCorDeFundo() {
	var valor = $("#selectCorDeFundo").val();
	if(valor==1){
		$("body").css("background-color","orange")
	}else if(valor==2){
		$("body").css("background-color","DarkRed")
	}else{
		$("body").css("background-color","LightGoldenRodYellow")
	}
	
}