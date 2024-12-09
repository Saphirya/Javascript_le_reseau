//formadata avec index.html
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  console.log(formData);
  formData.append("name", "123");
  formData.set("email", "tintin@gmail.com");
  console.log(formData.get("email"));

  for (let pair of formData) {
    console.log(pair);
  }
  fetch("/test", {
    method: "POST",
    body: formData,
  });
});
