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


document.getElementById('btn-CTA').addEventListener('click', function(){
    const email = 'hanifahali2015@yahoo.com';
    const subject = 'Front-end Engineer Interview';
    const body = 'Hello Hanifah';

   
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
});

document.getElementById('Gmail').addEventListener('click', function(){
    const email = 'hanifahali2015@gmail.com';
    const subject = 'Front-end Engineer Interview';
    const body = 'Hello Hanifah';

   
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
});


document.getElementById('resume').addEventListener('click', function() {
    window.open('https://drive.google.com/file/d/1ng2tiliPXmOWCwNk21IMw5eciykWIIrL/view?usp=sharing');
});

document.getElementById('Github').addEventListener('click', function() {
    window.open('https://github.com/Thehanifah?tab=repositories');
});
