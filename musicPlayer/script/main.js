$(document).ready(function(){

$.getJSON("./data.json", function(data){
        console.log(data);

    var myPlaylist = new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"

    }, [
           
        ],

    {
        playlistOptions: {
            autoPlay:true,
            enableRemoveControls:true
        },

        swfPath:"./vendor/Jplayer.swf",
        supplied:"mp3",
        smoothPlayBar:true,
        keyEnabled: true,
        audioFullScreen:true
    });

        $("#artClick").click(function(){
            $("#artists").css("visibility", "visible");
            $("#albums").css("visibility", "hidden");
            $("#genres").css("visibility", "hidden");
            $("#results").css("visibility", "hidden");
        })

        $("#albClick").click(function(){
            $("#artists").css("visibility", "hidden");
            $("#albums").css("visibility", "visible");
            $("#genres").css("visibility", "hidden");
            $("#results").css("visibility", "hidden");
        })

        $("#genClick").click(function(){
            $("#artists").css("visibility", "hidden");
            $("#albums").css("visibility", "hidden");
            $("#genres").css("visibility", "visible");
            $("#results").css("visibility", "hidden");
        })

        $("#Click").click(function(){
            $("#artists").css("visibility", "hidden");
            $("#albums").css("visibility", "hidden");
            $("#genres").css("visibility", "hidden");
            $("#results").css("visibility", "visible");
        })

        for(var i = 0; i < data.genres.length; i++){
            $("#genLinks").append("<li>" + data.genres[i] + "</li>");
        }

        for(var i = 0; i < data.albums.length; i++){
            $("#artLinks").append("<li class='artClick'>" + "<img src='data.albums[i].pic' />" + data.albums[i].artist + "</li>");
            $("#artClick").click(function(){
                
            })
            $("#albLinks").append("<li>" + "<img src='data.albums[i].image' />" + data.albums[i].title + "</li>");
        }

        for(var i = 0; i < data.albums.length; i++){
            $("#kenList").append("<a href='#' class='addTrack'>" + "<li>" + data.albums[0].tracks[i].name + "</li>" + "</a>")
        };

        $(".addVibe").click(function() {
        myPlaylist.add({
            title:"Bitch, Don't Kill My Vibe",
            artist:"Kendrick Lamar",
            mp3:"music/bitchDontKillMyVibe.mp3"
        });
        
    });

        $(".addBackseat").click(function() {
        myPlaylist.add({
            title:"Backseat Freestyle",
            artist:"Kendrick Lamar",
            mp3:"music/backseatFreestyle.mp3"
        });

    });

        $(".addDrank").click(function() {
        myPlaylist.add({
            title:"Swimming Pools (Drank)",
            artist:"Kendrick Lamar",
            mp3:"music/drank.mp3"
        });
      
    });

        $(".addCity").click(function() {
        myPlaylist.add({
            title:"m.A.A.d City",
            artist:"Kendrick Lamar",
            mp3:"music/maadCity.mp3"
        });
    });

        $(".addTrees").click(function() {
        myPlaylist.add({
            title:"Money Trees",
            artist:"Kendrick Lamar",
            mp3:"music/moneyTrees.mp3"
        });
    });

        $(".addRecipe").click(function() {
        myPlaylist.add({
            title:"The Recipe",
            artist:"Kendrick Lamar",
            mp3:"music/theRecipe.mp3"
        });
        

    });


    });

})


