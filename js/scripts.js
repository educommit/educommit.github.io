function signin() {
	var users = Parse.Object.extend("_User");
	var query = new Parse.Query(users);
	query.ascending("name");
	query.limit(5);
	query.find({
		success: function (results) {
		  // Do something with the returned Parse.Object values
		  a = true;
		  for (var i = 0; i < results.length; i++) {
			var object = results[i];
			if (object.get('email') == document.forms['login']['email'].value.trim() && object.get('emailVerified') == false) {
				$('.cd-user-modal').find('#cd-login').find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible')
				$("#error").html('Please confirm your email before proceeding');
				a = false;
				break;
			}
		  }
		  if(a)
		  {
			Parse.User.logIn(document.forms['login']['email'].value.trim(), document.forms['login']['password'].value.trim(), {
				success: function (user) {
					window.location = "testhome.html";
				},
				error: function (user, error) {
					if (error.code == "101" || error.code == 101) {
						$('.cd-user-modal').find('#cd-login').find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible')
						$("#error").html('Something went wrong; Please check your credentials');
					}
				}
			});
		  }
	},
	error: function (error) {
		alert("Error: " + error.code + " " + error.message);
	}
});
}
var file;

function handleFileSelect(e) {
	var files = e.target.files || e.dataTransfer.files;
  // Our file var now holds the selected file
  file = files[0];
}


// Set an event listener on the Choose File field.
$('#files').bind("change", function (e) {
	var files = e.target.files || e.dataTransfer.files;
  // Our file var now holds the selected file
  file = files[0];
  console.log('swag');
});

if(window.location.href.indexOf('testhome.html')>-1)
{
	userdata();
}

// This function is called when the user clicks on Upload to Parse. It will create the REST API request to upload this image to Parse.
function signuporiginal() {
	var pw = document.forms['signup']['password'].value;
	var pwc = document.forms['signup']['password-confirm'].value;
	pw = document.forms['signup']['password'].value.trim();
	email = document.forms['signup']['email'].value.trim();
	fname = document.forms['signup']['FName'].value.trim();
	lname = document.forms['signup']['LName'].value.trim();
	classes = document.forms['signup']['bio'].value.trim();
	ed = document.forms['signup']['education'].value.trim();
	console.log(pw);
	if (pw == pwc) {
		var file = document.getElementById('files').files[0];
		var serverUrl = 'https://api.parse.com/1/files/' + file.name;
		$.ajax({
			type: "POST",
			beforeSend: function (request) {
				request.setRequestHeader("X-Parse-Application-Id", appid);
				request.setRequestHeader("X-Parse-REST-API-Key", restapi);
				request.setRequestHeader("Content-Type", file.type);
			},
			url: serverUrl,
			data: file,
			processData: false,
			contentType: false,
			success: function (data) {
				console.log(data.url);
				url = data.url;
				name = fname + " " + lname;
				var user = new Parse.User();
				user.set("username", email);
				user.set("password", pw);
				user.set("email", email);
				user.set("name", name);
				user.set("url", url);
				user.set("classes", classes);
				user.set("education", ed);
				if (document.forms['signup']['mentor'].value == "mentor") {
					user.set("Mentor", true);
				}
				else {
					user.set("Mentor", false);
				}
				user.signUp(null, {
					success: function (user) {
						window.location = "testhome.html";
					},
					error: function (user, error) {
			  // Show the error message somewhere and let the user try again.
			  alert("Error: " + error.code + " " + error.message);
			}
		});
			},
			error: function (data) {
				var obj = jQuery.parseJSON(data);
				alert(obj.error);
			}
		});
}
else {
	alert("Sorry, your passwords didn't match");
}
}

function validate() {
	var user = Parse.User.current();
	if (!user) {
		window.location = "index.html";
	}
}

function userdata() {
	var user = Parse.User.current();
	console.log(user.get('classes'));
	var users = Parse.Object.extend('_User');
	var query = new Parse.Query(users);
	query.find({
		success: function (results) {
	  // Do something with the returned Parse.Object values
	  var people = [];
	  var users = [];
	  for (var i = 0; i < results.length; i++) {
		var object = results[i];
		if (object.get('Mentor') != user.get('Mentor')) {
			$("#main").append('<article class="thumb" id="'+object.id+'"><a href="user.html#'+object.id+'"" class="image"><div style="background: url('+object.get('url')+');background-size:cover;background-position:center;height:100%;width:100%;z-index:999"></div></a><h2 style="background:rgba(192,192,192,0.9)">'+object.get('name')+'</h2><p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p></article>');
		}
	  }
	},
	error: function (error) {
		alert("Error: " + error.code + " " + error.message);
	}
	});
	if(user.get('Mentor'))
	{
		$("#title").html('<a href="index.html"><strong>EduCommit &middot; Mentees</strong></a>')
	}
	else
	{
		$("#title").html('<a href="index.html"><strong>EduCommit &middot; Mentors</strong></a>')	
	}
}

