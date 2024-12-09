const temples = [
    { name: "Las Vegas Temple", location: "Las Vegas, NV", dedication: "1989", area: 80000, image: "images/temple1.jpg" },
    { name: "St. Louis Temple", location: "St. Louis, MO", dedication: "1997", area: 108000, image: "images/temple2.jpg" },
    { name: "Oakland Temple", location: "Oakland, CA", dedication: "1964", area: 95000, image: "images/temple3.jpg" },
    { name: "Mount Timpanogos Temple", location: "American Fork, UT", dedication: "1996", area: 104000, image: "images/temple4.jpg" },
    { name: "Provo Temple", location: "Provo, UT", dedication: "1972", area: 128325, image: "images/temple5.jpg" },
    { name: "Rexburg Temple", location: "Rexburg, ID", dedication: "2008", area: 57000, image: "images/temple6.jpg" },
    { name: "Rome Temple", location: "Rome, Italy", dedication: "2019", area: 95000, image: "images/temple7.jpg" },
    { name: "Sacramento Temple", location: "Sacramento, CA", dedication: "2006", area: 19400, image: "images/temple8.jpg" },
    { name: "Phoenix Temple", location: "Phoenix, AZ", dedication: "2014", area: 58000, image: "images/temple9.jpg" }
];

// Create a temple card dynamically
const createTempleCard = (temple) => {
    return `
        <div class="card">
            <img src="${temple.image}" alt="${temple.name}" loading="lazy">
            <h3>${temple.name}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedication}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
        </div>
    `;
};

// Render temples to the gallery
const renderTemples = (filter = "all") => {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    const filteredTemples = temples.filter((temple) => {
        if (filter === "old") return parseInt(temple.dedication) < 1900;
        if (filter === "new") return parseInt(temple.dedication) > 2000;
        if (filter === "large") return temple.area > 90000;
        if (filter === "small") return temple.area < 10000;
        return true; // Show all
    });

    filteredTemples.forEach((temple) => {
        gallery.innerHTML += createTempleCard(temple);
    });
};

// Update Footer Information
const updateFooter = () => {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
};

// Add event listeners for filter buttons
document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => renderTemples(button.dataset.filter));
});

// Initialize page
renderTemples(); // Show all temples on load
updateFooter();
