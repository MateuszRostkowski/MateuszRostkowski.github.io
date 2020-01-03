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