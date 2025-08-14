document.getElementById("send").addEventListener("click", async () => {
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (!phone || !message) {
        document.getElementById("status").innerText = "Please enter phone and message.";
        return;
    }

    try {
        const res = await fetch("https://chromewhatsappextension.onrender.com", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phone, message })
        });

        const data = await res.json();
        if (data.status === "success") {
            document.getElementById("status").innerText = "✅ Sent! SID: " + data.sid;
        } else {
            document.getElementById("status").innerText = "❌ Error: " + data.message;
        }
    } catch (err) {
        document.getElementById("status").innerText = "❌ Failed to connect to backend.";
    }
});

