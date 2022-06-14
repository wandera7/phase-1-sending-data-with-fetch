// Add your code here

function submitData(name,email){
    
   const data= fetch('http://localhost:3000/users',{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json"
        },
        body:JSON.stringify({name,email})
    })
    .then((res)=>res.json())
    .then((data)=>{
      document.body.innerHTML=data.id;
        
    })
    .catch((err)=>{
        document.body.innerHTML=err.message;      
    })
    return data;
}