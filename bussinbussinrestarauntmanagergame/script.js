
restaurant = 0
// this function is called when the 'log in' button is clicked
function login_clicked(){
    document.getElementById('output').innerHTML = '';
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;
    restaurant = store.findRestaurant(username);
    if (restaurant == null) {
        document.getElementById('output').innerHTML = 'RESTAURANT NOT FOUND';
        return;
    }

    if (!restaurant.login(password)) {
        document.getElementById('output').innerHTML = 'WRONG PASSWORD';
        return;
    }
    document.getElementById('output').innerHTML = 'SUCCESS';
    
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

function createAccount(){
    var addedPassword = document.getElementById('username_create').value;
    var addedUsername = document.getElementById('password_create').value;
    address = document.getElementById('address_create').value;
    store.addResturant(new Restaurant(addedUsername,addedPassword,address))
    console.log(store.getRestaurants());
}

function whenPredictClicked(){
    document.getElementById('foodUsed').innerHTML = ""
    document.getElementById('foodWasted').innerHTML = ""
    document.getElementById('totalOrders').innerHTML = ""
}