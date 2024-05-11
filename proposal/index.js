const target = document.getElementById('target');
let yes = document.getElementById('yes');


// yes.addEventListener('click',()=>{
// alert("I LOVE YOU SOOOOOOOO MUCHHHHHH😘😘😘😘😘")
// })
target.addEventListener('click',()=>{
    alert("BABY I AM YOURS ")
})

function moveTarget(){
    const maxWidth = 600;
    const maxHeight = 600;

    const ranomX = Math.floor(Math.random() * maxWidth);
    const ranomY = Math.floor(Math.random() * maxHeight);

    target.style.bottom = ranomX +'px' ;
    target.style.left = ranomY +'px' ;
}

target.addEventListener('mousemove', function(){
    moveTarget();
})