document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {

	var keyCode = e.keyCode;
	if(keyCode==39) {
		document.getElementById('personagem').className = '';
		document.getElementById('personagem').className = 'andandoDireita';
		moverProLadoDireito();

	} 
	else if(keyCode == 37){
		document.getElementById('personagem').className = '';
		document.getElementById('personagem').className = 'andandoEsquerda';
		moverProLadoEsquerdo()

	}
	else if(keyCode == 38){
		document.getElementById('personagem').className = '';
		document.getElementById('personagem').className = 'parado';

	}
}



function moverProLadoDireito() {
	let personagem = document.getElementById("personagem");   
	let pos = personagem.getBoundingClientRect().left;
	pos=pos+50;
	$("#personagem").animate({left: pos}, {duration: 300, complete:function(){
			document.getElementById('personagem').className = '';
			document.getElementById('personagem').className = 'parado';
	}});
	personagem.style.left = pos + 'px'; 
}
function moverProLadoEsquerdo() {
	let personagem = document.getElementById("personagem");
	let pos = personagem.getBoundingClientRect().left;
	if(pos>10){
		pos=pos-50;
		$("#personagem").animate({left: pos}, {duration: 300, complete:function(){
			document.getElementById('personagem').className = '';
			document.getElementById('personagem').className = 'parado';
		}});
		personagem.style.left = pos + 'px'; 
	}   
	
}