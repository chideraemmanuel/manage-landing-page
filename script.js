const menuBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const emailInput = document.getElementById("email-input");
const submitBtn = document.querySelector("form button");
const message = document.getElementById("message");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  mobileMenu.classList.toggle("hidden");
});

// const carouselPagination = document.querySelectorAll(".carousel-nav span");
// const carouselItems = document.querySelectorAll(".carousel-item");
// console.log(carouselPagination);

// carouselPagination.forEach((page) => {
//   page.addEventListener("click", (e) => {
//     carouselPagination.forEach((page) => {
//       page.classList.remove("active");
//     });
//     e.target.classList.add("active");
//     showActiveCarouselItem();
//   });
// });

// const showActiveCarouselItem = () => {
//   if (carouselPagination[0].classList.contains("active")) {
//     carouselItems.forEach((carouselItem) => {
//       carouselItem.classList.remove("flex");
//       carouselItem.classList.add("hidden");
//     });
//     carouselItems[0].classList.add("flex");
//     carouselItems[0].classList.remove("hidden");
//   } else if (carouselPagination[1].classList.contains("active")) {
//     carouselItems.forEach((carouselItem) => {
//       carouselItem.classList.remove("flex");
//       carouselItem.classList.add("hidden");
//     });
//     carouselItems[1].classList.add("flex");
//     carouselItems[1].classList.remove("hidden");
//   } else if (carouselPagination[2].classList.contains("active")) {
//     carouselItems.forEach((carouselItem) => {
//       carouselItem.classList.remove("flex");
//       carouselItem.classList.add("hidden");
//     });
//     carouselItems[2].classList.add("flex");
//     carouselItems[2].classList.remove("hidden");
//   }
// };

const carouselItems = document.querySelectorAll(".carousel-item");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

let counter = 0;

const nextCarouselItem = () => {
  carouselItems.forEach((carouselItem) => {
    carouselItem.classList.remove("flex");
    carouselItem.classList.add("hidden");
  });
  if (counter === carouselItems.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  carouselItems[counter].classList.add("flex");
  carouselItems[counter].classList.remove("hidden");
};

const prevCarouselItem = () => {
  carouselItems.forEach((carouselItem) => {
    carouselItem.classList.remove("flex");
    carouselItem.classList.add("hidden");
  });
  if (counter === 0) {
    counter = carouselItems.length - 1;
  } else {
    counter--;
  }
  carouselItems[counter].classList.add("flex");
  carouselItems[counter].classList.remove("hidden");
};

nextBtn.addEventListener("click", nextCarouselItem);
prevBtn.addEventListener("click", prevCarouselItem);

let isEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

const validateEmail = () => {
  e.preventDefault();
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(emailInput.value);
  if (!isEmail.test(emailInput.value)) {
    message.innerHTML = "Please insert a valid email";
    message.style.color = "red";
    emailInput.classList.add("error");
  } else {
    message.innerHTML = "Valid! You will receive updates on your e-mail";
    message.style.color = "green";
    emailInput.classList.remove("error");
    emailInput.value = "";
    setTimeout(() => {
      message.innerHTML = "";
    }, 5000);
  }
});