function logout() {
	Parse.User.logOut();
	window.location = "index.html";
}

function checkSubmitin(e) {
	if (e && e.keyCode == 13) {
		signin();
	}
}

function checkSubmitup(e) {
	if (e && e.keyCode == 13) {
		signuporiginal();
	}
}

function checkSubmitupmentee(e) {
	if (e && e.keyCode == 13) {
		signupmentee();
	}
}

function checkSubmitinmentee(e) {
	if (e && e.keyCode == 13) {
		signin();
	}
}
function data() {
	var id = window.location.hash.substr(1);
	if (id == "") {
		window.location = "index.html"
	}
	var users = Parse.Object.extend('_User');
	var query = new Parse.Query(users);
	var user = Parse.User.current();
	query.find({
		success: function (results) {
	  // Do something with the returned Parse.Object values
	  var people;
	  var users;
	  var n;
	  for (var i = 0; i < results.length; i++) {
		var object = results[i];
		if (object.id == id) {
			$(".infodiv").append("<img src=\"" + object.get('url') + "\" height=\"200\" width=\"200\" style=\"border-radius:50%\">");
			$("#nameofperson").append("" + object.get('name') + "");
			$(".infodiv").append("<h3>" + object.get('rating') + "/5 (" + object.get('numrating') + " ratings)");
			document.getElementById("profpicbg").style.background = "url(" + object.get('url') + ") no-repeat center center";
			document.getElementById("profpicbg").style.backgroundSize = "cover";
			$("#email").append(object.get('email'));
			$("#featurestext").append(object.get('classes') + "<br>");
			$(".infodiv").append("");
			$("#education").append(object.get('education'));
			n = object.id;
			document.getElementById('startchat').href = 'interact.html#'+object.id
		}
	  }
		
	},
	error: function (error) {
		console.log("Error: " + error.code + " " + error.message);
	}
});
}

function signupmentee() {
	var pw = $("#signup-password").val();
	var pwc = $("#login-passwordc").val();
	console.log(pw);
	if (pw == pwc) {
		var serverUrl = 'https://api.parse.com/1/files/' + file.name;
		$.ajax({
			type: "POST",
			beforeSend: function (request) {
				request.setRequestHeader("X-Parse-Application-Id", 'Hx13dvXcISIEDbus38pp4Dbat8lyHdCJrrqTIvsy');
				request.setRequestHeader("X-Parse-REST-API-Key", 'obRFvpZMz6ThjQcW7aLZjp175DtD9wxIbrP8IG1k');
				request.setRequestHeader("Content-Type", file.type);
			},
			url: serverUrl,
			data: file,
			processData: false,
			contentType: false,
			success: function (data) {
				console.log(data.url);
				pw = $("#signup-password").val().trim();
				email = $("#login-email").val().trim();
				phone = $("#login-phone").val().trim();
				fname = $("#login-fname").val().trim();
				lname = $("#login-lname").val().trim();
				classes = $("#login-classes").val();
				street = $("#login-street").val();
				city = $("#login-city").val();
				state = $("#login-state").val();
				zip = $("#login-zip").val();
				ed = $("#login-education").val();
				name = fname + " " + lname;
				alert(name);
				var user = new Parse.User();
				user.set("username", email);
				user.set("password", pw);
				user.set("email", email);
				user.set("phone", phone);
				user.set("name", name);
				user.set("url", data.url);
				user.set("classes", classes);
				user.set("city", city);
				user.set("state", state);
				user.set("zip", zip);
				user.set("education", ed);
				user.set("Mentor", false);
				user.signUp(null, {
					success: function (user) {
						window.location = "testhome.html";
					},
					error: function (user, error) {
			// Show the error message somewhere and let the user try again.
			alert("Error: " + error.code + " " + error.message);
		}
	});
			},
			error: function (data) {
				var obj = jQuery.parseJSON(data);
				alert(obj.error);
			}
		});
}
else {
	alert("Sorry, your passwords didn't match");
}
}

