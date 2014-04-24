$(document).ready(function(){
	var myPlaylist = [

    {
        mp3:'mix/1.mp3',
        oga:'mix/1.ogg',
        title:'Sample',
        artist:'Sample',
        rating:4,
        buy:'#',
        price:'0.99',
        duration:'0:30',
        cover:'mix/1.png'
    }
];

     $.getJSON("../data.json", function(data){

        for(var i = 0; i < data.artists.length; i++){
            $("#artistList").append("<li>" + data[i] + "</li>");
        }

    })

	var description = 'Lorem ipsum dolor blah blah blah blah blah blah blah';
	$('#player').ttwMusicPlayer(myPlaylist, {
		autoPlay:false, 
                description:description,
                jPlayer:{
                    swfPath:'assets/Jplayer.swf'}
	})

})
