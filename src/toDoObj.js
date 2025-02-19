export default class toDoObjects{
    constructor(title,description,dueDate,priority,notes){
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
        this.notes=notes;
    }
    get getTitle(){
        return this.title;
    }
    get getDescription(){
        return this.description
    }
    get getDueDate(){
        return this.dueDate;
    }
    get getPriority(){
        return this.priority;
    }
    get getNotes(){
        return this.notes;
    }

    set setTitle(newTitle){
      if(newTitle.length>0){
        this.title=newTitle;
      }else{
        console.log("the title is blank")
        return;
      }
    }
    set setDescription(newDescription){
        this.description=newDescription;
    }
    set setDueDate(newone){
        this.dueDate=newone;
    }
    set setPriority(newPriority){
        this.priority=newPriority;
    }
    set setNotes(newNote){
        this.notes=newNote;
    }
}
const todo1=new toDoObjects("bake a cake","go bake a cake","2025-02-25","high","decorate it soon")
console.log(todo1.getDescription)
todo1.setTitle=""
console.log(todo1.title)