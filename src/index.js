import 'core-js'
import './styles.css';



const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  

  

  let colorChanger = null;
  const startBtn = document.querySelector("[data-action='start']");
  const stopBtn =  document.querySelector("[data-action='stop']");
  const bodyRef = document.querySelector('body')
 


  startBtn.addEventListener('click', backgroundChanger);
  stopBtn.addEventListener('click', backgroundRemoval);



const randomIntegerFromInterval = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function backgroundChanger(e){
     e.currentTarget.disabled = true;

        if(e.currentTarget){

            colorChanger =  setInterval(() =>{
                bodyRef.style.background = `${colors[randomIntegerFromInterval(0, colors.length)]}` 
                
            }, 1000)
        }
  }

 

  function backgroundRemoval(e){
    e.currentTarget.previousElementSibling. disabled = false; 

    if(e.currentTarget){
        clearInterval(colorChanger)
       
    }
  }