var customerDrink = {
  name: "Latte",
  sugars: 2,
  isReady: false,
  logthis: function () {
    console.log(this);
  }
};

customerDrink.logthis();

const exampleObject = {
  logThis: function () {
    console.log("Method this: ");
    console.log(this);
  }
};

exampleObject.logThis();

//This is a reference to an object that is execute the current running function.
//https://www.youtube.com/watch?v=cwChC4BQF0Q