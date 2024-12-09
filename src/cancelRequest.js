const controller = new AbortController();
console.log(controller);

controller.signal.addEventListener("abort", (event) => {
  console.log(event);
});

const promesse = fetch("https://jsonplaceholder.typicode.com/users", {
  signal: controller.signal,
});

const promesse2 = fetch("https://jsonplaceholder.typicode.com/users", {
  signal: controller.signal,
});
controller.abort();

promesse
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
