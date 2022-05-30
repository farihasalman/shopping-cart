const Sequelize=require('sequelize')
const {DataTypes}=require('sequelize')

const db=new Sequelize('shopdb','shopper','shoppass',{
    host:'localhost',
    dialect:'mysql'
})

const User=db.define('user',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING(40),
        allowNull: false
    }
})

const Product=db.define('product',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING(30),
        allowNull: false
    },
    manufacturer:{
        type:DataTypes.STRING(45),
    },
    price:{
        type:DataTypes.FLOAT,
        allowNull:false,
        defaultValue: 0.0
    }
})

db.sync()
    .then(()=> console.log("Database synchronised"))
    .catch((err)=> console.error(err))

exports=module.exports={
    User,Product
}