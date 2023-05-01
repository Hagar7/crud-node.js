import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../connection.js";
import userModel from "./user.model.js";




const productModel = sequelizeConnection.define('Product',{
    id:{
        type:DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true
    },
    title:{
       type:DataTypes.STRING(55),
      allowNull:false
    },
    price:{
        type:DataTypes.INTEGER(55)
    }
   },{
    timestamps:true
})

userModel.hasMany(productModel,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
})

productModel.belongsTo(userModel)


export default productModel;





