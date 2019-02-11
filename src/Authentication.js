


var config = {
    apiKey: "AIzaSyCTwM0Dhnr0cQBjJpyVltVrzejI2QsOKn8",
    authDomain: "daily-horoscope-e4a39.firebaseapp.com",
    databaseURL: "https://daily-horoscope-e4a39.firebaseio.com",
    projectId: "daily-horoscope-e4a39",
    storageBucket: "daily-horoscope-e4a39.appspot.com",
    messagingSenderId: "17460378458"
};
firebase.initializeApp(config);

//getting all elements

const email = document.getElementById("email");
const psw = document.getElementById("psw");
const usersignup = document.getElementById("new-user-signup");
const usersignin = document.getElementById("user-login");
const usersignout = document.getElementById("user-logout");


usersignin.addEventListener('click', e=>{

const useremail = email.value;
const password= psw.value;
const auth= firebase.auth();

//signin
const promise= auth.signInWithEmailAndPassword(useremail,password);
promise.catch(e=> console.log(e.message));

});

usersignup.addEventListener("click", e=>{

    const useremail = email.value;
    const password= psw.value;
    const auth= firebase.auth();
    
    //signup
    const promise= auth.createUserWithEmailAndPassword(useremail,password);
    promise.catch(e=> console.log(e.message));
    
    });

//add a real time listener

 firebase.auth().onAuthStateChanged(firebaseUser =>{

    if(firebaseUser)
    {
        console.log(firebaseUser);
    }

    else
    {
        console.log("not logged in");
    }
 });



