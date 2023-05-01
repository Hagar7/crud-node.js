const addBtn = document.getElementById('addProduct');
const title = document.getElementById('title')
const price = document.getElementById('price')
const allInputs = document.getElementsByClassName('form-control');

let productArr = [];

let getProducts = ()=>{
    axios({
        method: "get",
        url: `http://localhost:5000/product/getProducts`, 
    }).then((response)=>{
        const {products} = response.data;
        productArr = products;
        showData()
    }) .catch(function (error) {
        console.log(error);
      });
}
getProducts()

const showData = ()=>{
    let cartona =``;
    for(let i=0; i<productArr.length; i++){
        cartona+= `<tr>
        <td>${productArr[i].title}</td>
        <td>${productArr[i].price}</td>
        <td>
        <button onclick='deleteProduct(${productArr[i].id})' class="btn btn-danger">Delete</button>
        <button onclick='updateProduct(${productArr[i].id})' class="btn btn-success">Update</button>
        </td>
    </tr>`
    }
    document.getElementById("tbody").innerHTML = cartona;
}



addBtn.addEventListener('click',()=>{
    const data = {
        title:title.value,
        price:price.value,
        UserId: localStorage.getItem("userID"),
      }
    axios({
        method: "post",
        url: `http://localhost:5000/product/add`,
        data: data,
    }).then((response)=>{
     const {message,product} = response.data;
     if(message == "product created successfully") {
        getProducts()
        clearForm()
     }else{
        alert(message);
     }
    })
})


const clearForm = ()=>{
    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].value = ""
    }
}


const deleteProduct = (id)=>{
    axios({
        method: "delete",
        url: `http://localhost:5000/product/deleteProduct/${id}/${localStorage.getItem("userID")}`,
    }).then((response)=>{
        const { message } = response.data;
        if(message == "product deleted successfully"){
            getProducts()
        }else{
            alert(message);
        }
    }) .catch(function (error) {
        console.log(error);
      });
}


const updateProduct = (id)=>{
    localStorage.setItem("productID", id);
    window.location.replace("file:///D:/route/Node%20Js/first%20project/Front-end/update.html")
}