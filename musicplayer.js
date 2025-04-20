let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlicon = document.getElementById("ctrlicon");

song.onloadeddata = function() {
    progress.max = song.duration; // Set the max value of the progress bar to the duration of the song
    progress.value = song.currentTime; // Initialize the progress bar to the current time of the song
}

function playPause() {
    if(ctrlicon.classList.contains("fa-pause")) {
        song.pause(); // Pause the song
        ctrlicon.classList.remove("fa-pause"); // Remove the pause icon
        ctrlicon.classList.add("fa-play"); // Add the play icon
    }
    else {
        song.play(); // Play the song
        ctrlicon.classList.remove("fa-play"); // Remove the play icon
        ctrlicon.classList.add("fa-pause"); // Add the pause icon
    }
}

/*if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500); // Update every 500ms