import projects from "./project.js"
import { createProject,addTaskToProject,deleteProject,adjustProject } from "./project.js"
import { taskCreate,taskDelete,taskAdjust } from "./tasks.js"
import { todayDOMContent } from "./DOM.js"
import "./styles.css"
createProject("03","go to Church","03-03-2025","");
addTaskToProject("03","get to bed early","03-02-2025","high","","not complete")
todayDOMContent();