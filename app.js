const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB',
    { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});


const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
    name: 'Apple',
    rating: 7,
    review: "Pretty is good"

});

//fruit.save();

const peopleSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true, 
        required:[ true, "you have insert your name"]


    },
    age: Number,
    favouriteFruits: fruitSchema
});

const People = mongoose.model('people', peopleSchema);

const sam = new People({
    name: "Sam",
    age: 24,

});

const ram = new People({
    name: "Ram",
    age: 24,

});

const rahim = new People({
    name: "Rahim",
    age: 24,

});


const heo = new People({
    name: "sys",
    age: 64,
    favouriteFruits: fruit

});

//heo.save();
// People.insertMany([sam, ram, rahim, heo],

//  function (err){
// if(err){
//     console.log(err);
// }
// else{
//  console.log("Suceesfully added multiple item");
// }

//});
//people.save();


People.find(function (err, result) {
    if (err) {
        console.log(err);
    }
    else {
        result.forEach(function (value) {
           console.log(value);
        }
        );
        mongoose.connection.close();
    }
});


// People.deleteMany({ name: 'Hyus'}, function (err){
// if(err){
//     console.log(err);
// }
// else{
//     console.log("succesfully deleted");
//     //mongoose.connection.close();
// }

// });

People.updateOne({ name: 'John' }, {favouriteFruits: fruit}, function (err){

if(err){
    console.log(err);
}
else {
console.log("Suceefully update");
    mongoose.connection.close();
}


})
