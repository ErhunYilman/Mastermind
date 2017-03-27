var track = document.getElementById("track");
var playBtn = document.getElementById("play");
var pauseBtn = document.getElementById("pause");
var muteBtn = document.getElementById("mute");
var fullDuration = document.getElementById("duration");
var currentTime = document.getElementById("currentTime");
var bar = document.getElementsByClassName("seek-bar");
var progressBar = document.getElementById("progress")

muteBtn.addEventListener('click', muteUnmute, false);
playBtn.addEventListener('click',playOrPasue,false);
pauseBtn.addEventListener('click',playOrPasue,false);

currentTime.innerHTML = "0:00";
// if (playBtn || pauseBtn) {
//   addEventListener('click',playOrPasue,false)
// }

var barSize = 150;

setTimeout(function(){
  var track = document.getElementById("track");
  var minutes = parseInt(track.duration/60);
  var section = parseInt(track.duration%60);
  var fullDuration = document.getElementById("duration");

  fullDuration.innerHTML = minutes + ':' + section;
}, 50);


function playOrPasue(){
  if(!track.paused && !track.ended){
    track.pause();
    window.clearInterval(update)
  }

  else {
    track.play();
    updateTime = setInterval(update, 500);
  }
}

// function for mute of unmute the music.
function muteUnmute() {
  if (track.muted == true) {
    track.muted = false;
  }
  else {
    track.muted = true;
  }
}

// function to get current time.
function update() {
  if (!track.ended) {

    var playedMinutes = parseInt(track.currentTime/60,0);
    var playedSeconds = parseInt(track.currentTime%60,0);

    currentTime.innerHTML = playedMinutes + ":" + playedSeconds;

    var size = parseInt(track.currentTime*barSize/track.duration);
    progressBar.style.width = size + "px";
  }
  else {
    currentTime.innerHTML = "0.00";
    progressBar.style.width = "0px";
    window.clearInterval(updateTime);
  }
}
