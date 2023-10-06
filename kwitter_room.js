//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBVPLKRlOUo7SI7_x98fPVEX1L17Aug2D0",
  authDomain: "band-chat-4d03f.firebaseapp.com",
  databaseURL: "https://band-chat-4d03f-default-rtdb.firebaseio.com",
  projectId: "band-chat-4d03f",
  storageBucket: "band-chat-4d03f.appspot.com",
  messagingSenderId: "40247431996",
  appId: "1:40247431996:web:3d2cd6e83bd00898768439",
  measurementId: "G-L3BZWG2QFR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
