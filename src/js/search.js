
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

function searchSongs(e) {
  const val = e.target.value.toLowerCase();
  let filteredArray = songs.filter((obj) => {
    return obj.name.toLowerCase().indexOf(val) > -1;
  });
  createLis(filteredArray);
}

const search = document.getElementById('search');
search.addEventListener('input', searchSongs);
