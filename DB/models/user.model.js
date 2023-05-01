import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../connection.js";




const userModel = sequelizeConnection.define('User',{
    id:{
        type:DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING(55),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(55),
        unique:true
    },
    password:{
        type:DataTypes.STRING(55),
    },
    age:{
        type:DataTypes.INTEGER(11)
    }
    },
  {
    timestamps:true
    })


export default userModel;