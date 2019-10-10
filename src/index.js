import "./app/app";
import { loadRequest, saveRequest } from "./app/script.ts";

const loadPostBtn = document.getElementById("load-post-btn");
const addBtn = document.querySelector("#quick-add-button");

if (loadPostBtn) loadPostBtn.addEventListener("click", () => loadRequest("5"));

if (addBtn) {
  addBtn.addEventListener("click", () => {
    var newPostData = {
      "title": document.querySelector(".admin-quick-add [name='title']").value,
      "content": document.querySelector(".admin-quick-add [name='content']").value,
      "status": "publish"
    }
    saveRequest(newPostData);
  });
}

console.log("Im a npm bundled script!!!");
