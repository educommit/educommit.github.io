function signup(url) {
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
  var user = new Parse.User();
  user.set("username", email);
  user.set("password", pw);
  user.set("email", email);
  user.set("phone", phone);
  user.set("name", name);
  user.set("url", url);
  user.set("classes", classes);
  user.set("street", street);
  user.set("city", city);
  user.set("state", state);
  user.set("zip", zip);
  user.set("education", ed);
  if (document.getElementById("mentormentee").value == "mentor") {
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
}

function signin() {
  var users = Parse.Object.extend("_User");
  var query = new Parse.Query(users);
  query.find({
    success: function (results) {
      // Do something with the returned Parse.Object values
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        if (object.get('email') == $("#login-username").val().trim() && object.get('emailVerified') == false) {
          alert("Sorry, please confirm your e-mail address before going in");
          window.location = "index.html";
          Parse.User.logOut();
        }
      }
    },
    error: function (error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
  
  Parse.User.logIn($("#login-username").val().trim(), $("#login-password").val().trim(), {
    success: function (user) {
      window.location = "testhome.html";
    },
    error: function (user, error) {
      if (error.code == "101" || error.code == 101) {
        alert("Sorry, please check your credentials to make sure they are accurate");
      }
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
$('#fileselect').bind("change", function (e) {
  var files = e.target.files || e.dataTransfer.files;
  // Our file var now holds the selected file
  file = files[0];
});

// This function is called when the user clicks on Upload to Parse. It will create the REST API request to upload this image to Parse.
function signuporiginal() {
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
        signup(data.url);
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
  else {
    userdata();
  }
}

function userdata() {
  var user = Parse.User.current();
  $(".infodiv").append("<img src=\"" + user.get('url') + "\" height=\"200\" width=\"200\" style=\"border-radius:50%\">");
  $("#nameofperson").append("" + user.get('name') + "");
  $(".infodiv").append("<h3>" + user.get('rating') + "/5 (" + user.get('numrating') + " ratings)");
  document.getElementById("profpicbg").style.background = "url(" + user.get('url') + ") no-repeat center center";
  document.getElementById("profpicbg").style.backgroundSize = "cover";
  $("#phone").append(user.get('phone'));
  $("#email").append(user.get('email'));
  $("#address").append(user.get('street') + ", " + user.get('city') + ", " + user.get('state') + ", " + user.get('zip'))
  $("#featurestext").append(user.get('classes'));
  $(".infodiv").append("");
  $("#education").append(user.get('education'));
  console.log(user.get('classes'));
  var users = Parse.Object.extend('_User');
  var query = new Parse.Query(users);
  query.find({
    success: function (results) {
      // Do something with the returned Parse.Object values
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        if (object.get('Mentor') != user.get('Mentor')) {
          $("#list").append('<section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp" id="aboutme"><header class="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color-text--white" id="profpicbg" style="background-image:url(' + object.get('url') + ');background-size:cover"></header><div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone"><div class="mdl-card__supporting-text"><h4 id="featureshead">' + object.get('name') + '</h4><p id="featurestext">' + object.get('classes') + '</p></div></div><div class="mdl-card__actions"><a href="user.html#' + object.id + '" class="mdl-button">View more details</a></div></section>');
        }
      }
    },
    error: function (error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}

function logout() {
  Parse.User.logOut();
  window.location = "testhome.html";
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
  query.find({
    success: function (results) {
      // Do something with the returned Parse.Object values
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        if (object.id == id) {
          $(".infodiv").append("<img src=\"" + object.get('url') + "\" height=\"200\" width=\"200\" style=\"border-radius:50%\">");
          $("#nameofperson").append("" + object.get('name') + "");
          $(".infodiv").append("<h3>" + object.get('rating') + "/5 (" + object.get('numrating') + " ratings)");
          document.getElementById("profpicbg").style.background = "url(" + object.get('url') + ") no-repeat center center";
          document.getElementById("profpicbg").style.backgroundSize = "cover";
          $("#phone").append(object.get('phone'));
          $("#email").append(object.get('email'));
          $("#address").append(object.get('street') + ", " + object.get('city') + ", " + object.get('state') + ", " + object.get('zip'))
          $("#featurestext").append(object.get('classes'));
          $(".infodiv").append("");
          $("#education").append(object.get('education'));
          initialize(object.get('street') + ", " + object.get('city') + ", " + object.get('state') + ", " + object.get('zip'), user.get('street') + ", " + user.get('city') + ", " + user.get('state') + ", " + user.get('zip'))
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
        user.set("street", street);
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
    $("#nav1").append('<a href="#mentorlist" class="mdl-navigation__link">Mentees</a>');
    $("#nav1").append('<a href="#mentorlist" class="mdl-navigation__link" onclick="logout()">Log Out</a>');
  }
  else {
    $("#nav").append('<a href="#mentorlist" class="mentorormentee mdl-layout__tab">Mentors</a>');
    $("#nav").append('<a class="mdl-layout__tab" onclick="logout()">Log Out</a>');
    $("#nav1").append('<a href="#mentorlist" class="mdl-navigation__link mentorormentee">Mentors</a>');
    $("#nav1").append('<a href="#mentorlist" class="mdl-navigation__link" onclick="logout()">Log Out</a>');
  }
}

function editpic()
{

}

function editbio()
{
  var bio = prompt("Please enter a new bio");
  var user = Parse.User.current();
  user.set("classes",bio);
}

function locate() {
    // IMPORTANT: Fill in your client key
    var clientKey = "js-hP9EKHB7uh5LmiRRg1ovqVEGwpyIxwlPlut5b5dGmjsJBkASlZoLU2srr09ZwvPS";
    
    var cache = {};
    var container = $("#example2");
    var errorDiv = container.find("div.text-error");
    
    /** Handle successful response */
    function handleResp(data)
    {
      // Check for error
      if (data.error_msg)
        alert(data.error_msg);
      else if ("distance" in data)
      {
        // Show div
        container.find("div.distance").show()
        // Set distance
        .find("span.distance").text(data.distance + " miles");
      }
    }
    // Get zip code
      var zipcode1 = prompt("Please enter zip code 1").substring(0, 5);
      var zipcode2 = prompt("Please enter zip code 2").substring(0, 5);
      if (zipcode1.length == 5 && /^[0-9]+$/.test(zipcode1) && zipcode2.length == 5 && /^[0-9]+$/.test(zipcode2))
      {
        // Clear error
        errorDiv.empty();
        
        // Check cache
        var cacheKey = zipcode1 + '-' + zipcode2;
        if (cacheKey in cache)
        {
          handleResp(cache[cacheKey]);
        }
        else
        {
          // Build url
          var url = "https://www.zipcodeapi.com/rest/"+clientKey+"/distance.json/" + zipcode1 + "/" + zipcode2 + "/mile";
          
          // Make AJAX request
          $.ajax({
            "url": url,
            "dataType": "json"
          }).done(function(data) {
            handleResp(data);
            
            // Store in cache
            cache[cacheKey] = data;
          }).fail(function(data) {
            if (data.responseText && (json = $.parseJSON(data.responseText)))
            {
              // Store in cache
              cache[cacheKey] = json;
              
              // Check for error
              if (json.error_msg)
                alert(json.error_msg);
            }
            else
              alert('Request failed.');
          });
        }
      }
  }