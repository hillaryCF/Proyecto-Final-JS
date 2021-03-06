	let song = document.getElementById('player');
(function () {
	let items = document.querySelectorAll('.song-list');
	let name_song = document.getElementById('song-name');
	let artist_song = document.getElementById('artista-name');
	let album_song = document.getElementById('album-name');
  let year_song = document.getElementById('year-album');
  let img = document.getElementById('imagen');


	for (let i = 0; i < items.length; i ++) {
		items[i].setAttribute('draggable', 'true');
  }

	var item = null;
  document.addEventListener('dragstart', function(e) {
    item = e.target;
		e.dataTransfer.setData('text', '');
	}, false);

	document.addEventListener('dragover', function(e) {
		if(item) {
			e.preventDefault();
		}
	}, false);

	document.addEventListener('drop', function(e) {
		if(e.target.getAttribute('class') == 'lista') {
			e.target.appendChild(item);
			e.preventDefault();
			let i = item.getAttribute('data-index');
			artist_song.innerText= songsLocal[i].artist;
			year_song.innerText=songsLocal[i].year;
			album_song.innerText=songsLocal[i].album;
			name_song.innerText=songsLocal[i].name;
			song.src = songsLocal[i].cancion;
			// song.src = songsLocal[i].mp3;
      img.src = songsLocal[i].image;
			delet.style.display = 'inline-block';
			edit.style.display ='inline-block';
		}
  }, false);

	document.addEventListener('dragend', function(e) {
		item = null;
	}, false);
}());
