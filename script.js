function handlesubmit()
{
   
   const message=document.getElementById("message");
   const name= document.getElementById("name").value;
   const password=document.getElementById("password").value;
   const email=document.getElementById("email").value;
   const phonenumber=document.getElementById("phonenumber").value;
   message.style.display="none";
   if(name.length == 0)
   {
    message.innerText="please enter your name";
   
   message.style.display="block";
 
   return false;
   }
   if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)==false)
   {
    message.innerText ="please enter a valid email";
    message.style.display = "block";
    return false;

   }

if(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phonenumber)==false)
{
    message.innerText ="phone number must be 10 character";
    message.style.display = "block";
    return false;
   
}
if(phonenumber )
{
    message.innerText="phone must be 10 digit";
    message.style.display = "block";
    return false;

}
alert("success")
return false;
}