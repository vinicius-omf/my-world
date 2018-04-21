
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

function adicionarTexto(){
	$("#conteudo").css("display","none");
	$("#mudar-textos").css('display','block');

}

function salvarTextos(){
	let titulo = $("#titulo-site").val();
	let texto = $("#texto-site").val();
	$('#titulo').html(titulo);
	$('#texto').html(texto);
	$("#conteudo").css("display","block");
	$("#mudar-textos").css('display','none');
}

$("#btn-status").popover({
    html: true, 
    placement: "bottom",
    container: 'body',
	content: function() {
          return $('#conteudo-popover').html();
        }
});

$("#btn-acoes").popover({
    html: true, 
    placement: "bottom",
    container: 'body',
	content: function() {
          return $('#menu-acoes').html();
        }
});