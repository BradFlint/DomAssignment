// display text Don't hover on me. When you arrow over it, display text Hey I said to not hover over me!

document.getElementsByTagName('h1')[0].addEventListener('mouseover', function(){
    document.getElementsByTagName('h1')[0].innerText = "Hey, I told you not to hover over me!";
});