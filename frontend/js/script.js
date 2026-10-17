// ==========================================================================
// SMART PICKUP POINTS & HIGH-FIDELITY PRESET PHOTOS
// ==========================================================================
const SMART_PICKUP_PRESET_PHOTOS = {
    'cyberhub': `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%231e293b"/><rect x="0" y="270" width="600" height="130" fill="%23475569"/><rect x="0" y="270" width="600" height="15" fill="%23f59e0b"/><line x1="0" y1="340" x2="600" y2="340" stroke="%23f1f5f9" stroke-width="6" stroke-dasharray="25,20"/><rect x="180" y="50" width="90" height="290" fill="%2394a3b8" stroke="%2364748b" stroke-width="4"/><rect x="185" y="110" width="80" height="55" rx="8" fill="%23eab308"/><text x="225" y="148" font-family="Arial,sans-serif" font-size="26" font-weight="900" fill="%230f172a" text-anchor="middle">D-3</text><text x="225" y="195" font-family="Arial,sans-serif" font-size="11" font-weight="bold" fill="%230f172a" text-anchor="middle">CAB BAY</text><rect x="30" y="70" width="120" height="200" rx="8" fill="%23064e3b" stroke="%23047857" stroke-width="3"/><circle cx="90" cy="130" r="32" fill="%23059669"/><text x="90" y="142" font-family="Arial,sans-serif" font-size="32" text-anchor="middle">☕</text><text x="90" y="185" font-family="Arial,sans-serif" font-size="12" font-weight="900" fill="%23ffffff" text-anchor="middle">STARBUCKS</text><text x="90" y="202" font-family="Arial,sans-serif" font-size="10" fill="%23a7f3d0" text-anchor="middle">GATE 2 EXIT</text><rect x="290" y="60" width="270" height="95" rx="10" fill="%232563eb" stroke="%23ffffff" stroke-width="3"/><text x="425" y="96" font-family="Arial,sans-serif" font-size="17" font-weight="bold" fill="%23ffffff" text-anchor="middle">🚖 CABFLOW PICKUP ZONE</text><text x="425" y="125" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="%23fde047" text-anchor="middle">GATE 2 • PILLAR D-3</text><text x="425" y="142" font-family="Arial,sans-serif" font-size="10" fill="%23bfdbfe" text-anchor="middle">DLF CyberHub, Gurugram</text><circle cx="420" cy="235" r="26" fill="%233b82f6" opacity="0.95"/><text x="420" y="244" font-family="Arial,sans-serif" font-size="24" text-anchor="middle">🧍</text><rect x="340" y="280" width="160" height="28" rx="6" fill="%230f172a" stroke="%233b82f6" stroke-width="2"/><text x="420" y="299" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="%2360a5fa" text-anchor="middle">📍 Passenger Waiting Here</text></svg>`,
    'ambience': `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%230f172a"/><rect x="0" y="260" width="600" height="140" fill="%23334155"/><rect x="0" y="260" width="600" height="14" fill="%2310b981"/><polygon points="40,60 560,60 530,120 70,120" fill="%2338bdf8" opacity="0.3" stroke="%230284c7" stroke-width="2"/><rect x="70" y="120" width="220" height="140" fill="%231e293b" stroke="%2338bdf8" stroke-width="2"/><text x="180" y="165" font-family="Arial,sans-serif" font-size="20" font-weight="bold" fill="%23ffffff" text-anchor="middle">GATE 3</text><text x="180" y="195" font-family="Arial,sans-serif" font-size="13" fill="%2394a3b8" text-anchor="middle">Marks &amp; Spencer Wing</text><rect x="320" y="100" width="240" height="90" rx="8" fill="%23059669" stroke="%23ffffff" stroke-width="3"/><text x="440" y="135" font-family="Arial,sans-serif" font-size="16" font-weight="bold" fill="%23ffffff" text-anchor="middle">🚖 APP CAB PICKUP BAY</text><text x="440" y="165" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="%23a7f3d0" text-anchor="middle">BAY 3 • GROUND LEVEL</text><circle cx="440" cy="235" r="26" fill="%2310b981"/><text x="440" y="244" font-family="Arial,sans-serif" font-size="24" text-anchor="middle">🧍</text><rect x="360" y="280" width="160" height="28" rx="6" fill="%230f172a" stroke="%2310b981" stroke-width="2"/><text x="440" y="299" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="%2334d399" text-anchor="middle">📍 Passenger Waiting Here</text></svg>`,
    'medanta': `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%230c4a6e"/><rect x="0" y="270" width="600" height="130" fill="%23334155"/><rect x="0" y="270" width="600" height="14" fill="%230284c7"/><rect x="50" y="60" width="220" height="210" fill="%23f8fafc" stroke="%23cbd5e1" stroke-width="3"/><text x="160" y="105" font-family="Arial,sans-serif" font-size="24" font-weight="bold" fill="%23ef4444" text-anchor="middle">🏥 MAIN OPD</text><rect x="120" y="130" width="80" height="60" rx="6" fill="%230284c7"/><text x="160" y="170" font-family="Arial,sans-serif" font-size="26" font-weight="900" fill="%23ffffff" text-anchor="middle">H-2</text><text x="160" y="210" font-family="Arial,sans-serif" font-size="11" font-weight="bold" fill="%23475569" text-anchor="middle">Wheelchair Ramp Entrance</text><rect x="300" y="80" width="260" height="90" rx="8" fill="%230284c7" stroke="%23ffffff" stroke-width="3"/><text x="430" y="115" font-family="Arial,sans-serif" font-size="16" font-weight="bold" fill="%23ffffff" text-anchor="middle">🚖 OPD CAB PICKUP BAY</text><text x="430" y="145" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="%23bae6fd" text-anchor="middle">MEDANTA THE MEDICITY</text><circle cx="430" cy="235" r="26" fill="%230284c7"/><text x="430" y="244" font-family="Arial,sans-serif" font-size="24" text-anchor="middle">🧍</text><rect x="350" y="280" width="160" height="28" rx="6" fill="%230f172a" stroke="%2338bdf8" stroke-width="2"/><text x="430" y="299" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="%2338bdf8" text-anchor="middle">📍 Passenger Waiting Here</text></svg>`,
    'campus': `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%231e1b4b"/><rect x="0" y="270" width="600" height="130" fill="%23334155"/><rect x="0" y="270" width="600" height="14" fill="%238b5cf6"/><path d="M 60 270 L 60 100 Q 170 40, 280 100 L 280 270" fill="none" stroke="%23e2e8f0" stroke-width="24"/><text x="170" y="130" font-family="Arial,sans-serif" font-size="20" font-weight="900" fill="%23ffffff" text-anchor="middle">GATE 1</text><text x="170" y="160" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="%23c4b5fd" text-anchor="middle">UNIVERSITY MAIN ENTRANCE</text><rect x="310" y="80" width="250" height="90" rx="8" fill="%236d28d9" stroke="%23ffffff" stroke-width="3"/><text x="435" y="115" font-family="Arial,sans-serif" font-size="16" font-weight="bold" fill="%23ffffff" text-anchor="middle">🚖 CAMPUS CAB BAY</text><text x="435" y="145" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="%23ddd6fe" text-anchor="middle">SECURITY BOOTH &amp; BUS LOOP</text><circle cx="435" cy="235" r="26" fill="%238b5cf6"/><text x="435" y="244" font-family="Arial,sans-serif" font-size="24" text-anchor="middle">🧍</text><rect x="355" y="280" width="160" height="28" rx="6" fill="%230f172a" stroke="%23a78bfa" stroke-width="2"/><text x="435" y="299" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="%23c4b5fd" text-anchor="middle">📍 Passenger Waiting Here</text></svg>`
};

