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

let songs = [
  { 
  title: 'The lord´s Prayer',
  artist: 'Hillsong UNITED',
  descrption: 'Songs for god',
  cancion: '../music/hillsong.mp3'
  },
    
  {
    title: 'Jesus I Need You',
    artist: 'Hillsong UNITED',
    descrption: 'Songs for god',
    cancion: '../music/hillsong1.mp3'
  },
  {
    title: 'So Will I',
    artist: 'Hillsong Worship',
    descrption: 'Songs for god',
    cancion: '../music/hillsong2.mp3'
  },
];

// contenedor de player 

// variables

let audio = document.getElementById('player')
let nombre = document.getElementById('artist');
let songName = document.getElementById('song-name');

let next = document.getElementById('siguiente');
let previous = document.getElementById('anterior');
let i = 0;
next.addEventListener('click', siguiente);
function siguiente() {
  if (i > songs.length - 1) i = 0;
  audio.src = songs[i].cancion;
  let texto =document.createTextNode(songs[i].artist);
  nombre.appendChild(texto);
  let songText = document.createTextNode(songs[i].title);
  songName.appendChild(songText)
  i++;
  console.log();
}
siguiente();

















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





