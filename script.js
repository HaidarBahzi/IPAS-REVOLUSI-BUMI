const startBtn = document.getElementById("btn-load");
var loadDot = document.querySelectorAll(".load-dot");
const textLoad = document.getElementById("text-load");
const loading = document.getElementById("Loading");
const title = document.title;
document.title = "Loading...";

window.addEventListener("load", function () {
  document.title = title;

  loadDot.forEach(function (dot) {
    dot.style.display = "none";
  });

  if (!screen.width >= 800) {
    startBtn.style.display = "flex";
  } else {
    textLoad.style.display = "flex";

    document.addEventListener("keypress", function (event) {
      if (event.key === "Enter" || "Space") {
        loading.style.display = "none";
        startIntro();
        IntersectOpacity();
        IntersectSlideX();
        IntersectSlideY();
        slideImage();
      }
    });
  }
});

startBtn.addEventListener("click", function () {
  loading.style.display = "none";
  startIntro();
  IntersectOpacity();
  IntersectSlideX();
  IntersectSlideY();
  slideImage();
});

function startIntro() {
  let namaSlide = document.querySelector(".intro-slide");
  const backgroundMusic = document.getElementById("music");
  const intro = document.querySelector(".intro");
  const btnStart = document.querySelector(".intro-btn");
  const oas = document.querySelectorAll(".element");

  const daftarNama = [
    "Haidar Bahzi",
    "Aaron Ikhwan Saputra",
    "Muhammad Robani Izzudin Daffa",
    "Roja Ridho Robbihi",
    "Amelia Salsabila Rahayu",
    "Rafi Haiqal Fiqiah",
    "Nadia Salsabila Ibrahim",
    "Muhammad Dhyandra Arya Dinata",
  ];
  let daftarNamaIndex = 0;

  backgroundMusic.play();

  namaSlide.style.animation = "anim1 4.3s 9 ease";

  namaSlide.addEventListener("animationiteration", function () {
    namaSlide.innerHTML = daftarNama[daftarNamaIndex];

    daftarNamaIndex++;
  });

  namaSlide.addEventListener("animationend", function () {
    namaSlide.style.display = "none";
    intro.style.display = "flex";
    intro.style.animation = "anim2 2.75s";
  });

  intro.addEventListener("animationend", function () {
    btnStart.style.display = "flex";
    btnStart.style.animation = "anim3 2.5s";
    btnStart.style.opacity = "1";
    clickContinue();
  });

  function clickContinue() {
    document.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        btnStart.click();
      }
    });
  }

  btnStart.addEventListener("click", function () {
    oas.forEach(function (section) {
      section.style.display = "flex";
    });
  });

  btnStart.addEventListener("click", function () {
    backgroundMusic.src = "Music/background-idle.mp3";
    backgroundMusic.volume = 0.5;
    backgroundMusic.setAttribute("loop", "loop");
    backgroundMusic.play();
  });

  window.addEventListener("blur", function () {
    backgroundMusic.pause();
    namaSlide.style.animationPlayState = "paused";
  });

  window.addEventListener("focus", function () {
    backgroundMusic.play();
    namaSlide.style.animationPlayState = "running";
  });
}

function IntersectOpacity() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElement = document.querySelectorAll(".hidden");
  hiddenElement.forEach((el) => observer.observe(el));
}

function IntersectSlideX() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showSlide");
      } else {
        entry.target.classList.remove("showSlide");
      }
    });
  });

  const hiddenElement = document.querySelectorAll(".hiddenSlide");
  hiddenElement.forEach((el) => observer.observe(el));
}

function IntersectSlideY() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showSlideUp");
      } else {
        entry.target.classList.remove("showSlideUp");
      }
    });
  });

  const hiddenElement = document.querySelectorAll(".hiddenSlideUp");
  hiddenElement.forEach((el) => observer.observe(el));
}

function slideImage() {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slideshow-image");
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 5500); // Ubah gambar setiap 3 detik
  }
}
