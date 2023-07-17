function sendEmail()
{
    var params={
        from_name:document.getElementById("name").value,
        email_id:document.getElementById("email_id").value,
        message:document.getElementById("message").value
    }
    emailjs.send("service_jjpggbo","template_a931ipk",params).then(function(res){
        alert("Success!"+res.status);
    })
}