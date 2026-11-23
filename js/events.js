const upcomingEvents = [
  {
    id: 1,
    title: "LOCATION X: HAMBURG",
    category: "CLUB CONCEPT • STRICTLY 18+",
    date: "UPCOMING • TBA",
    location: "Hamburg, Germany",
    price: "Early Access Open",
    status: "EXPIRED",
    ticketUrl: "contact.html",
    description: "A brand-new high-energy club night in Hamburg. Full lineup, theme & ticket release dropping soon."
  },
  {
    id: 2,
    title: "PARTY BUS TOUR: DENMARK → HAMBURG",
    category: "BUS + CLUB ENTRY • 18–25 YRS",
    date: "NEXT EDITION • TBA",
    location: "Selected Pickup Stops → Destination",
    price: "All-Inclusive Package",
    status: "EXPIRED",
    ticketUrl: "bus-tours.html",
    description: "Round-trip party bus transport with pre-party atmosphere on board and direct club entry."
  }
];

function renderEvents(containerId, limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const list = limit ? upcomingEvents.slice(0, limit) : upcomingEvents;
  container.innerHTML = list.map(ev => `
    <div class="event-card ${ev.status === 'EXPIRED' ? 'is-expired' : ''}">
      ${ev.status === 'EXPIRED' ? `
        <div class="expired-overlay">
          <div class="red-cross"></div>
          <div class="expired-stamp">EXPIRED // TEST PREVIEW<br><span>NEW EVENTS DROPPING SOON</span></div>
        </div>
      ` : ''}
      <div>
        <div class="badge">${ev.category}</div>
        <h3>${ev.title}</h3>
        <div class="event-date">${ev.date}</div>
        <p class="desc">${ev.description}</p>
      </div>
      <div class="card-footer">
        <span class="price">${ev.location} • <strong>${ev.price}</strong></span>
        <a href="${ev.ticketUrl}" class="btn-white">NOTIFY ME FOR NEW DATES</a>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderEvents('home-events-grid', 3);
  renderEvents('all-events-grid');
});
