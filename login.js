// Menangani submit form login
document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Mencegah reload halaman
    
    // Ambil nilai input username dan password
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");
    
    // Validasi input kosong
    if (!username || !password) {
        errorMessage.textContent = "Username dan password wajib diisi.";
        return;
    }
    
    try {
        // Kirim permintaan login ke backend menggunakan Fetch API
        const response = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });
        
        // Parsing respons dari server
        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.message || "Login gagal.");
        }
        
        // Jika login berhasil, arahkan ke dashboard
        alert("Login berhasil!");
        window.location.href = "index.html";
    } catch (error) {
        // Menampilkan pesan error jika login gagal
        errorMessage.textContent = error.message;
    }
});