// Comprehensive directory of Crowded Hubs (Malls, Colleges, Hospitals, Markets)
const SMART_PICKUP_HUBS = {
    'cyber hub': {
        id: 'cyber hub',
        name: 'DLF CyberHub',
        fullName: 'DLF CyberHub, Gurugram',
        category: 'Corporate & Food Hub',
        coords: [28.4986, 77.0878],
        presetKey: 'cyberhub',
        offRoadZones: [
            {
                name: 'Central Amphitheater & Promenade',
                center: [28.4986, 77.0878],
                radiusMeters: 90,
                distanceToRoad: 110,
                warning: 'Selected pin is 110m inside the central pedestrian amphitheater promenade! Vehicles and cabs cannot legally enter or stop here. Drivers will be unable to reach you.'
            }
        ],
        spots: [
            {
                id: 'ch-spot-1',
                name: 'Gate 2 - Dedicated Cab Pickup Bay',
                coords: [28.4979, 77.0886],
                landmark: 'Right next to Starbucks & Outdoor Escalator, Pillar D-3. Look for yellow CabFlow sign.',
                distanceToRoad: 8,
                isRoadAccessible: true,
                walkingDistance: '45m',
                walkingTime: '1 min walk',
                steps: [
                    'Exit DLF CyberHub via Gate 2 glass doors (beside Starbucks).',
                    'Walk 30 meters along the covered pedestrian walkway towards the outer lane.',
                    'Wait at the sheltered Cab Pickup Bay at Pillar D-3.'
                ],
                recommended: true,
                popularFor: 'Starbucks, Social, Building 8 & 9 offices'
            },
            {
                id: 'ch-spot-2',
                name: 'Building 10 Entry Porch (Opposite Costa Coffee)',
                coords: [28.4994, 77.0869],
                landmark: 'Opposite Costa Coffee fountain roundabout, sheltered porch lane.',
                distanceToRoad: 12,
                isRoadAccessible: true,
                walkingDistance: '85m',
                walkingTime: '2 min walk',
                steps: [
                    'Head towards Building 10 Ground Level exit.',
                    'Walk past Costa Coffee towards the circular vehicle roundabout.',
                    'Stand under the covered porch drop zone.'
                ],
                recommended: false,
                popularFor: 'Building 10 & 10B offices'
            },
            {
                id: 'ch-spot-3',
                name: 'Gateway Tower Service Road Taxi Stand',
                coords: [28.4965, 77.0895],
                landmark: 'Directly on the NH-48 service road curb beside Gateway Tower security kiosk.',
                distanceToRoad: 0,
                isRoadAccessible: true,
                walkingDistance: '140m',
                walkingTime: '3 min walk',
                steps: [
                    'Take the south pedestrian ramp down to NH-48 Service Road.',
                    'Turn left towards the Gateway Tower guard booth.',
                    'Wait at the dedicated curbside taxi stand for quick highway exit.'
                ],
                recommended: false,
                popularFor: 'Fastest exit towards Delhi/Airport'
            }
        ]
    },
    'ambience mall': {
        id: 'ambience mall',
        name: 'Ambience Mall',
        fullName: 'Ambience Mall, NH-8 Gurugram',
        category: 'Shopping Mall',
        coords: [28.5042, 77.0968],
        presetKey: 'ambience',
        offRoadZones: [
            {
                name: 'Central Mall Atrium (Ground & 1st Floor)',
                center: [28.5042, 77.0968],
                radiusMeters: 120,
                distanceToRoad: 135,
                warning: 'Selected pin is ~135m deep inside the enclosed shopping mall atrium. Cabs cannot enter the building structure. Please select an exterior designated bay.'
            }
        ],
        spots: [
            {
                id: 'amb-spot-1',
                name: 'Gate 3 - Dedicated App Cab Bay (Near Marks & Spencer)',
                coords: [28.5035, 77.0976],
                landmark: 'Ground Floor exit, right beside Marks & Spencer. Designated yellow taxi bay.',
                distanceToRoad: 6,
                isRoadAccessible: true,
                walkingDistance: '50m',
                walkingTime: '1 min walk',
                steps: [
                    'Take Ground Floor exit next to Marks & Spencer glass foyer.',
                    'Step onto the covered taxi canopy sidewalk.',
                    'Wait at designated CabFlow Bay 3.'
                ],
                recommended: true,
                popularFor: 'Shoppers, Retail staff, Cinema crowd'
            },
            {
                id: 'amb-spot-2',
                name: 'Basement P1 - Express Ride Lounge (Pillar B-14)',
                coords: [28.5045, 77.0961],
                landmark: 'Basement 1, Pillar B-14 directly facing VIP Valet and Express elevator.',
                distanceToRoad: 15,
                isRoadAccessible: true,
                walkingDistance: '65m',
                walkingTime: '1.5 min walk',
                steps: [
                    'Take Central Lift to Level P1.',
                    'Follow the green App-Taxi signs towards Pillar B-14.',
                    'Wait in the air-conditioned ride waiting lounge.'
                ],
                recommended: false,
                popularFor: 'Rainy weather & rush hours'
            },
            {
                id: 'amb-spot-3',
                name: 'Hotel Leela Driveway & Outer Ring Curb',
                coords: [28.5055, 77.0950],
                landmark: 'Hotel Leela Ambience entrance arch, outer perimeter road curb.',
                distanceToRoad: 4,
                isRoadAccessible: true,
                walkingDistance: '120m',
                walkingTime: '2.5 min walk',
                steps: [
                    'Exit through the West wing glass doors.',
                    'Walk towards the Hotel Leela entrance arch.',
                    'Wait at the wide curbside pull-in bay.'
                ],
                recommended: false,
                popularFor: 'North wing visitors'
            }
        ]
    },
    'medanta': {
        id: 'medanta',
        name: 'Medanta Hospital',
        fullName: 'Medanta - The Medicity, Sector 38',
        category: 'Hospital & Healthcare',
        coords: [28.4390, 77.0425],
        presetKey: 'medanta',
        offRoadZones: [
            {
                name: 'Inpatient Hospital Wards & Central Courtyard',
                center: [28.4390, 77.0425],
                radiusMeters: 100,
                distanceToRoad: 125,
                warning: 'Selected pin is inside the hospital inpatient ward/pedestrian garden. Private cabs strictly prohibited from interior hospital corridors.'
            }
        ],
        spots: [
            {
                id: 'med-spot-1',
                name: 'Main OPD Porch - Dedicated Cab Bay (Pillar H-2)',
                coords: [28.4384, 77.0432],
                landmark: 'Main OPD entrance porch, beside Pillar H-2 wheelchair ramp. Dedicated cab lane.',
                distanceToRoad: 8,
                isRoadAccessible: true,
                walkingDistance: '35m',
                walkingTime: '1 min walk',
                steps: [
                    'Exit through Main OPD building reception doors.',
                    'Proceed along the sheltered wheelchair-accessible ramp.',
                    'Wait at Pillar H-2 under the yellow CabFlow sign.'
                ],
                recommended: true,
                popularFor: 'Patients, OPD visitors, Doctors'
            },
            {
                id: 'med-spot-2',
                name: 'Emergency Wing Driveway (Near 24/7 Pharmacy)',
                coords: [28.4396, 77.0418],
                landmark: 'Opposite Medanta 24/7 Pharmacy, Emergency building drop circle.',
                distanceToRoad: 5,
                isRoadAccessible: true,
                walkingDistance: '70m',
                walkingTime: '1.5 min walk',
                steps: [
                    'Exit via Emergency Wing side doors.',
                    'Cross the pedestrian crossing towards the pharmacy curb.',
                    'Wait at the designated non-ambulance pickup bay.'
                ],
                recommended: false,
                popularFor: 'Emergency visitors & night shifts'
            },
            {
                id: 'med-spot-3',
                name: 'Gate 1 Outer Road Stand (Sohna Road Junction)',
                coords: [28.4375, 77.0440],
                landmark: 'Main Gate 1 security guard booth on the broad outer avenue curb.',
                distanceToRoad: 0,
                isRoadAccessible: true,
                walkingDistance: '150m',
                walkingTime: '3 min walk',
                steps: [
                    'Walk down the main tree-lined hospital avenue towards Gate 1.',
                    'Exit the gate towards the outer avenue.',
                    'Wait on the wide paved curb.'
                ],
                recommended: false,
                popularFor: 'Quick exit without campus traffic'
            }
        ]
    },
    'amity university': {
        id: 'amity university',
        name: 'Amity University Campus',
        fullName: 'Amity University / College Campus',
        category: 'College & University',
        coords: [28.3180, 76.9020],
        presetKey: 'campus',
        offRoadZones: [
            {
                name: 'Campus Academic Quadrangle & Sports Ground',
                center: [28.3180, 76.9020],
                radiusMeters: 140,
                distanceToRoad: 160,
                warning: 'Selected pin is ~160m inside the central campus lawn/quadrangle. No motor vehicles permitted past perimeter barrier gates.'
            }
        ],
        spots: [
            {
                id: 'col-spot-1',
                name: 'University Main Gate 1 (Security Booth & Bus Bay)',
                coords: [28.3195, 76.9040],
                landmark: 'Under the arched Gate 1 sign, next to the visitor security cabin and turnstiles.',
                distanceToRoad: 5,
                isRoadAccessible: true,
                walkingDistance: '40m',
                walkingTime: '1 min walk',
                steps: [
                    'Walk towards the university main entrance gate.',
                    'Pass the turnstile gates to the outer perimeter.',
                    'Wait at the sheltered cab shelter by the security booth.'
                ],
                recommended: true,
                popularFor: 'Day scholars, Faculty, Visitors'
            },
            {
                id: 'col-spot-2',
                name: 'Hostel Block C Roundabout (Sports Complex Gate)',
                coords: [28.3168, 76.9005],
                landmark: 'Circular roundabout between Hostel Block C and Basketball courts.',
                distanceToRoad: 10,
                isRoadAccessible: true,
                walkingDistance: '75m',
                walkingTime: '1.5 min walk',
                steps: [
                    'Exit hostel reception area.',
                    'Walk towards the sports ground driveway roundabout.',
                    'Wait by the illuminated CabFlow pickup pole.'
                ],
                recommended: false,
                popularFor: 'Hostel residents & evening departures'
            }
        ]
    },
    'sector 29': {
        id: 'sector 29',
        name: 'Sector 29 Market',
        fullName: 'Sector 29 Food Street & Market',
        category: 'Crowded Market & Food Street',
        coords: [28.4682, 77.0617],
        presetKey: 'cyberhub',
        offRoadZones: [
            {
                name: 'Inner Brewery Alley & Pedestrian Market Square',
                center: [28.4682, 77.0617],
                radiusMeters: 110,
                distanceToRoad: 120,
                warning: 'Selected pin is 120m inside the pedestrian market square. Bollards block all vehicular traffic.'
            }
        ],
        spots: [
            {
                id: 's29-spot-1',
                name: 'North Parking Lot Cab Bay (Near Fountain & Police Booth)',
                coords: [28.4690, 77.0625],
                landmark: 'Directly in front of Sector 29 Police Assistance Booth & Central Fountain.',
                distanceToRoad: 4,
                isRoadAccessible: true,
                walkingDistance: '35m',
                walkingTime: '1 min walk',
                steps: [
                    'Walk past the inner restaurant strip towards North Parking.',
                    'Look for the lit police assistance booth.',
                    'Wait in the dedicated taxi waiting lane.'
                ],
                recommended: true,
                popularFor: 'Dining crowd, Weekend visitors'
            },
            {
                id: 's29-spot-2',
                name: 'HUDA City Centre Metro Gate 2 Overpass Curb',
                coords: [28.4595, 77.0725],
                landmark: 'Metro Station Gate 2 escalator landing, wide service road.',
                distanceToRoad: 2,
                isRoadAccessible: true,
                walkingDistance: '90m',
                walkingTime: '2 min walk',
                steps: [
                    'Take the pedestrian skywalk towards Metro Gate 2.',
                    'Descend escalator to ground level.',
                    'Wait at the yellow painted curb.'
                ],
                recommended: false,
                popularFor: 'Metro commuters'
            }
        ]
    },
    'delhi airport': {
        id: 'delhi airport',
        name: 'Delhi Airport T3',
        fullName: 'Indira Gandhi International Airport (T3)',
        category: 'Airport Terminal',
        coords: [28.5562, 77.1000],
        presetKey: 'cyberhub',
        offRoadZones: [
            {
                name: 'Terminal Interior Baggage Reclaim & Security Hall',
                center: [28.5562, 77.1000],
                radiusMeters: 150,
                distanceToRoad: 140,
                warning: 'Selected pin is inside the secure terminal building. Vehicles cannot enter the building structure.'
            }
        ],
        spots: [
            {
                id: 't3-spot-1',
                name: 'Pillar 10 - Commercial Cab Lane (Arrivals Lower Level)',
                coords: [28.5555, 77.1012],
                landmark: 'Under large overhead Pillar 10 sign, Commercial Cab Lane 3.',
                distanceToRoad: 5,
                isRoadAccessible: true,
                walkingDistance: '40m',
                walkingTime: '1 min walk',
                steps: [
                    'Exit Terminal 3 through Arrivals Gate 5 or 6.',
                    'Cross the pedestrian zebra crossing to Commercial Lane 3.',
                    'Locate Pillar 10 and wait by the CabFlow boarding zone.'
                ],
                recommended: true,
                popularFor: 'Arrivals, Travelers with luggage'
            },
            {
                id: 't3-spot-2',
                name: 'Multi-Level Car Parking (MLCP) - Level 2 App-Cab Bay',
                coords: [28.5570, 77.0990],
                landmark: 'MLCP Building Level 2, designated App-Cab Lounge Bay D.',
                distanceToRoad: 10,
                isRoadAccessible: true,
                walkingDistance: '110m',
                walkingTime: '2.5 min walk',
                steps: [
                    'Take the covered pedestrian bridge connecting T3 to MLCP.',
                    'Take elevator to Level 2.',
                    'Wait at Bay D in the air-conditioned lounge.'
                ],
                recommended: false,
                popularFor: 'Peak arrival hours'
            }
        ]
    },
    'sector 57': {
        id: 'sector 57',
        name: 'Sector 57',
        fullName: 'Sector 57, Gurugram',
        category: 'Residential & Market Hub',
        coords: [28.4285, 77.0784],
        presetKey: 'cyberhub',
        offRoadZones: [
            {
                name: 'Gated Community Park & Interior Alley',
                center: [28.4285, 77.0784],
                radiusMeters: 70,
                distanceToRoad: 85,
                warning: 'Selected pin is 85m inside a locked private residential block. Barrier gates prevent through-cab access.'
            }
        ],
        spots: [
            {
                id: 's57-spot-1',
                name: 'Sector 57 Main Market Gate (Near Mother Dairy)',
                coords: [28.4292, 77.0792],
                landmark: 'Beside Mother Dairy Booth and chemist shop on the wide sector dividing road.',
                distanceToRoad: 4,
                isRoadAccessible: true,
                walkingDistance: '30m',
                walkingTime: '1 min walk',
                steps: [
                    'Walk out towards the main sector dividing avenue.',
                    'Stand beside the Mother Dairy kiosk on the paved curb.'
                ],
                recommended: true,
                popularFor: 'Sector residents, Market visitors'
            },
            {
                id: 's57-spot-2',
                name: 'Hong Kong Bazaar Main Porch Driveway',
                coords: [28.4270, 77.0765],
                landmark: 'Main entrance portico of Hong Kong Bazaar mall.',
                distanceToRoad: 8,
                isRoadAccessible: true,
                walkingDistance: '70m',
                walkingTime: '1.5 min walk',
                steps: [
                    'Head to Hong Kong Bazaar main gate.',
                    'Wait at the covered vehicular driveway.'
                ],
                recommended: false,
                popularFor: 'Shoppers & office workers'
            }
        ]
    }
};

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
            {
                id: 1,
                employeeName: 'Kunal',
                date: '2026-10-10',
                time: '08:30',
                pickup: 'Sector 57',
                drop: 'Cyber Hub',
                status: 'Assigned',
                cab: 'HR26AB1234',
                driver: 'Rahul',
                type: 'Local',
                startTime: '08:00',
                pickupTime: '08:30',
                eta: '09:15',
                currentLocation: 'Sector 50',
                route: 'Sector 57 -> Golf Course Rd -> Cyber Hub',
                pickupSpotName: 'Sector 57 Main Market Gate (Near Mother Dairy)',
                pickupLandmark: 'Beside Mother Dairy Booth and chemist shop on the wide sector dividing road.',
                walkingDirections: [
                    'Walk out towards the main sector dividing avenue.',
                    'Stand beside the Mother Dairy kiosk on the paved curb.'
                ],
                walkingDistance: '30m (1 min walk)',
                roadAccessible: true,
                distanceToRoad: 4,
                pickupPhoto: SMART_PICKUP_PRESET_PHOTOS['cyberhub'],
                pickupPhotoNote: 'Waiting right near the Mother Dairy booth in formal office attire.'
            },
            {
                id: 2,
                employeeName: 'Aarti',
                date: '2026-10-10',
                time: '11:00',
                pickup: 'Cyber Hub',
                drop: 'Delhi Airport',
                status: 'Driver Arriving',
                cab: 'HR26AB1234',
                driver: 'Rahul',
                type: 'Local',
                startTime: '10:30',
                pickupTime: '11:00',
                eta: '12:00',
                currentLocation: 'Cyber Hub Parking',
                route: 'Cyber Hub -> NH48 -> T3 Airport',
                pickupSpotName: 'Gate 2 - Dedicated Cab Pickup Bay',
                pickupLandmark: 'Right next to Starbucks & Outdoor Escalator, Pillar D-3. Yellow CabFlow sign.',
                walkingDirections: [
                    'Exit DLF CyberHub via Gate 2 glass doors (beside Starbucks).',
                    'Walk 30 meters along the covered pedestrian walkway towards the outer lane.',
                    'Wait at the sheltered Cab Pickup Bay at Pillar D-3.'
                ],
                walkingDistance: '45m (1 min walk)',
                roadAccessible: true,
                distanceToRoad: 8,
                pickupPhoto: SMART_PICKUP_PRESET_PHOTOS['cyberhub'],
                pickupPhotoNote: 'Standing next to Pillar D-3 under the Starbucks awning wearing navy blazer.'
            },
            {
                id: 3,
                employeeName: 'Rohan',
                date: '2026-10-10',
                time: '14:00',
                pickup: 'Gurugram',
                drop: 'Jaipur',
                status: 'In Progress',
                cab: 'HR26AB1234',
                driver: 'Rahul',
                type: 'Outstation',
                startTime: '14:00',
                pickupTime: '14:15',
                eta: '18:30',
                currentLocation: 'Manesar Toll Plaza',
                route: 'Gurugram -> Manesar -> Bhiwadi -> Jaipur',
                pickupSpotName: 'Building 10 Entry Porch (Opposite Costa Coffee)',
                pickupLandmark: 'Opposite Costa Coffee fountain roundabout, sheltered porch lane.',
                walkingDirections: [
                    'Head towards Building 10 Ground Level exit.',
                    'Walk past Costa Coffee towards the circular vehicle roundabout.',
                    'Stand under the covered porch drop zone.'
                ],
                walkingDistance: '85m (2 min walk)',
                roadAccessible: true,
                distanceToRoad: 12,
                pickupPhoto: SMART_PICKUP_PRESET_PHOTOS['ambience'],
                pickupPhotoNote: 'Waiting at Building 10 circular porch.'
            },
            {
                id: 4,
                employeeName: 'Priya',
                date: '2026-10-09',
                time: '18:00',
                pickup: 'Cyber Hub',
                drop: 'Sector 57',
                status: 'Completed',
                cab: 'HR26AB1234',
                driver: 'Rahul',
                type: 'Local',
                startTime: '18:00',
                pickupTime: '18:10',
                eta: '18:50',
                currentLocation: 'Sector 57',
                route: 'Cyber Hub -> Sector 57',
                pickupSpotName: 'Gateway Tower Service Road Taxi Stand',
                pickupLandmark: 'Directly on the NH-48 service road curb beside Gateway Tower security kiosk.',
                walkingDirections: [
                    'Take south pedestrian ramp down to NH-48 Service Road.',
                    'Wait at the dedicated curbside taxi stand.'
                ],
                walkingDistance: '140m (3 min walk)',
                roadAccessible: true,
                distanceToRoad: 0,
                pickupPhoto: SMART_PICKUP_PRESET_PHOTOS['cyberhub'],
                pickupPhotoNote: 'Waiting on the service road curb.'
            },
            {
                id: 5,
                employeeName: 'Amit',
                date: '2026-10-11',
                time: '09:00',
                pickup: 'Sector 14',
                drop: 'Udyog Vihar',
                status: 'Cancelled',
                cab: 'HR26AB1234',
                driver: 'Rahul',
                type: 'Local',
                startTime: '-',
                pickupTime: '-',
                eta: '-',
                currentLocation: '-',
                route: '-',
                pickupSpotName: 'Sector 14 Main Market Taxi Stand',
                pickupLandmark: 'Opposite Sector 14 post office curb.',
                walkingDirections: ['Walk to market gate curb.'],
                walkingDistance: '50m (1 min walk)',
                roadAccessible: true,
                distanceToRoad: 5,
                pickupPhoto: '',
                pickupPhotoNote: ''
            }
        ];
        // Merge without duplicates based on ID
        enhancedMocks.forEach(mock => {
            if (!bookings.find(b => b.id === mock.id)) {
                bookings.push(mock);
            }
        });
        localStorage.setItem('bookings', JSON.stringify(bookings));
    }

    // Proactively upgrade any existing stored bookings that lack smart pickup metadata
    let existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    let updated = false;
    existingBookings = existingBookings.map(b => {
        if (!b.pickupSpotName) {
            updated = true;
            const matchingHub = findMatchingHub(b.pickup || 'Cyber Hub');
            const defaultSpot = matchingHub ? matchingHub.spots[0] : null;
            return {
                ...b,
                pickupSpotName: defaultSpot ? defaultSpot.name : ((b.pickup || 'Pickup Point') + ' (Curbside Bay)'),
                pickupLandmark: defaultSpot ? defaultSpot.landmark : 'Main accessible road entrance',
                walkingDirections: defaultSpot ? defaultSpot.steps : ['Exit building', 'Wait at the main curbside road'],
                walkingDistance: defaultSpot ? `${defaultSpot.walkingDistance} (${defaultSpot.walkingTime})` : '30m (1 min walk)',
                roadAccessible: true,
                distanceToRoad: defaultSpot ? defaultSpot.distanceToRoad : 8,
                pickupPhoto: b.pickupPhoto || (matchingHub ? SMART_PICKUP_PRESET_PHOTOS[matchingHub.presetKey || 'cyberhub'] : SMART_PICKUP_PRESET_PHOTOS['cyberhub']),
                pickupPhotoNote: b.pickupPhotoNote || 'Waiting at the designated pickup spot'
            };
        }
        return b;
    });
    if (updated) {
        localStorage.setItem('bookings', JSON.stringify(existingBookings));
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

            <!-- Smart Pickup Point & Passenger Guidance -->
            ${booking.pickupSpotName ? `
                <div class="smart-pickup-guide-card" style="background: var(--card-bg); border: 1.5px solid var(--primary-color); border-radius: var(--border-radius-md); padding: 16px; margin-top: 18px;">
                    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 16px;">🎯</span>
                            <span style="font-size: 14.5px; font-weight: 700; color: var(--text-main);">${booking.pickupSpotName}</span>
                        </div>
                        <span class="badge ${booking.roadAccessible !== false ? 'badge-road-accessible' : 'badge-cancelled'}">
                            ${booking.roadAccessible !== false ? '✅ Curbside Road Accessible' : '⚠️ Inaccessible Road Zone'}
                        </span>
                    </div>

                    <div style="font-size: 13px; color: var(--text-muted); margin-bottom: 10px; display: flex; align-items: flex-start; gap: 6px;">
                        <span>🏛️</span>
                        <div><strong>Landmark:</strong> ${booking.pickupLandmark || 'Main entrance curb'}</div>
                    </div>

                    ${booking.walkingDirections && booking.walkingDirections.length > 0 ? `
                        <div style="background: var(--secondary-color); padding: 10px 14px; border-radius: var(--border-radius-sm); margin-bottom: 12px; border: 1px solid var(--border-color);">
                            <div style="font-size: 12.5px; font-weight: 700; color: var(--text-main); margin-bottom: 6px;">
                                🚶 Walking Directions (${booking.walkingDistance || '1-2 min walk'}):
                            </div>
                            <ol style="margin: 0; padding-left: 20px; font-size: 12px; color: var(--text-muted); line-height: 1.5;">
                                ${booking.walkingDirections.map(step => `<li>${step}</li>`).join('')}
                            </ol>
                        </div>
                    ` : ''}

                    ${booking.pickupPhoto ? `
                        <div class="driver-photo-container" style="margin-top: 6px;">
                            <img src="${booking.pickupPhoto}" alt="Pickup Spot" class="driver-photo-img" onclick="openPhotoModal('${booking.pickupPhoto}', '${(booking.pickupPhotoNote || booking.pickupSpotName).replace(/'/g, "\\'")}')" title="Click to view full photo">
                            <div class="driver-photo-desc">
                                <span>📸 PASSENGER PICKUP PHOTO</span>
                                <p>"${booking.pickupPhotoNote || 'Waiting at designated pickup spot'}"</p>
                                <div style="margin-top: 8px; display: flex; gap: 8px; flex-wrap: wrap;">
                                    <button type="button" class="btn btn-secondary btn-sm" onclick="openPhotoModal('${booking.pickupPhoto}', '${(booking.pickupPhotoNote || booking.pickupSpotName).replace(/'/g, "\\'")}')" style="padding: 4px 10px; font-size: 11px;">
                                        🔍 View Full Photo
                                    </button>
                                    <button type="button" class="btn btn-secondary btn-sm" onclick="promptUpdatePickupPhoto(${booking.id})" style="padding: 4px 10px; font-size: 11px;">
                                        📷 Update Photo
                                    </button>
                                </div>
                            </div>
                        </div>
                    ` : `
                        <div style="margin-top: 8px;">
                            <button type="button" class="btn btn-secondary btn-sm" onclick="promptUpdatePickupPhoto(${booking.id})" style="padding: 6px 12px; font-size: 12px;">
                                📸 Share / Add Pickup Spot Photo for Driver
                            </button>
                        </div>
                    `}

                    ${booking.driverAtSpot ? `
                        <div style="background: #ecfdf5; border: 1px solid #6ee7b7; color: #065f46; border-radius: var(--border-radius-sm); padding: 10px 14px; margin-top: 12px; font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 8px;">
                            <span>🔔</span> Driver has arrived at ${booking.pickupSpotName} (${booking.driverArrivedTime || 'now'})! Please board your cab.
                        </div>
                    ` : ''}
                </div>
            ` : ''}

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

