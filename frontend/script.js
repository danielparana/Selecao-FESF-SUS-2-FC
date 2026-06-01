fetch("http://localhost:5000/api")
  .then(res => res.json())
  .then(data => {
    document.getElementById("msg").innerText = data.message;
  });