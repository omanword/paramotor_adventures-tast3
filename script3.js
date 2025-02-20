const teamCaptains = {
    muscat: [
        { name: 'Captain Ahmed', phone: '+96892189955' },
        { name: 'Captain Abdullah', phone: '+96892122222' }
    ],
    dhahirah: [
        { name: 'Captain Khadal', phone: '+96892158585' }
    ],
    sky: [
        { name: 'Captain Ali', phone: '+96898789988' }
    ]
};

const teamSelect = document.getElementById('team');
const captainSelect = document.getElementById('captain');
const captainInfo = document.getElementById('captain-info');
const captainName = document.getElementById('captain-name');
const captainTeam = document.getElementById('captain-team');
const captainPhone = document.getElementById('captain-phone');

teamSelect.addEventListener('change', function() {
    const selectedTeam = this.value;
    captainSelect.innerHTML = '<option value="">Select a captain</option>';

    if (teamCaptains[selectedTeam]) {
        teamCaptains[selectedTeam].forEach(captain => {
            const option = document.createElement('option');
            option.value = JSON.stringify(captain);
            option.textContent = captain.name;
            captainSelect.appendChild(option);
        });
    }
});

captainSelect.addEventListener('change', function() {
    const selectedCaptain = JSON.parse(this.value || '{}');
    if (selectedCaptain.name) {
        captainName.textContent = selectedCaptain.name;
        captainTeam.textContent = teamSelect.options[teamSelect.selectedIndex].text;
        captainPhone.textContent = 'Hidden until payment is confirmed';
        captainInfo.style.display = 'block';
    } else {
        captainInfo.style.display = 'none';
    }
});

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Assume payment is confirmed after form submission
    const selectedCaptain = JSON.parse(captainSelect.value || '{}');
    if (selectedCaptain.phone) {
        captainPhone.textContent = selectedCaptain.phone;
    }
    // Proceed with form submission or further processing
});
