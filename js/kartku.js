const projects = [
  {
    titleKey: "navPortfolioHtwoVQQQQ",
    descriptionKey: "navPortfolioPoneVQQQQ",
    image: "./images/-4.png",
    technologiesKeys: [
      "navPortfolioCSSR",
      "navPortfolioCSST",
      "navPortfolioCSSJJ",
    ],
    github: "https://github.com/ljresetl/game-for-you",
    website: "https://game-for-you-tawny.vercel.app/",
  },
  {
    titleKey: "navPortfolioHtwoVQQQW",
    descriptionKey: "navPortfolioPoneVQQQ",
    image: "./images/-3.png",
    technologiesKeys: [
      "navPortfolioCSSR",
      "navPortfolioCSST",
      "navPortfolioCSSJ",
    ],
    github: "https://github.com/ljresetl/03-react-movies",
    website: "https://03-react-movies-one-liard.vercel.app/",
  },
  {
    titleKey: "navPortfolioHtwoVQQ",
    descriptionKey: "navPortfolioPoneVQQ",
    image: "./images/-2.png",
    technologiesKeys: [
      "navPortfolioHTML",
      "navPortfolioCSS",
      "navPortfolioJSQQ",
    ],
    github: "https://github.com/pattaroni/project-Dev4L1fe",
    website: "https://pattaroni.github.io/project-Dev4L1fe/",
  },
  {
    titleKey: "navPortfolioHtwoV",
    descriptionKey: "navPortfolioPoneV",
    image: "./images/-1.png",
    technologiesKeys: [
      "navPortfolioHTMLV",
      "navPortfolioCSS",
      "navPortfolioJS",
    ],
    github: "https://github.com/ljresetl/New-Single-Dj",
    website: "https://ljresetl.github.io/New-Single-Dj/",
  },
  {
    titleKey: "navPortfolioHtwo",
    descriptionKey: "navPortfolioPone",
    image: "./images/foto1.png",
    technologiesKeys: ["navPortfolioHTML", "navPortfolioCSS", "navPortfolioJS"],
    github: "https://github.com/ljresetl/financial_consulting",
    website: "https://ljresetl.github.io/financial_consulting/",
  },
  {
    titleKey: "navPortfolioH",
    descriptionKey: "navPortfolioPtwo",
    image: "./images/kino411.png",
    technologiesKeys: ["navPortfolioHTML", "navPortfolioCSS", "navPortfolioJS"],
    github: "https://github.com/ljresetl/kino2",
    website: "https://ljresetl.github.io/kino2/",
  },
  {
    titleKey: "navPortfolioHthree",
    descriptionKey: "navPortfolioPthree",
    image: "./images/priklad3-411x350.png",
    technologiesKeys: ["navPortfolioHTML", "navPortfolioCSS", "navPortfolioJS"],
    github: "https://github.com/ljresetl/barbershop",
    website: "https://ljresetl.github.io/barbershop/",
  },
  {
    titleKey: "navPortfolioHfour",
    descriptionKey: "navPortfolioPfour",
    image: "./images/maket1(411).png",
    technologiesKeys: ["navPortfolioHTML", "navPortfolioCSS", "navPortfolioJS"],
    github: "https://github.com/ljresetl/PRODUCT-business",
    website: "https://ljresetl.github.io/PRODUCT-business/",
  },
  {
    titleKey: "navPortfolioHfive",
    descriptionKey: "navPortfolioPfive",
    image: "./images/Snímek obrazovky411x213.png",
    technologiesKeys: ["navPortfolioHTML", "navPortfolioCSS", "navPortfolioJS"],
    github: "https://github.com/ljresetl/goit-markup-hw-06",
    website: "https://ljresetl.github.io/goit-markup-hw-06/",
  },
  {
    titleKey: "navPortfolioHsix",
    descriptionKey: "navPortfolioPsix",
    image: "./images/projekt411x266.png",
    technologiesKeys: ["navPortfolioHTML", "navPortfolioCSS", "navPortfolioR"],
    github: "https://github.com/ljresetl/team-work-yachtjet",
    website: "https://ljresetl.github.io/team-work-yachtjet/",
  },
  {
    titleKey: "navPortfolioHseven",
    descriptionKey: "navPortfolioPseven",
    image: "./images/fotoýproject.png",
    technologiesKeys: ["navPortfolioHTML", "navPortfolioCSS", "navPortfolioJS"],
    github: "https://github.com/ljresetl/weather-html-css-js",
    website: "https://ljresetl.github.io/weather-html-css-js/",
  },
  {
    titleKey: "navPortfolioHeight",
    descriptionKey: "navPortfolioPeight",
    image: "./images/priklad8.png",
    technologiesKeys: ["navPortfolioHTML", "navPortfolioCSS", "navPortfolioJS"],
    github: "https://github.com/ljresetl/SWES-Reservation-Module",
    website: "https://ljresetl.github.io/SWES-Reservation-Module/",
  },
];

const portfolioContainer = document.getElementById("portfolio-list");

function renderProjects() {
  portfolioContainer.innerHTML = "";

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "container-section-four-ul-project";

    card.innerHTML = `
      <h3 class="project-list-h3" data-i18n="${project.titleKey}"></h3>
      <p class="project-list-p-opis" data-i18n="${project.descriptionKey}"></p>
      <div class="four-section-image-container">
        <img src="${
          project.image
        }" alt="Project Image" width="300" height="310" class="img"/>
      </div>
      <p class="container-section-four-p" data-i18n="navPortfolioT">Технології:</p>
      <ul class="container-section-four-ul">
        ${project.technologiesKeys
          .map(
            (key) =>
              `<li class="container-section-four-li" data-i18n="${key}"></li>`
          )
          .join("")}
        <li class="container-section-four-li">
          <a class="container-section-four-a" href="${
            project.github
          }" target="_blank" rel="noopener noreferrer">
            <svg width="32" height="32" class="about-me-svg-link-connect" aria-hidden="true" focusable="false">
              <use href="./images/icons.svg#icon-github" class="use-connect"></use>
            </svg>
            <span data-i18n="navPortfolioA">Посилання на репозиторій</span>
          </a>
        </li>
        <li class="container-section-four-li">
          <a href="${
            project.website
          }" target="_blank" rel="noopener noreferrer" data-i18n="navPortfolioW" class="site">
            Вебсайт
          </a>
        </li>
      </ul>
    `;

    portfolioContainer.appendChild(card);
  });

  // Після створення карток застосовуємо переклад
  translateAll();
}
