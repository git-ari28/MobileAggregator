
const apps = {
    delhi: {
      cabs: ["Uber", "Ola", "Meru"],
      bikes: ["Rapido", "Bounce", "Vogo"],
      autos: ["Ola Auto", "Jugnoo"],
      porters: ["Porter", "Blowhorn"],
      antiqueImage: "assets/images/antique-car-delhi.jpg",
      facts: "Delhi's antique mobility museum showcases vehicles from the Mughal era, highlighting how the city evolved into India's capital of transportation.",
    },
    mumbai: {
      cabs: ["Uber", "Ola"],
      bikes: ["Rapido", "Bounce"],
      autos: ["Ola Auto"],
      porters: [],
      antiqueImage: "assets/images/antique-car-mumbai.jpg",
      facts: "Mumbai's antique mobility museum celebrates the city's iconic Premier Padmini taxis, representing a unique blend of vintage and modern transportation.",
    },
    bangalore: {
      cabs: ["Uber", "Ola", "Meru"],
      bikes: ["Rapido", "Bounce"],
      autos: ["Ola Auto", "Jugnoo"],
      porters: ["Porter"],
      antiqueImage: "assets/images/antique-car-bangalore.jpg",
      facts: "Bangalore's museum highlights India's IT hub's journey from bullock carts to electric mobility, featuring vintage EV prototypes.",
    },
    chennai: {
      cabs: ["Uber", "Ola"],
      bikes: ["Rapido", "Bounce"],
      autos: ["Ola Auto"],
      porters: ["Porter", "Blowhorn"],
      antiqueImage: "assets/images/antique-car-chennai.jpg",
      facts: "Chennai's museum focuses on South India's rich automotive history, showcasing iconic vehicles like the Ambassador and early steam-driven automobiles.",
    },
  };
  
  const defaultCity = "delhi"; 
  const citySelect = document.getElementById("city");
  const appContainer = document.getElementById("app-container");
  const noDataMessage = document.getElementById("no-data");
  const antiqueImage = document.getElementById("antique-image");
  const museumFacts = document.getElementById("museum-facts"); 
  const signupForm = document.getElementById("signup-form");
  
  
  function loadApps(city) {
    appContainer.innerHTML = ""; 
    const cityApps = apps[city];
  
    if (!cityApps) {
      noDataMessage.style.display = "block"; 
      return;
    }
    noDataMessage.style.display = "none"; 
  
    
    antiqueImage.src = cityApps.antiqueImage || "assets/images/antique-car.jpg"; 
  
   
    museumFacts.textContent = cityApps.facts || "Discover the rich history of mobility in this city.";
  
   
    for (const category in cityApps) {
      if (category !== "antiqueImage" && category !== "facts") {
        const categoryApps = cityApps[category];
        if (categoryApps.length > 0) {
          
          const categoryTitle = document.createElement("h3");
          categoryTitle.textContent =
            category.charAt(0).toUpperCase() + category.slice(1); 
  
          
          categoryApps.forEach((app) => {
           
            const appCard = document.createElement("div");
            appCard.className = "app-card";
  
            
            const appLink = document.createElement("a");
            appLink.href = `mobility-app-detail.html?app=${app.toLowerCase()}`;
            appLink.className = "app-link";
  
            
            const appImage = document.createElement("img");
            appImage.src = `assets/images/${app.toLowerCase()}-logo.png`; 
            appImage.alt = app;
  
            
            const appName = document.createElement("p");
            appName.textContent = `${app} (${category})`;
  
            
            appLink.appendChild(appImage);
            appLink.appendChild(appName);
  
            
            appCard.appendChild(appLink);
  
            
            appContainer.appendChild(appCard);
          });
        }
      }
    }
  }
  
  
  citySelect.addEventListener("change", () => {
    loadApps(citySelect.value);
  });
  
 
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
  
    const email = document.getElementById("email").value;
  
   
    alert("Getting Subscribed! You will receive updates soon.");
  
    
    signupForm.reset();
  });
  
 
  window.onload = () => {
    loadApps(defaultCity);
  };
  
  
  
  