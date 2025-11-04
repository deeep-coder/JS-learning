//generate a random color

const randomColor = function () {  // function to generate random color
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) { // to create hex color
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000);
    }
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };


  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null; // for optimize the code 
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  
  