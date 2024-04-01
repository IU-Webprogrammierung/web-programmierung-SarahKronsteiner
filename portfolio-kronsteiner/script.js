
//for skill bar
const skills = [
  { name: 'Figma', percent: 90 },
  { name: 'Articulate Storyline', percent: 75 },
  { name: 'Illustrator', percent: 85 },
  { name: 'HTML', percent: 55 },
  { name: 'Lorem Ipsum', percent: 80 }
  // Add more skills here
];

skills.forEach(skill => {
  const progressBar = document.getElementById(skill.name.toLowerCase().replace(/\s/g, '-') + '-progress');
  progressBar.style.width = '0%'; // Set initial width to 0

  const updateProgress = () => {
      let width = 0;
      const interval = setInterval(() => {
          if (width >= skill.percent) {
              clearInterval(interval);
          } else {
              width++;
              progressBar.style.width = width + '%';
              progressBar.textContent = width + '%';
          }
      }, 40); // Adjust animation speed here
  };

  updateProgress();
});




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}