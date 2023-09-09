var usernamePasscombo = {'user':'pass','dharveen':'is gay','1':'2'};
var user = '';
var loggedIn = false;
function clicked(){
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;
    console.log(password);
    console.log(username);
    if (usernamePasscombo[username] === password){
            document.getElementById('output').innerHTML = 'yoo it works';
            user = username;
            loggedIn = true;
            
    }
        
    else {
        document.getElementById('output').innerHTML = 'wrong password nerd';
    }
}
