document.getElementById("submit").addEventListener("click", function () {
  const essence = document.getElementById("essence").value;
  const number = document.getElementById("number").value;
  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("error");
  const loadingDiv = document.getElementById("loading");

  if (number < 1 || number > 10) {
    errorDiv.textContent = "ID должен быть от 1 до 10.";
    errorDiv.style.display = "block";
    resultDiv.style.display = "none";
    loadingDiv.style.display = "none";
    return;
  }

  const url = `https://swapi.py4e.com/api/${essence}/${number}/`;

  resultDiv.style.display = "none";
  errorDiv.style.display = "none";
  loadingDiv.style.display = "block";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response.status);
      }
      return response.json();
    })
    .then((data) => {
      loadingDiv.style.display = "none";
      resultDiv.textContent = JSON.stringify(data, null, 2);
      resultDiv.style.display = "block";
    })
    .catch((error) => {
      loadingDiv.style.display = "none";
      if (error === 404) {
        errorDiv.textContent = "Data not found.";
      } else if (error === 500) {
        errorDiv.textContent = "Server error.";
      } else {
        errorDiv.textContent = "An unexpected error occurred.";
      }
      errorDiv.style.display = "block";
    })
    .finally(() => {
      loadingDiv.style.display = "none";
    });
});
