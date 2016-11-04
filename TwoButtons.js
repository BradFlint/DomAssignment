// make 2 buttons that when clicked argue about who is right 

document.getElementById("button1").addEventListener('click', function(){
    document.getElementById('words').innerHTML= "I am right";
});

document.getElementById("button2").addEventListener('click', function(){
    document.getElementById('words').innerHTML = "No, I am right";
});