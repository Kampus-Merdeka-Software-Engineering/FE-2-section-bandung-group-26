url = "https://be-2-bandung-26-production.up.railway.app/berita"; // Mengubah action form

function postFeedback(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    // Mengumpulkan data dari formulir
    const formData = {
        nama: document.getElementById("full-name").value,
        email: document.getElementById("email").value,
        subjek: document.getElementById("subject").value,
        pesan: document.getElementById("message").value,
    };

    // Mengirim data dengan Fetch API
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            alert("Sukses mengirim feedback");
            document.getElementById("full-name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

document.getElementById("feedback").addEventListener("submit", (event) => postFeedback(event));
