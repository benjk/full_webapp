function envoyerData() {
  let username = document.getElementById("inputUsername").value;
  let mdp = document.getElementById("inputPassword").value;

  if (
    username.length > 0 &&
    username.length < 255 &&
    mdp.length > 0 &&
    mdp.length < 30
  ) {
    sendDataToBdd(username, mdp);
  } else {
    alert("Non Monsieur");
  }
}

function getUsers() {
    axios
    .get("http://localhost:8081/api/utilisateurs", {
    })
    .then((res) => {
        for (const user of res.data.data){
            console.log(user)
        }
    })
    .catch(() => {
      alert("Something Went Wrong");
    });
}

function sendDataToBdd(username, mdp) {
  axios
    .post("http://localhost:8081/api/utilisateur", {
      username,
      mdp,
    })
    .then((res) => {
        console.log(res.data)
      alert("Oui Monsieur");
    })
    .catch(() => {
      alert("Something Went Wrong");
    });
}

function sendDataToBddInJS(username, mdp) {
  // Créer une nouvelle requête XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Définir la méthode HTTP (dans ce cas, POST)
  xhr.open("POST", "http://localhost:8081/api/utilisateur", true);

  // Définir le type de contenu de la requête
  xhr.setRequestHeader("Content-Type", "application/json");

  // Définir la fonction à exécuter lorsque la réponse est reçue
  xhr.onload = function () {
    // Traiter la réponse
    console.log(xhr.responseText);
  };

  // Gérer les erreurs de requête
  xhr.onerror = function () {
    console.log("Une erreur s'est produite");
  };

  // Envoyer les données
  let myData = {
    username,
    mdp,
  };
  xhr.send(JSON.stringify(myData));
}
