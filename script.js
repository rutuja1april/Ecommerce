const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById("navbar")

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// sign in

const = form = document.querySelector("form"),
        submit = form.querySelectorAll("submit_button"),
        allInput = form.querySelectorAll(".form_control input");  
 
        submit_button.addEventListener("click",()=>{
            allInput.forEach(input =>{
               if(input.value !=""){
                form.classList.add('secActive');
               } 
               else{
                form.classList.remove('secActive');
                alert("input is empty")
               }
            })

        })

        