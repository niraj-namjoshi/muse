var audio;

var currentAudio;
var isPlaying = false;
var progressBar = document.getElementById("progress-bar");
var playPauseButton = document.getElementById("play-pause-button");

for (var i = 0; i < 9; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", buttonp);
}

playPauseButton.addEventListener("click", togglePlayPause);
progressBar.addEventListener("input", updateAudioProgress);

audio.addEventListener("loadedmetadata", function() {
    progressBar.max = audio.duration;
});

function buttonp() {
    var ch = event.target.id;
    document.querySelector(".musicpause").classList.add("musicplay");
    if (currentAudio) {
        currentAudio.pause();
    }

    switch (ch) {
        case "button1":
            document.querySelector(".musicanimationrun").setAttribute("src" , "./images/music1.jpg");
            audio = new Audio("./music/music1.mp3");
            document.querySelector(".b1").style.backgroundColor = " rgb(27, 27, 27)";
            document.querySelector(".currmtitle").innerHTML = "Cruel Summer(Taylor Swift)";
            document.querySelector(".musicplay").style.backgroundColor = "rgb(12, 12, 12)";
            break;
        case "button2":
            document.querySelector(".musicanimationrun").setAttribute("src" , "./images/music2.jpeg");
            audio = new Audio("./music/music2.mp3");
            document.querySelector(".b1").style.backgroundColor = " rgb(27, 27, 27)";
            document.querySelector(".currmtitle").innerHTML = "Sunflower";
            document.querySelector(".musicplay").style.backgroundColor = "rgb(12, 12, 12)";
            break;
            case "button3":
                console.log("in2");
                document.querySelector(".musicanimationrun").setAttribute("src" , "./images/music3.jpg");
                audio = new Audio("./music/music3.mp3");
                document.querySelector(".b1").style.backgroundColor = " rgb(27, 27, 27)";
                document.querySelector(".currmtitle").innerHTML = "Calling";
                document.querySelector(".musicplay").style.backgroundColor = "rgb(12, 12, 12)";
                audio.play();
                break;
            case "button4":
                console.log("in2");
                document.querySelector(".musicanimationrun").setAttribute("src" , "./images/music4.png");
                audio = new Audio("./music/music4.mp3");
                document.querySelector(".currmtitle").innerHTML = "Happier";
                document.querySelector(".b1").style.backgroundColor = "rgb(27, 27, 27)";
                document.querySelector(".musicplay").style.backgroundColor = "rgb(12, 12, 12)";
                audio.play();
                break;
            case "button5":
                console.log("in2");
                document.querySelector(".musicanimationrun").setAttribute("src" , "./images/music5.jpg");
                audio = new Audio("./music/music5.mp3");
                document.querySelector(".currmtitle").innerHTML = "Stereo Hearts";
                document.querySelector(".b1").style.backgroundColor = " rgb(27, 27, 27)";
                document.querySelector(".musicplay").style.backgroundColor = "rgb(12, 12, 12)";
                audio.play();
                break;
            case "button6":
                console.log("in2");
                document.querySelector(".musicanimationrun").setAttribute("src" , "./images/music6.jpg");
                audio = new Audio("./music/music6.mp3");
                document.querySelector(".b1").style.backgroundColor = " rgb(58, 31, 49)";
                document.querySelector(".currmtitle").innerHTML = "Dance The Night";
                document.querySelector(".musicplay").style.backgroundColor = " rgb(213, 94, 183)";
                audio.play();
                break;
    
            case "button7":
                console.log("in2");
                document.querySelector(".musicanimationrun").setAttribute("src" , "./images/music1.jpg");
                document.querySelector(".currmtitle").innerHTML = "Cruel Summer(Taylor Swift)";
                audio = new Audio("./music/music7.mp3");
                document.querySelector(".b1").style.backgroundColor = " rgb(58, 31, 49)";
                document.querySelector(".musicplay").style.backgroundColor = " rgb(213, 94, 183)";
                audio.play();
                break;
    
            case "button8":
                console.log("in2");
                document.querySelector(".musicanimationrun").setAttribute("src" , "./images/music1.jpg");
                audio = new Audio("/music/music8.mp3");
                document.querySelector(".currmtitle").innerHTML = "Cruel Summer(Taylor Swift)";
                document.querySelector(".b1").style.backgroundColor = " rgb(58, 31, 49)";
                audio.play();
                break;
    
            case "button9":
                console.log("in2");
                document.querySelector(".musicanimationrun").setAttribute("src" , "./images/music1.jpg");
                audio = new Audio("/music/music9.mp3");
                document.querySelector(".currmtitle").innerHTML = "Cruel Summer(Taylor Swift)";
                document.querySelector(".b1").style.backgroundColor = " rgb(58, 31, 49)";
                audio.play();
                break;
    }

    currentAudio = audio;
    playAudio();
    
    
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
        playPauseButton.textContent = "Pause";

        // Start updating the progress bar based on timeupdate event
        currentAudio.addEventListener("timeupdate", updateProgressBar);
    }
}

function pauseAudio() {
    if (currentAudio) {
        currentAudio.pause();
        isPlaying = false;
        playPauseButton.textContent = "Play";

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
            document.querySelector(".currtdisp").innerHTML = min+" : 0"+ dispt + " / " +fmin+" : "+ fsec ;
        }
        else if(dispt<10 && fsec<10)
        {
            document.querySelector(".currtdisp").innerHTML = min+" : 0"+ dispt + " / " +fmin+" : 0"+ fsec ;
        }
        else if(fsec<10)
        {
            document.querySelector(".currtdisp").innerHTML = min+" : "+ dispt + " / " +fmin+" : 0"+ fsec ;
        }
        else
        {
            document.querySelector(".currtdisp").innerHTML = min+" : "+ dispt + " / " +fmin+" : "+ fsec ;
        }
        
    }
}
