var entry = document.querySelector('input');
var btn = document.querySelector('button');
var store = document.querySelector('div.todos');
let count = 0;

btn.addEventListener('click',function(){
    if(entry.value){
        var newEntry = document.createElement('p');
        newEntry.innerHTML = entry.value;
        newEntry.setAttribute('key',count);
        count++;
        store.appendChild(newEntry);
        newEntry.addEventListener('click',function(e){
            store.removeChild(e.target);
        })
    }
    entry.value = "";
})