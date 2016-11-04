// this listens for the key press and converts the character code to the alphabet letter

document.addEventListener('keypress', function(event){
    document.getElementsByTagName('h1')[0].innerText = String.fromCharCode(event.which);
});