// ==========================================================================
// SMART PICKUP POINTS & ACCESSIBILITY LOGIC
// ==========================================================================

function getDistanceMeters(c1, c2) {
    if (!c1 || !c2) return 0;
    const lat1 = c1[0], lon1 = c1[1];
    const lat2 = c2[0], lon2 = c2[1];
    const R = 6371e3;
    const phi1 = lat1 * Math.PI / 180;
    const phi2 = lat2 * Math.PI / 180;
    const deltaPhi = (lat2 - lat1) * Math.PI / 180;
    const deltaLambda = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
              Math.cos(phi1) * Math.cos(phi2) *
              Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c);
}

function findMatchingHub(locQuery) {
    if (!locQuery) return SMART_PICKUP_HUBS['cyber hub'];
    const q = locQuery.toLowerCase().trim();
    for (const key in SMART_PICKUP_HUBS) {
        if (q.includes(key) || SMART_PICKUP_HUBS[key].name.toLowerCase().includes(q)) {
            return SMART_PICKUP_HUBS[key];
        }
    }
    // Check by distance if coords passed as string or match closest hub
    const coords = getLocationCoords(locQuery);
    let closestHub = null;
    let minDistance = Infinity;
    for (const key in SMART_PICKUP_HUBS) {
        const hub = SMART_PICKUP_HUBS[key];
        const dist = getDistanceMeters(coords, hub.coords);
        if (dist < minDistance) {
            minDistance = dist;
            closestHub = hub;
        }
    }
    if (minDistance < 2000) {
        return closestHub;
    }
    return SMART_PICKUP_HUBS['cyber hub'];
}

