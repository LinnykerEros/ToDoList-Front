const addTask = document.getElementById("addTask");
const button = document.querySelectorAll(".button");
const messageTaskAdded = document.getElementById("messageTaskAdded");
const succesfully = document.getElementById("succesfully");
const WindowBackground = document.querySelector("#windowBackground");
// const buttonFechar = document.querySelector("#buttonClose");
// buttonFechar.addEventListener("click", () => {
//   messageTaskAdded.style.display = "none";
//   janelaFundo.style.display = "none";
//   location.reload();
// });

addTask.addEventListener("change", () => {
  const newTarefa = {
    tarefa: addTask.value,
  };
  document.addEventListener("click", (evento) => {
    if (evento.target.matches(".button")) {
      axios
        .post(url, newTarefa)
        .then((response) => {
          // alert(JSON.stringify(response.data));
          succesfully.innerHTML = "<p>Task added succesfully! 🚀🚀</p>";
          messageTaskAdded.style.display = "block";
          windowBackground.style.display = "block";

          setInterval(() => {
            location.reload();
          }, 700);
        })
        .catch((error) => console.log(error));
    }
  });
});
