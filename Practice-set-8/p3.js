console.log("Q2 solution using event listeners")

//3

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookmarkForm");
  const titleInput = document.getElementById("bookmarkTitle");
  const urlInput = document.getElementById("bookmarkURL");
  const bookmarkList = document.getElementById("bookmarkList");

  // Load bookmarks on page load
  displayBookmarks();

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = titleInput.value.trim();
    const url = urlInput.value.trim();

    if (!title || !url) {
      alert("Please fill out both fields.");
      return;
    }

    const bookmark = { title, url };

    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    titleInput.value = "";
    urlInput.value = "";

    displayBookmarks();
  });

  // Function to display bookmarks
  function displayBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarkList.innerHTML = "";

    bookmarks.forEach((bookmark, index) => {
      const div = document.createElement("div");
      div.className = "bookmark";

      const link = document.createElement("a");
      link.href = bookmark.url;
      link.target = "_blank";
      link.textContent = bookmark.title;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        deleteBookmark(index);
      });

      div.appendChild(link);
      div.appendChild(deleteBtn);
      bookmarkList.appendChild(div);
    });
  }

  // Delete bookmark by index
  function deleteBookmark(index) {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    displayBookmarks();
  }
});
