const updatePro = document.getElementById('updateProduct');
const title = document.getElementById('title')
const price = document.getElementById('price')
const allInputs = document.getElementsByClassName('form-control');

const productID = localStorage.getItem('productID')


const getproductById =  ()=>{
    axios({
        method: 'get',
        url: `http://localhost:5000/product/${productID}/${localStorage.getItem("userID")}`,
    }).then((response)=>{
        const {product} = response.data;
        title.value = product.title;
        price.value = product.price
    }).catch(function (error) {
        console.log(error);
    });
}
getproductById()

updatePro.addEventListener('click',()=>{
    const data = {
        title:title.value,
        price:price.value,
        UserId: localStorage.getItem("userID"),
      }
    axios({
        method: "put",
        url: `http://localhost:5000/product/update/${productID}/${localStorage.getItem("userID")}`,
        data: data,
    }).then((response)=>{
        const {message} = response.data;
        if(message == "product updated successfully"){
            window.location.replace('file:///D:/route/Node%20Js/first%20project/Front-end/home.html')
        }else{
            alert(message)
        }
    }).catch((err) => {
        console.log({ message: "Catch error", err });
    })
})
