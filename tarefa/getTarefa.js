const url = "http://localhost:5500/tarefas";
const toDoList = document.getElementById("toDoList");
let edit = document.querySelector("#edit");
let windowBackground = document.querySelector("#windowBackground");
let questionDelete = document.querySelector("#questionDelete");
let updatedTask = document.getElementById("updatedTask");
let btnFechar = document.querySelector(".btnFechar");
let videoUpdated = document.getElementById("videoUpdated");
let messageTaskDeleted = document.getElementById("messageTaskDeleted");
let idCurrent;

btnFechar.addEventListener("click", (e) => {
  edit.style.display = "none";
  windowBackground.style.display = "none";
});

updatedTask.addEventListener("click", () => {
  const updateTarefa = {
    tarefa: document.getElementById("inputEditTask").value,
  };
  axios
    .put(`${url}/${idCurrent}`, updateTarefa)
    .then((response) => {
      videoUpdated.style.display = "block";
      setInterval(() => {
        edit.style.display = "none";
        windowBackground.style.display = "none";
        videoUpdated.style.display = "none";
        location.reload();
      }, 1000);
    })
    .catch((error) => console.log(error));
});

function getTasks() {
  toDoList.innerHTML = "";
  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      for (let i in data.tarefas) {
        let id = data.tarefas[i]._id;
        let tasks = data.tarefas[i].tarefa;
        createLI(tasks, id);
      }
    })
    .catch((error) => console.log(error));
}
//manipulacao de DOM
function createLI(tasks, id) {
  const tagLI = document.createElement("li");
  tagLI.setAttribute("id", `${id}`);
  toDoList.appendChild(tagLI);
  tagLI.innerHTML = `<p>${tasks}</p>`;
  div = document.createElement("div");
  div.setAttribute("class", "buttons");
  buttonPencil = document.createElement("button");
  buttonPencil.setAttribute("id", "btnEdit");
  buttonDelete = document.createElement("button");
  buttonDelete.setAttribute("id", "btnDelete");
  iconPencil = document.createElement("i");
  iconDelete = document.createElement("i");
  iconPencil.setAttribute("class", "fa fa-pencil");
  iconPencil.addEventListener("click", () => {
    salvarTarefa(tasks);
    windowBackground.style.display = "block";
    edit.style.display = "block";
    idCurrent = id;
  });
  iconDelete.setAttribute("class", "fa fa-trash");
  iconDelete.setAttribute("id", "delete");
  iconDelete.addEventListener("click", () => {
    windowBackground.style.display = "block";
    questionDelete.style.display = "block";
    let buttonYes = document.getElementById("buttonYes");
    let buttonNo = document.getElementById("buttonNo");
    document.getElementById("buttonYes").removeAttribute("disabled");
    buttonYes.addEventListener("click", () => {
      axios
        .delete(`${url}/${id}`)
        .then((response) => {
          messageTaskDeleted.style.display = "block";
        })
        .catch((error) => console.log(error));

      setInterval(() => {
        document.getElementById("buttonYes").setAttribute("disabled", true);
        questionDelete.style.display = "none";
        windowBackground.style.display = "none";
        location.reload();
      }, 1200);
    });

    buttonNo.addEventListener("click", () => {
      questionDelete.style.display = "none";
      windowBackground.style.display = "none";
    });
  });
  tagLI.appendChild(div);
  div.appendChild(buttonPencil);
  div.appendChild(buttonDelete);
  buttonPencil.appendChild(iconPencil);
  buttonDelete.appendChild(iconDelete);
}

function salvarTarefa(tasks, id) {
  inputEditTask.setAttribute("value", tasks);
}

getTasks();
