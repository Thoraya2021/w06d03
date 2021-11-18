const express = require('express')
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require('dotenv');
const todoRouter=require("./routers/routes/todos");
const  todoModel =require("./DB/modules/index")
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(dotenv());
app.use(todoRouter);

/*
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
    
    app.get("/todos",(req,res)=>
    {
    
        res.stutus(200).json(todos);
    }
    
    app.get("/todos/:id",(req,res) => {
    
    const{id}=req.params;
    try {
    const found= todos.find((item)=>{
    return item.id ==id;
    
    });
    
    res.stutus(200).json(found);
    }catch(error){
    
    
        res.stutus(400).json(error)
    
    }
    
    });
    
    app.get("/isCompeled",(req,res) => {
        try {
        const found= todos.filter((item)=>{
        return item.isCompleted==true;
        
        });
        
        res.stutus(200).json(found);
        }catch(error){
            res.stutus(400).json(error)
        
        }
        
        });
    
    

app.post("/todos",(req,res)=>

{

const newtask={

    id:todos.length+1,
    name :req.body.task,
    isDelete:false,
    isCompleted:false,
};
todos.push(newtask);

try{
res.status(200).json(todos);
}
catch (error){
res.status(400).json(error);

}
});

app.put("/update/:id",(req,res)=>
{
const {id}=req.params;
todos.forEach((ele)=>{
if(ele.id==id){

ele.isCompleted=true;

}

res.status(200).json(todos);
})
})
app.delete("/delete/:id",(req,res)=>
{
const {id}=req.params;
todos.forEach((ele)=>{
if(ele.id==id){

ele.isDelete=true;

}
res.status(200).json(todos);

})
})*/

const PORT = process.env.PORT ||4000;

app.listen(PORT, ()=>{
    console.log(`server running at port ${PORT}`)

        })
    