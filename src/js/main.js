const container_import = document.getElementById('container-import');
const container_songs = document.getElementById('container-songs');
const button_import = document.getElementById('import');
const button_songs = document.getElementById('songs');
let audio = document.getElementById('player');
let songName = document.getElementById('song-name');
let description = document.getElementById('description');
let year = document.getElementById('year');

const first = document.getElementsByClassName('.song-list').src = 'music/1.mp3';
const second = document.getElementsByClassName('.song-list').src = 'music/2.mp3';
const third = document.getElementsByClassName('.song-list').src = 'music/3.mp3';

let songs = [{
  name: 'Hillsong - The Lord Prayer',
  artist: 'Hillsong UNITED',
  year: '2012',
  album: 'wonder',
  cancion: first,
  image:'img/hllsongnew.png'
},

{
  name: 'Hillsong - So Will I',
  artist: 'Hillsong UNITED',
  year: '2012',
  album: 'wonder',
  cancion: second,
  image:'img/hllsongnew.png'
},

{
  name: 'Hillsong - Jesus I Need You',
  artist: 'Hillsong Worship',
  year: '2012',
  album: 'wonder',
  cancion: third,
  image:'img/hllsongnew.png'
},
];


// lista nombre
// let firs_name_list = document.getElementById('name-first');
// let second_name_list = document.getElementById('name-second');
// let third_name_list = document.getElementById('name-third');

// let firs_text_list =  document.createTextNode(songs[0].name);
// let second_text_list =  document.createTextNode(songs[1].name);
// let third_text_list =  document.createTextNode(songs[2].name);

// firs_name_list.appendChild(firs_text_list);
// second_name_list.appendChild(second_text_list);
// third_name_list.appendChild(third_text_list);

let nextbutton = document.getElementById('siguiente');
let previousbutton = document.getElementById('anterior');

button_import.addEventListener('click', () => {
  container_songs.style.display = 'none';
  container_import.style.display = 'inline';
});
button_songs.addEventListener('click', () => {
  container_import.style.display = 'none';
  container_songs.style.display = 'block';
});


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
// let nombre = "gilberth";
// hola();

// let local = localStorage.getItem("nombre");
// console.log(local);

// let locale = JSON.parse(localStorage.getItem("persona"));
// console.log(locale);