function mentormentee() {
	var user = Parse.User.current();
	if (user.get('Mentor')) {
		$("#nav").append('<a href="#mentorlist" class="mentorormentee mdl-layout__tab">Mentees</a>');
		$("#nav").append('<a class="mdl-layout__tab" onclick="logout()">Log Out</a>');
		$("#nav1").append('<a href="#mentorlist" class="mdl-navigation__link" id="listem" onclick="listem()">Mentees</a>');
		$("#nav1").append('<a href="#mentorlist" class="mdl-navigation__link" onclick="logout()">Log Out</a>');
	}
	else {
		$("#nav").append('<a href="#mentorlist" class="mentorormentee mdl-layout__tab">Mentors</a>');
		$("#nav").append('<a class="mdl-layout__tab" onclick="logout()">Log Out</a>');
		$("#nav1").append('<a href="#mentorlist" class="mdl-navigation__link mentorormentee" id="listem" onclick="listem()">Mentors</a>');
		$("#nav1").append('<a href="#mentorlist" class="mdl-navigation__link" onclick="logout()">Log Out</a>');
	}
}

function editpic() {

}

function editbio() {
	var bio = prompt("Please enter a new bio");
	var user = Parse.User.current();
	user.save("classes", bio);
}

function callback(response, status) {
	alert('swag')
}

function listem() {
	$("#mentorlist").addClass("is-active");
	$("#overview").removeClass("is-active");
}

function gohome() {
	$("#overview").addClass("is-active");
	$("#mentorlist").removeClass("is-active");
}

var user = Parse.User.current();
var enduser = window.location.hash.substr(1);
var myDataRef = new Firebase('https://educommit.firebaseIO.com/');

myDataRef.on('child_added', function (snapshot) {
	var message = snapshot.val();
	if ((message.email == user.id && message.name == enduser) || (message.name == user.id && message.email == enduser)) {
		if (message.name == user.id) {
			displayChatMessage("You", message.text, message.email);
		}
		else {
			var UserInfo = Parse.Object.extend("_User");
			var query = new Parse.Query(UserInfo);
			query.get(window.location.hash.substr(1), {
				success: function (object) {
					recname = object.get('name');
					displayChatMessage(recname, message.text, message.email);
				},
				error: function (object, error) {
					alert("Sorry, something went wrong")
				}
			});
		}
	}
});

var UserInfo = Parse.Object.extend("_User");
var query = new Parse.Query(UserInfo);
query.get(window.location.hash.substr(1), {
	success: function(object) {
		name = object.get('name');
		$("#chattingwith").append("Chatting with "+name)
	},  
	error: function(object, error)
	{
		location.reload();
	}
})

function displayChatMessage(name, text, recipient) {
	var user = Parse.User.current;
	if(name == "You" && recipient == window.location.hash.substr(1))
	{
		$("#messagesDiv").append("<div class='blue' align='left'>"+text+"</div><br>")
	} 
	else if(name == enduser && recipient == user.id)
	{
		$("#messagesDiv").append("<div class='grey' align='right'>"+text+"</div><br>")
	}
	$('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
};

$('#messageInput').keypress(function (e) {
	if (e.keyCode == 13) {
		var name = user.id;
		var recipient = enduser;
		var text = $('#messageInput').val();
		myDataRef.push({ name: name, text: text, email: recipient });
		alert(enduser)
	}
});

function contains(parent, child)
{
	if(parent.indexOf(child)>-1)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function usersearch()
{
	var UserInfo = Parse.Object.extend("_User");
	var query = new Parse.Query(UserInfo);
	var user = Parse.User.current();
	console.log($('#getusers').val());
	query.find({
		success: function (results) {
	  		for (var i = 0; i < results.length; i++) {
				var object = results[i];
				var a = $("#getusers").val().toLowerCase().trim()
				if(object.get('name').toLowerCase().trim().indexOf(a.toLowerCase().trim()) > -1 || object.get('education').toLowerCase().trim().indexOf(a.toLowerCase().trim()) > -1 || object.get('classes').toLowerCase().trim().indexOf(a.toLowerCase().trim()) > -1)
				{
					console.log(object.get('name'))
					$("#"+object.id).show();
				}
			}
	  	},
		error: function (error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
}





