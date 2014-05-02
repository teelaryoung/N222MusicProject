$(document).ready(function(){
    var myPlaylist = [

    {
        mp3:'music/backseatFreestyle.mp3',
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

     $.getJSON("./data.json", function(data){
        console.log(data);

        $("#kendrick").append("<h4>" + data.artists[0] + "</h4>");
        $("#kenGenre").append("<h6>" + data.genres[1] + "</h6>");
        $("#kenBio").append("<p>" + data.albums[0].bio + "</p>");

        $("#led").append("<h4>" + data.artists[1] + "</h4>");
        $("#ledGenre").append("<h6>" + data.genres[0] + "</h6>");
        $("#ledBio").append("<p>" + data.albums[4].bio + "</p>");

        $("#luke").append("<h4>" + data.artists[2] + "</h4>");
        $("#lukeGenre").append("<h6>" + data.genres[3] + "</h6>");
        $("#lukeBio").append("<p>" + data.albums[1].bio + "</p>");

        $("#linkin").append("<h4>" + data.artists[4] + "</h4>");
        $("#linkinGenre").append("<h6>" + data.genres[4] + "</h6>");
        $("#linkinBio").append("<p>" + data.albums[3].bio + "</p>");

        $("#skrill").append("<h4>" + data.artists[3] + "</h4>");
        $("#skrillGenre").append("<h6>" + data.genres[2] + "</h6>");
        $("#skrillBio").append("<p>" + data.albums[2].bio + "</p>");

        for(var i = 0; i < data.artists.length; i++){
            $("#artList").append("<li>" + data.artists[i] + "</li>");
        }

        for(var i = 0; i < data.genres.length; i++){
            $("#genList").append("<li>" + data.genres[i] + "</li>");
        }

        for(var i = 0; i < data.albums.length; i++){
            $("#albList").append("<li>" + data.albums[i].title + "</li>");
        }

        for(var i = 0; i < data.albums.length; i++){
            $("#kenTracks").append("<li class='grayTrack'>" + data.albums[0].tracks[i].name + "</li>")
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
