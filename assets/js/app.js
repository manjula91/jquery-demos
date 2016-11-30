var app = new Vue({
  el: '#app',

  data: {
    radius: 20,
    users: [],
  },

  created : function() {
    this.fetchUsers();
  },
  
  methods: {
    fetchUsers: function() {
      var self = this;
      fetch('/assets/data/radfaces.json')
        .then(function(response) { return response.json()
        .then( function(data) { self.users = data; } );
      })
        .catch(function(error) {
        console.log(error);
      });
    }
  }
});