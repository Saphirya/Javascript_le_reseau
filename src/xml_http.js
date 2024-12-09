//xmlhttp request

const xhr = new XMLHttpRequest();
console.log(xhr.readyState);

xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
xhr.responseType = "json";
xhr.send();
console.log(xhr.readyState);
xhr.addEventListener("load", (event) => {
  console.log(event);
  const result = xhr.response;
  console.log(result);
  console.log(xhr);
});

xhr.addEventListener("error", (event) => {
  console.log(event);
});

xhr.addEventListener("progress", (event) => {
  console.log(event);
});

//post

xhr.open("POST", "https://httpbin.org/delay/2"); // Simule une réponse après 2 secondes
xhr.timeout = 1000; // Timeout fixé à 1 seconde
xhr.responseType = "json";
xhr.setRequestHeader("Content-Type", "application/json");
const todo = {
  userId: 10,
  title: "saluttt",
  completed: false,
};
xhr.send(JSON.stringify(todo));

xhr.addEventListener("timeout", (event) => {
  console.log("Timeout déclenché :", event);
});

xhr.addEventListener("readystatechange", (event) => {
  console.log("ReadyState change :", xhr.readyState);
});

xhr.addEventListener("load", () => {
  console.log("Chargement terminé :", xhr.response);
});
