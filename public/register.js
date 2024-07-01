document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", submitBtnFunction);

    async function submitBtnFunction(event) {
        event.preventDefault();

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

            alert("Data submitted successfully!");
        } catch (error) {
            console.error("Error:", error);
            alert("Error submitting data. Please try again.");
        }
    }
});
