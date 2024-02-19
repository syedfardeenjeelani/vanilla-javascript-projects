const searchInput = document.getElementById("search");
searchInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    const inputValue = searchInput.value;
    const url = `http://www.omdbapi.com/?s=${inputValue}&apikey=f7155155`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const main = document.getElementById("main");
        main.innerHTML = "";
        data.Search.forEach((result) => {
          const card = document.createElement("div");
          card.classList.add(
            "movie",
            "w-72",
            "m-4",
            "bg-secondary-color",
            "shadow-lg",
            "relative",
            "overflow-hidden",
            "rounded"
          );

          const img = document.createElement("img");
          img.src = result.Poster;
          img.alt = result.Title;

          const movieInfo = document.createElement("div");
          movieInfo.classList.add(
            "movie-info",
            "text-black",
            "flex",
            "justify-between",
            "items-center",
            "px-4",
            "py-2.5"
          );

          const title = document.createElement("h3");
          title.classList.add("title");
          title.textContent = result.Title;

          movieInfo.appendChild(title);
          card.appendChild(img);
          card.appendChild(movieInfo);

          main.appendChild(card);
        });
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }
});
