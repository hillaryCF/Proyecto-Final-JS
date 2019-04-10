
const formulario = document.querySelector('#form');
formulario.addEventListener('submit', agregonueva);
let songsLocal = [{
  name: 'Hillsong - The Lord Prayer',
  artist: 'Hillsong UNITED',
  year: '2012',
  album: 'wonder',
  cancion: first,
  image:'img/1.png'
},
{
  name: 'Hillsong - So Will I',
  artist: 'Hillsong UNITED',
  year: '2012',
  album: 'wonder',
  cancion: second,
  image:'img/2.png'
},
{
  name: 'Hillsong - Jesus I Need You',
  artist: 'Hillsong Worship',
  year: '2012',
  album: 'wonder',
  cancion: third,
  image:'img/3.png'
},
];

const crearItem = (name, artist, year, album, img, mp3, wav, ogg) => {
  let item = {
    name: name ,
    artist: artist,
    year: year,
    album: album,
    img: img,
    mp3: mp3,
    wav: wav,
    ogg: ogg
  }
  songsLocal.push(item);
  return(item);
}

  const lii = document.createElement('li');
  const spann = document.createElement('span');
  // spann.innerText = '☆';
  lii.className = 'song-list';
  lii.setAttribute('draggable', 'true');
  lii.appendChild(spann);
  ul.appendChild(lii);

// funciones
const guardarDB = () => {
  localStorage.setItem('TODO', JSON.stringify(songsLocal));
}

const  pintarDB = () => {
  songsLocal = JSON.parse(localStorage.getItem('TODO'));
  if (songsLocal === null) {
    songsLocal = [];
  }else for (let i = 0; i ++;) {
    songsLocal.forEach(element => {
			lii.innerText = songsLocal[i].name;
    })
  }
}
// console.log(songsLocal);
function agregonueva (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const artist = document.getElementById('artist').value;
  const year = document.getElementById('year').value;
  const album = document.getElementById('album').value;
  const imgimport = document.getElementById('img').value;
  const mp3import = document.getElementById('mp3').value;
  const wavimport = document.getElementById('wav').value;
  const oggimport = document.getElementById('ogg').value;

  crearItem(name,artist,year,album,imgimport,mp3import,wavimport,oggimport);
  guardarDB();
}

document.addEventListener('DOMContentLoaded', pintarDB);
