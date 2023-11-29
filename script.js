const elements = {
  homePage: document.querySelector(".homepage"),
  container: document.querySelector(".container"),
  translate: {
    make: document.getElementById("make"),
    the: document.getElementById("the"),
    difference: document.getElementById("difference"),
    appPlanche: document.getElementById("appPlanche"),
    appPlancheButton: document.getElementById("appPlancheButton"),
    review: document.getElementById("review"),
  },
};
// Show the homepage
elements.homePage.style.display = "none";
// if the screen is smaller than 1180px, do not show the animation for the li elements
if (window.innerWidth > 1190) {
  TweenMax.staggerFrom(
    ".titles > div",
    0.8,
    {
      x: "-40",
      ease: Power3.easeInOut,
      opacity: "0",
    },
    2
  );
  TweenMax.staggerTo(
    ".titles > div",
    0.8,
    {
      x: "60",
      ease: Power3.easeInOut,
      delay: 1,
      opacity: "0",
    },
    2
  );

  TweenMax.staggerFrom(
    "li",
    3,
    {
      x: "-1600",
      delay: 4.2,
      ease: Expo.easeInOut,
    },
    0.16
  );
  TweenMax.staggerTo(
    "li",
    2.6,
    {
      x: "1600",
      delay: 6.8,
      ease: Expo.easeInOut,
    },
    0.2
  );
  // After all the animations are done, we want to redirect the user to the next page
  setTimeout(() => {
    elements.homePage.style.display = "block";
    elements.container.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    //reset the propreties on the css for the * element
    // make an fade in animation for the homepage
    TweenMax.from(elements.homePage, 1, {
      opacity: 0,
      ease: Power3.easeInOut,
    });
  }, 8800);
} else {
  TweenMax.staggerFrom(
    ".titles > div",
    0.8,
    {
      x: "-40",
      ease: Power3.easeInOut,
      opacity: "0",
    },
    2
  );
  TweenMax.staggerTo(
    ".titles > div",
    0.8,
    {
      x: "60",
      ease: Power3.easeInOut,
      delay: 1,
      opacity: "0",
    },
    2
  );
  //hide the li elements

  // After all the animations are done, we want to redirect the user to the next page
  setTimeout(() => {
    elements.homePage.style.display = "block";
    elements.container.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    //reset the propreties on the css for the * element
    // make an fade in animation for the homepage
    TweenMax.from(elements.homePage, 1, {
      opacity: 0,
      ease: Power3.easeInOut,
    });
  }, 5600);
}

//when appPlancheButton is clicked, we want to download a pdf file
elements.translate.appPlancheButton.addEventListener("click", () => {
  window.open("source/pdf/Ebook Planche by Mattia PARRINELLO.pdf", "_blank");
});
