// Set Current Year
const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

// Set Last Modified Date
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) lastModifiedElement.textContent = document.lastModified;
