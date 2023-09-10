

class DataStore {
    restaurants = [];

    constructor(restaurants) {
        this.restaurants = restaurants;
    }

    getRestaurants() {
        return this.restaurants;
    }

    findRestaurant(name) {
        for (var i = 0; i < this.restaurants.length; i++) {
            if (this.restaurants[i].name == name) {
                return this.restaurants[i];
            }
        }

        return null;
    }
    addResturant(restaurant){
        
        this.restaurants.push(restaurant);
    }
}

class Restaurant 
{
    name;
    password;
    address;

    constructor(name, password, address) {
        this.name = name;
        this.password = password;
        this.address = address;
    }

    login(password) {
        return this.password == password;
    }
}
store = new DataStore(
    [
        new Restaurant("Subway", "footlong", "1 Microsoft Way, Redmond WA 98052"),
    ]
);

    
      
