// Initialize default data if not exists
function initData() {
    // Users data is now handled securely by the backend
    if (!localStorage.getItem('contracts')) {
        localStorage.setItem('contracts', JSON.stringify([]));
    }
    if (!localStorage.getItem('cabs')) {
        localStorage.setItem('cabs', JSON.stringify([
            { id: 'HR26AB1234', model: 'Dzire', type: 'Sedan', status: 'Available', vendor: 'ABC Travels', capacity: 4 }
        ]));
    }
    if (!localStorage.getItem('bookings')) {
        localStorage.setItem('bookings', JSON.stringify([
            { id: 1, employeeName: 'Kunal', date: '2026-09-22', time: '08:30', pickup: 'Sector 57', drop: 'Cyber Hub', status: 'Confirmed', cab: 'HR26AB1234', driver: 'Rahul' }
        ]));
    }
}
initData();

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

function checkAuth(role) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || (role && user.role !== role)) {
        window.location.href = 'index.html';
    }
    return user;
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('show');
    }
}

function getStatusBadge(status) {
    const s = status.toLowerCase();
    let badgeClass = 'badge-pending';
    if (s.includes('confirm')) badgeClass = 'badge-confirmed';
    else if (s.includes('assign')) badgeClass = 'badge-assigned';
    else if (s.includes('start')) badgeClass = 'badge-started';
    else if (s.includes('complete')) badgeClass = 'badge-completed';
    else if (s.includes('cancel')) badgeClass = 'badge-cancelled';
    
    return `<span class="badge ${badgeClass}">${status}</span>`;
}
