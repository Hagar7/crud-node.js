const myBtn = document.getElementById('signup');
const Username = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const age = document.getElementById('age')

myBtn.addEventListener('click',()=>{
    const data = {
        name:Username.value,
        email:email.value,
        password:password.value,
        age:age.value
      }
    axios({
        method: "post",
        url: `http://localhost:5000/user/add`,
        data: data,
    }).then((response)=>{
      const {data,message} = response.data;
      if(message === 'user created successfully'){
          window.location.replace(`file:///D:/route/Node%20Js/first%20project/Front-end/login.html`)
      }else{
        alert(message)
      }
    })
})










