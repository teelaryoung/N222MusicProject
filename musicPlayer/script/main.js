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
            enableRemoveControls:true
        },

        swfPath:"./vendor/Jplayer.swf",
        supplied:"mp3",
        smoothPlayBar:true,
        keyEnabled: true,
        audioFullScreen:true
    });

        $(".artClick").click(function(){
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

        

        $(".addVibe").click(function() {
            $.getJSON("./data.json", function(data){
                var song = data.albums[0].tracks[0].file;

        myPlaylist.add({
            title:data.albums[0].tracks[0].name,
            artist:data.albums[0].artist,
            mp3:data.albums[0].tracks[0].file,
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[0].tracks[0].name + "</li>");
            

            });

        
    });

        $(".addBackseat").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[0].tracks[1].name,
            artist:data.albums[0].artist,
            mp3:data.albums[0].tracks[1].file
        });
        myPlaylist.play(-1);
        $(".jp-details").html("<li>" + data.albums[0].tracks[1].name + "</li>");
            });
        
    });

        $(".addDrank").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[0].tracks[3].name,
            artist:data.albums[0].artist,
            mp3:data.albums[0].tracks[3].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[0].tracks[3].name + "</li>");
            });
        
    });

        $(".addCity").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[0].tracks[2].name,
            artist:data.albums[0].artist,
            mp3:data.albums[0].tracks[2].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[0].tracks[2].name + "</li>");
            });
        
    });

        $(".addTrees").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[0].tracks[4].name,
            artist:data.albums[0].artist,
            mp3:data.albums[0].tracks[4].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[0].tracks[4].name + "</li>");
            });
        
    });

        $(".addRecipe").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[0].tracks[5].name,
            artist:data.albums[0].artist,
            mp3:data.albums[0].tracks[5].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[0].tracks[5].name + "</li>");
            });
        
    });

        $(".addRain").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[1].tracks[0].name,
            artist:data.albums[1].artist,
            mp3:data.albums[1].tracks[0].file
        });

        myPlaylist.play(-1);
        $(".jp-details").html("<li>" + data.albums[1].tracks[0].name + "</li>");

            });
        
    });

        $(".addDoin").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[1].tracks[1].name,
            artist:data.albums[1].artist,
            mp3:data.albums[1].tracks[1].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[1].tracks[1].name + "</li>");
            });
        
    });

        $(".addDo").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[1].tracks[2].name,
            artist:data.albums[1].artist,
            mp3:data.albums[1].tracks[2].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[1].tracks[2].name + "</li>");
            });
        
    });

        $(".addCountry").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[1].tracks[3].name,
            artist:data.albums[1].artist,
            mp3:data.albums[1].tracks[3].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[1].tracks[3].name + "</li>");
            });
        
    });

        $(".addElse").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[1].tracks[4].name,
            artist:data.albums[1].artist,
            mp3:data.albums[1].tracks[4].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[1].tracks[4].name + "</li>");
            });
        
    });

        $(".addFarm").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[1].tracks[5].name,
            artist:data.albums[1].artist,
            mp3:data.albums[1].tracks[5].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[1].tracks[5].name + "</li>");
            });
        
    });

        $(".addRight").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[2].tracks[0].name,
            artist:data.albums[2].artist,
            mp3:data.albums[2].tracks[0].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[2].tracks[0].name + "</li>");
            });
        
    });

        $(".addBang").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[2].tracks[1].name,
            artist:data.albums[2].artist,
            mp3:data.albums[2].tracks[1].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[2].tracks[1].name + "</li>");
            });
        
    });

        $(".addSweat").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[2].tracks[2].name,
            artist:data.albums[2].artist,
            mp3:data.albums[2].tracks[2].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[2].tracks[2].name + "</li>");
            });
        
    });

        $(".addDen").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[2].tracks[3].name,
            artist:data.albums[2].artist,
            mp3:data.albums[2].tracks[3].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[2].tracks[3].name + "</li>");
            });
        
    });

        $(".addKyoto").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[2].tracks[4].name,
            artist:data.albums[2].artist,
            mp3:data.albums[2].tracks[4].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[2].tracks[4].name + "</li>");
            });
        
    });

        $(".addSummit").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[2].tracks[5].name,
            artist:data.albums[2].artist,
            mp3:data.albums[2].tracks[5].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[2].tracks[5].name + "</li>");
            });
        
    });

        $(".addWake").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[3].tracks[0].name,
            artist:data.albums[3].artist,
            mp3:data.albums[3].tracks[0].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[3].tracks[0].name + "</li>");
            });
        
    });

        $(".addBleed").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[3].tracks[1].name,
            artist:data.albums[3].artist,
            mp3:data.albums[3].tracks[1].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[3].tracks[1].name + "</li>");
            });
        
    });

        $(".addShadow").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[3].tracks[2].name,
            artist:data.albums[3].artist,
            mp3:data.albums[3].tracks[2].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[3].tracks[2].name + "</li>");
            });
        
    });

        $(".addWhat").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[3].tracks[3].name,
            artist:data.albums[3].artist,
            mp3:data.albums[3].tracks[3].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[3].tracks[3].name + "</li>");
            });
        
    });

        $(".addHands").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[3].tracks[4].name,
            artist:data.albums[3].artist,
            mp3:data.albums[3].tracks[4].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[3].tracks[4].name + "</li>");
            });
        
    });

        $(".addPieces").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[3].tracks[5].name,
            artist:data.albums[3].artist,
            mp3:data.albums[3].tracks[5].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[3].tracks[5].name + "</li>");
            });
        
    });

        $(".addDazed").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[4].tracks[0].name,
            artist:data.albums[4].artist,
            mp3:data.albums[4].tracks[0].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[4].tracks[0].name + "</li>");
            });
        
    });
        $(".addLove").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[4].tracks[1].name,
            artist:data.albums[4].artist,
            mp3:data.albums[4].tracks[1].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[4].tracks[1].name + "</li>");
            });
        
    });
        $(".addRamble").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[4].tracks[2].name,
            artist:data.albums[4].artist,
            mp3:data.albums[4].tracks[2].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[4].tracks[2].name + "</li>");
            });
        
    });

        $(".addImmigrant").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[4].tracks[3].name,
            artist:data.albums[4].artist,
            mp3:data.albums[4].tracks[3].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[4].tracks[3].name + "</li>");
            });
        
    });

        $(".addBlack").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[4].tracks[4].name,
            artist:data.albums[4].artist,
            mp3:data.albums[4].tracks[4].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[4].tracks[4].name + "</li>");
            });
        
    });

        $(".addStairway").click(function() {
        $.getJSON("./data.json", function(data){
        myPlaylist.add({
            title:data.albums[4].tracks[5].name,
            artist:data.albums[4].artist,
            mp3:data.albums[4].tracks[5].file
        });
            myPlaylist.play(-1);
            $(".jp-details").html("<li>" + data.albums[4].tracks[5].name + "</li>");
            });
        
    });


    });

})


