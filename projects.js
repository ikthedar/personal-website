const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with HTML, Tailwind CSS, and JavaScript.",
      image: "https://via.placeholder.com/400",
      githubLink: "https://github.com/your-username/portfolio",
      demoLink: "https://yourwebsite.com"
    },
    {
      title: "Inventory Control System",
      description: "An inventory system to update products and track orders for a retail hardware and tools business.",
      image: "assets/images/inventorysystem.png",
      githubLink: "https://github.com/ikthedar/alamtradinginventory",
      demoLink: "https://ecommerce-demo.com"
    },
    {
      title: "Weather App",
      description: "A weather forecasting app using OpenWeather API.",
      image: "https://via.placeholder.com/400",
      githubLink: "https://github.com/your-username/weather-app",
      demoLink: "https://weatherapp-demo.com"
    }
  ];
  
  const projectsContainer = document.getElementById("projects-container");
  
  projects.forEach(project => {
    const projectCard = `
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
        <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover rounded-lg mb-4">
        <h3 class="text-2xl font-semibold mb-2">${project.title}</h3>
        <p class="text-gray-400 mb-4">${project.description}</p>
        <div class="flex justify-between">
          <a href="${project.githubLink}" target="_blank" class="text-blue-500 hover:underline">GitHub</a>
          <a href="${project.demoLink}" target="_blank" class="text-blue-500 hover:underline">Live Demo</a>
        </div>
      </div>
    `;
    projectsContainer.innerHTML += projectCard;
  });
  