const url = "http://localhost:5500/videos";
const id = "/35134905-39fe-459d-afb8-01271f46349d";
const newVideo = {
  title: "DEUCERTOOOOOOO",
  link: "https://www.youtube.com/embed/aO-ZaF4FJls",
};

const videoUpdate = {
  title: "DEU CERTOO",
  link: "DEU CERTO DEU CERTO",
};

function getVideos() {
  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      TESTE.textContent = JSON.stringify(data);
    })
    .catch((error) => console.log(error));
}

function addNewVideo() {
  axios
    .post(url, newVideo)
    .then((response) => {
      alert(JSON.stringify(response.data));
      console.log(response.data);
    })
    .catch((error) => console.log(error));
}
// addNewVideo();

function updateVideo() {
  axios
    .put(`${url}/a31ebfb6-320d-4e59-815d-5514bda1e89a`, videoUpdate)
    .then((response) => {
      alert(JSON.stringify(response.data));
    })
    .catch((error) => console.log(error));
}
// updateVideo();

function deleteVideo() {
  axios
    .delete(`${url}/1b673972-6dae-48a0-b8bf-9a0caf264ae3`)
    .then((response) => {
      alert(JSON.stringify(response.data));
    })
    .catch((error) => console.log(error));
}

// deleteVideo();
getVideos();
