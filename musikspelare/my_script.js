//Anton Öhlin
$('#play1, #play2, #play3, #play4, #play5').click(hidePause) //Döljer/visar play/pausknapparna i spelaren även när man startar låtar via listan.
$('#pause1, #pause2, #pause3, #pause4, #pause5').click(showPlay)

$("#playicon, #pauseicon").click(function(){
    $('#playicon').toggle();
    $('#pauseicon').toggle(); 
});
    

$('#playicon').click(function(){
currentAudio.play()
    $('#play' + nr).toggle();
    $('#pause' + nr).toggle();
});

$('#pauseicon').click(function(){ //Pausa aktiv låt och dölj alla pausknappar i spelaren. 
currentAudio.pause()
mainPause()
});
function mainPause(){
    $('#pause1, #pause2, #pause3, #pause4, #pause5,#pauseicon').hide();
    $('#play1, #play2, #play3, #play4, #play5,#playicon').show();
}   

function hidePause(){
    $('#pause1, #pause2, #pause3, #pause4, #pause5').hide();
    $('#play1, #play2, #play3, #play4, #play5').show();
    $('#playicon').hide();
    $('#pauseicon').show(); 
}

function showPlay(){
    $('#playicon').show();
    $('#pauseicon').hide();
}
$('#backward').click(function () { //Bakåtknapp, nollställ currentTime på aktiv låt. Är currenttime mindre än 0, föregående låt
if (currentAudio.currentTime < 1){
    if (nr == 1){
        startSong(5);
        pauseSong(1);
        setSongStyle(5);
        setSongInfo(5);
        hidePause();
        $('#play' + nr).toggle();
        $('#pause' + nr).toggle();
    } else {
        startSong(nr-1);
        pauseSong(nr);
        setSongStyle(nr-1);
        setSongInfo(nr);
        hidePause();
        $('#play' + nr).toggle();
        $('#pause' + nr).toggle();
    }
} else {
    currentAudio.currentTime = 0
}
});

$('#forward').click(function(){ // Framåtknapp. Om den sista låten är den aktiva, börja om från början, annars hoppa till nästa.
    if (nr + 1 > 5){
    startSong(1);
    pauseSong(5);
    setSongStyle(1);
    setSongInfo(1);
    hidePause();
    $('#play' + nr).toggle();
    $('#pause' + nr).toggle();
} else {
    startSong(nr+1);
    pauseSong(nr);
    setSongStyle(nr+1);
    setSongInfo(nr);
    hidePause();
    $('#play' + nr).toggle();
    $('#pause' + nr).toggle();
}
    
    
});
// audio 1
$('#play1').click(function(){
    currentAudio.pause();
    startSong(1);
    currentAudio = audio1;
    setSongStyle(1);
    setSongInfo(1);
    hidePause();
});
$('#pause1').click(function(){
    pauseSong(1);
});
$("#play1, #pause1").click(function(){
    $('#play1').toggle();
    $('#pause1').toggle(); 
});

// audio 2
$('#play2').click(function(){
    currentAudio.pause();
    startSong(2);
    currentAudio = audio2;
    setSongStyle(2);
    setSongInfo(2);
});
$('#pause2').click(function(){
    pauseSong(2);
});
$("#play2, #pause2").click(function(){
    $('#play2').toggle();
    $('#pause2').toggle(); 
});
// audio 3
$('#play3').click(function(){
    currentAudio.pause();
    startSong(3);
    currentAudio = audio3;
    setSongStyle(3);
    setSongInfo(3);
});
$('#pause3').click(function(){
    pauseSong(3);
});
$("#play3, #pause3").click(function(){
    $('#play3').toggle();
    $('#pause3').toggle(); 
});

// audio 4
$('#play4').click(function(){
    currentAudio.pause();
    startSong(4);
    currentAudio = audio4;
    setSongStyle(4);
    setSongInfo(4);
});
$('#pause4').click(function(){
    pauseSong(4);
});
$("#play4, #pause4").click(function(){
    $('#play4').toggle();
    $('#pause4').toggle(); 
});
// audio 5
$('#play5').click(function(){
    currentAudio.pause();
    startSong(5);
    setSongStyle(5);
    setSongInfo(5);
}); 
$('#pause5').click(function(){
    pauseSong(5);
}); 
$("#play5, #pause5").click(function(){
    $('#play5').toggle();
    $('#pause5').toggle();
});

