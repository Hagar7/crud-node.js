import productModel from "../../DB/models/product.model.js"



export const addProduct = async(req,res)=>{
 try {
   const product = await productModel.create(req.body)
   res.json({message:"product created successfully",product})
 } catch (error) {
    console.log(error);
    res.json({message:"catch error",error})
 }
}

export const getProducts = async(req,res)=>{
    try { 
        const products = await productModel.findAll()
        res.json({message:"done",products})
    } catch (error) {
        res.json({message:"catch error",error})
    }
}

export const updateProduct = async(req,res)=>{
    try {
        const {id, UserId} = req.params;
        const {title,price} = req.body;
        const product = await productModel.update({title,price},{
            where:{
              id,
              UserId  
            }
        })
        if(product[0] >=1){
         res.json({message:"product updated successfully",product})
         }else{
         res.json({message:"not authorized"})
         } 
    } catch (error) {
        res.json({message:"catch error",error})
    } 
}


export const deleteProduct = async(req,res)=>{
    try {
        const {id,UserId} = req.params
        const product = await productModel.destroy({
            where:{
                id,
                UserId   
            }
        })
        if(product >=1){
            res.json({message:"product deleted successfully"})
        }else{
            res.json({message:"not authorized"})
        }
        
    } catch (error) {
        res.json({message:"catch error",error})
 
    }

}


export const getProdById = async (req, res) => {
    try {
        const {id,UserId} = req.params
      const product = await productModel.findOne({
        where: {
          id,
          UserId
        },
      });
      if (product) {
        res.json({ message: "Done", product });
      } else {
        res.json({ message: "there are no product" });
      }
    } catch (error) {
        console.log(error);
      res.json({ message: "catch error" });
    }
  };