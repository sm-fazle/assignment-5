document.getElementById('fix-mobile')
.addEventListener('click', function(){
    const history = document.getElementById('history-card');
    const add = document.createElement('p')
add.innerText=' you have completed the task'
//  function time(){
//     const time = new Date();
//      time.toLocaleTimeString();
//      time();
//  }  
    history.appendChild(add);
})

document.getElementById('dark-mode').addEventListener
('click', function(){
    const history = document.getElementById('history-card')
    const add = document.createElement('p')
    add.innerText = `you have completed the task`
    history.appendChild(add);
})

document.getElementById('optimize').addEventListener('click', function(){
    const history = document.getElementById('history-card');
    const add= document.createElement('p');
    add.innerText= `you have completed the task`;
    history.appendChild(add)
})
document.getElementById('emoji')
.addEventListener('click', function(){
    const history= document.getElementById('history-card')
    const add = document.createElement('p');
    add.innerText='you have completed the task'
    history.appendChild(add)
})
document.getElementById('button-id')
.addEventListener('click', function(){
    const history = document.getElementById('history-card')
    const add= document.createElement('p');
    add.innerText = 'you have completed the task'
    history.appendChild(add)
})

document.getElementById('last-div')
.addEventListener('click', function(){
    const history = document.getElementById('history-card')
    const add = document.createElement('p')
    add.innerText=`you have completed the task`
    history.appendChild(add)
})

document.getElementById('clear').addEventListener('click', function() {
    const clear = document.getElementById('history-card');
    const addedParagraphs = clear.querySelectorAll('p'); 
    addedParagraphs.forEach(paragraph => paragraph.remove()); 
});

