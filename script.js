const jsContainer = document.querySelector("#jsContainer");

const data = [
  {
    name: "LiveChat",
    shortDesc: "App",
    liveDemo: "http://jsmessenger.surge.sh/",
    githubLink: "https://github.com/MateuszRostkowski/RockPaperScissors",
    moreInfo:
      "Live chat made in vanilla javascript.",
    moreInfoPhoto: "/assets/Messenger.png",
    skills: ['javascript', 'html', 'css', 'OOP']
  },
  {
    name: "RockPaperScissors",
    shortDesc: "Game in JS",
    liveDemo: "http://rock-paper-sizor.surge.sh/",
    githubLink: "https://github.com/MateuszRostkowski/RockPaperScissors",
    moreInfo:
      "This is a simple RockPaperScissors game made in vanilla Javascript",
    moreInfoPhoto: "/assets/RockPaper.png",
    skills: ['javascript', 'html', 'css']
  },
  {
    name: "Police and Thives",
    shortDesc: "Game in JS",
    liveDemo: "https://police-and-thives.netlify.com/",
    githubLink: "https://github.com/MateuszRostkowski/PoliceAndThives",
    moreInfo: "Simple Game made in vanilla javascript.",
    moreInfoPhoto: "/assets/PoliceAndThives.png",
    skills: ['javascript', 'html', 'css', 'OOP']
  },
  {
    name: "Concerte",
    shortDesc: "Team Project",
    liveDemo: "http://www.frontczewscy.jfdd13.is-academy.pl/",
    githubLink: "https://github.com/infoshareacademy/jfdd13-frontczewscy",
    moreInfo:
      "Team Project that was made on a bootcamp. Made with HTML, CSS and Javascript.",
    moreInfoPhoto: "/assets/Concerte.png",
    skills: ['javascript', 'html', 'css']
  },
  {
    name: "Concerte App",
    shortDesc: "Team Project",
    liveDemo: "http://app.frontczewscy.jfdd13.is-academy.pl/",
    githubLink: "https://github.com/infoshareacademy/jfdd13-frontczewscy-app",
    moreInfo:
      "Team Project that was made on a bootcamp. Made with ReactJS, firebase and more.",
    moreInfoPhoto: "/assets/ConcerteApp.png",
    skills: ['react', 'javascript', 'css', 'firebase']
  },
  {
    name: "TicTacToe",
    shortDesc: "Simple Game in React",
    liveDemo: "https://mateuszrostkowski.github.io/TicTacToe/",
    githubLink: "https://github.com/MateuszRostkowski/TicTacToe",
    moreInfo: "Simple TicTacToe game made in React",
    moreInfoPhoto: "/assets/TicTacToe.png",
    skills: ['react', 'javascript', 'react']
  },
  {
    name: "JavascriptMasters",
    shortDesc: "Gatsby blog about Javascript",
    liveDemo: "http://javascriptmasters.netlify.com/",
    githubLink: "https://github.com/MateuszRostkowski/Gatsby_blog",
    moreInfo: "This blog was made using Gatsby",
    moreInfoPhoto: "/assets/JavascriptMaster.png", 
    skills: ['gatsby', 'react', 'javascript', 'scss', 'css']
  },
  {
    name: "Weather app",
    shortDesc: "simple javascript app",
    liveDemo: "https://weather-location.netlify.com/",
    githubLink: "",
    moreInfo:
      "Weather app made with vanilla javascript. You need to allow use your location to fully use this site.",
    moreInfoPhoto: "/assets/WeatherApp.png",
    skills: ['javascript', 'html', 'css']

  },
  {
    name: "RockPaperScissors",
    shortDesc: "Game in JS",
    liveDemo: "http://rock-paper-sizor.surge.sh/",
    githubLink: "https://github.com/MateuszRostkowski/RockPaperScissors",
    moreInfo:
      "This is a simple RockPaperScissors game made in vanilla Javascript",
    moreInfoPhoto: "/assets/RockPaper.png",
    skills: ['javascript', 'html', 'css']
  },
  // {
  //   name: "WheaterApp",
  //   shortDesc: "Mobile app in react native",
  //   liveDemo: "https://github.com/MateuszRostkowski/WeatherNativeApp",
  //   githubLink: "https://github.com/MateuszRostkowski/WeatherNativeApp",
  //   moreInfo:
  //     "Simple wheater app made in react native and expo",
  //   moreInfoPhoto: ""
  // }
];

