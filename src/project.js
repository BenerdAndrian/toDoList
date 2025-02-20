import { taskCreate} from "./tasks";

class Project{
    constructor(id,title,date,description){
        this.id=id;
        this.title=title;
        this.date=date;
        this.description=description;
        this.taskArray=[]
    }
}
//default project
export const Projects=[
    {
        id:"01",
        title:"Bake a Cake",
        date:"02-02-2025",
        description:"go baking a cake",
        taskArray:[
                 taskCreate("01","Buying A Cheese Cake","05-05-2025","high","nothing","not Complete"),
                 taskCreate("01","Buying Sugar","05-06-2025","high","","not complete")
        ]
    },
    {
        id:"02",
        title:"Learning Webpack",
        date:"03-03-2025",
        description:"webpack is a bundling tool,its nice to organize your code for the better",
        taskArray:[
            taskCreate("02","Learning Webpack basics","05-05-2025","high","","not Complete"),
            taskCreate("02","Learning webpack-merge","05-06-2025","high","","not complete")
        ]
    }
]
function createProject(id,title,date,description){
  const newProject=new Project(id,title,date,description)
  Projects.push(newProject)
  localStorage.setItem("projects",JSON.stringify(Projects))
}
function addTaskToProject(projectID,title,date,priority,notes,status){
const newTask=taskCreate(projectID,title,date,priority,notes,status);
Projects.forEach(project=>{
    if(projectID===project.id){
        project.taskArray.push(newTask)
    }
   
})
localStorage.setItem("projects",JSON.stringify(Projects))
}
function deleteProject(projectID){
    Projects.forEach((project,index)=>{
        if(project.id===projectID){
            Projects.splice(index,1)
        }
    })
    localStorage.setItem("projects",JSON.stringify(Projects))
}
function adjustProject(projectID,newtitle,newdate,newdescription){
    projectAdjusted=false;
    Projects.forEach(project=>{
        if(project.id===projectID){
            project.title=newtitle;
            project.date=newdate;
            project.description=newdescription;
            projectAdjusted=true;
        }
      
    })
    if(projectAdjusted){
        console.log("the project is adjusted")
        localStorage.setItem("projects",JSON.stringify(Projects))
    }else{
        console.log("the project is not adjusted")
    }
}
export {createProject,addTaskToProject,deleteProject,adjustProject}
localStorage.setItem("projects",JSON.stringify(Projects))