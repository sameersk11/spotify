
//INITIALIZING THE VARIABLES

let songIndex = 0;
let audioElement = new Audio('audio/Aaj Se Teri - Padman.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
  {songName:"Aaj Se Teri - Padman", filePath:"audio/Aaj See Teri - Padman.mp3", coverPath:"img/Ajj se teri01.jpg"},
  {songName:"Mehram - Jersey", filePath:"audio/Mehram - Jersey.mp3", coverPath:"img/mehram03.jpg"},
  {songName:"Labon Ko - Bhul Bhulayyiya", filePath:"audio/Labon Ko - Bhul Bhulayyiya.mp3", coverPath:"img/LabonKo.jpg"},
  {songName:"Pehle Bhi Main - Animal", filePath:"audio/Pehle Bhi Main - Animal.mp3", coverPath:"img/Pehle bhi mai02.jpg"},
  {songName:"Phir Bhi Tumko Chahunga - Half Girlfriend", filePath:"audio/Phir Bhi Tumko Chahunga - Half Girlfriend.mp3", coverPath:"img/PhirBhiTumko.jpg"},
  {songName:"Thodi Der - Half Girlfriend", filePath:"audio/Thodi Der - Half Girlfriend.mp3", coverPath:"img/ThodiDer.jpg"},
  {songName:"Barish - Half Girlfriend", filePath:"audio/Baarish - Half Girlfriend.mp3", coverPath:"img/barish.jpeg"},
  {songName:"Uska Hi Banana - 1920 - Evil Returns", filePath:"audio/Uska Hi Banana - 1920 - Evil Returns.mp3", coverPath:"img/uskaHiBana.jpeg"},
  {songName:"Ishq Mubarak - Tum Bin 2", filePath:"audio/Ishq Mubarak - Tum Bin 2 (Arijit Singh).mp3", coverPath:"img/ishqMubarak.jpg"},
  {songName:"My note for you", filePath:"audio/Kabhii-Tumhhe - Shershah.mp3", coverPath:"img/kabhiTumhhe.jpg"}
]

songItems.forEach((element, i)=>{
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audioElement.play()

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity = 0;

  }
})

//LISTEN TO EVENTS
audioElement.addEventListener('timeupdate', ()=>{
  //update seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
  console.log(progress); 
  myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    
  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{
    makeAllPlays();
    index = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `audio/${index}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  })
})