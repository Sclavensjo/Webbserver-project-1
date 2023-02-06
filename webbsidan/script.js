function visalosen() {
    var x = document.getElementById("Lösenord");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

function isright(input,logins){
  if (input == logins){
    return("inloggad")
  } else {
    return("fel")
  }
}


$(() => {
  $("#send").click(() => {
      var login = {username: $("#Användarnamn").val(), password: $("#Lösenord").val()};
      $.get("http://localhost:3000/logins",(data)=>{
        data.forEach(element => {
          console.log(isright(login,element));
        }); 
        });
      }
    )
});


