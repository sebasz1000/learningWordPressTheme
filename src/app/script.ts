export class Script {
  scripttext: string | undefined;
  constructor() {
    this.scripttext = "Vengo de un archivo Typescript";
  }

  printtext(): string | undefined {
    return this.scripttext;
  }
}
var portfolioPostContainer = document.getElementById(
  "portfolio-posts-container"
);

const displayContent = data => {
  var htmlBlock = "";
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    htmlBlock += "<h2>" + data[i].title.rendered + "</h2>";
    htmlBlock += "<p>" + data[i].content.rendered;
    +"</p>";
  }
  portfolioPostContainer.innerHTML = htmlBlock;
};

//make API request to wordpress
export const loadRequest = (postCategory: string) => {
  var request = new XMLHttpRequest();
  request.open(
    "GET",
    wpApiSettings.siteUrl + "/wp-json/wp/v2/posts?categories=" +
    postCategory +
    "&order=asc"
  );
  request.onload = (): any => {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      console.log(typeof data);
      console.log(data);
      displayContent(data);
      return data;

      //loadPostBtn.remove();
    } else {
      console.log("We connected to the server, but it returned error.");
      return "We connected to the server, but it returned error.";
    }
  }; //close request.onload
  request.onerror = () => console.log("Connection error");
  request.send();
};

export const saveRequest = (data: any) => {
  console.log(data);
  var request = new XMLHttpRequest();
  var requestResult = "";
  request.open(
    "POST",
    wpApiSettings.siteUrl + "/wp-json/wp/v2/posts"
  );
  request.setRequestHeader("X-WP-Nonce", wpApiSettings.nonce);
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  request.send(JSON.stringify(data));
  request.onreadystatechange = () => {
    if (request.readyState == 4) { //the request got complete
      request.status == 201 ? alert("success!") : alert("fail");
      document.querySelector(".admin-quick-add [name='title']").value = '';
      document.querySelector(".admin-quick-add [name='content']").value = '';
    }
  }

};
