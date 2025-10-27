// Pesan selamat datang
window.onload = function() {
  alert("Selamat datang di SweetBite Bakery! Siap-siap ngiler ya 🍪");
};

// Validasi form + pesan sukses
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let nama = document.getElementById("nama").value.trim();
  let email = document.getElementById("email").value.trim();
  let pesan = document.getElementById("pesan").value.trim();
  let status = document.getElementById("statusPesan");

  if (nama === "" || email === "" || pesan === "") {
    status.textContent = "⚠️ Harap isi semua kolom sebelum mengirim pesan!";
    status.style.color = "#c44";
    status.style.opacity = 1;
  } else {
    status.textContent = "💕 Terima kasih, " + nama + "! Pesan kamu sudah berhasil dikirim.";
    status.style.color = "#b56576";
    status.style.opacity = 1;

    document.getElementById("contactForm").reset();

    // hilang pelan setelah 4 detik
    setTimeout(() => {
      status.style.opacity = 0;
    }, 4000);
  }
});
