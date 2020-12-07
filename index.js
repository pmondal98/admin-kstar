var firebaseConfig = {
  apiKey: "AIzaSyCi2PZLvhxtVuEVjcy4bUJWMq_sS5Ca1bc",
  authDomain: "kiit-kstar-registration.firebaseapp.com",
  databaseURL: "https://kiit-kstar-registration-default-rtdb.firebaseio.com",
  projectId: "kiit-kstar-registration",
  storageBucket: "kiit-kstar-registration.appspot.com",
  messagingSenderId: "913613684707",
  appId: "1:913613684707:web:5c7d42b8bdc3332ddbead6",
  measurementId: "G-7PRX36RC96"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function(firebaseUser) {
        window.location="./view.html"
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
      
      // ...
    });    
  }
  
  function logout(){
    firebase.auth().signOut();
  }

function checkdata()
{
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      var user = firebase.auth().currentUser;
      
      var email_id = "USER :- "+user.email;
        document.getElementById("user_para").innerHTML = email_id;
  
    } else {
      // No user is signed in.
  
      document.getElementById("myTable").style.display = "none";
      window.location="./index.html";
	  	  
  
    }
  });

}

var Ref = firebase.database().ref('kstar_registration');

Ref.on('value', gotData, errData);

function gotData(data)
{    
    var getuser=data.val();    
    var keys=Object.keys(getuser);

    var table = document.getElementById("myTable");
    for(var i=0;i<keys.length; i++)
    {
  	    var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);        
        var cell6 = row.insertCell(5);        
        var cell7 = row.insertCell(6);        
        var cell8 = row.insertCell(7);        

        cell1.innerHTML = i+1;
        
        cell2.innerHTML = getuser[keys[i]].name;        
        cell3.innerHTML = getuser[keys[i]].roll;
        cell4.innerHTML = getuser[keys[i]].school;
        cell5.innerHTML = getuser[keys[i]].branch;        
        cell6.innerHTML = getuser[keys[i]].kiitemail;
        cell7.innerHTML = getuser[keys[i]].phone;
        cell8.innerHTML = getuser[keys[i]].choosedevent;        
    }

        
}

function errData(data)
{
    console.log("ERROR!!");
}