const loadNewBlog = document.getElementById("loadNewBlog");
const img = document.querySelector(".img");
const para = document.querySelector(".para");
const Blogtitle = document.querySelector(".Blogtitle");

// Initialize index outside of the click function
let index = -1;

function click() {
  const url = "https://api.slingacademy.com/v1/sample-data/blog-posts";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      index = (index + 1) % data.blogs.length;
      const randomBlog = data.blogs[index];
      img.src = randomBlog.photo_url;
      Blogtitle.innerHTML = randomBlog.title;
      para.innerHTML = randomBlog.content_text;
    });
}
loadNewBlog.addEventListener("click", click);
