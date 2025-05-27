// Complaint form functionality

document.addEventListener('DOMContentLoaded', function() {
  const complaintForm = document.getElementById('complaintForm');
  const confirmationMessage = document.getElementById('confirmationMessage');
  const newComplaintButton = document.getElementById('newComplaint');
  const referenceNumberEl = document.getElementById('referenceNumber');
  
  if (complaintForm) {
    // Form validation and submission
    complaintForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const complaintType = document.getElementById('complaintType').value;
      const location = document.getElementById('location').value;
      const date = document.getElementById('date').value;
      const subject = document.getElementById('subject').value;
      const description = document.getElementById('description').value;
      const suggestions = document.getElementById('suggestions').value;
      
      // Here you would normally send the data to a server
      // For demo purposes, we'll just show the confirmation
      
      // Generate a reference number
      const referenceNumber = generateReferenceNumber();
      
      // Display the reference number
      if (referenceNumberEl) {
        referenceNumberEl.textContent = referenceNumber;
      }
      
      // Show confirmation message
      if (confirmationMessage) {
        confirmationMessage.classList.add('active');
        confirmationMessage.classList.remove('hidden');
      }
      
      // Log the complaint data (for demo only)
      console.log({
        type: complaintType,
        location,
        date,
        subject,
        description,
        suggestions,
        referenceNumber
      });
    });
  }
  
  // Return to form for a new complaint
  if (newComplaintButton) {
    newComplaintButton.addEventListener('click', function() {
      confirmationMessage.classList.remove('active');
      setTimeout(() => {
        confirmationMessage.classList.add('hidden');
        complaintForm.reset();
      }, 300);
    });
  }
  
  // Generate a random reference number
  function generateReferenceNumber() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    
    return `CMPT-${year}${month}${day}-${random}`;
  }
  
  // Add form field animations
  const formGroups = document.querySelectorAll('.form-group');
  
  formGroups.forEach((group, index) => {
    setTimeout(() => {
      group.style.opacity = '1';
      group.style.transform = 'translateY(0)';
    }, index * 100);
  });
  
  // Dynamic form behavior
  const complaintTypeSelect = document.getElementById('complaintType');
  
  if (complaintTypeSelect) {
    complaintTypeSelect.addEventListener('change', function() {
      const selectedType = this.value;
      
      // You could customize the form based on complaint type
      // For example, show/hide specific fields
      
      // Change form accent color based on type
      document.documentElement.style.setProperty('--form-accent', `var(--${selectedType})`);
    });
  }
});