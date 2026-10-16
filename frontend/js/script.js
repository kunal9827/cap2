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
            { id: 1, employeeName: 'Kunal', date: '2026-10-10', time: '08:30', pickup: 'Sector 57', drop: 'Cyber Hub', status: 'Assigned', cab: 'HR26AB1234', driver: 'Rahul', type: 'Local', startTime: '08:00', pickupTime: '08:30', eta: '09:15', currentLocation: 'Sector 50', route: 'Sector 57 -> Golf Course Rd -> Cyber Hub' },
            { id: 2, employeeName: 'Aarti', date: '2026-10-10', time: '11:00', pickup: 'Cyber Hub', drop: 'Delhi Airport', status: 'Driver Arriving', cab: 'HR26AB1234', driver: 'Rahul', type: 'Local', startTime: '10:30', pickupTime: '11:00', eta: '12:00', currentLocation: 'Cyber Hub Parking', route: 'Cyber Hub -> NH48 -> T3 Airport' },
            { id: 3, employeeName: 'Rohan', date: '2026-10-10', time: '14:00', pickup: 'Gurugram', drop: 'Jaipur', status: 'In Progress', cab: 'HR26AB1234', driver: 'Rahul', type: 'Outstation', startTime: '14:00', pickupTime: '14:15', eta: '18:30', currentLocation: 'Manesar Toll Plaza', route: 'Gurugram -> Manesar -> Bhiwadi -> Jaipur' },
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
    let label = status || 'Assigned';
    
    if (s.includes('complete')) {
        badgeClass = 'badge-completed';
        label = 'Completed';
    } else if (s.includes('progress') || s.includes('transit') || s.includes('started')) {
        badgeClass = 'badge-started';
        label = 'In Progress';
    } else if (s.includes('arriving')) {
        badgeClass = 'badge-arriving';
        label = 'Driver Arriving';
    } else if (s.includes('assign') || s.includes('confirm')) {
        badgeClass = 'badge-confirmed';
        label = 'Assigned';
    } else if (s.includes('cancel')) {
        badgeClass = 'badge-cancelled';
        label = 'Cancelled';
    } else if (s.includes('request') || s.includes('pend')) {
        badgeClass = 'badge-pending';
        label = 'Requested';
    }
    
    return `<span class="badge ${badgeClass}">${label}</span>`;
}

// 4-Stage Lifecycle Helper: Assigned -> Driver Arriving -> In Progress -> Completed
function getLifecycleStage(status) {
    const s = (status || '').toLowerCase();
    if (s.includes('cancel')) return { step: -1, label: 'Cancelled' };
    if (s.includes('complete')) return { step: 4, label: 'Completed' };
    if (s.includes('progress') || s.includes('transit') || s.includes('started')) return { step: 3, label: 'In Progress' };
    if (s.includes('arriving')) return { step: 2, label: 'Driver Arriving' };
    return { step: 1, label: 'Assigned' };
}

// Dynamic Estimated Arrival Time (ETA) calculation
function getBookingETA(booking) {
    if (!booking) return '15 mins';
    const stage = getLifecycleStage(booking.status).step;
    if (stage === -1) return 'Cancelled';
    if (stage === 4) return 'Arrived at Destination';
    if (stage === 3) return booking.eta ? `${booking.eta} (~14 mins to drop)` : '14 mins (En route to drop)';
    if (stage === 2) return '3 - 5 mins (Driver arriving at pickup)';
    return '10 - 15 mins (Driver dispatched)';
}

// Active Leaflet Map Instances cache
const liveMapInstances = {};

// Coordinate dictionary for locations in NCR / regional demo
const GEO_LOCATIONS = {
    'sector 57': [28.4285, 77.0784],
    'cyber hub': [28.4986, 77.0878],
    'delhi airport': [28.5562, 77.1000],
    't3 airport': [28.5562, 77.1000],
    'gurugram': [28.4595, 77.0266],
    'jaipur': [26.9124, 75.7873],
    'sector 14': [28.4732, 77.0425],
    'udyog vihar': [28.5036, 77.0831],
    'sector 50': [28.4194, 77.0601],
    'sector 29': [28.4682, 77.0617],
    'golf course rd': [28.4542, 77.0982]
};

function getLocationCoords(locStr, fallbackOffset = 0) {
    if (!locStr) return [28.4595 + fallbackOffset, 77.0266 + fallbackOffset];
    const key = locStr.toLowerCase().trim();
    for (const name in GEO_LOCATIONS) {
        if (key.includes(name)) return GEO_LOCATIONS[name];
    }
    return [28.4595 + fallbackOffset, 77.0266 + fallbackOffset];
}

