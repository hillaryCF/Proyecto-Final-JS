const container_import = document.getElementById('container-import');
const container_songs = document.getElementById('container-songs');
const button_import = document.getElementById('import');
const button_songs = document.getElementById('songs');
let audio = document.getElementById('player');
let songName = document.getElementById('song-name');
let description = document.getElementById('description');
let year = document.getElementById('year');
let delet = document.getElementById('delete');
delet.style.display = 'none';

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

function createLis(array) {
  const ul = document.getElementById('list-available');
  ul.innerHTML = '';
  array.forEach((obj, i) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = '☆';
    li.className = 'song-list';
    li.setAttribute('data-index', i);
    li.setAttribute('draggable', 'true');
    li.innerHTML += obj.name;
    li.appendChild(span);
    ul.appendChild(li);
  });
}
createLis(songs);

// let listacancion = document.getElementById('list-player');
delet.addEventListener('click',btn_delet);

function btn_delet() {
  let cancinnueva = document.querySelectorAll('#list-player li')[0];  
  cancinnueva.parentNode.removeChild(cancinnueva);
}