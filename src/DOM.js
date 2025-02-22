const Projects=JSON.parse(localStorage.getItem("projects"));

const content=document.getElementById("content");
function todayDOMContent(){
    console.log(Projects[0])

     const today=document.querySelector(".today");
     today.addEventListener("click",()=>{
     content.innerHTML=``
     const h2=document.createElement("h2");
     const ul=document.createElement("ul");
     ul.setAttribute("class","taskListGroup")
     h2.innerText=today.textContent;
     ul.appendChild(h2)
     Projects[0].taskArray.forEach(task=>{
        const li=document.createElement("li");
        li.setAttribute("class","task")
        li.innerHTML=`
                      <input type="checkbox" name="status" >
                      <p>${task.title}</p>
                      <p>${task.date}</p>
                      <p>${task.priority}</p>
                      <p>${task.status}</p>
                      <p>${task.Notes}</p>
        
        `
     
        ul.appendChild(li)
     })
     content.appendChild(ul);

   })
}

export {todayDOMContent}