// rendering containers on site

function renderData(items) {
  jsContainer.innerHTML = ''

  items.forEach(element => {
    const { name, shortDesc, liveDemo, githubLink, moreInfo, moreInfoPhoto } = element;
    jsContainer.innerHTML += `
      <div class="container__item" >
        <img class="more-info-photo more-info-trigger" src=${moreInfoPhoto} data-aos="zoom-out"/>
        <div class="more-info more-info--hidden">
          <div class="more-info__close">X</div>
          <h1 class="more-info__header">${name}</h1>
          
          <p class="more-info__text">${moreInfo}</p>
          <a class="more-info__demo" href="${liveDemo}" target="_blank" >
            <span class="more-info-title">Live Demo</span>
          </a>
          <a class="more-info-github" target="_blank" href="${githubLink}">
            <i class="fa fa-github"></i>
          </a>
          <img class="more-info-photo-desc" src=${moreInfoPhoto} />
        </div>
      </div>
      
    `;
  });
}

renderData(data)

const menuBtn = document.querySelector("#menuBtn");
const siteMenu = document.querySelector("#siteMenu");

// open / close menu
function toggleMenu() {
  menuBtn.classList.toggle("change");
  siteMenu.classList.toggle("shown");
}

menuBtn.addEventListener("click", toggleMenu);

function portfolioItem() {
  // selecting items from site
  const moreInfoTrigger = document.querySelectorAll(".more-info-trigger");
  const moreInfoElements = document.querySelectorAll(".more-info");
  const closeButtons = document.querySelectorAll(".more-info__close");

  // close more info about portfolio item
  function closeInfo() {
    moreInfoElements.forEach(element => {
      element.classList.add("more-info--hidden");
    });
  }

  closeButtons.forEach(button => {
    button.addEventListener("click", closeInfo);
  });


  // open more ino about portfolio item
  moreInfoTrigger.forEach(icon => {
    icon.addEventListener("click", () => {
      const moreInfo = icon.parentElement.querySelector(".more-info");
      closeInfo();
      moreInfo.classList.remove("more-info--hidden");
    });
  });
}

portfolioItem()




// window height variable for styles
function setHeightVariable() {
  let vh = window.innerHeight * 0.01 - 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setHeightVariable();

window.addEventListener("resize", setHeightVariable);

// add loader to the site
window.addEventListener(
  'load',                                                         // when site is fully loaded
  () => {
    document.body.style.overflowY = "auto"
    const preloader = document.querySelector('.preloader')
    preloader.classList.add('preloader-finish')                 // add class to the preloader
  }
)

// finding skills from data 

function findSkills(list) {
  return list.reduce((result, element) => {
    result.push(...element.skills)
    return result.filter((a, b) => result.indexOf(a) === b)
  }, [])
}

// finding data item using skill

function findDataWithSkill(data, skill) {
  return data
    .filter(item => item.skills.includes(skill))
}

// render skillsButtons

const skillsContainer = document.getElementById('skills')
const skills = findSkills(data)

skills.forEach(skill => {
  skillsContainer.innerHTML += `
    <button class='skill__button' >${skill}</button>
  `
})

const skillButtons = document.querySelectorAll('.skill__button')

// remove activeClass from button

function removeActive() {
  skillButtons.forEach(button => {
    button.classList.remove('skill__button--active')
  })
}

// listener for skillButtons

skillButtons.forEach(button => {
  button.addEventListener('click', () => {
    removeActive()
    const newData = findDataWithSkill(data, button.innerHTML)
    button.classList.add('skill__button--active')
    renderData(newData)
    portfolioItem()
  })
})

