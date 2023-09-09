var usernamePasscombo = {'user':'pass','dharveen':'is gay','1':'2'};
var user = '';
var loggedIn = false;
// this funciton is called when the 'log in' button is clicked
function clicked(){
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;
    
    if (usernamePasscombo[username] === password){
            document.getElementById('output').innerHTML = 'yoo it works';
            user = username;
            loggedIn = true;
            //DO NOT DELETE IMPORTANT DO NOT DELETE
            //var x = document.getElementsByClassName('loginthing');
            //var link = document.getElementsByClassName('loginthing2');
            document.getElementById('password').innerHTML = ''
            document.getElementById('username').innerHTML = ''
            //DO NOT DELETE IMPORTANT DO NOT DELETE
            // for(var z = 0; z<link.length;z++){
            //     link[z].innerHTML = ''
            //     x[z].innerHTML = user
            // }
    }
        
    else {
        document.getElementById('output').innerHTML = 'WRONG PASSWORD';
    }
}
function createAccount(){
    var addedPassword = document.getElementById('username_create').value;
    var addedUsername = document.getElementById('password_create').value;
    usernamePasscombo[addedUsername] = addedPassword;
    console.log(usernamePasscombo)
}