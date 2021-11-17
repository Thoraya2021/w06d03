const express = require('express')
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require('dotenv')

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(dotenv());



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
    
    app.get("/todos"),(req,res)=>
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
    
    

        const PORT = 4000

        app.listen(PORT, ()=>{
            console.log(`server running at port ${PORT}`);
        })
            