let content=document.querySelector("#counter");

let value=parseInt(content.innerText);
console.log(value)
function decrement(){
    value--;
   content.innerText=value;

}

function increment(){
    value++;
    content.innerText=value;


}
