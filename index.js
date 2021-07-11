const express=require('express')//express server
const app=express();
const port=5000;//port 

const fs=require('fs');//file creation
const start = new Date();//date variable
const timeStamp=new Date().getTime();//timestamp
//first text file
fs.writeFile("./test/date-time.txt",`${start}`,function(err)
{
if(err) throw err;
console.log("file created");
})
//second text file
fs.writeFile("./test/times.txt",`${timeStamp}`,function(err)
{
if(err) throw err;
console.log("file created2");
})
//Read directory to display the file in terminal 
fs.readdir("./test",function(err,files)
{
    if(err)
    throw err;
    console.log(files);
})
//get rquest to indicate the files retrieved
app.get('/',(req,res)=>
    {
        res.status(200).send("retrieved all file in terminal")
    })

app.listen(port,()=>
 {
    console.log('server listening in port ');
 })   
