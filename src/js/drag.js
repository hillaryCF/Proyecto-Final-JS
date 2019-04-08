(function() {	
	var items = document.querySelectorAll('.song-list');
	let name_song = document.getElementById('song-name');
	let artist_song = document.getElementById('artista-name');
	let album_song = document.getElementById('album-name');
	let year_song = document.getElementById('year-album');
	let song = document.getElementById('player');
	
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
			artist_song.innerText= songs[i].artist;
			year_song.innerText=songs[i].year;
			album_song.innerText=songs[i].album;
			name_song.innerText=songs[i].name;
			song.src = songs[i].cancion;
			}
			
		
	}, false);
	
	document.addEventListener('dragend', function(e) {
		item = null;
	}, false);
})();	



