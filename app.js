// requires.
const mongoose = require("mongoose");

// creating connetion with mongodb database.
//! Add the database collection name at the end of this link
mongoose.connect("mongodb://localhost:27017/your database name here", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// create mongoose schema.
const fruitSchema = new mongoose.Schema({
  // validation check.
  name: {
    type: String,
    required: [true, "Name field is empty!"],
  },
  rating: Number,
  review: String,
});

// create mongoose model for the above schema.
const Fruit = new mongoose.model("Fruit", fruitSchema);

// add data document to above model.
const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a friut",
});

// save the data to database.
// fruit.save();

// new schema for people.
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// create model for the peoson schema.
const Person = new mongoose.model("Person", personSchema);

// add data document to person model.
const person = new Person({
  name: "John",
  age: 37,
});

// save it.
// person.save();

// add more fruits to Fruit model.
// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "I didn't hear about it before",
// });

// const orange = new Fruit({
//   name: "Orange",
//   rating: 4,
//   review: "I love it!",
// });

// const banana = new Fruit({
//   name: "Banana",
//   rating: 3,
//   review: "Mix it in the milk and make banana shake then it is amazing",
// });

// I have comment it, because everytime where app.js file will run these data will be added again. so be sure to use it when needed.
// Fruit.insertMany([kiwi, orange, banana], function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Successed!");
//   }
// });

// Read the data from Fruit model.
Fruit.find(function (error, fruits) {
  if (error) {
    console.log(error);
  } else {
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
    mongoose.connection.close();
  }
});

// update the fruit model data.
Fruit.updateOne(
  //! add the collection id here.
  { _id: "collection id here" },
  { name: "Peach" },
  function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Successfully updated!");
    }
  }
);

// delete the data from fruit mode.
//! add the collectiono id here.
Fruit.deleteOne({ _id: "collection id here" }, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Successfully deleted!");
  }
});
