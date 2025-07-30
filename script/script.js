const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

  document.addEventListener('DOMContentLoaded', function () {
        const dropbtn = document.querySelector('.dropbtn');
        const dropdownContent = document.querySelector('.dropdown-content');

        dropbtn.addEventListener('click', function (e) {
          e.preventDefault();
          dropdownContent.classList.toggle('show');
        });

        document.addEventListener('click', function (e) {
          if (!e.target.closest('.dropdown')) {
            dropdownContent.classList.remove('show');
          }
        });
      });