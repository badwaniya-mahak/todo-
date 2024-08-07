
  //Event bubbling
// let div=document.querySelector("div")
// let ul=document.querySelector("ul")
// let lis=document.querySelectorAll("li")

// div.addEventListener("click",function () {
//     console.log("div was clicked");
// })
// ul.addEventListener("click",function (e) {
//     e.stopPropagation();
//     console.log("ul was clicked");
// })
// for(li of lis){
//     li.addEventListener("click",function (e) {
//         e.stopPropagation();
//         console.log("li was clicked");
//     })
// }



// to do app

let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function() {
    let item=document.createElement("li");
    item.innerText=inp.value;
    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete")
    item.appendChild(delBtn)
    ul.appendChild(item);
    inp.value=""
})
 //using this only those li are delleted which was created in htmml 
// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         console.log("element deleted")
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }
                     //using (Event Delegation)
ul.addEventListener("click",function (event) {
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        console.log(listItem);
        listItem.remove();
        console.log("delete");
    }
})