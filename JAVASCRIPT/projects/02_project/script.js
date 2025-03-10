document.addEventListener("DOMContentLoaded", () => {
  const titlePost = document.getElementById("addTitle");
  const contentPost = document.getElementById("addContent");
  const addPost = document.getElementById("addPost");
  const gridContainer = document.getElementById("grid-container");

  let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  blogs.forEach((blog) => renderBlog(blog));

  addPost.addEventListener("click", () => {
    const blogTitle = titlePost.value.trim();
    const blogContent = contentPost.value.trim();

    //   console.log(newBlogTitle);
    //   console.log(newBlogContent);
    if (blogTitle === "" && blogContent === "") return;
    const newBlog = {
      Id: Date.now(),
      text: blogTitle,
      textarea: blogContent,
    };
    blogs.push(newBlog);
    saveTask();
    renderBlog(newBlog);
    titlePost.value = "";
    contentPost.value = "";
    console.log(blogs);
  });

  function saveTask() {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }

  function renderBlog(blog) {
    const div = document.createElement("div");
    div.setAttribute("data-id", blog.id);
    div.innerHTML = `<span><h3> ${blog.text}</h3></span>
  <p> ${blog.textarea}</p>
  <button> Delete</button>`;

    console.log(div);

    div.querySelector("button").addEventListener("click", () => {
      blogs = blogs.filter((b) => b.id !== blog.id);
      div.remove();
      saveTask();
    });

    gridContainer.appendChild(div);
  }
});
