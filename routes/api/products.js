const {Product}=require('../../db')
const route=require('express').Router()

route.get('/',(req,res)=>{
    Product.findAll()
        .then((products)=>{
            res.status(200).send(products)
        })
        .catch((err)=>{
            res.status(500).send({
                error:"Cannot retrieve the information of products!"
            })
        })
})

route.post('/',(req,res)=>{
    //validate the values 
    if(isNaN(parseFloat(req.body.pprice))){
        return res.status(403).send({
            error:'Price is not a valid number'
        })
    }
    Product.create({
        name: req.body.pname,
        manufacturer:req.body.pmanufacturer,
        price:parseFloat(req.body.pprice)
    })
    .then((product)=>{
        res.status(201).send(product)
    })
    .catch((err)=>{
        res.status(501).send({
            error:"Cannot create a new product!"
        })
    })
})

exports=module.exports=route