function openTabs(tabName) {
  var i;
  var x = document.getElementsByClassName("card-section");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

// counter section
let count = document.querySelectorAll(".count");
let arr = Array.from(count);

arr.map(function (item) {
  let startnumber = 0;

  function counterup() {
    startnumber++;
    item.innerHTML = startnumber;

    if (startnumber == item.dataset.number) {
      clearInterval(stop);
    }
  }

  let stop = setInterval(function () {
    counterup();
  }, 10);
});

// activeNav

// active class
var selector = ".program-card .program-head-three";

$(selector).on("click", function () {
  $(selector).removeClass("active");
  $(this).addClass("active");
});

// filter gallery
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = () => {
  //after window loaded
  filterItem.onclick = (selectedItem) => {
    //if user click on filterItem div
    if (selectedItem.target.classList.contains("item")) {
      //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if (filterImges == filterName || filterName == "all") {
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show");
          //add show class in image
        } else {
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
  };
};

// escape key on click

//Get the button:
var mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// swiper js
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// e-libary


