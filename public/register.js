document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");

    submitBtn.addEventListener("click", submitBtnFunction);
    loginBtn.addEventListener("click", function () {
        window.location.href = "login.html";
    });
    registerBtn.addEventListener("click", function () {
        window.location.href = "index.html";
    });

    async function submitBtnFunction(event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        const registerData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            gender: document.getElementById("gender").value,
            address: document.getElementById("address").value,
            password: document.getElementById("password").value,
        };
        console.log(registerData);

        try {
            const response = await fetch("/api/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(registerData),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            showTemporaryAlert("Registered successfully!", 5000);

            // Clear the form fields
            document.getElementById("registrationForm").reset();
        } catch (error) {
            console.error("Error:", error);
            alert("Error submitting data. Please try again.");
        }
    }

    function showTemporaryAlert(message, duration) {
        const alertDiv = document.createElement("div");
        alertDiv.className = "alert";
        alertDiv.textContent = message;

        document.body.appendChild(alertDiv);

        setTimeout(() => {
            document.body.removeChild(alertDiv);
        }, duration);
    }
});
