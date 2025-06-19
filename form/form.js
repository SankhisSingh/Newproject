document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();
    const errorDiv=document.getElementById('error');
    const successDiv=document.getElementById('success');
    errorDiv.textContent='';
    successDiv.textContent='';
    const name=document.getElementById('name').value.trim();
    const email=document.getElementById('email').value.trim();
    const subject=document.getElementById('subjet').value.trim();
    const message=document.getElementById('message').value.trim();
    
      if (!name || !email || !subject || !message) {
        errorDiv.textContent = 'Please fill out all fields.';
        return;
      }
      if (!validateEmail(email)) {
        errorDiv.textContent = 'Please enter a valid email address.';
        return;
      }

      successDiv.textContent = 'Form submitted successfully!';
      document.getElementById('contactForm').reset();
});
function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }