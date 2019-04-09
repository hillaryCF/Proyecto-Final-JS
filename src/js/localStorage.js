const formulario = document.querySelector('#form');


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
  songs.push(item);
  return(item);
}

formulario.addEventListener('submit', agregonuevoa);
function agregonuevoa (e) {
  e.preventDefault();
  let name = document.getElementById('name').value;
}

console.log(songs);











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



