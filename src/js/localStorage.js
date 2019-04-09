const TodoData = (function () {

  // private
  const PREFIX = 'TODO_DATA';
  // let DATA = [];

  let instance = null;

  return class TodoData {
    // static Subscriptions = Object.freeze({
    //   'TODO_ADDED': Symbol('TODO_ADDED'),
    //   'TODO_DONE': Symbol('TODO_DONE'),
    // });

    constructor() {
      if (!instance) {
        this.restore();
        instance = this;
      }
      return instance;
    }
    /**
     * Finds a todo list
     * @param {number} id
     * @returns {null|array}
     */
    get(g) {
      return DATA.find(item => item.g == g);
    }

    /**
     * Add a new todo
     * @param {TodoItem} todo
     */
    add(h) {
      if (!h || !(h instanceof TodoItem))
        throw new Error(`Invalid todo: ${h}`);

      // add the todo
      DATA.push(h);

      // save the data into the localstorage
      this.save();

      Mediator.Publish(TodoData.Subscriptions.TODO_ADDED, todo);
    }

    /**
     * Remove a todo
     * @param {TodoItem} todo
     */
    remove(todo) {
      let idx = DATA.findIndex(i => i === todo);
      if (idx > -1) DATA.splice(idx, 1);
    }

    toggleItem(todo) {
      todo.done = !todo.done;

      this.save();

      if (todo.done) Mediator.Publish(TodoData.Subscriptions.TODO_DONE, todo);
    }

    save() {
      let data = JSON.stringify(songs.map(i => i));
      
      localStorage.setItem(PREFIX, data);
      console.log(data);
    }

    restore() {

        let data = localStorage.getItem(PREFIX);
        if (data) {
          data = JSON.parse(data);
          if (Array.isArray(data)) {
            songs = data.map(item => new TodoItem(item.text, item.done));
          }
        }

    }
  }
})();

function gh() {
  let a = new TodoData().save();
  console.log(a);
}


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



