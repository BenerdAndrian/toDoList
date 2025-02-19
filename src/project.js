import toDoObject from "./toDoObj"
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
            this.todoObj=newObj
        }else{
            console.log("this Project has nothing to do")
        }
    }
}