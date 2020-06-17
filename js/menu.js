window.onload = main();
var cont = 1;

function main(){   
    document.getElementsByClassName('menu-bar')[0].onclick = function(){
        if(cont == 1){
            /*jQuery do with js vanilla*/
            $('nav').animate({
                left:'0'
            });
            cont = 0;
        }else{
            cont = 1;
            $('nav').animate({
                left:'-100%'
            });
        }

    }; 
}