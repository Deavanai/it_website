const name =document.getElementById("name")
const phone =document.getElementById("phone")
const email =document.getElementById("email")
const messageame =document.getElementById("message")
const errorElement =document.getElementById("error")
const message_send_success= document.getElementById("message_send_success")


form=addEventListener("submit",(e)=>{
    let message =[]
    if (name.value === '' || name.value == null){
        message.push( "name is required")
    }
    if (phone.value.length <=10){
        phone.push("enter the phone number")
    }
    if (email.value){
        email.push("enter the email address")
    }

    if (message.length >0){
        e.preventDefault()
        message_send_success.innerText= message_send_success.join("message_send_success")
        errorElement.innerText = message.join(" ,")

        
    }
})