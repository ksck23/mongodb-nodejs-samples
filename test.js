var Animal = require('./models/Animal.js');

var doggy = new Animal({ name: "Blacky", type: "Dog", color: "Black", breed: "Labrador" });
var kitty = new Animal({ name: "Lighty", type: "Cat", color: "White" });

// save a new dog into the database
doggy.save(function (err) {
    if (err) console.log(err);
    else console.log('Dog : ' + doggy.name + ' successfully saved.');
});

// find all other dogs in the database
doggy.findSimilarTypes(function (err, dogs) {
    console.log(dogs);
});

// ask the dog to speak it's language
doggy.speak(function (err, text) {
    console.log(text);
});

// save a new dog into the database
kitty.save(function (err) {
    if (err) console.log(err);
    else console.log('Cat : ' + kitty.name + ' successfully saved.');
});

// ask the cat to speak it's language
kitty.speak(function (err, text) {
    console.log(text);
});

// find any animal by it's Id
Animal.findById("543adf311690a3107229d7ec", function (err, animal) {
    console.log(animal);
});