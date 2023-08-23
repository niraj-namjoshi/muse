const songpath = ["./music/music1.mp3", "./music/music2.mp3", "./music/music3.mp3", "./music/music4.mp3", "./music/music5.mp3", "./music/music6.mp3","./music/music7.mp3","./music/music8.mp3","./music/music9.mp3","./music/music10.mp3","./music/music11.mp3","./music/music12.mp3","./music/music13.mp3","./music/music14.mp3","./music/music15.mp3","./music/music16.mp3","./music/music17.mp3","./music/music18.mp3","./music/music19.mp3","./music/music20.mp3","./music/music21.mp3","./music/music22.mp3"];
const imgpath = ["./images/music1.jpg", "./images/music2.jpeg","./images/music3.jpg", "./images/music4.png", "./images/music5.jpg", "./images/music6.jpg","./images/music7.jpg","./images/music8.jpg","./images/music9.jpeg","./images/music10.jpeg","./images/music11.png","./images/music12.jpg","./images/music13.jpg","./images/music14.jpg","./images/music15.jpg","./images/music16.jpg","./images/music17.jpg","./images/music18.jpeg","./images/music19.jpeg","./images/music20.jpg","./images/music21.jpg","./images/music22.jpg","./images/music23.jpg"];
const songname = ["Cruel Summer(Taylor Swift)","Sunflower","Calling","Happier","Stereo Hearts","Dance The Night","Barbie world","Roxxane","Calm down","Seven","Waiting for love","Ballin'","Cupid 50-50","Die for you","Teri adaa","EK MAIN AUR EKK TU","Yeh ishq Hai","te amo","Tera Hone Laga Hoon","Subhanallah","ilahi"];
var audio;
var currentAudio;
var prevno;
var isPlaying = false;
var progressBar = document.getElementById("progress-bar");
var playPauseButton = document.getElementById("play-pause-button");

playPauseButton.addEventListener("click", togglePlayPause);
progressBar.addEventListener("input", updateAudioProgress);

audio.addEventListener("loadedmetadata", function() {
    progressBar.max = audio.duration;
});

function tester(no) {
  if(prevno){
    let temp = ".pbtn"+prevno;
    document.querySelector(temp).innerHTML = "<svg id='1' xmlns='http://www.w3.org/2000/svg' width='26' height='26' fill='white' class='bi bi-play-fill' viewBox='0 0 16 16' onclick='tester("+prevno+")'><path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z'/></svg>";
    console.log(".pbtn"+prevno);
  }
    document.querySelector(".musicpause").classList.add("musicplay");
  if (currentAudio) {
    currentAudio.pause();
}
  audio = new Audio(songpath[no]);
  document.querySelector(".musicanimationrun").setAttribute("src" , imgpath[no]);
  document.querySelector(".currmtitle").innerHTML = songname[no];
 let iinh = "<img id='1' class='svgx' src='./images/playingbar.gif' alt=''>";
 var pbtnsel = ".pbtn" + no;
 document.querySelector(pbtnsel).innerHTML = iinh;
 
 currentAudio = audio;
 playAudio();
 prevno = no;
}

function togglePlayPause() {
  document.querySelector(".musicpause").classList.toggle("musicplay");
  if (currentAudio) {
      if (isPlaying) {
          pauseAudio();
      } else {
          playAudio();
      }
  }
}

function playAudio() {
  if (currentAudio) {
      currentAudio.play();
      isPlaying = true;
      playPauseButton.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' fill='currentColor' class='bi bi-pause-fill' viewBox='0 0 16 16'><path d='M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z'/></svg>";

      // Start updating the progress bar based on timeupdate event
      currentAudio.addEventListener("timeupdate", updateProgressBar);
  }
}

function pauseAudio() {
  if (currentAudio) {
      currentAudio.pause();
      isPlaying = false;
      playPauseButton.innerHTML = "<svg  xmlns='http://www.w3.org/2000/svg' width='26' height='26' fill='white' class='bi bi-play-fill' viewBox='0 0 16 16' ><path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z'/></svg>";

      // Stop updating the progress bar
      currentAudio.removeEventListener("timeupdate", updateProgressBar);
  }
}

function updateAudioProgress() {
  if (currentAudio) {
      var progress = progressBar.value;
      var duration = currentAudio.duration;
      currentAudio.currentTime = (progress / 100) * duration;
  }
}

function updateProgressBar() {
  if (currentAudio) {
      var min=0;
      var fmin=0;
      
      var currentTime = currentAudio.currentTime;
      var duration = currentAudio.duration;
      var progress = (currentTime / duration) * 100;
      progressBar.value = progress;
      var fsec = Math.floor(duration);
      var dispt = Math.floor(currentTime);
      while(fsec>59){
          fmin +=1;
          fsec = fsec-60;
      }
      while(dispt>59){
          min +=1;
          dispt = dispt-60;
      }
      if(dispt<10)
      {
          document.querySelector(".currtdisp").innerHTML = min+" : 0"+ dispt + " / \n" +fmin+" : "+ fsec ;
      }
      else if(dispt<10 && fsec<10)
      {
          document.querySelector(".currtdisp").innerHTML = min+" : 0"+ dispt + " / \n" +fmin+" : 0"+ fsec ;
      }
      else if(fsec<10)
      {
          document.querySelector(".currtdisp").innerHTML = min+" : "+ dispt + " / \n" +fmin+" : 0"+ fsec ;
      }
      else
      {
          document.querySelector(".currtdisp").innerHTML = min+" : "+ dispt + " / \n" +fmin+" : "+ fsec ;
      }
      
  }
}
