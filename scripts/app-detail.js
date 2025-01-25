
function getAppDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const appName = urlParams.get('app');
  
    
    const appData = {
      uber: {
        name: "Uber",
        overview: "Uber Technologies, Inc. is an American mobility as a service provider, offering ridesharing services, food delivery, package delivery, couriers, freight transportation, and a partnership with Lime scooters and bikes.",
        androidLink: "https://play.google.com/store/apps/details?id=com.ubercab",
        iosLink: "https://apps.apple.com/us/app/uber/id368677368",
        bookingLink: "https://www.uber.com/",
      },
      ola: {
        name: "Ola",
        overview: "Ola is an Indian ride-sharing company that operates in multiple cities in India and several countries. It offers services like ride-sharing, bike rentals, and food delivery.",
        androidLink: "https://play.google.com/store/apps/details?id=com.olacabs.customer",
        iosLink: "https://apps.apple.com/in/app/ola-cabs/id512393983",
        bookingLink: "https://www.olacabs.com/",
      },
      meru: {
        name: "Meru",
        overview: "Meru is an Indian transportation service provider offering reliable and convenient cab services across multiple cities in India. It provides services like ride-sharing and luxury cabs.",
        androidLink: "https://play.google.com/store/apps/details?id=com.merucabs.android",
        iosLink: "https://apps.apple.com/in/app/meru/id645017100",
        bookingLink: "https://www.meru.in/",
      },
      rapido: {
        name: "Rapido",
        overview: "Rapido is an Indian bike taxi service that allows users to book bike rides for affordable travel across various cities in India.",
        androidLink: "https://play.google.com/store/apps/details?id=com.rapido.passenger",
        iosLink: "https://apps.apple.com/in/app/rapido-bike-taxi/id1153510769",
        bookingLink: "https://www.rapido.bike/",
      },
      bounce: {
        name: "Bounce",
        overview: "Bounce is an Indian bike rental service that lets users rent scooters for last-mile connectivity and short-distance rides.",
        androidLink: "https://play.google.com/store/apps/details?id=com.bounce.consumer",
        iosLink: "https://apps.apple.com/in/app/bounce-scooter-rental/id1294082120",
        bookingLink: "https://www.bounce.in/",
      },
      vogo: {
        name: "Vogo",
        overview: "Vogo is a bike-sharing platform in India that allows users to rent scooters for short-distance travel, aiming to reduce traffic congestion.",
        androidLink: "https://play.google.com/store/apps/details?id=com.vogo.android",
        iosLink: "https://apps.apple.com/in/app/vogo/id1398193890",
        bookingLink: "https://www.vogo.in/",
      },
      jugnoo: {
        name: "Jugnoo",
        overview: "Jugnoo is a multi-service mobile app offering auto-rickshaw rides, food delivery, and other services in India, with a focus on affordable transportation.",
        androidLink: "https://play.google.com/store/apps/details?id=com.jugnoo.passenger",
        iosLink: "https://apps.apple.com/in/app/jugnoo/id915707467",
        bookingLink: "https://www.jugnoo.in/",
      },
      porter: {
        name: "Porter",
        overview: "Porter is an on-demand logistics platform providing loading and unloading services with the help of professional drivers and helpers for moving goods within cities.",
        androidLink: "https://play.google.com/store/apps/details?id=com.porter",
        iosLink: "https://apps.apple.com/in/app/porter/id1032543663",
        bookingLink: "https://www.porter.in/",
      },
      blowhorn: {
        name: "Blowhorn",
        overview: "Blowhorn is a logistics company offering an affordable way to book goods transportation using trucks, tempos, and other vehicles for moving goods within cities.",
        androidLink: "https://play.google.com/store/apps/details?id=com.blowhorn",
        iosLink: "https://apps.apple.com/in/app/blowhorn/id1130265172",
        bookingLink: "https://www.blowhorn.com/",
      },
    };
  
    const app = appData[appName];
  
    if (app) {
      document.getElementById("app-name").textContent = app.name;
      document.getElementById("company-overview").textContent = app.overview;
      document.getElementById("android-link").href = app.androidLink;
      document.getElementById("ios-link").href = app.iosLink;
      document.getElementById("booking-button").href = app.bookingLink;
    } else {
      document.getElementById("app-detail-section").innerHTML = "<p>Sorry, we couldn't find details for this app.</p>";
    }
  }


  

  getAppDetails();
  
  
const reviewForm = document.getElementById('review-form');
const successMessage = document.getElementById('success-message');

reviewForm.addEventListener('submit', function(event) {
 
  event.preventDefault();
  
 
  const reviewText = document.getElementById('review').value;

 
  if (reviewText.trim() !== '') {
    
    successMessage.style.display = 'block';

    
    document.getElementById('review').value = '';
    
   
    setTimeout(function() {
      successMessage.style.display = 'none';
    }, 3000);
  } else {
    
    alert('Please enter a review before submitting!');
  }
});