// Fallback high-fidelity SVG Vector Map (works 100% offline or while Leaflet loads)
function renderFallbackVectorMap(container, booking, stage) {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const bgColor = isDark ? '#1e293b' : '#f1f5f9';
    const roadColor = isDark ? '#334155' : '#e2e8f0';
    const textColor = isDark ? '#cbd5e1' : '#475569';
    
    // Positions along route in SVG viewBox (0 0 500 240)
    let carX = 140, carY = 160;
    if (stage === 1) { carX = 80; carY = 190; }
    else if (stage === 2) { carX = 115; carY = 135; }
    else if (stage === 3) { carX = 260; carY = 100; }
    else if (stage === 4) { carX = 420; carY = 60; }

    container.innerHTML = `
        <svg viewBox="0 0 500 240" width="100%" height="100%" style="display:block; background:${bgColor}; border-radius:8px;">
            <defs>
                <pattern id="grid-${booking.id}" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${roadColor}" stroke-width="1" opacity="0.6"/>
                </pattern>
                <filter id="glow-${booking.id}" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            <!-- Background Grid representing streets -->
            <rect width="100%" height="100%" fill="url(#grid-${booking.id})" />

            <!-- Main Arterial Roads -->
            <path d="M 20 200 L 480 200" stroke="${roadColor}" stroke-width="12" stroke-linecap="round"/>
            <path d="M 80 220 L 140 30" stroke="${roadColor}" stroke-width="10" stroke-linecap="round"/>
            <path d="M 120 120 Q 250 80, 440 60" stroke="${roadColor}" stroke-width="14" stroke-linecap="round"/>

            <!-- Route Polyline -->
            <path d="M 100 130 Q 240 90, 420 60" fill="none" stroke="#3b82f6" stroke-width="5" stroke-dasharray="8 6" opacity="0.9" />

            <!-- Pickup Location Pin -->
            <g transform="translate(100, 130)">
                <circle r="14" fill="#10b981" filter="url(#glow-${booking.id})"/>
                <circle r="7" fill="#ffffff"/>
                <text x="0" y="26" font-size="11" font-weight="700" fill="${textColor}" text-anchor="middle">📍 ${booking.pickup || 'Pickup'}</text>
            </g>

            <!-- Drop Location Pin -->
            <g transform="translate(420, 60)">
                <circle r="14" fill="#ef4444" filter="url(#glow-${booking.id})"/>
                <circle r="7" fill="#ffffff"/>
                <text x="0" y="26" font-size="11" font-weight="700" fill="${textColor}" text-anchor="middle">🏁 ${booking.drop || 'Drop'}</text>
            </g>

            <!-- Moving Cab Marker -->
            <g transform="translate(${carX}, ${carY})">
                <circle r="22" fill="#3b82f6" opacity="0.25">
                    <animate attributeName="r" values="18;28;18" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.4;0.05;0.4" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle r="16" fill="#3b82f6" stroke="#ffffff" stroke-width="2"/>
                <text x="0" y="5" font-size="15" text-anchor="middle" dominant-baseline="central">🚕</text>
                <rect x="-45" y="-32" width="90" height="18" rx="4" fill="rgba(15, 23, 42, 0.85)"/>
                <text x="0" y="-20" font-size="9.5" font-weight="700" fill="#ffffff" text-anchor="middle">${booking.cab || 'Cab'}</text>
            </g>
        </svg>
    `;
}

