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


const gettodo=(req,res) => {
    
    const{id}=req.params;
    try {
    const found= todos.find((item)=>{
    return item.id ==id;
    
    });
    
    res.stutus(200).json(found);
    }catch(error){
    
    
        res.stutus(400).json(error)
    
    }};
   const addtodo = (req,res)=>{
   const newtask={
    id:todos.length+1,
       name :req.body.task,
       isDelete:false,
       isCompleted:false,
   }
   todos.push(newtask);
   try{
   res.status(200).json(todos);
   }
   catch (error){
   res.status(400).json(error);
   
   }
   }
   const updatetodo=(req,res)=>
   {
   const {id}=req.params;
   todos.forEach ((ele)=>{
   if(ele.id==id){
   
   ele.isCompleted=true;
   
   }
   
   res.status(200).json(todos)
   });


   const deletetodo =(req,res)=>
   {
   const {id}=req.params;
   todos.forEach((ele)=>{
   if(ele.id==id){
   
   ele.isDelete=true;
   
   }

   res.status(200).json(todos);
   
   });
   }

   module.exports = {

   gettodo,
   addtodo,
   updatetodo,
   deletetodo,
   }