var app = new Vue({
  el: '#app',
  data: {
    purchased: false,
  },
  methods: {
    purchase: function() {
      this.purchased = true;
    }
  }
});