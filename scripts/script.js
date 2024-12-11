document.addEventListener('DOMContentLoaded', () => {
    const eventList = document.getElementById('event-list');
    const form = document.getElementById('event-form');

    const events = [
        'Mountain Hike - Jan 15, 2024',
        'Trail Cleanup - Feb 20, 2024',
        'Night Trek - Mar 5, 2024',
    ];

    events.forEach(event => {
        const li = document.createElement('li');
        li.textContent = event;
        eventList.appendChild(li);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        alert(`Thank you, ${name}! Registration confirmed.`);
        form.reset();
    });
});
