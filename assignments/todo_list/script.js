// var entry = document.querySelector('input');
// var btn = document.querySelector('button');
var compDiv = document.querySelector('.completed');
var InComDiv = document.querySelector('.pending');
// let count = 0;

// btn.addEventListener('click',function(){
//     if(entry.value){
//         var newEntry = document.createElement('p');
//         newEntry.innerHTML = entry.value;
//         newEntry.setAttribute('key',count);
//         count++;
//         store.appendChild(newEntry);
//         newEntry.addEventListener('click',function(e){
//             store.removeChild(e.target);
//         })
//     }
//     entry.value = "";
// })

async function todoapi(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let todos = await response.json();
    // console.log(todos)
    todos.map((todo) => {
      let newentry = document.createElement('p');
      newentry.innerText = todo.title;
      let status = todo.completed;
  //     console.log(status)
      if(status){
        compDiv.appendChild(newentry);
      } else{
        InComDiv.appendChild(newentry)
      }
    })
  }

  todoapi()

