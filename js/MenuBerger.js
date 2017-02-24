$(document).ready(function(){
	$('.btn-navigation').click(function(){
		$('.navigation').toggleClass('isOpen'); // toggleCalass('0'): ajoute la classe 0 à la classe navigation si navigation possede pas la classe 0 et 
												//enleve la classe 0 à la classe navigation si navigation possede la classe 0
	});
	$('.btn-navigation').click(function(){
		$('.barre').toggleClass('isWhite'); // toggleCalass('0'): ajoute la classe 0 à la classe navigation si navigation possede pas la classe 0 et 
												//enleve la classe 0 à la classe navigation si navigation possede la classe 0
	});
});