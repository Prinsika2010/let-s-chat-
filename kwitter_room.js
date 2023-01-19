const firebaseConfig = {
      apiKey: "AIzaSyAikt1fDrVlDXNxJ0RSDh6PVI_al1QUmQE",
      authDomain: "kwitter94-e141d.firebaseapp.com",
      databaseURL: "https://kwitter94-e141d-default-rtdb.firebaseio.com",
      projectId: "kwitter94-e141d",
      storageBucket: "kwitter94-e141d.appspot.com",
      messagingSenderId: "961347740666",
      appId: "1:961347740666:web:f219b3935cfb36118bfa43",
      measurementId: "G-53F9EBDZ59"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += rom;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
