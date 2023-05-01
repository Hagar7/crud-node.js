import userModel from "../../DB/models/user.model.js"



export const addUser = async(req,res)=>{

    try {
        const user = await userModel.create(req.body)
        res.json({message:"user created successfully",data:user})
    } catch (error) {
        res.json({message:"catch error",error})
    }

}


export const login = async(req,res)=>{
    try {
        const {email,password} = req.body
        const user = await userModel.findOne({
            where:{
                email,
                password
            },
        })
        if (user){
            res.json({message:"login successfully",user})
        }else{
            res.json({message:"login invalid"})
        }
    } catch (error) {
        res.json({message:"catch error",error})
    }
}