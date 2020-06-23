let todo=["buy soap","buy brush","buy towel","buy napkin"]

function rendertodo(){
let todolist=''
for(let i=0;i<todo.length;i++)
{
todolist=todolist+'<li>'+todo[i]+'</li>'
}

//document.write(todolist)
document.getElementById('todolist').innerHTML=todolist
}
rendertodo();
function addtodo(event){
   event.preventDefault()
   let value=event.target.newtodo.value;
   if (value!==''){
      todo.push(value)
      rendertodo();
      event.target.reset()

   }
   }
