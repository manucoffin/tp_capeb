window.addEventListener("load", function(){
    var divs = document.getElementsByClassName('color');
    
    for(var i=0; i<divs.length; i++){
        divs[i].addEventListener("click", function(ev){
            switch(ev.target.id) {
                case 'black':
                    document.getElementById("stylesheet").setAttribute("href", "black.css");
                    console.log(ev.target.id);
                    break;
                case 'pink':
                    document.getElementById("stylesheet").setAttribute("href", "pink.css");
                    console.log(ev.target.id);
                    break;
                case 'yellow':
                    document.getElementById("stylesheet").setAttribute("href", "yellow.css");
                    console.log(ev.target.id);
                    break;
                case 'green':
                    document.getElementById("stylesheet").setAttribute("href", "green.css");
                    console.log(ev.target.id);
                    break;
                default:
                    break;
            }
        })
    }
})