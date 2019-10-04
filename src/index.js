import "./app/app";
import { Script } from "./app/script.ts";

const script = new Script();

console.log(script.printtext());

var portfolioPostsBtn = document.getElementById("portfolio-posts-btn");
var portfolioPostContainer = document.getElementById(
  "portfolio-posts-container"
);

function loadPosts() {
  console.log("Loading Posts...");
  var ourRequest = new XMLHttpRequest();
  ourRequest.open(
    "GET",
    "http://localhost:8888/learningWordpress/wp-json/wp/v2/posts?categories=5&order=asc"
  );
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var data = JSON.parse(ourRequest.responseText);
      createHtml(data);
      portfolioPostsBtn.remove();
    } else {
      console.log("We connected to the server, but it returned error.");
    }
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
}

function createHtml(data) {
  var htmlBlock = "";
  for (var i = 0; i < data.length; i++) {
    htmlBlock += "<h2>" + data[i].title.rendered + "</h2>";
    htmlBlock += "<p>" + data[i].content.rendered;
    +"</p>";
  }
  portfolioPostContainer.innerHTML = htmlBlock;
}

portfolioPostsBtn && portfolioPostsBtn.addEventListener("click", loadPosts);

console.log("Im a npm bundled script!!!");
