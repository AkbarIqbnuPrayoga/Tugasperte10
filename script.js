// Fungsi untuk mengontrol tampilan kartu berdasarkan halaman
function changePage(pageNumber) {
    const cards = document.querySelectorAll('.fashion-card');
    const cardsPerPage = 3;
    const startIndex = (pageNumber - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    // Tampilkan atau sembunyikan kartu berdasarkan halaman aktif
    cards.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Set halaman awal ke 1
document.addEventListener('DOMContentLoaded', () => {
    changePage(1);
});



function showThankYouModal() {
    // Cek jika form valid sebelum menampilkan pop up
    const form = document.getElementById('subscriptionForm');
    if (form.checkValidity()) {
        const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
        thankYouModal.show();
        form.reset(); // Reset form setelah berhasil subscribe
    }
}

// JavaScript for handling form submission
document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault(); // Mencegah refresh halaman
    const myModal = new bootstrap.Modal(document.getElementById('sendMessageModal'));
    myModal.show();
    this.reset();
};

const fadeUps = document.querySelectorAll('.fade-up');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

fadeUps.forEach(element => {
    observer.observe(element);
});



