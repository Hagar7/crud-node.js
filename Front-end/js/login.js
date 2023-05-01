const myBtn = document.getElementById('signin');
const email = document.getElementById('email')
const password = document.getElementById('password')


myBtn.addEventListener('click',()=>{
    const data = {
        email:email.value,
        password:password.value,
      }
      axios({
        method: "post",
        url: `http://localhost:5000/user/login`,
        data: data,
      }).then((response)=>{
        console.log(response);
        const { message, user } = response.data;
        if(message == "login successfully"){
            localStorage.setItem('userID', user.id)
            window.location.replace('file:///D:/route/Node%20Js/first%20project/Front-end/home.html')
        }else{
            alert(message)
        }
      })
})