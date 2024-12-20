const cardWrapper = document.querySelector('.card-wrapper');
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');

    const cardWidth = 40; 
    const totalCards = 6;  
    const maxScroll = -(cardWidth * (totalCards - 1)); 

    let currentPosition = 0; 
    function moveCards(position) {
      cardWrapper.style.transition = 'transform 0.5s ease-in-out';
      cardWrapper.style.transform = `translateX(${position}px)`;
    }

    scrollLeftButton.addEventListener('click', function() {
      currentPosition += cardWidth; 
      if (currentPosition > 0) { 
        currentPosition = maxScroll;
      }
      moveCards(currentPosition);
    });

    scrollRightButton.addEventListener('click', function() {
      currentPosition -= cardWidth; 
      if (currentPosition < maxScroll) { 
        currentPosition = 0;
      }
      moveCards(currentPosition);
    });

    document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault();
    
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
    
      if (name && email && message) {
        alert("Thank you for your message, " + name + "!");
        document.getElementById("contact-form").reset();
      } else {
        alert("Please fill out all fields.");
      }
    });
    