function checkRoadAccessibility(coords, hub) {
    if (!hub) return { isAccessible: true, distanceToRoad: 8, zoneName: 'Road Curbside', warning: null };
    
    // Check off-road zones
    if (hub.offRoadZones && hub.offRoadZones.length > 0) {
        for (const zone of hub.offRoadZones) {
            const dist = getDistanceMeters(coords, zone.center);
            if (dist <= zone.radiusMeters) {
                const recommendedSpot = hub.spots.find(s => s.recommended) || hub.spots[0];
                return {
                    isAccessible: false,
                    distanceToRoad: zone.distanceToRoad,
                    zoneName: zone.name,
                    warning: zone.warning,
                    recommendedSpot: recommendedSpot
                };
            }
        }
    }

    const rec = hub.spots.find(s => s.recommended) || hub.spots[0];
    return {
        isAccessible: true,
        distanceToRoad: rec.distanceToRoad || 8,
        zoneName: 'Curbside Drivable Lane',
        warning: null,
        recommendedSpot: rec
    };
}

// Lightbox Modal Singleton
function openPhotoModal(src, caption) {
    let modal = document.getElementById('photoLightboxModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'photoLightboxModal';
        modal.className = 'photo-lightbox-modal';
        modal.innerHTML = `
            <div class="photo-lightbox-content">
                <div class="photo-lightbox-header">
                    <h3 id="photoLightboxTitle">📸 Passenger's Pickup Spot Photo</h3>
                    <button type="button" class="modal-close" onclick="closePhotoModal()">&times;</button>
                </div>
                <div class="photo-lightbox-body">
                    <img id="photoLightboxImg" src="" alt="Pickup Location Photo">
                    <div id="photoLightboxCaption" class="photo-lightbox-caption"></div>
                </div>
            </div>
        `;
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closePhotoModal();
        });
        document.body.appendChild(modal);
    }
    document.getElementById('photoLightboxImg').src = src;
    document.getElementById('photoLightboxCaption').innerHTML = caption ? `<strong>📍 Location Note:</strong> ${caption}` : 'Passenger shared pickup spot photo';
    modal.classList.add('active');
}

