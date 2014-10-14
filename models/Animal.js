/*
 * models/Animal.js
 * This is an example model that defines a animal and identifies some of their
 * speaking mechanisms.
 */

var db     = require('../helpers/db.js');
var Schema = db.Schema;

var animalSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    color: String,
    breed: String
});

animalSchema.methods.findSimilarTypes = function (cb) {
    return this.model('Animal').find({ type: this.type }, cb);
};

animalSchema.methods.speak = function () {
    if (this.type === "Dog") console.log("Dog barks BOW BOW !!!");
    else if (this.type === "Cat") console.log("Cat whispers MEOW MEOW !!!");
    else console.log("Sorry, Animal type unknown !!!");
};

module.exports = db.model("Animal", animalSchema);