

function mudarCorDeFundo(valorCorDeFundo) {
	var valor = valorCorDeFundo;
	if(valor==1){
		$("body").css("background-color","orange")
		$("body").css("color","black")
	}else if(valor==2){
		$("body").css("background-color","DarkRed")
		$("body").css("color","white")
	}else{
		$("body").css("background-color","LightGoldenRodYellow")
		$("body").css("color","black")
	}
	
}

function mudarChao() {

	let elemento = $("#chao");


	if (elemento.hasClass('chao1')) {
	    elemento.removeClass('chao1').addClass('chao2');
	} else if (elemento.hasClass('chao2')) {
	    elemento.removeClass('chao2').addClass('chao3');
	} else if (elemento.hasClass('chao3')) {
	    elemento.removeClass('chao3').addClass('chao1');
	}
	
}

function adicionarTexto(){
	$(".site").css('display','block');
	$("#personagem-chao").css("display","none");
	$("#conteudo").css("display","none");
	$("#mudar-textos").css('display','block');

}

function mostrarImagens(){

	$(".site").css('display','none');
	$("#galeria").css('display','block');

}

function irParaHome(){
	$(".site").css('display','block');
	$("#conteudo").css("display","block");
	$("#mudar-textos").css('display','none');
	$("#personagem-chao").css("display","block");
}
function salvarTextos(){
	let titulo = $("#titulo-site").val();
	let texto = $("#texto-site").val();
	$(".site").css('display','block');
	$('#titulo').html(titulo);
	$('#texto').html(texto);
	$("#conteudo").css("display","block");
	$("#mudar-textos").css('display','none');
	$("#personagem-chao").css("display","block");
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