function closePhotoModal() {
    const modal = document.getElementById('photoLightboxModal');
    if (modal) modal.classList.remove('active');
}

function notifyPassengerDriverAtSpot(bookingId, spotName) {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const index = bookings.findIndex(b => b.id === bookingId);
    if (index !== -1) {
        bookings[index].driverAtSpot = true;
        bookings[index].driverArrivedTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        localStorage.setItem('bookings', JSON.stringify(bookings));
        alert(`📢 Passenger Alert Sent!\n\nPassenger has been notified that you are parked at: "${spotName}".`);
        if (typeof loadTrips === 'function') loadTrips();
    }
}

function promptUpdatePickupPhoto(bookingId) {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const index = bookings.findIndex(b => b.id === bookingId);
    if (index === -1) return;

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const note = prompt("Enter an optional note for your driver (e.g., 'Standing at Pillar D-3 wearing blue shirt'):", bookings[index].pickupPhotoNote || '');
                bookings[index].pickupPhoto = event.target.result;
                if (note !== null) bookings[index].pickupPhotoNote = note;
                localStorage.setItem('bookings', JSON.stringify(bookings));
                if (typeof loadDashboardData === 'function') loadDashboardData();
                if (typeof loadLiveTrackingView === 'function') loadLiveTrackingView();
                alert("✅ Pickup photo updated successfully! Your driver can now view it live.");
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

// Widget State Variables for Employee Booking Page
let widgetCurrentHub = SMART_PICKUP_HUBS['cyber hub'];
let widgetUserPinCoords = [28.4986, 77.0878]; // starts inside off-road promenade to demonstrate warning
let widgetSelectedSpot = widgetCurrentHub.spots[0];
let widgetRoadStatus = checkRoadAccessibility(widgetUserPinCoords, widgetCurrentHub);
let widgetCurrentPhoto = '';
let widgetCurrentPhotoNote = '';
let widgetMapInstance = null;
let widgetUserMarker = null;
let widgetSpotMarkers = [];
let widgetWalkLine = null;
let widgetZoneCircle = null;

function setSmartPickupHub(hubKey) {
    if (!SMART_PICKUP_HUBS[hubKey]) return;
    widgetCurrentHub = SMART_PICKUP_HUBS[hubKey];
    widgetUserPinCoords = [...widgetCurrentHub.coords]; // center (usually triggers offroad warning if in promenade)
    widgetSelectedSpot = widgetCurrentHub.spots.find(s => s.recommended) || widgetCurrentHub.spots[0];
    widgetRoadStatus = checkRoadAccessibility(widgetUserPinCoords, widgetCurrentHub);
    
    // Auto-update pickup location input
    const pickupInput = document.getElementById('pickupLocation');
    if (pickupInput) {
        pickupInput.value = `${widgetCurrentHub.name} - ${widgetSelectedSpot.name}`;
    }

    renderSmartPickupWidgetDOM();
    updateWidgetMap();
}

function selectSmartPickupSpot(spotId) {
    const spot = widgetCurrentHub.spots.find(s => s.id === spotId);
    if (!spot) return;
    widgetSelectedSpot = spot;
    
    // If user selected an accessible spot directly, snap user pin there
    widgetUserPinCoords = [...spot.coords];
    widgetRoadStatus = checkRoadAccessibility(widgetUserPinCoords, widgetCurrentHub);

    const pickupInput = document.getElementById('pickupLocation');
    if (pickupInput) {
        pickupInput.value = `${widgetCurrentHub.name} - ${spot.name}`;
    }

    renderSmartPickupWidgetDOM();
    updateWidgetMap();
}

function snapToRecommendedSpot() {
    const recSpot = widgetCurrentHub.spots.find(s => s.recommended) || widgetCurrentHub.spots[0];
    widgetSelectedSpot = recSpot;
    widgetUserPinCoords = [...recSpot.coords];
    widgetRoadStatus = checkRoadAccessibility(widgetUserPinCoords, widgetCurrentHub);

    const pickupInput = document.getElementById('pickupLocation');
    if (pickupInput) {
        pickupInput.value = `${widgetCurrentHub.name} - ${recSpot.name}`;
    }

    renderSmartPickupWidgetDOM();
    updateWidgetMap();
}

function handlePickupPhotoFile(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        widgetCurrentPhoto = e.target.result;
        renderSmartPickupWidgetDOM();
    };
    reader.readAsDataURL(file);
}

