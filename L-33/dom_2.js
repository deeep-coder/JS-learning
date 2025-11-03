const parent = document.querySelector('.parent')
    // console.log(parent);
    // console.log(parent.children);  // all childrens HTMLCollection (array like properties) me aayenge
    // console.log(parent.children[1].innerHTML);

    // for (let i = 0; i < parent.children.length; i++) {
    //      console.log(parent.children[i].innerHTML);
        
    // }
    parent.children[1].style.color = "orange" 

    //*** parent to child move

    // console.log(parent.firstElementChild);  
    // console.log(parent.lastElementChild);


    const dayOne = document.querySelector('.day')
    // console.log(dayOne);

    // **** child to parent move

    // console.log(dayOne.parentElement);
    // console.log(dayOne.nextElementSibling); 

    console.log("NODES: ", parent.childNodes);  // parent ki kitne child Nodes hai wo show karega in tree structure


    // <-------- create element----------->


    const div = document.createElement('div')
    console.log(div);
    div.className = "main"   // class di
    div.id = Math.round(Math.random() * 10 + 1)  // random id di by usin math function
    div.setAttribute("title", "generated title")  // title ki vlaue di
    div.style.backgroundColor = "green"
    div.style.padding = "12px"
    // div.innerText = "Chai aur code"  // not useful for ading text because it overwrite the text

    // generally used method by using text Node


    const addText = document.createTextNode("Chai aur code") // Text Node create hoga 
    div.appendChild(addText) // Text Node ko div me add/attach karne ke liye
 
    document.body.appendChild(div) // div ko document me add/attach karne ke liye

