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
        localStorage.setItem('bookings', JSON.stringify([]));
    }
    
    // Inject enhanced mock bookings if they don't exist
    let bookings = JSON.parse(localStorage.getItem('bookings'));
    if (bookings.length < 5 && !bookings.find(b => b.id === 2)) {
        const enhancedMocks = [
            { id: 1, employeeName: 'Kunal', date: '2026-10-10', time: '08:30', pickup: 'Sector 57', drop: 'Cyber Hub', status: 'Confirmed', cab: 'HR26AB1234', driver: 'Rahul', type: 'Local', startTime: '08:00', pickupTime: '08:30', eta: '09:15', currentLocation: 'Sector 50', route: 'Sector 57 -> Golf Course Rd -> Cyber Hub' },
            { id: 2, employeeName: 'Aarti', date: '2026-10-10', time: '11:00', pickup: 'Cyber Hub', drop: 'Delhi Airport', status: 'Assigned', cab: 'HR26AB1234', driver: 'Rahul', type: 'Local', startTime: '10:30', pickupTime: '11:00', eta: '12:00', currentLocation: 'Cyber Hub Parking', route: 'Cyber Hub -> NH48 -> T3 Airport' },
            { id: 3, employeeName: 'Rohan', date: '2026-10-10', time: '14:00', pickup: 'Gurugram', drop: 'Jaipur', status: 'Trip Started', cab: 'HR26AB1234', driver: 'Rahul', type: 'Outstation', startTime: '14:00', pickupTime: '14:15', eta: '18:30', currentLocation: 'Manesar Toll Plaza', route: 'Gurugram -> Manesar -> Bhiwadi -> Jaipur' },
            { id: 4, employeeName: 'Priya', date: '2026-10-09', time: '18:00', pickup: 'Cyber Hub', drop: 'Sector 57', status: 'Completed', cab: 'HR26AB1234', driver: 'Rahul', type: 'Local', startTime: '18:00', pickupTime: '18:10', eta: '18:50', currentLocation: 'Sector 57', route: 'Cyber Hub -> Sector 57' },
            { id: 5, employeeName: 'Amit', date: '2026-10-11', time: '09:00', pickup: 'Sector 14', drop: 'Udyog Vihar', status: 'Cancelled', cab: 'HR26AB1234', driver: 'Rahul', type: 'Local', startTime: '-', pickupTime: '-', eta: '-', currentLocation: '-', route: '-' }
        ];
        // Merge without duplicates based on ID
        enhancedMocks.forEach(mock => {
            if (!bookings.find(b => b.id === mock.id)) {
                bookings.push(mock);
            }
        });
        localStorage.setItem('bookings', JSON.stringify(bookings));
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
