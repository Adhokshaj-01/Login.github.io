const button = document.querySelector('#btn');
const button1 = document.querySelector('#btn-1');
const login = document.querySelector('.log');
const signup = document.querySelector('.sign');
button.addEventListener("click" , ()=>{
 login.classList.toggle('animate');
 signup.classList.toggle('animate2');
});
button1.addEventListener("click" , ()=>{
    login.classList.toggle('animate');
    signup.classList.toggle('animate2');
   });
