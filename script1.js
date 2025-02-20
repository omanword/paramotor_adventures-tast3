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
const whatsappSection = document.getElementById('whatsapp-section');
let selectedCaptainPhone = '';

teamSelect.addEventListener('change', function() {
    const selectedTeam = this.value;
    captainSelect.innerHTML = '<option value="">Select a captain</option>';

    if (teamCaptains[selectedTeam]) {
        teamCaptains[selectedTeam].forEach(captain => {
            const option = document.createElement('option');
            option.value = captain.phone;
            option.textContent = captain.name;
            captainSelect.appendChild(option);
        });
    }
});

captainSelect.addEventListener('change', function() {
    selectedCaptainPhone = this.value;
    whatsappSection.style.display = selectedCaptainPhone ? 'block' : 'none';
});

document.getElementById('send-whatsapp').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const zone = document.getElementById('zone').value;

    const message = `Hello, I am ${name}. I have booked a paramotor adventure on ${date} at ${time} in ${zone}. My phone number is ${phone}. I have attached the payment confirmation.`;

    const whatsappUrl = `https://wa.me/${selectedCaptainPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});
