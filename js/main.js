const container_import = document.getElementById('container-import');
const container_songs = document.getElementById('container-songs');
const button_import = document.getElementById('import');
const button_songs = document.getElementById('songs');
button_import.addEventListener('click',(action_import)=>{
  container_songs.style.display = 'none';
  container_import.style.display='inline';
});
button_songs.addEventListener('click',(action_songs)=>{
  container_import.style.display='none';
  container_songs.style.display = 'block';
});
const first = document.getElementsByClassName('hola').src = 'music/1.mp3';
const second = document.getElementsByClassName('hola').src = 'music/2.mp3';
const third = document.getElementsByClassName('hola').src = 'music/3.mp3';
let songs = [
  { 
  title: '1',
  artist: 'Hillsong UNITED',
  descrption: 'Songs for god',
  cancion: first
  },
    
  {
    title: '2',
    artist: 'Hillsong UNITED',
    descrption: 'Songs for god',
    cancion: second
  },
  {
    title: '3',
    artist: 'Hillsong Worship',
    descrption: 'Songs for god',
    cancion: third
  },
];


let audio = document.getElementById('player')
let nombre = document.getElementById('artist');
let songName = document.getElementById('song-name');

let nextbutton = document.getElementById('siguiente');
let previousbutton = document.getElementById('anterior');
let i = 0;
let e = i;
nextbutton.addEventListener('click', next);
function next() {
  if (i > songs.length - 1) i = 0;
  audio.src = songs[i].cancion;
  let texto =document.createTextNode(songs[i].artist);
  nombre.appendChild(texto);
  let songText = document.createTextNode(songs[i].title);
  songName.appendChild(songText)
  i++;

}
next();

previousbutton.addEventListener('click', previous);
function previous() {
  if (i > songs.length) i--; ;
  audio.src = songs[e].cancion;
  // let texto =document.createTextNode(songs[e].artist);
  // nombre.appendChild(texto);
  // let songText = document.createTextNode(songs[e].title);
  // songName.appendChild(songText)

}
previous();

















// function hola () {
//   let persona =  {
//     nombre : "juan",
//     edad : 21,
//     profesion : "doctor",
//     pais : "peru"
//   }
//   localStorage.setItem("profesion", hi[1]);
//   localStorage.setItem("persona", JSON.stringify(persona));
// }
// let hi = ["capintero","licenciaddo"];
// let nombre = "kalua";
// hola();

// let local = localStorage.getItem("nombre");
// console.log(local);

// let locale = JSON.parse(localStorage.getItem("persona"));
// console.log(locale);





