document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const location = document.getElementById('location').value.trim();
    const soilType = document.getElementById('soilType').value;
  
    if (!name || !email || !phone || !location || !soilType) {
      alert('Please fill out all fields before submitting.');
      return;
    }
  
    alert(`Thank you for registering, ${name}!`);
  });