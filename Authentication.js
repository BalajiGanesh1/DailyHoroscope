
    // FirebaseUI config.
var uiConfig = {
        signInSuccessUrl: 'cards.html ',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,

        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: 'www.google.com',
        // Privacy policy url/callback.
        privacyPolicyUrl: function() {
            window.location.assign('www.youtube.com');
        }
    };

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);


var logout =document.getElementById("btnLogout");

logout.addEventListener('click',logoutUser=>{firebase.auth().signOut();});

//Real time login/logout tracking
firebase.auth().onAuthStateChanged(fireBaseUser=>{
    
    if(fireBaseUser)
        {
            console.log(fireBaseUser+ "is loggedin");
            btnLogout.classList.remove('hide');
            var name= fireBaseUser.name;
            console.log(name);
        }
    
    else
        {
            console.log('not logged in ');
            btnLogout.classList.add('hide');
        }
}); 