<div class="post__header">
    <div class="wrapper">
        <h1>HTML preloader</h1>
    </div>
</div>

<div class="post__content">

Dodanie prostego preloader'a dokładnie taki jaki widzicie na tej stronie, nie jest niczym skomplikowanym. 

Pokaze wam jak w kilku krokach to zrobić. 

1. Przygotuj loader który będzie pasował do Twojej strony (moze to byc animowany gif lub napisany za pomocą HTML/CSS) [Przykładowe loader'y](https://loading.io/css/)

2. Otwórz plik `index.html` swojej strony i pod tagiem `<body>` dodaj swój loader.

```javascript
<div class="preloader">
    <div class="loader">
        <!-- w tym miejscu trzeba dodać loader -->
        <!-- moze to byc prosty gif lub napisany za pomocą css -->
        <img src="/340_loader_11.gif" alt="loader">
    </div>
</div>
```

3. Aby loader był dobrze wypozycjonowany musimy go ostylować, poniej przykład jak mona to zrobić

```css
.preloader {
  top: 0;
  opacity: 1;
  position: fixed;
  background-color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  flex-direction: column;
  transition: opacity 0.3s cubic-bezier(.77, 0, .175, 1);
  z-index: 20000;
}


// dodajemy style dla klasy która sprawi ze preloader nie bedzie widoczny
.preloader-finish {
  opacity: 0;
  pointer-events: none;
}

.loader {
  z-index: 3;

  img {
    width: 100px;
    height: 100px;
  }
}
```

4. Musimy jeszcze dodać skrypt, który będzie ukrywać loader po załadowaniu strony. W tagu `<head>` swojej strony dodaj taki skrypt:

```javascript
window.addEventListener('load', // when site is fully loaded
  function () {
    document.body.style.overflowY = "auto";
    var preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader-finish'); // add class to the preloader
  }
);
```
</div>