document.getElementById('title').className // to get class name 
document.getElementById('title').id //to get id



//attributes find karne ke liye

document.getElementById('title').getAttribute('id')
document.getElementById('title').getAttribute('class')

//attribute set karne ke liye

document.getElementById('title').setAttribute('class' , 'test')  //class ki jagah test kar do


// styling 

const title = document.getElementById('title');
title.style.backgroundColor = 'green'
title.style.padding = '15px'
title.style.borderRadius = '10px'

// <--------------Interisting--------------->

// content nikal ne ke liye

title.innerText;   // wo text dega which we are seeing in website
title.textContent;   // wo text milega which is also not visible in website like jo css se hide kiya hai vo bhi 
title.innerHTML;  // pura HTML ka value dega means if <div> ke andar spnan hoga to <span> tag ke sath dikhayega




// <---------->


document.getElementsByClassName('heading');    // HTMLCollection milega

// <---------->


document.querySelector('h1') // first h1 ko refer karega
document.querySelector('.heading')  // to refer class
document.querySelector('#title')    // to refer id

// <----------->

const myul =document.querySelector('ul')
const turngreen=myul.querySelector('li')
turngreen.style.backgroundColor = 'red'



// <--------->

const Templist=document.querySelectorAll('li') // "NodeList" return karega in browser which is similar li array but we cant us eit as array
Templist[0].style.backgroundColor='yellow' // here we have to define that ki konse element pe kaam karna hai


Templist.forEach(function(l){   //forEach loop
    l.style.backgroundColor='orange'
})

// Nodelist is not an array so we cannot use map hence we use forEach function
//  to use we have to convert NodeList in to array and then we can use all methode of an array  

const convertToArray = Array.from(Templist)  // Nodelist to array conversion "Use 'A' in array "

// <--------->





