import toDoObject from "./toDoObj.js"
class project{
    constructor(title,description,dueDate,priority,todoObj){
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
        this.todoObj=todoObj;
    }
    get getTitle(){
        return this.title;
    }
    get getDescription(){
        return this.description;
    }
    get getDueDate(){
        return this.dueDate;
    }
    get getPriority(){
        return this.priority;
    }
    get getTodoObj(){
        return this.todoObj;
    }
    set setTitle(newTitle){
        if(newTitle.length>0){
            this.title=newTitle;
        }else{
            console.log("Project's title is blank")
        }
    }
    set setDescription(newDescription){
        this.description=newDescription;
    }
    set setDueDate(newDueDate){
        this.dueDate=newDueDate;
    }
    set setPriority(newPriority){
        this.priority=newPriority
    }
    set setTodoObj(newObj){
        if(newObj.length>0){
            this.todoObj=newObj;
        }else{
            console.log("this Project has nothing to do")
        }
    }
    projectCreating(projectTitle,projectDescription,projectDueDate,projectPriority,projectToDoList){
     const theProject=new project(projectTitle,projectDescription,projectDueDate,projectPriority,projectToDoList);
     return theProject;
    }
}
const project1=new project("Learning webpack","","30-02-2025","high",[new toDoObject("Learning npm scripts","","22-01-2025","high","this is urgent to learn first"),
                                                                      new toDoObject("Learning loader","","24-01-2025","high","this is urgent right after npm scripts"),
                                                                      new toDoObject("Learning webpack-merge","","26-01-2025","high","this is urgent to learn after loader")
                                                                    ])
console.log(project1.getTodoObj[0].getTitle)
console.log(project1.getTodoObj[1].getTitle)
console.log(project1.getTodoObj[2].getDescription)