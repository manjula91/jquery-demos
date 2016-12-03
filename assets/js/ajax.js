var userProfile = userProfile || {};


userProfile.init = function(){
	$( ".btn-click" ).on( "click", function() {
		userProfile.getListOfUsers();
	});
}

userProfile.getListOfUsers = function(){
	$.ajax({
	  url: 'https://randomuser.me/api/?results=10',
	  dataType: 'json',
	  success: function(data) {
	    userProfile.ProcessResultsForEachUser(data.results)
	  }
	});
}

userProfile.ProcessResultsForEachUser = function(UserList){
	$.each(UserList,function(key,value){
		var userImage = value.picture['medium'];
		var sFirstName =  value.name['first'];
		var sLastName =  value.name['last'];
		var gender = value.gender;
		$(".user-list-container").append(`<li data-src="${gender}"><div><img src="${userImage}"/></div>${sFirstName} ${sLastName} </li>`)
	})
}

$(document).ready(function(){
	userProfile.init();
})