function selectPresetPhoto(presetKey) {
    if (SMART_PICKUP_PRESET_PHOTOS[presetKey]) {
        widgetCurrentPhoto = SMART_PICKUP_PRESET_PHOTOS[presetKey];
        if (!widgetCurrentPhotoNote) {
            widgetCurrentPhotoNote = `Waiting at ${widgetSelectedSpot.name} (${widgetSelectedSpot.landmark.split('.')[0]})`;
        }
        renderSmartPickupWidgetDOM();
    }
}

function removePickupPhoto() {
    widgetCurrentPhoto = '';
    renderSmartPickupWidgetDOM();
}

function onPickupPhotoNoteChanged(val) {
    widgetCurrentPhotoNote = val;
}

function onPickupLocationChanged(val) {
    const matchingHub = findMatchingHub(val);
    if (matchingHub && matchingHub.id !== widgetCurrentHub.id) {
        widgetCurrentHub = matchingHub;
        widgetUserPinCoords = [...matchingHub.coords];
        widgetSelectedSpot = matchingHub.spots.find(s => s.recommended) || matchingHub.spots[0];
        widgetRoadStatus = checkRoadAccessibility(widgetUserPinCoords, widgetCurrentHub);
        renderSmartPickupWidgetDOM();
        updateWidgetMap();
    }
}

