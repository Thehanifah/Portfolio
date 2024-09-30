document.getElementById('copy-icon').addEventListener('click', function() {
    const email = document.getElementById('email').textContent;
    
   
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);

  
    tempInput.select();
    document.execCommand('copy');
    
    
    document.body.removeChild(tempInput);
    
   
    this.style.color = 'green';
    setTimeout(() => {
        this.style.color = '';
    }, 1000);
});





document.getElementById('resume').addEventListener('click', function() {
    window.open('https://drive.google.com/file/d/110uAUyNSmU73AWmr47qMyqBoPvatccHm/view?usp=sharing');
});
document.getElementById('resume1').addEventListener('click', function() {
    window.open('https://drive.google.com/file/d/110uAUyNSmU73AWmr47qMyqBoPvatccHm/view?usp=sharing');
});

document.getElementById('Github').addEventListener('click', function() {
    window.open('https://github.com/Thehanifah');
});

document.addEventListener('DOMContentLoaded', function() {
    // Code to hide or show the button when the page loads
    const button = document.getElementById('btn-CTQ');
    if (window.location.pathname === '/contact.html') {
      button.style.display = 'none'; // Hide the button for this page
    } else {
      button.style.display = 'block'; // Show the button for other pages
    }
  });


