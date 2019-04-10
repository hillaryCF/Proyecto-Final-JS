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

const ul = document.getElementById('list-available');
function createLis(array) {
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

class Modal {
	constructor (selector) {
	this.selector = selector;
  this.init();
}

	init() {
		this.close(this.create());
	}

	close(selector) {
		let close = selector.getElementsByClassName("modal-close")[0];
		let modalId = selector.getAttribute("data-modal-id");
		let modalScope = document.querySelector(`[data-scope-modal-id="${modalId}"]`);
    let bton_delete = document.getElementById('definitive-delete');

		close.addEventListener("click", () => {
			selector.style.display = "none";
		});

    bton_delete.addEventListener("click", () => {
      let cancinnueva = document.querySelectorAll('#list-player li')[0];
      cancinnueva.parentNode.removeChild(cancinnueva);
      selector.style.display = 'none';
		});

		modalScope.addEventListener("click", () => {
      selector.style.display = "block";
		});
	}

	create() {
		let modal = document.querySelector(this.selector);
    let scopes = document.querySelectorAll("[data-scope]");
    scopes.forEach(item => {
			let scope = item.getAttribute("data-scope");
			let scopeModal = modal.getAttribute("class");

			if (scopeModal.includes(scope)) {
				let id = this.generateId();

				this.appendUniqueModalId(modal, id);
				this.appendUniqueButtonId(item, id);
      }
		});
    return modal;
  }

  appendUniqueModalId(modal, id) {
		return modal.setAttribute("data-modal-id", id);
	}

	appendUniqueButtonId(button, id) {
		return button.setAttribute("data-scope-modal-id", id);
	}

	generateId() {
		return "modal-" + Math.random().toString(36);
	}

	setAttributes(element, properties) {
		for (let property in properties) {
			element.setAttribute(property, `${properties[property]}`);
		}
	}
}

(() => {
	const modal1 = new Modal(".modal-1");
})();
