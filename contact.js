(function () {
    emailjs.init("TrsOft_jICljuzHE7"); 
    })();
    document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); 
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();
    let responseMessage = document.getElementById("responseMessage");
    let submitButton = document.querySelector("#contact-form button");
    
    
    if (!name || !email || !message) {
      responseMessage.innerText = "❌ Please fill in all required fields.";
      responseMessage.style.color = "red";
      return;
    }
    
    
    submitButton.innerHTML = "Sending...";
    submitButton.disabled = true;
    
    let params = { name, email, phone, subject, message };
    
    
    emailjs.send("service_9zxb17c", "template_altw3bc", params)
      .then(function (response) {
        console.log("✅ Email sent successfully!", response);
    
        responseMessage.innerText = "تم الارسال ";
        responseMessage.style.color = "green";
    
        
        document.getElementById("contact-form").reset();
    
        
        setTimeout(() => {
          responseMessage.innerText = "";
        }, 5000);
      })
      .catch(function (error) {
        console.error("❌ Failed to send email", error);
        responseMessage.innerText = "فشل بالارسال ";
        responseMessage.style.color = "red";
      })
      .finally(function () {
        
        submitButton.innerHTML = "Send Message";
        submitButton.disabled = false;
      });
    });
    });