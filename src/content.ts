import "./content.css";

console.log("content.js");

const sidebarSrc = chrome.runtime.getURL("sidebar.html");
const sidebar = new DOMParser().parseFromString(
  `<iframe class="crx" src="${sidebarSrc}"></iframe>`,
  "text/html"
).body.firstElementChild!;

document.body.append(sidebar);

export {};
