const playButton = document.getElementById('play')
const pauseButton = document.getElementById('pause')
const imageMain = document.getElementsByClassName('image')[0]

playButton.onclick = function(event){
    imageMain.style.transform = "scale(0.95)"
    playButton.style.display = "none"
    pauseButton.style.display = "block";
    firstAudio.play()
}
pauseButton.onclick = function(event){
    imageMain.style.transform = "none"
    playButton.style.display = "block"
    pauseButton.style.display = "none";
    firstAudio.pause()
}

const audio_first = document.getElementById('audio_first')

const firstAudio = new Audio();
firstAudio.src = "audio/spin.mp3"

const forwardNext = document.getElementById('rewind')
