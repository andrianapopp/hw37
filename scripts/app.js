const bestCountry = {
  country: "Ukraine",
  city: "Kyiv",
  forLife() {
    alert("I live in ${this.city} ${this.country}");
  },
};
const theBest = bestCountry.forLife.bind(bestCountry);
alert(theBest);