// Initialize Leaflet Live Map or SVG fallback
function initLiveCabMap(containerId, booking) {
    if (!booking) return;
    const container = document.getElementById(containerId);
    if (!container) return;

    const stage = getLifecycleStage(booking.status).step;

    // If Leaflet is loaded in window
    if (typeof L !== 'undefined' && L.map) {
        try {
            if (liveMapInstances[containerId]) {
                liveMapInstances[containerId].remove();
                delete liveMapInstances[containerId];
            }

            container.innerHTML = '';
            
            const pickupCoords = getLocationCoords(booking.pickup, 0);
            const dropCoords = getLocationCoords(booking.drop, 0.05);

            // Interpolate Cab Position
            let cabCoords;
            if (stage === 1) {
                cabCoords = [pickupCoords[0] - 0.012, pickupCoords[1] - 0.010];
            } else if (stage === 2) {
                cabCoords = [pickupCoords[0] - 0.003, pickupCoords[1] - 0.002];
            } else if (stage === 3) {
                cabCoords = [(pickupCoords[0] + dropCoords[0]) / 2, (pickupCoords[1] + dropCoords[1]) / 2];
            } else {
                cabCoords = [dropCoords[0], dropCoords[1]];
            }

            const map = L.map(containerId, {
                zoomControl: true,
                attributionControl: false
            }).setView(cabCoords, 13);

            liveMapInstances[containerId] = map;

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19
            }).addTo(map);

            // Pickup Marker
            const pickupIcon = L.divIcon({
                className: 'custom-pickup-pin',
                html: '<div style="background:#10b981; color:#fff; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:13px; box-shadow:0 2px 8px rgba(0,0,0,0.3); border:2px solid #fff;">📍</div>',
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });
            L.marker(pickupCoords, { icon: pickupIcon }).addTo(map)
                .bindPopup(`<b>Pickup:</b> ${booking.pickup || 'Pickup point'}`);

            // Destination Marker
            const dropIcon = L.divIcon({
                className: 'custom-drop-pin',
                html: '<div style="background:#ef4444; color:#fff; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:13px; box-shadow:0 2px 8px rgba(0,0,0,0.3); border:2px solid #fff;">🏁</div>',
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });
            L.marker(dropCoords, { icon: dropIcon }).addTo(map)
                .bindPopup(`<b>Drop:</b> ${booking.drop || 'Destination'}`);

            // Live Cab Marker with Radar Pulse
            const cabIcon = L.divIcon({
                className: 'custom-cab-pin',
                html: '<div class="cab-marker-pulsing">🚕</div>',
                iconSize: [36, 36],
                iconAnchor: [18, 18]
            });
            const cabMarker = L.marker(cabCoords, { icon: cabIcon }).addTo(map)
                .bindPopup(`<b>🚖 ${booking.cab || 'Cab'}</b><br>Driver: ${booking.driver || 'Rahul'}<br>ETA: ${getBookingETA(booking)}`);

            // Auto open cab popup if active
            if (stage === 2 || stage === 3) {
                cabMarker.openPopup();
            }

            // Route Polyline
            const routeLine = L.polyline([pickupCoords, cabCoords, dropCoords], {
                color: '#3b82f6',
                weight: 5,
                opacity: 0.85,
                dashArray: '8, 8'
            }).addTo(map);

            const bounds = L.latLngBounds([pickupCoords, cabCoords, dropCoords]).pad(0.25);
            map.fitBounds(bounds);

            setTimeout(() => { map.invalidateSize(); }, 250);
            return;
        } catch (err) {
            console.warn('Leaflet initialization fallback:', err);
        }
    }

    // High quality vector fallback
    renderFallbackVectorMap(container, booking, stage);
}

