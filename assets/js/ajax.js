$( document ).ready(function() {
    $( ".btn-click" ).on( "click", function() {
  		$.ajax({
		  url: 'https://randomuser.me/api/?results=10',
		  dataType: 'json',
		  success: function(data) {
		    $.each(data.results,function(key,value){
		    	var userImage = value.picture['medium'];
		    	var sFirstName =  value.name['first'];
		    	var sLastName =  value.name['last'];
		    	var gender = value.gender;
		    	$(".user-list-container").append(`<li data-src="${gender}"><div><img src="${userImage}"/></div>${sFirstName} ${sLastName} </li>`)
		    })
		  }
		});
	});

});