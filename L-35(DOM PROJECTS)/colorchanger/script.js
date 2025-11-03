const button =document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function(button) {
    console.log(button);

    button.addEventListener('click',function(e){  // event ko listen karega on clicking on it we pass callback function
        console.log(e);  // event ko log karega
        console.log(e.target); // event aa kaha se raha hai wo print karega

        if (e.target.id==='grey'){
            body.style.backgroundColor =e.target.id;
        } 
         if (e.target.id==='white'){
            body.style.backgroundColor =e.target.id;
        } 
         if (e.target.id==='blue'){
            body.style.backgroundColor =e.target.id;
        } 
         if (e.target.id==='yellow'){
            body.style.backgroundColor =e.target.id;
        }
    });
});