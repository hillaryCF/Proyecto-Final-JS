let nextbutton = document.getElementById('siguiente');
let previousbutton = document.getElementById('anterior');


let i = 0;
nextbutton.addEventListener('click', next);
function next() {
  if (i > songs.length - 1) i = 0;
  song.src = songs[i].cancion;
  let texto =document.createTextNode(songs[i].artist);
  nombre.appendChild(texto);
  let songText = document.createTextNode(songs[i].title);
  songName.appendChild(songText)
  i++;
}


button_import.addEventListener('click',mostar_import );
function mostar_import() {
  container_songs.style.display = 'none';
  container_import.style.display = 'inline'; 
} 
button_songs.addEventListener('click', mostar_songs);
function mostar_songs() {
  container_import.style.display = 'none';
  container_songs.style.display = 'block';
};
