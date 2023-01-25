const myKid = {
  name: "Alfred",
  age: 3,
  energy: ["Calm", "Energetic", "Crazy"],
  loud: true,
  tellHimToCalmDown: function () {
    if (myKid.loud === false) {
      return "Ok, I am calm";
    } else {
      return "SCREEEEEECH!";
    }
  },
};

console.log(myKid.tellHimToCalmDown);
