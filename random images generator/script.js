const displayImg = document.querySelector(".display");

const btn = document.getElementById("btn");

function generateImg() {
  fetch(
    "https://api.unsplash.com/photos/random/?client_id=" +
      "41b_ojJUvyr8Hw2thGdBGxoZDNy3AVr4wF9l4zOS_0Y"
  )
    .then((response) => response.json())
    .then((data) => {
      const imageUrl = data.urls.regular;
      displayImg.innerHTML = `<img src="${imageUrl}" alt="Random Image">`;
    })
    .catch((error) => {
      console.error("Error fetching random image:", error);
    });
}

btn.addEventListener("click", generateImg);
