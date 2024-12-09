//get data from api

//avec response.json()
const promesse = fetch("https://jsonplaceholder.typicode.com/users");

promesse
  .then(async (response) => {
    console.log(response);
    try {
      const users = await response.json();
      console.log(users);
    } catch (e) {
      console.log(e);
    }
  })
  .catch((error) => console.log(error));

//avec response.text()
const promesse2 = fetch("https://jsonplaceholder.typicode.com/users");
promesse2.then((response) => {
  const promesseUsers2 = response.text();
  promesseUsers2.then((users) => {
    console.log(users);
  });
});