function renderSmartPickupWidgetDOM() {
    const container = document.getElementById('smartPickupWidgetContainer');
    if (!container) return;

    const isAccessible = widgetRoadStatus.isAccessible;

    container.innerHTML = `
        <div class="smart-pickup-widget">
            <div class="smart-pickup-header">
                <h3><span>🎯</span> Smart Pickup Point Assistant</h3>
                <span class="tracker-eta-badge" style="font-size: 11.5px; padding: 4px 10px;">
                    ${widgetCurrentHub.category}
                </span>
            </div>

            <!-- Hub Selector Pills -->
            <div class="hub-selector-pills">
                ${Object.keys(SMART_PICKUP_HUBS).map(key => {
                    const hub = SMART_PICKUP_HUBS[key];
                    const activeClass = hub.id === widgetCurrentHub.id ? 'active' : '';
                    return `<button type="button" class="hub-pill ${activeClass}" onclick="setSmartPickupHub('${hub.id}')">${hub.name}</button>`;
                }).join('')}
            </div>

            <!-- Road Accessibility Alert Banner -->
            ${!isAccessible ? `
                <div class="road-accessibility-banner inaccessible">
                    <div class="road-banner-icon">⚠️</div>
                    <div class="road-banner-content">
                        <h4>Inaccessible Road Warning</h4>
                        <p>${widgetRoadStatus.warning}</p>
                        <div class="road-banner-action">
                            <button type="button" class="btn-snap-road" onclick="snapToRecommendedSpot()">
                                ✨ Switch to Recommended Bay (${widgetRoadStatus.recommendedSpot.name})
                            </button>
                        </div>
                    </div>
                </div>
            ` : `
                <div class="road-accessibility-banner accessible">
                    <div class="road-banner-icon">✅</div>
                    <div class="road-banner-content">
                        <h4>Road-Accessible Pickup Curb</h4>
                        <p>Safe and legal curbside pickup point (${widgetRoadStatus.distanceToRoad}m from drivable lane). Drivers can reach you directly without obstructions.</p>
                    </div>
                </div>
            `}

            <!-- Interactive Leaflet Pickup Selector Map -->
            <div class="pickup-map-container" id="pickupSelectorMap"></div>

            <!-- Suggested Smart Pickup Points List -->
            <div class="smart-spots-title">
                <span>📍 Nearby Recommended Pickup Points</span>
                <span style="font-size: 12px; font-weight: 500; color: var(--text-muted);">Select optimal spot</span>
            </div>
            <div class="smart-spots-list">
                ${widgetCurrentHub.spots.map(spot => {
                    const isSelected = spot.id === widgetSelectedSpot.id;
                    return `
                        <div class="smart-spot-card ${isSelected ? 'selected' : ''}" onclick="selectSmartPickupSpot('${spot.id}')">
                            <div class="spot-card-top">
                                <div class="spot-name">
                                    <span>${isSelected ? '🔘' : '⚪'}</span>
                                    <span>${spot.name}</span>
                                </div>
                                <div class="spot-badges">
                                    ${spot.recommended ? '<span class="badge-recommended">⭐ Recommended</span>' : ''}
                                    <span class="badge-walk-time">🚶 ${spot.walkingDistance} (~${spot.walkingTime})</span>
                                </div>
                            </div>
                            <div class="spot-landmark">
                                <span>🏛️</span>
                                <span><strong>Landmark:</strong> ${spot.landmark}</span>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>

            <!-- Walking Directions & Recognizable Landmarks Card -->
            <div class="walking-directions-box">
                <h4>
                    <span>🚶 Walking Directions to ${widgetSelectedSpot.name}</span>
                    <span style="font-size: 11px; color: var(--success-color); font-weight: 700;">⏱️ ${widgetSelectedSpot.walkingTime}</span>
                </h4>
                <div style="font-size: 13px; color: var(--text-main); margin-bottom: 10px; padding: 8px 12px; background: var(--card-bg); border-radius: var(--border-radius-sm); border-left: 3px solid var(--primary-color);">
                    <strong>🏛️ Recognizable Landmark:</strong> ${widgetSelectedSpot.landmark}
                </div>
                <div class="walking-steps-list">
                    ${widgetSelectedSpot.steps.map((step, idx) => `
                        <div class="walking-step-item">
                            <div class="walking-step-num">${idx + 1}</div>
                            <div>${step}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Share Pickup Photo with Driver Section -->
            <div class="pickup-photo-section">
                <h4><span>📸</span> Share Pickup Spot Photo with Driver</h4>
                <p>Help your driver spot you instantly at crowded gates, pillars, and curbsides. Upload a photo or pick a landmark preset:</p>
                
                <input type="file" id="pickupPhotoFileInput" accept="image/*" style="display:none;" onchange="handlePickupPhotoFile(event)">
                
                <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
                    <button type="button" class="btn btn-secondary btn-sm" onclick="document.getElementById('pickupPhotoFileInput').click()" style="padding: 6px 12px; font-weight: 600;">
                        📁 Upload Photo
                    </button>
                    <span style="font-size: 12px; color: var(--text-muted);">or pick quick landmark photo:</span>
                </div>

                <div class="photo-preset-buttons">
                    <button type="button" class="btn-preset-photo" onclick="selectPresetPhoto('cyberhub')">☕ CyberHub Pillar D-3</button>
                    <button type="button" class="btn-preset-photo" onclick="selectPresetPhoto('ambience')">🏬 Ambience Gate 3</button>
                    <button type="button" class="btn-preset-photo" onclick="selectPresetPhoto('medanta')">🏥 Medanta OPD Pillar H-2</button>
                    <button type="button" class="btn-preset-photo" onclick="selectPresetPhoto('campus')">🎓 University Gate 1</button>
                </div>

                ${widgetCurrentPhoto ? `
                    <div class="photo-preview-wrap">
                        <img src="${widgetCurrentPhoto}" alt="Selected Pickup Spot" class="photo-preview-thumb" onclick="openPhotoModal('${widgetCurrentPhoto}', '${widgetCurrentPhotoNote.replace(/'/g, "\\'")}')" title="Click to view full photo">
                        <div style="flex: 1; min-width: 180px;">
                            <label style="font-size: 11px; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 4px;">PASSENGER LOCATION NOTE FOR DRIVER</label>
                            <input type="text" id="pickupPhotoNote" class="form-control" style="width: 100%; padding: 8px 10px; font-size: 13px; border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); margin-bottom: 6px;" placeholder="e.g. Standing near yellow Pillar D-3 sign in blue shirt" value="${widgetCurrentPhotoNote}" oninput="onPickupPhotoNoteChanged(this.value)">
                            <button type="button" class="btn btn-danger btn-sm" onclick="removePickupPhoto()" style="padding: 3px 8px; font-size: 11px;">✕ Remove Photo</button>
                        </div>
                    </div>
                ` : `
                    <div style="margin-top: 10px; font-size: 12px; color: var(--text-muted); font-style: italic;">
                        💡 No photo selected yet. Your driver will use the designated landmark instructions.
                    </div>
                `}
            </div>
        </div>
    `;
}

function updateWidgetMap() {
    const mapEl = document.getElementById('pickupSelectorMap');
    if (!mapEl) return;

    if (typeof L === 'undefined' || !L.map) {
        mapEl.innerHTML = `<div style="display:flex; align-items:center; justify-content:center; height:100%; color:var(--text-muted); font-size:13px;">📍 ${widgetCurrentHub.name} (Map view)</div>`;
        return;
    }

    try {
        if (widgetMapInstance) {
            widgetMapInstance.remove();
            widgetMapInstance = null;
        }

        widgetMapInstance = L.map('pickupSelectorMap', {
            zoomControl: true,
            attributionControl: false
        }).setView(widgetUserPinCoords, 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19
        }).addTo(widgetMapInstance);

        // Render Inaccessible / Off-road Zone Circle if present
        if (widgetCurrentHub.offRoadZones && widgetCurrentHub.offRoadZones.length > 0) {
            widgetCurrentHub.offRoadZones.forEach(zone => {
                L.circle(zone.center, {
                    radius: zone.radiusMeters,
                    color: '#ef4444',
                    fillColor: '#ef4444',
                    fillOpacity: 0.15,
                    dashArray: '5, 5',
                    weight: 2
                }).addTo(widgetMapInstance)
                .bindPopup(`<b>⚠️ Restricted Pedestrian Zone:</b><br>${zone.name}<br><i>Vehicles cannot enter here.</i>`);
            });
        }

        // Draggable User Pin Marker
        const userIcon = L.divIcon({
            className: 'custom-user-pin',
            html: `<div style="background:${widgetRoadStatus.isAccessible ? '#3b82f6' : '#ef4444'}; color:#fff; width:34px; height:34px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:16px; box-shadow:0 2px 10px rgba(0,0,0,0.4); border:2.5px solid #fff; cursor:grab;">${widgetRoadStatus.isAccessible ? '🧍' : '⚠️'}</div>`,
            iconSize: [34, 34],
            iconAnchor: [17, 17]
        });

        widgetUserMarker = L.marker(widgetUserPinCoords, {
            icon: userIcon,
            draggable: true
        }).addTo(widgetMapInstance);

        widgetUserMarker.bindPopup(`<b>Your Selected Pin</b><br>${widgetRoadStatus.isAccessible ? '✅ Road-accessible curb' : '⚠️ Inaccessible off-road zone!'}`);

        widgetUserMarker.on('dragend', function(e) {
            const newPos = e.target.getLatLng();
            widgetUserPinCoords = [newPos.lat, newPos.lng];
            widgetRoadStatus = checkRoadAccessibility(widgetUserPinCoords, widgetCurrentHub);
            renderSmartPickupWidgetDOM();
            updateWidgetMap();
        });

        // Smart Pickup Spot Markers
        widgetCurrentHub.spots.forEach(spot => {
            const isSelected = spot.id === widgetSelectedSpot.id;
            const spotIcon = L.divIcon({
                className: 'custom-spot-pin',
                html: `<div style="background:${isSelected ? '#10b981' : '#f59e0b'}; color:#fff; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:14px; box-shadow:0 2px 8px rgba(0,0,0,0.3); border:2px solid #fff; cursor:pointer;">${spot.recommended ? '⭐' : '📍'}</div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });

            const marker = L.marker(spot.coords, { icon: spotIcon }).addTo(widgetMapInstance);
            marker.bindPopup(`
                <b>${spot.name}</b><br>
                ${spot.landmark}<br>
                <b>Distance to road:</b> ${spot.distanceToRoad}m (Accessible)<br>
                <button type="button" class="btn btn-primary btn-sm" onclick="selectSmartPickupSpot('${spot.id}')" style="margin-top:6px; padding:4px 8px; font-size:11px;">
                    Select This Bay
                </button>
            `);
            if (isSelected) {
                marker.openPopup();
            }
        });

        // Walking dashed polyline from user pin to selected spot
        if (getDistanceMeters(widgetUserPinCoords, widgetSelectedSpot.coords) > 5) {
            L.polyline([widgetUserPinCoords, widgetSelectedSpot.coords], {
                color: '#10b981',
                weight: 4,
                opacity: 0.9,
                dashArray: '6, 6'
            }).addTo(widgetMapInstance);
        }

        setTimeout(() => {
            if (widgetMapInstance) widgetMapInstance.invalidateSize();
        }, 200);

    } catch (err) {
        console.warn('Widget map initialization error:', err);
    }
}

function initSmartPickupWidget() {
    renderSmartPickupWidgetDOM();
    setTimeout(() => {
        updateWidgetMap();
    }, 150);
}



