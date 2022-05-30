const express=require('express')
const app=express()
const path=require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(path.join(__dirname,'public_static')))

app.use('/api',require('./routes/api').route)

app.listen('3455',()=>{
    console.log("Server started at http://localhost:3455")
})