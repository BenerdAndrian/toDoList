

class Task{
    constructor(projectID,title,date,priority,notes,status){
        this.projectID=projectID;
        this.title=title;
        this.date=date;
        this.priority=priority;
        this.notes=notes;
        this.status=status;
    } 
    printInfo(){
        return `${this.projectID},${this.title},${this.date},priority: ${this.priority},Notes:${this.notes},${this.status}`
    }
}
 function taskCreate(projectID,title,date,priority,notes,status){
    const task=new Task(projectID,title,date,priority,notes,status);
    return task;
}
function taskDelete(projectID,taskName){
    const Projects=JSON.parse(localStorage.getItem("projects"))
    let taskDeleted=false;
    Projects.forEach((project,index)=>{
        if(projectID===project.id){
            project.taskArray.forEach((task,i)=>{
                if(task.title===taskName){
                    project.taskArray.splice(i,1)
                    taskDeleted=true;
                }
            })
        }
    })
    if(taskDeleted){
        console.log("task deleted successfully")
        localStorage.setItem("projects",JSON.stringify(Projects))
    }else{
        console.log("there is no task found")
    }
   
}
function taskAdjust(projectID,taskIndex,newtitle,newdate,newpriority,newnotes,newstatus){
    const Projects=JSON.parse(localStorage.getItem("projects"));
    let taskAdjusted=false;
    Projects.forEach(project=>{
        if(projectID===project.id){
            project.taskArray.forEach((task,i)=>{
                if(taskIndex===i){
                    task.title=newtitle;
                    task.date=newdate;
                    task.priority=newpriority;
                    task.notes=newnotes;
                    task.status=newstatus
                    taskAdjusted=true;
                }
            })
        }
    })
    if(taskAdjusted){
        console.log("task is adjusted")
        localStorage.setItem("projects",JSON.stringify(Projects))
    }else{
        console.log("no task has been adjusted")
    }
}
export{taskCreate,taskDelete,taskAdjust}
