var app = new Vue({
  el: '#app',
  data: {
    movies: [
      {
        title: "Fantastic Beasts",
        desc: "\"Fantastic Beasts and Where to Find Them\" takes us to a new era of J.K. Rowling's Wizarding World, decades before Harry Potter and half a world away.",
        poster: "beasts.jpg"
      },
      {
        title: "Doctor Strange",
        desc: "After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under his wing and trains him to defend the world against evil.",
        poster: "strange.jpg"
      },
      {
        title: "Arrival",
        desc: "When mysterious spacecrafts touch down across the globe, an elite team - lead by expert linguist Louise Banks (Amy Adams) - is brought together to investigate.",
        poster: "arrival.jpg"
      },
    ]
  }
});