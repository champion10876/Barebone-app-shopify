/* 
// You cannot write these code to control DOM of blocks which include this JS.
const div = window.document.createElement("div");
div.appendChild(window.document.createTextNode("Hi, this is from <b>'assets/barebone.js'</b>. &#128075"));
div.setAttribute("style", "border: 2px solid #000000;");
*/

console.log("'assets/barebone.js'");

/* --- Self weorker test --- */
self.addEventListener("message", (e) => {
    console.log("Worker test");
    console.log("Received message: ", e);
});
const myWorker = new Worker(self);
myWorker.postMessage("Hello, this is a barebone app!");

