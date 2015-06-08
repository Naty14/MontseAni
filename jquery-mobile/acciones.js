// JavaScript Document
$(document).ready(function(e) {
    $('#principal').height($('#page').height()); //calcular el alto de la pantalla del dispositivo
	     document.addEventListener("deviceready",function(){
			 //precarga el sonido
			 audio=window.plugins.LowLatencyAudio;
			 audio.preloadFX('canarios','audio/canarios.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('gato','audio/gato.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('conejo','audio/conejo.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('pato','audio/pato.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('gallina','audio/gallina.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('perro','audio/perro.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('caballo','audio/caballo.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('cebra','audio/cebra.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('jirafa','audio/jirafa.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('lobo','audio/lobos.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('leopardo','audio/leopardo.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('leon','audio/leon.mp3',function(){},function(e){alert('Error '+e);});
			 
			 //reproducir las notas
			 
			 $('.nota').bind('touchstart',function(){$(this).addClass('tocada');
			 audio.play ($(this).attr('id'));});
			 $('.nota').bind('touchend',function(){$(this).removeClass('tocada');});
		 },false); //deviceready
			 
}); //ready
