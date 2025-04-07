function sendMail(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Collect the form data
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Send the email using EmailJS
  emailjs.send("service_2r8eot5", "template_9ldu2sg", parms).then(
    function (response) {
      // Alert the user that the email was sent successfully
      alert("Email sent successfully!");

      // Clear the form fields after sending the email
      document.getElementById("contact-form").reset();
    },
    function (error) {
      // If the email fails to send, alert the user
      alert("Failed to send email: " + error.text);
    }
  );
}
