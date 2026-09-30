// Initialize default data if not exists
function initData() {
    if (!localStorage.getItem('users')) {
        const users = [
            { email: 'admin@cabflow.com', password: '123', role: 'admin', name: 'Admin' },
            { email: 'vendor@cabflow.com', password: '123', role: 'vendor', name: 'ABC Travels' },
            { email: 'driver@cabflow.com', password: '123', role: 'driver', name: 'Rahul' },
            { email: 'employee@cabflow.com', password: '123', role: 'employee', name: 'Kunal' }
        ];
        localStorage.setItem('users', JSON.stringify(users));
    }
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
