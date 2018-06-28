

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

function mudarChaoInicial(valorChao) {

	let elemento = $("#chao");

	if(valorChao == 1){
		elemento.removeClass('chao2').removeClass('chao3').addClass('chao1');
	}else if(valorChao == 2){
		elemento.removeClass('chao1').removeClass('chao3').addClass('chao2');
	}else{
		elemento.removeClass('chao1').removeClass('chao2').addClass('chao3');
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
	let email = localStorage.getItem("email");
	let titulo = $("#titulo-site").val();
	let texto = $("#texto-site").val();
	

	let sucesso = function(data){
		alterarTexto(data.configuracaoMundo.texto);
		alterarTitulo(data.configuracaoMundo.titulo);
		irParaHome();
		
	}
	let errorMundo = function(){
		alert("Ops! Algo de errado aconteceu ao buscarInformacoesDoMundo!");
		$(location).attr('href', 'login.html');
	};
	
	let objetoPost = {email: email, titulo:titulo, texto:texto};
	postAjax('http://localhost:3000/projects/mudarTextos', objetoPost, sucesso, errorMundo);
	
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


function getWeather(lati, long, callback) {
   var url = 'https://api.openweathermap.org/data/2.5/weather?APPID=3ee0b96227cd0dc3f39812ffa4f8dc6d';
   
   $.ajax({
     dataType: "jsonp",
     url: url,
     jsonCallback: 'jsonp',
     data: { lat: lati, lon: long },
     cache: false,
     success: function (data) {
         callback(data);
     }
   });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pesquisarTempoLocal);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function pesquisarTempoLocal(position){
	getWeather(position.coords.latitude, position.coords.longitude, function(data) {
		let cityname = data.name;
		let iconcode = data.weather[0].icon;
		let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
		if(!iconurl) iconurl = "https://www.flaticon.com/authors/good-ware"
		$('#tempoImagem').attr('src', iconurl);
		$('#cidade').html(cityname);
	});
}

function onStartAplication(){
	buscarInformacoesDoMundo();
	getLocation();
}

function handleVisibilityChange() {
	let audio = document.getElementById("musica");
	if (document.hidden) {
		audio.pause();
	} else  {
		audio.play();
	}
  }
  
document.addEventListener("visibilitychange", handleVisibilityChange, false);

function atualizarFome(valor){
	$("#barraFome").css({"width": valor+"%"});
}
function atualizarSolidao(valor){
	$("#barraSolidao").css({"width": valor+"%"});
}

function atualizarTristeza(valor){
	$("#barraTristeza").css({"width": valor+"%"});
}
function atualizarSono(valor){
	$("#barraSono").css({"width": valor+"%"});
}
function alterarTexto(valor){
	$('#texto').html(valor);
}
function alterarTitulo(valor){
	$('#titulo').html(valor);
}

function buscarInformacoesDoMundo(){

	let email = localStorage.getItem("email");;

	let sucesso = function(data){
		mudarCorDeFundo(data.configuracaoMundo.fundo);
		mudarChaoInicial(data.configuracaoMundo.chao);
		atualizarFome(data.configuracaoMundo.fome);
		atualizarSolidao(data.configuracaoMundo.solidao);
		atualizarTristeza(data.configuracaoMundo.tristeza);
		atualizarSono(data.configuracaoMundo.sono);
		alterarTexto(data.configuracaoMundo.texto);
		alterarTitulo(data.configuracaoMundo.titulo);
	};

	let errorMundo = function(){
		alert("Ops! Algo de errado aconteceu ao buscarInformacoesDoMundo!");
		$(location).attr('href', 'login.html');
	};
	
	console.log("buscarInformacoesDoMundo: "+email);
	postAjax('http://localhost:3000/projects', {email: email}, sucesso, errorMundo);
}

$(document).ready(

	 onStartAplication()

);