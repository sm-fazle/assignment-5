document.getElementById('change-page')
.addEventListener('click', function(){
    window.location.href='./question.html'
})

// button
const increaseId = document.getElementById('increase');
const decreaseId = document.getElementById('decrease');
const button = document.querySelectorAll('.btn')

button.forEach(button =>{
button.addEventListener('click', function(){
    increaseId.textContent = parseInt(increaseId.textContent)+1;
   alert('board update successfully ');
 decreaseId.textContent = parseInt( decreaseId.textContent)-1;
 button.disabled = true;

})  

})

// background color change
const theme = document.getElementById('color-change');
const randomColor = document.getElementById('body');

function changeColor (){
    const elements = '0123456789ABCDEF';
    let color = '#';
 for(let i = 0; i < 6; i++){
    color = color + elements [Math.floor(Math.random()*16)];

 }
 return color;
}

theme.addEventListener('click', function(){
    randomColor.style.backgroundColor= changeColor();
})


//current date
const newdate = new Date();
const day =  newdate.getDate();
const month = newdate.getMonth() +1;
 const year = newdate.getFullYear();
 const updatedDate = `${day}-${month}-${year}`;
 document.getElementById('current-date').textContent = updatedDate;

