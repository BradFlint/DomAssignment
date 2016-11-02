document.addEventListener('keypress', function(event){
    document.getElementsByTagName('h1')[0].innerText = String.fromCharCode(event.which);
});