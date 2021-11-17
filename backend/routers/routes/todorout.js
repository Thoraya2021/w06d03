
    const express = require("express");
let todos=[{id:1,
    name:"sleep",
    isDelete:false,
    isCompleted:false
    },
    {id:2,
        name:"code",
        isDelete:false,
        isCompleted:false
        },
        {id:3,
            name:"eat",
            isDelete:false,
            isCompleted:false
            }];



        
const {
    gettodo,
    addtodo,
    updatetodo,
    deletetodo,
} =

require("../controllers/todoController");


const todoRouter = express.Router();

todoRouter.get("/todos",gettodo);
todoRouter.post("/todos",addtodo);
todoRouter.put("/update/:id",updatetodo);
todoRouter.delete("/delete/:id",deletetodo);



module.exports = todoRouter;
