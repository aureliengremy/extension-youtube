console.log("WORKING");

let ytb = document.querySelector("#logo-icon-container");
let boxList = document.querySelector("paper-dialog", ".ytd-popup-container");
let playlist = document.querySelector("#playlist");
let playlisting = document.querySelector("ytd-playlist-add-to-option-renderer");
let test = document.querySelector(
  ".style-scope",
  ".ytd-button-renderer",
  ".style-default",
  ".size-default"
).innerText;
// document.body.style.backgroundColor = "red";

ytb.style.width = "200px";

// boxList.style.height = "90vh";
// boxList.style.width = "60vh";
// boxList.style.top = "16.15px";
// boxList.style.left = "104.8px";

playlist.style.display = "flex";
playlist.style.flexDirection = "row";
playlist.style.flexWrap = "wrap";
playlist.style.maxHeight = "81%";
playlist.style.maxWidth = "100%";

// .style-scope .ytd-popup-container
// height: 90vh;
// width: 60vw;
// position: fixed;
// top: 16.15px;
// left: 104.8px;

//#playlist
// display: flex;
// flex-direction: row;
// flex-wrap: wrap;

// max-height: 81%;
// max-width: 100%;

// .style-scope .ytd-add-to-playlist-renderer
// display: block;
// width: 33%;

// passer par l'API Youtube pour envoyer des requetes au ROOT
