import { Sequelize } from "sequelize";



export const sequelizeConnection = new Sequelize("h_gogo","root","",{
    host: "localhost",
    dialect: "mysql",
})


export const connectionDB = async()=>{
 return await sequelizeConnection.sync({alter:true,force:false})
 .then((result) =>console.log("DB Connection successfully"))
 .catch((err)=>console.log({message:"DB Connection error",error:err}))
}