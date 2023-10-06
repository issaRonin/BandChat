//YOUR FIRE BASE LINKS
// Your web app's Firebase configuration
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
         room_name = localStorage.getItem("room_name");
   
   function send()
   {
     
     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");
     msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
      });
   
     document.getElementById("msg").value = "";
   }
   
   function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
            firebase_message_id = childKey;
            message_data = childData;
   //Start code
            console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
            like = message_data['like'];
            name_with_tag = "<h4> "+ name +"<img class='user_tick' src='guitar.png'></h4>";
            message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
   like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
            span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
   
           row = name_with_tag + message_with_tag +like_button + span_with_tag;       
           document.getElementById("output").innerHTML += row;
   //End code
         } });  }); }
   getData();
   
   function updateLike(message_id)
   {
     console.log("clicked on like button - " + message_id);
         button_id = message_id;
         likes = document.getElementById(button_id).value;
         updated_likes = Number(likes) + 1;
         console.log(updated_likes);
   
         firebase.database().ref(room_name).child(message_id).update({
               like : updated_likes  
          });
   
   }
   
   function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location.replace("index.html");
   }
   