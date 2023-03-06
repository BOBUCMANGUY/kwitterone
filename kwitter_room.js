

const firebaseConfig = {
  apiKey: "AIzaSyCSnP9Q6I9zwwy2sZYTtfzmE95O6KzAx2g",
  authDomain: "kwitter-b7075.firebaseapp.com",
  databaseURL: "https://kwitter-b7075-default-rtdb.firebaseio.com",
  projectId: "kwitter-b7075",
  storageBucket: "kwitter-b7075.appspot.com",
  messagingSenderId: "455732711850",
  appId: "1:455732711850:web:b77310949fc46c27bcdbd3"
};
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
