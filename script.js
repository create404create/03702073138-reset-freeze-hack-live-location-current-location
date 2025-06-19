let timerInterval;

function startHack() {
    const phoneInput = document.getElementById("phoneInput").value;
    if (!phoneInput || phoneInput.length < 11) {
        alert("Please enter a valid phone number.");
        return;
    }

    document.getElementById("hackMessage").innerHTML = 
        `<p style="color:lime;">✅ Number <b>${phoneInput}</b> received. Initiating hack sequence...</p>`;
    
    startTimer(15);
}

function startTimer(minutes) {
    let seconds = 0;
    let totalSeconds = minutes * 60;

    timerInterval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            showResult();
            return;
        }

        let min = Math.floor(totalSeconds / 60);
        let sec = totalSeconds % 60;

        document.getElementById("timer").innerText = 
            `⏳ Hack Progress: ${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;

        totalSeconds--;
    }, 1000);
}

function showResult() {
    const randomAddresses = [
        "Mughal Street Butcher Khana Road, Rawalpindi,Punjab,Pakistan",
    ];
    const randomAddress = randomAddresses[Math.floor(Math.random() * randomAddresses.length)];

    document.getElementById("timer").style.display = "none";

    document.getElementById("result").innerHTML = `
        <div class="result-box">
            <p>📍 Location Detected: <b>${randomAddress}</b></p>
            <p>⚠️ Access Status: <span style="color:red;">Compromised</span></p>

            <button class="fake-btn">🚫 Ban WhatsApp</button>
            <button class="fake-btn">📴 Reset Device</button>
            <button class="fake-btn">🔒 Lock Until Tomorrow 12:00 PM</button>
        </div>
    `;
}
