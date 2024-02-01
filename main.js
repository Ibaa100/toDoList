const button=document.querySelector(".addtask button");
const textInput=document.querySelector(".text");
const list=document.querySelector(".list");
button.onclick=addData;

function addData(){
    if(textInput.value !== ""){
        const result= `<li class="item">
        <input type="checkbox">
        <span >${textInput.value}</span>
        </li>`;
        list.innerHTML+=result;
        textInput.value="";
    }
    const arr=document.querySelectorAll('.item input');
    const arr1=document.querySelectorAll('.item span');
    for(let i=0;i<arr.length;i++){
        arr[i].onclick=function(){
            arr1[i].classList.toggle('completed')  
        }
    }
}


