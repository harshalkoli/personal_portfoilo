 firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the database service
  const database = firebase.database();
  
  // Handle form submission
  document.querySelector('.contact__form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Create a new database reference
    const submissionsRef = database.ref('submissions');
  
    // Push the form data to the database
    submissionsRef.push({
      name: name,
      email: email,
      message: message
    })
    .then(function() {
      // Clear the form fields
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
  
      // Show a success message or redirect to a thank you page
      alert('Form submitted successfully!');
    })
    .catch(function(error) {
      // Show an error message
      alert('Error submitting form: ' + error.message);
    });
  });
  