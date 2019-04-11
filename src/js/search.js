function searchSongs(e) {
  const val = e.target.value.toLowerCase();
  let filteredArray = songsLocal.filter((obj) => {
    return obj.name.toLowerCase().indexOf(val) > -1;
    let nueva = [];
    nueva.push(filteredArray);
    
  });
  createLis(filteredArray);
}
const search = document.getElementById('search');
search.addEventListener('input', searchSongs);
