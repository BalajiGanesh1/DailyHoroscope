//Firebase initialisiation


 
  var config = {
    apiKey: "AIzaSyCTwM0Dhnr0cQBjJpyVltVrzejI2QsOKn8",
    authDomain: "daily-horoscope-e4a39.firebaseapp.com",
    databaseURL: "https://daily-horoscope-e4a39.firebaseio.com",
    projectId: "daily-horoscope-e4a39",
    storageBucket: "daily-horoscope-e4a39.appspot.com",
    messagingSenderId: "17460378458"
  };
  firebase.initializeApp(config);
  
  var db = firebase.firestore(); //db contains the functions requied to update firestore

/* ******STANDARD STEPS TO INIT FIREBASE,FIRESTORE AND
OBTAINING FUNC TO UPDATE DB ENDS*************** */
 
 
  const Health= document.getElementById("Health");
  const Wealth= document.getElementById("Wealth");
  const Career= document.getElementById("Career");
  const Love= document.getElementById("Love");

 
  //RECEIVING DATA FROM FIRESTORE 
  var docRef = db.collection("Date wise predictions").doc("Jan1");

  docRef.get().then(function(doc) {
      if (doc.exists) {
          var str=doc.data().Aries;
          Wealth.innerHTML=str;
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

  //ADDING DATA

  