function setSongStyle(anIndex) { //Ändrar bild i spelaren och markerar låt i lista
    nr = anIndex;
    $('.song').css('backgroundImage', 'linear-gradient(#0A2733,#134A61)') //nollställer markeringen i alla låtar för att sedan ändra till den valda låten

    switch(anIndex) {
        case 1:
            $(".image, .blur").css('background-image', 'url("https://images.genius.com/5783f4707c3e4b1f8850822db465cff7.800x800x1.jpg")')
            document.querySelector("#marker1").style.background = "#283A38";
            break;
        case 2:
            $(".image, .blur").css('background-image', 'url("https://images.genius.com/60049460e9dd982fb921ad5ac9cbd4a3.999x1000x1.jpg")')
            document.querySelector("#marker2").style.background = "#283A38";
            break;
        case 3:
            $(".image, .blur").css('background-image', 'url("http://soulsurge.cloud/wp-content/uploads/2018/05/IMG_2167-749x675.jpg")')
            document.querySelector("#marker3").style.background = "#283A38";
            break;
        case 4:
            $(".image, .blur").css('background-image', 'url("https://e-cdns-images.dzcdn.net/images/cover/d2fbcd9c7a4c130f89343e2b256436bf/1400x1400-000000-80-0-0.jpg")')
            document.querySelector("#marker4").style.background = "#283A38";
            break;
        case 5:
            $(".image, .blur").css('background-image', 'url("https://vignette.wikia.nocookie.net/telletubbies/images/e/e2/Big_hugs_cd.jpg/revision/latest?cb=20180217151101")')
            document.querySelector("#marker5").style.background = "#283A38";
            break;
    }
}
function setSongInfo(anIndex) { //ställer in artist, låtinfo och låtlängd
    let sec = Math.round(currentAudio.duration % 60);
    document.getElementById('total').innerHTML = Math.round(currentAudio.duration / 60) + ':' + String(sec).padStart(2, '0');
    switch(anIndex) {
        case 1:
            document.getElementById("artistPlaying").innerHTML = "Tonsatt feat. Edward Blom";
            document.getElementById("songPlaying").innerHTML = "När man festar festar man";
            break;
        case 2:
            document.getElementById("artistPlaying").innerHTML = "To the Grave";
            document.getElementById("songPlaying").innerHTML = "Hearteater";
            break;
        case 3:
            document.getElementById("artistPlaying").innerHTML = "a-ha";
            document.getElementById("songPlaying").innerHTML = "Take on Me";
            break;
        case 4:
            document.getElementById("artistPlaying").innerHTML = "Dead Crown";
            document.getElementById("songPlaying").innerHTML = "Twenty Four";
            break;
        case 5:
            document.getElementById("artistPlaying").innerHTML = "Teletubbies";
            document.getElementById("songPlaying").innerHTML = "Teletubbies Theme";
            break;
    }
}
function startSong(anIndex){ //startar audioklipp
    resetTimers(anIndex)
switch(anIndex){
    case 1: audio1.play()
    currentAudio = audio1;
        break;
    case 2: audio2.play()
    currentAudio = audio2;
        break;
    case 3: audio3.play()
    currentAudio = audio3;
        break;
    case 4: audio4.play()
    currentAudio = audio4;
        break;
    case 5: audio5.play()
    currentAudio = audio5;
        break;
}
}
function resetTimers(anIndex){ //När en ny låt startas, nollställ timern på alla andra låtar
    switch(anIndex){
        case 1: 
        audio2.currentTime = 0
        audio3.currentTime = 0
        audio4.currentTime = 0
        audio5.currentTime = 0
            break;
        case 2: 
        audio1.currentTime = 0
        audio3.currentTime = 0
        audio4.currentTime = 0
        audio5.currentTime = 0
            break;
        case 3: 
        audio1.currentTime = 0
        audio2.currentTime = 0
        audio4.currentTime = 0
        audio5.currentTime = 0
            break;
        case 4: 
        audio2.currentTime = 0
        audio3.currentTime = 0
        audio5.currentTime = 0
        audio1.currentTime = 0
            break;
        case 5: 
        audio1.currentTime = 0
        audio2.currentTime = 0
        audio3.currentTime = 0
        audio4.currentTime = 0
            break;
    }
    }
function pauseSong(anIndex){ //pausar audioklipp
    switch(anIndex){
        case 1: audio1.pause()
            break;
        case 2: audio2.pause()
            break;
        case 3: audio3.pause()
            break;
        case 4: audio4.pause()
            break;
        case 5: audio5.pause()
            break;
    }
}

let audio1 = new Audio()
audio1.src = 'https://vocaroo.com/media_command.php?media=s0bvzRjRynsX&command=download_mp3'

let audio2 = new Audio()
audio2.src = 'https://vocaroo.com/media_command.php?media=s1KK36H355DL&command=download_mp3'

let audio3 = new Audio()
audio3.src = 'https://vocaroo.com/media_command.php?media=s0WaCmI1SoGv&command=download_mp3'

let audio4 = new Audio()
audio4.src = 'https://vocaroo.com/media_command.php?media=s0I5TbaghQLN&command=download_mp3'

let audio5 = new Audio()
audio5.src = 'https://vocaroo.com/media_command.php?media=s07nBHaNlCUP&command=download_mp3'

let nr = 1;
let currentAudio = audio1;
currentAudio.oncanplay = function(){
    let sec = Math.round(currentAudio.duration % 60);
    document.getElementById('total').innerHTML = Math.round(currentAudio.duration / 60) + ':' + String(sec).padStart(2, '0');
}



/* JQUERY CHECK 
window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
} */