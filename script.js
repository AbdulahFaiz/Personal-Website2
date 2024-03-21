document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("contactForm");
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");

  // Mengambil nilai dari Local Storage jika ada
  var savedName = localStorage.getItem("contactName");
  var savedEmail = localStorage.getItem("contactEmail");

  // Jika nilai ada, isi input dengan nilai yang tersimpan
  if (savedName) {
      nameInput.value = savedName;
  }
  if (savedEmail) {
      emailInput.value = savedEmail;
  }

  // Event listener saat form disubmit
  form.addEventListener("submit", function(event) {
      event.preventDefault();

      var name = nameInput.value;
      var email = emailInput.value;

      // Menyimpan nilai nama dan email ke Local Storage
      localStorage.setItem("contactName", name);
      localStorage.setItem("contactEmail", email);

      // Mengambil nilai pesan dari textarea
      var message = document.getElementById("message").value;

      // Membuat pesan untuk ditampilkan dalam alert
      var alertMessage = "\nName: " + name + "\n\nEmail: " + email + "\n\nMessage: " + message;

      // Menampilkan pesan dalam alert
      alert(alertMessage);
  });
});


// change mode

document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  
  // Function untuk mengaktifkan mode gelap
  function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    document.getElementById('mainStylesheet').setAttribute('href', 'styles2.css');
  }

  // Function untuk menonaktifkan mode gelap
  function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    document.getElementById('mainStylesheet').setAttribute('href', 'styles.css');
  }

  // Function untuk memeriksa status dark mode
  function checkDarkMode() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      enableDarkMode();
    }
  }

  // Event listener untuk tombol toggle
  darkModeToggle.addEventListener('click', function() {
    if (document.body.classList.contains('dark-mode')) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });

  // Memanggil fungsi checkDarkMode() saat halaman dimuat
  checkDarkMode();
});

// Mendapatkan referensi ke tombol Toggle Dark Mode
var darkModeToggle = document.getElementById("darkModeToggle");

// Mendefinisikan status mode saat ini (asumsi awalnya adalah Light Mode)
var isDarkMode = false;

// Fungsi untuk mengubah teks tombol Toggle Dark Mode
function toggleDarkModeText() {
  // Jika mode saat ini adalah Light Mode, ubah teksnya menjadi Dark Mode
  // dan sebaliknya
  darkModeToggle.textContent = isDarkMode ? "Change Mode" : "Change Mode";
}

// Tambahkan event listener untuk mengubah teks saat tombol ditekan
darkModeToggle.addEventListener("click", function() {
  // Toggle status mode (ubah antara true dan false)
  isDarkMode = !isDarkMode;

  // Panggil fungsi untuk mengubah teks tombol
  toggleDarkModeText();
});

// Panggil fungsi untuk mengubah teks tombol secara otomatis saat halaman dimuat
toggleDarkModeText();


// smooth movement
function scrollToAbout() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

function scrollSosmed() {
  document.getElementById('sosmed').scrollIntoView({ behavior: 'smooth' });
}


const typingTextElement = document.getElementById('typingText');
const textToType = ['Information System Student.', 'Valorant Pro Player.', 'UI/UX Designer.']; // Teks baru yang ingin ditampilkan

let currentIndex = 0;
let currentText = '';
let isDeleting = false;

function typeText() {
  const currentTextLength = currentText.length;
  const targetText = textToType[currentIndex];
  
  if (!isDeleting && currentTextLength < targetText.length) {
    // Menambahkan huruf satu per satu
    currentText = targetText.substring(0, currentTextLength + 1);
  } else {
    isDeleting = true;
    // Menghapus huruf satu per satu
    currentText = targetText.substring(0, currentTextLength - 1);
    if (currentText === '') {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % textToType.length; // Pindah ke teks berikutnya
    }
  }

  typingTextElement.textContent = currentText;

  const typingSpeed = 150; // Kecepatan ketikan dalam milidetik
  setTimeout(typeText, isDeleting ? typingSpeed / 2 : typingSpeed);
}

// Memulai animasi ketikan
typeText();
