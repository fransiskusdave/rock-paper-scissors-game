const container = document.querySelector(".container");
const user = document.querySelector(".user img");
const computer = document.querySelector(".computer img");
const result = document.querySelector(".result p");
const optionImages = document.querySelectorAll(".option-image");

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");
    user.src = computer.src = "img/rock.svg";
    result.innerText = "Wait....";
    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    container.classList.add("start");

    let time = setTimeout(() => {
      container.classList.remove("start");
      let imageSrc = e.target.querySelector("img").src;
      user.src = imageSrc;

      let randomNumber = Math.floor(Math.random() * 3);
      let ComputerImage = ["img/rock.svg", "img/paper.svg", "img/scissors.svg"];
      computer.src = ComputerImage[randomNumber];

      let computerValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];

      let outComes = {
        RR: "Draw",
        RP: "Computer",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Computer",
        SS: "Draw",
        SR: "Computer",
        SP: "User",
      };

      let outComeValue = outComes[userValue + computerValue];

      result.innerText =
        userValue === computerValue ? "Match Draw" : `${outComeValue} Won`;
    }, 2500);
  });
});
