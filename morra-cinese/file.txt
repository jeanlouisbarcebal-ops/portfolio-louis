const inizia=document.getElementById("inizia");
const scelta=document.getElementById("scelta");

const foglia=document.getElementById("foglia");
const sasso=document.getElementById("sasso");
const forbice=document.getElementById("forbice");
const boxYou=document.getElementById("you");
const boxcpu=document.getElementById("cpu");
const ris=document.getElementById("risultato");


let punteggioyou
punteggioyou=document.getElementById("punteggioYou");
let punteggiocpu
punteggiocpu=document.getElementById("punteggioCpu");





//0=foglia
//1=sasso
//2=forbice

inizia.onclick=function(){
    scelta.style.display="block";
    inizia.style.visibility="hidden";
    boxYou.style=""
    boxcpu.style=""

}

foglia.onclick=function(){

    scelta.style.display="none"
    boxYou.style.backgroundImage="url(immagini/foglia.png)"

    let numcas=Math.floor(Math.random()*3);






    if(numcas==0){
        boxcpu.style.backgroundImage="url(immagini/foglia.png)"
        ris.style.display="block" 
        ris.innerHTML="partita patta"
        


    }

    if(numcas==1){
        boxcpu.style.backgroundImage="url(immagini/forbice.png)";
        ris.style.display="block";
        ris.innerHTML="hai perso";
        punteggiocpu+=1
        
        

    }

    if(numcas==2){
        boxcpu.style.backgroundImage="url(immagini/sasso.png)";
        ris.style.display="block";
        ris.innerHTML="hai vinto";
        punteggioyou+=1
        
        


    }

    inizia.style.visibility="visible";
}


    sasso.onclick=function(){

        scelta.style.display="none"
        boxYou.style.backgroundImage="url(immagini/sasso.png)"
    
        let numcas=Math.floor(Math.random()*3);
        console.log("numcas");


        if(numcas==0){
            boxcpu.style.backgroundImage="url(immagini/foglia.png)";
            ris.style.display="block" ;
            ris.innerHTML="hai perso";
            punteggiocpu+=1
            
            
    
    
        }
    
        if(numcas==1){
            boxcpu.style.backgroundImage="url(immagini/forbice.png)";
            ris.style.display="block";
            ris.innerHTML="hai vinto";
            punteggioyou+=1
            
    
        }
    
        if(numcas==2){
            boxcpu.style.backgroundImage="url(immagini/sasso.png)";
            ris.style.display="block";
            ris.innerHTML="paritia patta";
        }
    
        inizia.style.visibility="visible";
    }


    forbice.onclick=function(){

        scelta.style.display="none"
        boxYou.style.backgroundImage="url(immagini/forbice.png)"
    
        let numcas=Math.floor(Math.random()*3);
        console.log("numcas");


        if(numcas==0){
            boxcpu.style.backgroundImage="url(immagini/foglia.png)";
            ris.style.display="block" ;
            ris.innerHTML="hai vinto";
            punteggioyou+=1
            
            
    
    
        }
    
        if(numcas==1){
            boxcpu.style.backgroundImage="url(immagini/forbice.png)";
            ris.style.display="block";
            ris.innerHTML="partita patta";
    
        }
    
        if(numcas==2){
            boxcpu.style.backgroundImage="url(immagini/sasso.png)";
            ris.style.display="block";
            ris.innerHTML="hai perso";
            punteggiocpu+=1
            
        }
    
        inizia.style.visibility="visible";
    }
    
    
    







    




