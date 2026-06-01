fetch("http://localhost:5000/api")
  .then(res => res.json())
  .then(data => {
    document.getElementById("msg").innerText = data.message;
  })
  .catch(error => {
    console.error(error);
    document.getElementById("msg").innerText = "Erro ao conectar com a API";
  });