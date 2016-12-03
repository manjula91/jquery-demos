
// document.getElementById('hello-app')
//   .appendChild(document.createElement('h1'))
//   .innerHTML = 'hello Javascript';

// $('#hello-app').html('<h1>hello jQuery</h1>');

var app = new Vue({
  el: '#hello-app',
  data: {
    message: 'Hello Vue'
  }
});