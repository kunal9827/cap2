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

// Theme Management (Dark Mode)
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeToggleButtons(savedTheme);
}

function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggleButtons(newTheme);
}

function updateThemeToggleButtons(theme) {
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
        if (theme === 'dark') {
            btn.innerHTML = '☀️ <span class="theme-text">Light</span>';
            btn.setAttribute('title', 'Switch to Light Mode');
            btn.setAttribute('aria-label', 'Switch to Light Mode');
        } else {
            btn.innerHTML = '🌙 <span class="theme-text">Dark</span>';
            btn.setAttribute('title', 'Switch to Dark Mode');
            btn.setAttribute('aria-label', 'Switch to Dark Mode');
        }
    });
}

// Initialize theme immediately and when DOM is loaded
initTheme();
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
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
    const s = (status || '').toLowerCase();
    let badgeClass = 'badge-pending';
    let label = status || 'Requested';
    
    if (s.includes('transit') || s.includes('start')) {
        badgeClass = 'badge-started';
        label = 'In Transit';
    } else if (s.includes('assign') || s.includes('confirm')) {
        badgeClass = 'badge-assigned';
        label = 'Assigned';
    } else if (s.includes('complete')) {
        badgeClass = 'badge-completed';
        label = 'Completed';
    } else if (s.includes('cancel')) {
        badgeClass = 'badge-cancelled';
        label = 'Cancelled';
    } else if (s.includes('request') || s.includes('pend')) {
        badgeClass = 'badge-pending';
        label = 'Requested';
    }
    
    return `<span class="badge ${badgeClass}">${label}</span>`;
}

// Unified Ride/Delivery Lifecycle Helper
function getLifecycleStage(status) {
    const s = (status || '').toLowerCase();
    if (s.includes('cancel')) return { step: -1, label: 'Cancelled' };
    if (s.includes('complete')) return { step: 4, label: 'Completed' };
    if (s.includes('transit') || s.includes('start')) return { step: 3, label: 'In Transit' };
    if (s.includes('assign') || s.includes('confirm')) return { step: 2, label: 'Assigned' };
    return { step: 1, label: 'Requested' };
}

// Render modern Live Ride Status Tracker Stepper
function renderLiveRideTracker(booking, showActions = false, actionCallback = '') {
    if (!booking) return '';
    const lifecycle = getLifecycleStage(booking.status);
    const step = lifecycle.step;
    const isCancelled = step === -1;

    // Line fill percentages: Step 1 (0%), Step 2 (33%), Step 3 (66%), Step 4 (100%)
    let fillWidth = '0%';
    if (step === 2) fillWidth = '33%';
    else if (step === 3) fillWidth = '66%';
    else if (step >= 4) fillWidth = '100%';

    const isLive = step === 2 || step === 3;

    return `
        <div class="tracker-card" id="tracker-${booking.id}">
            <div class="tracker-card-header">
                <div>
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                        <h3 style="margin: 0; font-size: 16px; font-weight: 700; color: var(--text-main);">Live Ride Status Tracker</h3>
                        ${isLive ? '<span class="live-badge"><span class="live-dot"></span> LIVE UPDATE</span>' : ''}
                    </div>
                    <span style="font-size: 13px; color: var(--text-muted);">Trip ID: #${booking.id} • ${booking.date} at ${booking.time}</span>
                </div>
                <div>
                    ${getStatusBadge(booking.status)}
                </div>
            </div>

            ${isCancelled ? `
                <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: var(--border-radius-md); padding: 16px; text-align: center; color: var(--danger-color); font-weight: 600;">
                    🚫 This trip has been cancelled.
                </div>
            ` : `
                <div class="tracker-stepper-wrap">
                    <div class="tracker-stepper">
                        <div class="tracker-line-bg"></div>
                        <div class="tracker-line-fill" style="width: ${fillWidth};"></div>

                        <!-- Step 1: Requested -->
                        <div class="tracker-step ${step > 1 ? 'completed' : (step === 1 ? 'active' : '')}">
                            <div class="step-circle">${step > 1 ? '✓' : '1'}</div>
                            <div class="step-title">Requested</div>
                            <div class="step-time">Ride booked</div>
                        </div>

                        <!-- Step 2: Assigned -->
                        <div class="tracker-step ${step > 2 ? 'completed' : (step === 2 ? 'active' : '')}">
                            <div class="step-circle">${step > 2 ? '✓' : '2'}</div>
                            <div class="step-title">Assigned</div>
                            <div class="step-time">${booking.driver ? booking.driver : 'Driver & Cab'}</div>
                        </div>

                        <!-- Step 3: In Transit -->
                        <div class="tracker-step ${step > 3 ? 'completed' : (step === 3 ? 'active' : '')}">
                            <div class="step-circle">${step > 3 ? '✓' : '3'}</div>
                            <div class="step-title">In Transit</div>
                            <div class="step-time">${step === 3 ? 'On the way' : 'En route'}</div>
                        </div>

                        <!-- Step 4: Completed -->
                        <div class="tracker-step ${step === 4 ? 'completed active' : ''}">
                            <div class="step-circle">${step === 4 ? '✓' : '4'}</div>
                            <div class="step-title">Completed</div>
                            <div class="step-time">Trip finished</div>
                        </div>
                    </div>
                </div>
            `}

            <div class="tracker-info-grid">
                <div class="tracker-info-item">
                    <span class="tracker-info-label">📍 Pickup Location</span>
                    <span class="tracker-info-value">${booking.pickup || 'N/A'}</span>
                </div>
                <div class="tracker-info-item">
                    <span class="tracker-info-label">🏁 Destination</span>
                    <span class="tracker-info-value">${booking.drop || 'N/A'}</span>
                </div>
                <div class="tracker-info-item">
                    <span class="tracker-info-label">👤 Driver Details</span>
                    <span class="tracker-info-value">${booking.driver && booking.driver !== 'Pending' ? booking.driver : 'Awaiting Driver'}</span>
                </div>
                <div class="tracker-info-item">
                    <span class="tracker-info-label">🚘 Assigned Vehicle</span>
                    <span class="tracker-info-value">${booking.cab && booking.cab !== 'Pending' ? booking.cab : 'Awaiting Cab'}</span>
                </div>
            </div>
        </div>
    `;
}

// Live real-time sync across open tabs and windows
window.addEventListener('storage', (e) => {
    if (e.key === 'bookings') {
        if (typeof loadDashboardData === 'function') loadDashboardData();
        if (typeof loadTrips === 'function') loadTrips();
    }
});

