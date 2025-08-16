// Nama-nama pasaran (Panca Wara)
const pasaran = ["Legi", "Pahing", "Pon", "Wage", "Kliwon"];

// Neptu pasaran
const neptuPasaran = {
    "Legi": 5, "Pahing": 9, "Pon": 7, "Wage": 4, "Kliwon": 8
};

// Nama-nama hari (Sapta Wara)
const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

// Neptu hari
const neptuHari = {
    "Minggu": 5, "Senin": 4, "Selasa": 3, "Rabu": 7,
    "Kamis": 8, "Jumat": 6, "Sabtu": 9
};

// Fungsi untuk menghitung kalender Jawa
function getKalenderJawa() {
    const today = new Date();
    const hariIni = hari[today.getDay()];

    // Hitung pasaran
    const pasaranIndex = (today.getDate() - 1 + neptuHari[hariIni]) % 5;
    const pasaranHariIni = pasaran[pasaranIndex];

    // Hitung neptu
    const neptu = neptuHari[hariIni] + neptuPasaran[pasaranHariIni];

    return {
        tanggal: today.toLocaleDateString('id-ID'),
        hari: hariIni,
        pasaran: pasaranHariIni,
        neptu: neptu
    };
}

// Fungsi untuk menampilkan hasil ke halaman web
function displayKalenderJawa() {
    const data = getKalenderJawa();
    const container = document.getElementById("kalender-jawa");
    container.innerHTML = `
        <p>Tanggal Masehi: <span class="highlight">${data.tanggal}</span></p>
        <p>Hari: <span class="highlight">${data.hari}</span></p>
        <p>Pasaran: <span class="highlight">${data.pasaran}</span></p>
        <p>Neptu: <span class="highlight">${data.neptu}</span></p>
    `;
}

// Jalankan fungsi saat halaman dimuat
window.onload = displayKalenderJawa;