// Render comprehensive Live Cab Tracking component with 4-step stepper, live map, driver details, and ETA
function renderLiveRideTracker(booking, options = {}) {
    if (!booking) return '';
    const lifecycle = getLifecycleStage(booking.status);
    const step = lifecycle.step;
    const isCancelled = step === -1;
    const etaText = getBookingETA(booking);

    // Stepper Line Fill Width:
    // Step 1: 0% | Step 2: 33% | Step 3: 66% | Step 4: 100%
    let fillWidth = '0%';
    if (step === 2) fillWidth = '33%';
    else if (step === 3) fillWidth = '66%';
    else if (step >= 4) fillWidth = '100%';

    const isLive = step === 2 || step === 3;
    const mapContainerId = `cabMap-${booking.id}-${Math.floor(Math.random() * 1000)}`;

    // Trigger map rendering right after DOM injects the container
    setTimeout(() => {
        initLiveCabMap(mapContainerId, booking);
    }, 100);

    return `
        <div class="tracker-card" id="tracker-${booking.id}">
            <!-- Tracker Header -->
            <div class="tracker-card-header">
                <div>
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px; flex-wrap: wrap;">
                        <h3 style="margin: 0; font-size: 17px; font-weight: 700; color: var(--text-main);">📍 Live Cab Tracking</h3>
                        ${isLive ? '<span class="live-badge"><span class="live-dot"></span> LIVE GPS TRACKING</span>' : ''}
                        <span class="tracker-eta-badge">⏱️ ETA: ${etaText}</span>
                    </div>
                    <span style="font-size: 13px; color: var(--text-muted);">Trip #${booking.id} • ${booking.date} at ${booking.time} • ${booking.type || 'Standard'}</span>
                </div>
                <div>
                    ${getStatusBadge(booking.status)}
                </div>
            </div>

            ${isCancelled ? `
                <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: var(--border-radius-md); padding: 20px; text-align: center; color: var(--danger-color); font-weight: 600; margin-bottom: 16px;">
                    🚫 This cab reservation has been cancelled.
                </div>
            ` : `
                <!-- 1. Interactive Live Map -->
                <div class="live-map-wrapper">
                    <div class="map-overlay-eta">
                        <span>⏱️ ETA: ${etaText}</span>
                    </div>
                    <div class="map-overlay-cab">
                        <span>🚖 ${booking.cab || 'Cab'} • ${booking.driver || 'Rahul'}</span>
                    </div>
                    <div id="${mapContainerId}" style="width: 100%; height: 100%;">
                        <!-- Leaflet Map or SVG Fallback injected here -->
                    </div>
                </div>

                <!-- 2. 4-Stage Stepper: Assigned -> Driver Arriving -> In Progress -> Completed -->
                <div class="tracker-stepper-wrap">
                    <div class="tracker-stepper">
                        <div class="tracker-line-bg"></div>
                        <div class="tracker-line-fill" style="width: ${fillWidth};"></div>

                        <!-- Step 1: Assigned -->
                        <div class="tracker-step ${step > 1 ? 'completed' : (step === 1 ? 'active' : '')}">
                            <div class="step-circle">${step > 1 ? '✓' : '1'}</div>
                            <div class="step-title">Assigned</div>
                            <div class="step-time">Cab Allocated</div>
                        </div>

                        <!-- Step 2: Driver Arriving -->
                        <div class="tracker-step ${step > 2 ? 'completed' : (step === 2 ? 'active' : '')}">
                            <div class="step-circle">${step > 2 ? '✓' : '2'}</div>
                            <div class="step-title">Driver Arriving</div>
                            <div class="step-time">${step === 2 ? 'Heading to pickup' : 'On route'}</div>
                        </div>

                        <!-- Step 3: In Progress -->
                        <div class="tracker-step ${step > 3 ? 'completed' : (step === 3 ? 'active' : '')}">
                            <div class="step-circle">${step > 3 ? '✓' : '3'}</div>
                            <div class="step-title">In Progress</div>
                            <div class="step-time">${step === 3 ? 'En route to drop' : 'Trip started'}</div>
                        </div>

                        <!-- Step 4: Completed -->
                        <div class="tracker-step ${step === 4 ? 'completed active' : ''}">
                            <div class="step-circle">${step === 4 ? '✓' : '4'}</div>
                            <div class="step-title">Completed</div>
                            <div class="step-time">Trip Finished</div>
                        </div>
                    </div>
                </div>
            `}

            <!-- 3. Driver & Vehicle Profile Card -->
            <div class="tracker-driver-card">
                <div class="driver-profile">
                    <div class="driver-avatar-circle">👨‍✈️</div>
                    <div class="driver-info-meta">
                        <h4>Driver: ${booking.driver && booking.driver !== 'Pending' ? booking.driver : 'Assigned Driver'}</h4>
                        <p>Vehicle: <strong>${booking.cab && booking.cab !== 'Pending' ? booking.cab : 'Swift Dzire (HR26AB1234)'}</strong></p>
                    </div>
                </div>
                <div class="driver-action-buttons">
                    <button type="button" class="btn btn-secondary btn-sm" onclick="alert('Calling driver ${booking.driver || 'Rahul'} (+91 98765 43210)...')" style="padding: 8px 14px; font-weight: 600;">
                        📞 Call Driver
                    </button>
                    <button type="button" class="btn btn-secondary btn-sm" onclick="alert('Message sent to driver ${booking.driver || 'Rahul'}: I am waiting at the pickup point.')" style="padding: 8px 14px; font-weight: 600;">
                        💬 Message
                    </button>
                </div>
            </div>

            <!-- 4. Trip Route Grid Details -->
            <div class="tracker-info-grid">
                <div class="tracker-info-item">
                    <span class="tracker-info-label">📍 Pickup Location</span>
                    <span class="tracker-info-value">${booking.pickup || 'Sector 57'}</span>
                </div>
                <div class="tracker-info-item">
                    <span class="tracker-info-label">🏁 Destination (Drop)</span>
                    <span class="tracker-info-value">${booking.drop || 'Cyber Hub'}</span>
                </div>
                <div class="tracker-info-item">
                    <span class="tracker-info-label">⏱️ Estimated Arrival</span>
                    <span class="tracker-info-value" style="color: var(--primary-color);">${etaText}</span>
                </div>
                <div class="tracker-info-item">
                    <span class="tracker-info-label">🚗 Current Stage</span>
                    <span class="tracker-info-value">${lifecycle.label}</span>
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
        if (typeof loadLiveTrackingView === 'function') loadLiveTrackingView();
        if (typeof loadAdminTrackingView === 'function') loadAdminTrackingView();
    }
});


