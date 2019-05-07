console.log("Firebase workshop 22 03 2019");

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCCeBfemoik54zYroN-_0ZED_lvhAGbovk",
    authDomain: "testproject01-1fc5f.firebaseapp.com",
    databaseURL: "https://testproject01-1fc5f.firebaseio.com",
    projectId: "testproject01-1fc5f",
    storageBucket: "testproject01-1fc5f.appspot.com",
    messagingSenderId: "133422129247"
  };
  firebase.initializeApp(config);

  // create a collection(NoSQL) (table (SQL)) in our Firabase database
  var users = firebase.database().ref();



document.getElementById("submit").addEventListener('click', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    
    saveUser(firstName, lastName,age, email);

    alertUser();
    
    document.getElementById("formulaire").reset();


}

function saveUser(firstName, lastName, age, email) {
    var newUser = users.push();
    newUser.set({
        prenom: firstName,
         nom: lastName,
         age: age,
         emailAddress: email
    }) 
}

function alertUser() {
    document.getElementById("alert").style.display = "block";
    setTimeout(function(){ 
        document.getElementById("alert").style.display = "none"; 
    } , 3000)
}
