let nextbutton = document.getElementById('siguiente');
let previousbutton = document.getElementById('anterior');

button_import.addEventListener('click',mostar_imort );
function mostar_imort() {
  container_songs.style.display = 'none';
  container_import.style.display = 'inline'; 
} 
button_songs.addEventListener('click', mostar_songs);
function mostar_songs() {
  container_import.style.display = 'none';
  container_songs.style.display = 'block';
};
