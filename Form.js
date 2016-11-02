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
