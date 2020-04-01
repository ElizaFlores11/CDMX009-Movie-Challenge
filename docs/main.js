const img_con = document.getElementById('img-con'); 
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const images = ['2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '1.jpeg']; 

let i = images.length; 

//function for next slider
next.onclick = () =>{
    i = (i<images.length)?(i = i+1):(i=1);
    img_con.innerHTML = "<img class='img' src=images/"+images[i-1]+">"; 
}
//function for prev slider
prev.onclick = () =>{
    i = (i<images.length+1 && i>1)?(i = i-1):(i= images.length);
    img_con.innerHTML = "<img class='img' src=images/"+images[i-1]+">"; 
}