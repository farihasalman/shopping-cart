const {User}=require('../../db')
const route=require('express').Router()

route.get('/',(req,res)=>{
    //get the data from the database
    User.findAll()
        .then((users)=>{
            res.status(200).send(users)
        })
        .catch((err)=>{
            res.status(500).send({
                error:"Cannot retrieve the information of users!"
            })
        })
})

route.post('/',(req,res)=>{
    //create a new user
    User.create({
        name: req.body.uname
    })
    .then((user)=>{
        res.status(201).send(user)
    })
    .catch((err)=>{
        res.status(501).send({
            error:"Cannot create a new user!"
        })
    })
})

exports=module.exports=route