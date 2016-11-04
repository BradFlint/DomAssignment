// create a box for user name, email, and password with a submit button. wecome user and prompt to enter login info
// Check to see if the password is 12345678 and if the username has a number. If email doesn't have number or the 
// the password is incorrect alert the user. 


document.getElementById("submit").addEventListener('click', star);

  function star(){
    var userName = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var digit = /\d/g;

    if (password !== "12345678" && !digit.test(userName)){
    	alert("Information is not correct");
    } else{
    	document.getElementsByTagName('h1')[1].innerText = "Thank you, your information is correct";  
    }
    
  

}
