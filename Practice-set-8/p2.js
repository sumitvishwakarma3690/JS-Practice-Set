//2
function saveBookmark() {
      const title = document.getElementById("title").value;
      const url = document.getElementById("url").value;

      const bookmark = { title, url };

      let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
      bookmarks.push(bookmark);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

      document.getElementById("title").value = "";
      document.getElementById("url").value = "";

      displayBookmarks();
      return false; // prevent form from reloading the page
    }

    function displayBookmarks() {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
      const output = document.getElementById("bookmarks");
      output.innerHTML = "";

      bookmarks.forEach((bookmark, index) => {
        output.innerHTML += `
          <div class="bookmark">
            <a href="${bookmark.url}" target="_blank">${bookmark.title}</a>
            <button onclick="deleteBookmark(${index})">Delete</button>
          </div>
        `;
      });
    }

    function deleteBookmark(index) {
      let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
      bookmarks.splice(index, 1);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      displayBookmarks();
    }