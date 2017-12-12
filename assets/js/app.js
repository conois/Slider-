$(document).ready(function(){

	var imgItem= $(".slider li").length; //cuantas imagenes tengo 
	var imgPos=1; 

	// se crean tantos circulos como imagenes hayan cargadas 
	for ( var i=1; i<= imgItem; i++){
	$(".paginas").append("<li><span class='fa fa-circle'></span></li>")
	}

	$(".slider li").hide();
	$(".slider li:first").show();
	$(".paginas li:first").css({"color":"red"});		// dandole color al primer circulo 

	// Eventos y funciones 
	$(".paginas li").click(moverCirculos); 

	function moverCirculos(){
		var numPagina=$(this).index() + 1; 

		$(".slider li").hide();
		$('.slider li:nth-child(' + numPagina + ')').fadeIn(); 

		$(".paginas li").css({"color": "black"});
		$(this).css({"color": "red"});
	}

	// funcion mover izquierda 
	$(".left").click(moverIzquierda); 

	function moverIzquierda(){

		if( imgPos <= 1){
			imgPos=imgItem; 
		}else{
			imgPos--;
		}

		$(".paginas li").css({'color':'black'}); 
		$('.paginas li:nth-child('+ imgPos +')').css({'color':'red'});

		
		$(".slider li").hide(); 
		$('.slider li:nth-child('+ imgPos+')').fadeIn(); 
	}



	 // funcion mover derecha 
	$(".right").click(moverDerecha);

		function moverDerecha(){

		if( imgPos >= imgItem){
			imgPos=1; 
		}else{
			imgPos++;
		}
		$(".paginas li").css({'color':'black'}); 
		$('.paginas li:nth-child('+ imgPos +')').css({'color':'red'});
		
		$(".slider li").hide(); 
		$('.slider li:nth-child('+ imgPos+')').fadeIn(); 
	}




})