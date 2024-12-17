document.addEventListener('DOMContentLoaded', () => {
    const eventList = document.getElementById('event-list');
    const form = document.getElementById('event-form');

    const events = [
        { name: 'Mountain Hike', date: 'Jan 15, 2024' },
        { name: 'Trail Cleanup', date: 'Feb 20, 2024' },
        { name: 'Night Trek', date: 'Mar 5, 2024' },
    ];

    // Populate event list
    events.forEach(event => {
        const li = document.createElement('li');
        li.textContent = `${event.name} - ${event.date}`;
        eventList.appendChild(li);
    });

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const selectedEvent = document.getElementById('event-select').value;

        alert(`Thank you, ${name}! You've registered for ${selectedEvent}.`);
        localStorage.setItem('registration', JSON.stringify({ name, email, selectedEvent }));
        form.reset();
    });
});
