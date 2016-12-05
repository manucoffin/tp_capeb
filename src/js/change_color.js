window.addEventListener("load", function(){
    var divs = document.getElementsByClassName('color');
    
    for(var i=0; i<divs.length; i++){
        divs[i].addEventListener("click", changeColor, false)
        divs[i].addEventListener("touchstart", changeColor, false)
    }
    
    function changeColor(ev){
        switch(ev.target.id) {
            case 'black':
                document.getElementById("stylesheet").setAttribute("href", "black.css");
                break;
            case 'pink':
                document.getElementById("stylesheet").setAttribute("href", "pink.css");
                break;
            case 'yellow':
                document.getElementById("stylesheet").setAttribute("href", "yellow.css");
                break;
            case 'green':
                document.getElementById("stylesheet").setAttribute("href", "green.css");
                break;
            default:
                break;
        }
    }
})