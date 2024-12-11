// Product array
const products = [
    { id: 1, name: "Smartphone" },
    { id: 2, name: "Laptop" },
    { id: 3, name: "Tablet" },
    { id: 4, name: "Smartwatch" },
    { id: 5, name: "Bluetooth Speaker" },
];

// Populate the dropdown dynamically
const productSelect = document.getElementById("productName");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Track reviews completed
document.getElementById("reviewForm").addEventListener("submit", () => {
    let reviews = localStorage.getItem("reviewCount");
    reviews = reviews ? parseInt(reviews) + 1 : 1;
    localStorage.setItem("reviewCount", reviews);
});
