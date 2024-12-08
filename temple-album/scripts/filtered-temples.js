const temples = [
    { name: "Salt Lake Temple", location: "Salt Lake City, UT", dedication: "1893", area: 253015, image: "images/temple1.jpg" },
    { name: "Nauvoo Temple", location: "Nauvoo, IL", dedication: "1846", area: 54000, image: "images/temple2.jpg" },
    { name: "Provo City Center Temple", location: "Provo, UT", dedication: "2016", area: 85000, image: "images/temple3.jpg" },
    { name: "Rome Temple", location: "Rome, Italy", dedication: "2019", area: 95000, image: "images/temple4.jpg" },
    { name: "Laie Temple", location: "Laie, HI", dedication: "1919", area: 45000, image: "images/temple5.jpg" },
    { name: "Tokyo Temple", location: "Tokyo, Japan", dedication: "1980", area: 150000, image: "images/temple6.jpg" },
    { name: "Paris Temple", location: "Paris, France", dedication: "2017", area: 44400, image: "images/temple7.jpg" },
    { name: "San Diego Temple", location: "San Diego, CA", dedication: "1993", area: 72000, image: "images/temple8.jpg" },
    { name: "Copenhagen Temple", location: "Copenhagen, Denmark", dedication: "2004", area: 25000, image: "images/temple9.jpg" }
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
