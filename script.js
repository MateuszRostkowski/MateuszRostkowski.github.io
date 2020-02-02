const jsContainer = document.querySelector("#jsContainer");

const data = [
    {
      name: "LiveChat",
      shortDesc: "App",
      liveDemo: "http://jsmessenger.surge.sh/",
      githubLink: "https://github.com/MateuszRostkowski/RockPaperScissors",
      moreInfo:
        "This is a simple RockPaperScissors game made in vanilla Javascript",
      moreInfoPhoto: "Live chat made in vanilla javascript."
    },
    {
      name: "RockPaperScissors",
      shortDesc: "Game in JS",
      liveDemo: "",
      githubLink: "https://github.com/MateuszRostkowski/RockPaperScissors",
      moreInfo:
        "This is a simple RockPaperScissors game made in vanilla Javascript",
      moreInfoPhoto: ""
    },
    {
      name: "Police and Thives",
      shortDesc: "Game in JS",
      liveDemo: "https://police-and-thives.netlify.com/",
      githubLink: "https://github.com/MateuszRostkowski/PoliceAndThives",
      moreInfo: "Simple Game made in vanilla javascript.",
      moreInfoPhoto: ""
    },
    {
      name: "Concerte",
      shortDesc: "Team Project",
      liveDemo: "http://www.frontczewscy.jfdd13.is-academy.pl/",
      githubLink: "https://github.com/infoshareacademy/jfdd13-frontczewscy",
      moreInfo:
        "Team Project that was made on a bootcamp. Made with HTML, CSS and Javascript.",
      moreInfoPhoto: ""
    },
    {
      name: "Concerte App",
      shortDesc: "Team Project",
      liveDemo: "http://app.frontczewscy.jfdd13.is-academy.pl/",
      githubLink: "https://github.com/infoshareacademy/jfdd13-frontczewscy-app",
      moreInfo:
        "Team Project that was made on a bootcamp. Made with ReactJS, firebase and more.",
      moreInfoPhoto: ""
    },
    {
      name: "TicTacToe",
      shortDesc: "Simple Game in React",
      liveDemo: "https://mateuszrostkowski.github.io/TicTacToe/",
      githubLink: "https://github.com/MateuszRostkowski/TicTacToe",
      moreInfo: "Simple TicTacToe game made in React",
      moreInfoPhoto: ""
    },
    {
      name: "JavascriptMasters",
      shortDesc: "Gatsby blog about Javascript",
      liveDemo: "http://javascriptmasters.netlify.com/",
      githubLink: "https://github.com/MateuszRostkowski/Gatsby_blog",
      moreInfo: "This blog was made using Gatsby",
      moreInfoPhoto: ""
    },
    {
      name: "Weather app",
      shortDesc: "simple javascript app",
      liveDemo: "https://weather-location.netlify.com/",
      githubLink: "",
      moreInfo:
        "Weather app made with vanilla javascript. You need to allow use your location to fully use this site.",
      moreInfoPhoto: ""
    },
    {
      name: "RockPaperScissors",
      shortDesc: "Game in JS",
      liveDemo: "http://rock-paper-sizor.surge.sh/",
      githubLink: "https://github.com/MateuszRostkowski/RockPaperScissors",
      moreInfo:
        "This is a simple RockPaperScissors game made in vanilla Javascript",
      moreInfoPhoto: ""
    }
  ];
  
  data.forEach(element => {
      const { name, shortDesc, githubLink, moreInfo, moreInfoPhoto } = element;
      jsContainer.innerHTML += `
            <div class="container__item">
                <a href=""><span class="app__name">${name}</span> - ${shortDesc}</a>
                <a href="${githubLink}">
                    <i class="fa fa-github"></i>
                </a>
                <i class="fa fa-info-circle info__icon"></i>
                <div class="more-info more-info--hidden">
                    <div class="more-info__close">X</div>
                    ${moreInfo}
                </div>
            </div> 
        `;
    });

const infoIcons = document.querySelectorAll(".info__icon");
const moreInfoElements = document.querySelectorAll(".more-info");
const closeButtons = document.querySelectorAll(".more-info__close");
const menuBtn = document.querySelector("#menuBtn");
const siteMenu = document.querySelector("#siteMenu");

function toggleMenu() {
  menuBtn.classList.toggle("change");
  siteMenu.classList.toggle("shown");
}

menuBtn.addEventListener("click", toggleMenu);

function closeInfo() {
  moreInfoElements.forEach(element => {
    element.classList.add("more-info--hidden");
  });
}

closeButtons.forEach(button => {
  button.addEventListener("click", closeInfo);
});

infoIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    const moreInfo = icon.parentElement.querySelector(".more-info");
    closeInfo();
    moreInfo.classList.remove("more-info--hidden");
  });
});

function setHeightVariable() {
  let vh = window.innerHeight * 0.01 - 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setHeightVariable();

window.addEventListener("resize", setHeightVariable);
