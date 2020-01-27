const infoIcons = document.querySelectorAll(".info__icon")
const moreInfoElements = document.querySelectorAll(".more-info")
const closeButtons = document.querySelectorAll(".more-info__close")

const menuBtn = document.querySelector("#menuBtn")
const siteMenu = document.querySelector("#siteMenu")


function toggleMenu() {
    console.log("XD")
    menuBtn.classList.toggle("change");
    siteMenu.classList.toggle("shown");
}

menuBtn.addEventListener('click', toggleMenu)

function closeInfo() {
    moreInfoElements.forEach((element) => {
        element.classList.add('more-info--hidden')
    })
}

closeButtons.forEach((button) => {
    button.addEventListener('click', closeInfo)
})


infoIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        const moreInfo = icon.parentElement.querySelector('.more-info')
        closeInfo()
        moreInfo.classList.remove('more-info--hidden')
    })
})

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const data = [
    {
        name: "LiveChat",
        shortDesc: "App",
        liveDemo: "http://jsmessenger.surge.sh/",
        githubLink: "https://github.com/MateuszRostkowski/RockPaperScissors",
        moreInfo: "This is a simple RockPaperScissors game made in vanilla Javascript",
        moreInfoPhoto: "Live chat made in vanilla javascript."
    },
    {
        name: "RockPaperScissors",
        shortDesc: "Game in JS",
        liveDemo: "",
        githubLink: "https://github.com/MateuszRostkowski/RockPaperScissors",
        moreInfo: "This is a simple RockPaperScissors game made in vanilla Javascript",
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
        name: "Police and Thives",
        shortDesc: "Game in JS",
        liveDemo: "",
        githubLink: "",
        moreInfo: "",
        moreInfoPhoto: ""
    },
    {
        name: "Police and Thives",
        shortDesc: "Game in JS",
        liveDemo: "",
        githubLink: "",
        moreInfo: "",
        moreInfoPhoto: ""
    },
]

const jsContainer = document.querySelector("#jsContainer")

data.forEach((element) => {
    const { name, shortDesc, githubLink, moreInfo, moreInfoPhoto } = element
    jsContainer.innerHTML +=  `
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
    `
})