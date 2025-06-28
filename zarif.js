 
 function sendEmail(){
    Email.send({
    Host : "smtp.gmail.com",
    Username : "gguy82819@gmail.com",
    Password : "Gguy:575;",
    To : 'regalt0s375@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New contact form enquiry",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
 }