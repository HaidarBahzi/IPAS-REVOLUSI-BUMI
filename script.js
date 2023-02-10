const loadingPage = document.getElementById("Loading");

window.addEventListener("load", function () {
  loadingPage.style.display = "none";
  startIntro();
  Intersect();
  isIntersecting();
});

function startIntro() {
  let namaSlide = document.querySelector(".intro-slide");
  const intro = document.querySelector(".intro");
  const btnStart = document.querySelector(".intro-btn");

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

  const backgroundMusic = document.getElementById("music");

  btnStart.addEventListener("click", function () {
    backgroundMusic.src = "Music/background-idle.mp3";
    backgroundMusic.volume = 0.5;
    backgroundMusic.setAttribute("loop", "loop");
  });
}

function isIntersecting() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  const hiddenElement = document.querySelectorAll(".hidden");
  hiddenElement.forEach((el) => observer.observe(el));
}

function Intersect() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showSlide");
      }
    });
  });

  const hiddenElement = document.querySelectorAll(".hiddenSlide");
  hiddenElement.forEach((el) => observer.observe(el));
}
