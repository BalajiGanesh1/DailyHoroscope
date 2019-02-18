

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

const email = document.getElementById('email');
const psw= document.getElementById('psw');
const usersignup = document.getElementById('signup');
const usersignin = document.getElementById('signin');
const usersignout = document.getElementById('signout');


/*
console.log("email received was ",email);


//listening to signin button
if(usersignin)
{ 
    flag="entered signin";
    usersignin.onclick= function(){
    const useremail = email.value;
    const password= psw.value;
    console.log(useremail +"received....so signin onclick is detected");
    const auth= firebase.auth();
    console.log(auth);

    //signin
    const promise= auth.signInWithEmailAndPassword(useremail,password);
    promise.catch(e=> console.log(e.message));
    
}
}

//listening to signup button
if(usersignup)
{    
    flag="entered signup";
    usersignup.onclick= function(){
    const useremail = email.value;
    const password= psw.value;
    console.log(useremail +"received....so signup onclick is detected");
    const auth= firebase.auth();
    console.log(auth);
    //signup
    const promise= auth.createUserWithEmailAndPassword(useremail,password);
    promise.catch(e=> console.log(e.message));
    
    };
}
//add a real time listener

 firebase.auth().onAuthStateChanged(firebaseUser =>{

    if(firebaseUser)
    {   
        location.replace('./zodiacs.html');
        console.log(firebaseUser);
    }

    else
    { 
        console.log(flag);
        console.log("not logged in ");
    }
 });

*/
    usersignin.addEventListener('click', e => {
    
    const email1=email.value;
    const password1=psw.value;
    const auth= firebase.auth();
    const promise=auth.signInWithEmailAndPassword(email1,password1);
    promise.catch(e => console.log(e.message));
      
    });
    usersignup.addEventListener('click', e=> {
        const email1=email.value;
        const password1=psw.value;
        const auth= firebase.auth();
        const promise=auth.createUserWithEmailAndPassword(email1,password1);
        promise.catch(e => console.log(e.message));
    });
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser){
         //location.replace('./zodiacs.html')
            console.log(firebaseUser);
        }
        else
        {
            console.log('not logged in');
        }
    });

