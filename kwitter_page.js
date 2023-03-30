var firebaseConfig = 
{
  apiKey: "AIzaSyA4J2iFhoooXMKvxXycr1qZddpx1Ap8idw",
  authDomain: "kwitter-web-app---part-2.firebaseapp.com",
  projectId: "kwitter-web-app---part-2",
  storageBucket: "kwitter-web-app---part-2.appspot.com",
  messagingSenderId: "268482320323",
  appId: "1:268482320323:web:4e1d063ecef2ca65230f76",
  measurementId: "G-J67YKT3XC1"
};

function logout()
{
    window.location = "index.html"
}


localStorage.getItem = "user";
localStorage.getItem = "room";
var user_name= user;
var room_name= room;

function add_msg()
{
    var msg= document.getElementById("msg_input").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like:0
    });
    document.getElementById("msg_input").value="";
    
}
