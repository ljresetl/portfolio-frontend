// Словники перекладів
const translations = {
  ua: {
    navAbout: "Про мене",
    navCapabilities: "Досвід",
    navPortfolio: "Портфоліо",
    navConnect: "Контакти",
    navAboutMe: "Про мене",
    navAboutMeP:
      "Я — фронтенд-розробник із Ліберця, Чехія. Маю технічну освіту у сфері комп’ютерних систем та спеціалізуюся на створенні сучасних вебінтерфейсів. Мої основні пріоритети — це якість коду, адаптивність і доступність для користувачів. Постійно працюю над вдосконаленням навичок і освоєнням нових інструментів.",
    navAboutMeTwoP:
      "У своїй роботі я поєдную прагматичний підхід і креативність, адже вважаю, що кожен інтерфейс має бути не лише функціональним, а й приємним у використанні. З особливим інтересом досліджую JavaScript та сучасні фреймворки, щоб створювати ефективні рішення для складних завдань. Створюю односторінкові сайти, покращую UI/UX, працюю з HTML, CSS, JS, інтегрую зовнішні API. Поза програмуванням надихаюся сім’єю та новими ідеями, які допомагають мені розвиватися як фахівцю й особистості.",
    navButtonResume: "Завантажити резюме",
    navAboutTextH: "Привіт! Я Віталій — Frontend розробник-початківець",
    navAboutTextP:
      "Наразі я активно вивчаю JavaScript і проходжу курси на Fullstack розробника, щоб стати професіоналом у веб-розробці.",
    navAboutTextPtwo:
      "Маю міцні знання HTML та CSS, вмію створювати адаптивні і привабливі інтерфейси, що працюють на різних пристроях.",
    navAboutTextPthree:
      "Працюю над проектами, щоб покращувати навички і освоювати нові технології крок за кроком.",
    navAboutTextPfour:
      "Вірю, що постійне навчання і практика — це ключ до успіху у IT-сфері.",
    navAboutTextPfive:
      "Я відкритий до нових викликів і готовий долучатися до цікавих проектів, де зможу застосувати свої знання і продовжувати рости.",
    navAboutTextPsix:
      "Якщо шукаєш мотивованого і цілеспрямованого розробника, який швидко вчиться — зв'яжись зі мною!",
    navCapabilitiesH: "Мої навички",
    navCapabilitiesP:
      "Розвиваюся щодня, щоб бути в курсі сучасних технологій і трендів у веб-розробці. Вірю, що наполегливість і постійне навчання допоможуть мені досягти нових вершин у кар'єрі. Готовий братися за складні проєкти та швидко вивчати нові інструменти.",
    navExperienceH: "Мій досвід",
    navExperienceP: "Самостійне навчання та практичні проєкти",
    navExperiencePtwo: "2024 — теперішній час",
    navExperiencePthree:
      "Активно вивчаю фронтенд-розробку, працюю над навчальними й особистими проєктами для закріплення знань на практиці. Опановую сучасні технології (HTML, CSS, JavaScript) та поступово розширюю компетенції у сфері веброзробки. Приклади моїх проєктів можна побачити нижче.",
    navExperiencePfour: "Курси та онлайн-навчання",
    navExperiencePsix: "2024 — теперішній час",
    navExperiencePseven: "Самоосвіта",
    navExperiencePeight:
      "Проходжу навчальні програми та онлайн-курси, які допомагають розвивати практичні навички створення адаптивних і доступних інтерфейсів. Регулярно практикуюся у написанні коду, реалізовую власні мініпроєкти та вдосконалюю вміння працювати з сучасними інструментами веброзробки. У 2024 році розпочав курси Fullstack розробки у компанії <a href='https://goit.ua' target='_blank' class='goit'>GoIT</a> і продовжую навчання до сьогодні.",
    navPortfolioH: "Приклади робіт",
    navPortfolioHtwo: "Фінансовий консалтинг",
    navPortfolioPone:
      "Опис: односторінковий адаптивний сайт для британської компанії з фінансового консалтингу. Містить опис послуг, переваги компанії, форму зворотного зв’язку, блог, інтерактивну карту.",
    navPortfolioT: "Технології:",
    navPortfolioHTML: "HTML - Використано + mobile-first;",
    navPortfolioCSS: "CSS - Використано;",
    navPortfolioJS: "JavaScript - частково;",
    navPortfolioA: "Посилання на репозиторій",
    navPortfolioW: "Вебсайт",

    navPortfolioPtwo:
      "Опис: односторінковий сайт, що надає користувачам можливість переглядати фільми та серіали українською мовою. Інтерфейс сайту простий і зручний, з адаптивним дизайном.",
    navPortfolioHthree: "Барбершоп",
    navPortfolioPthree:
      "Опис: односторінковий адаптивний сайт для чоловічої перукарні в Києві. Він поєднує стильний дизайн із зручним функціоналом для онлайн-запису та швидкого перегляду послуг.",
    navPortfolioHfour: "Продукт для бізнесу",
    navPortfolioPfour:
      "Опис: односторінковий сайт, який демонструє можливості платформи для тестування та валідації продуктів. Сайт орієнтований на стартапи та компанії, які прагнуть оптимізувати свої продукти.",
    navPortfolioHfive: "Вебстудія",
    navPortfolioPfive:
      "Опис: односторінковий адаптивний сайт, створений у рамках домашнього завдання №6 курсу GoIT. Сайт демонструє можливості веб-студії, що спеціалізується на цифровому дизайні та маркетингових рішеннях.",
    navPortfolioHsix: "Яхти",
    navPortfolioPsix:
      "Опис: односторінковий сайт, розроблений у рамках командного проєкту, що демонструє можливості оренди розкішних яхт для подорожей. Сайт поєднує елегантний дизайн із зручним функціоналом для перегляду флоту та відгуків клієнтів.",
    navPortfolioHseven: "Сайт погоди",
    navPortfolioPseven:
      "Опис: Сайт погоди – веб-додаток для перегляду прогнозу погоди в обраних містах. Підтримує погодинний та денний прогноз, автодоповнення при введенні міста та кілька мов (чеська, українська, англійська).",
    navPortfolioHeight: "SWES Reservation Module",
    navPortfolioPeight:
      "Опис: Інтерфейс для бронювання та управління обладнанням у компанії. Користувачі можуть створювати бронювання, переглядати історію, фільтрувати за типом та статусом, а також переглядати календар.",
    navPortfolioLoadMore: "Показати більше",
    navPortfolioR: "Посилання на репозиторій",
    navСonnect: "Зв'язок",
    navСonnectP: "Скажи привіт тут",
    navСonnectPtwo: "Для більшої інформації ось моє",
    navСonnectR: "Резюме",
    navСonnectName: "І'мя",
    navСonnectTelefon: "Телефон",
    navСonnectMail: "Емейл",
    navСonnectComment: "Коментар",
    navСonnectButtonSend: "Послати",
    navPortfolioHtwoV: "Музичне портфоліо",
    navPortfolioPoneV:
      "Опис: Адаптивний односторінковий сайт для музичного виконавця, що презентує його нові сингли та майбутній альбом. Вебсайт включає інтегрований аудіоплеєр.",
    navPortfolioHTMLV: "HTML - Використано тільки дескопт версія",
    navPortfolioJSQQ: "JavaScript - Використано;",
    navPortfolioPoneVQQ:
      "Опис: каталог музичних виконавців, їхніх пісень, біографій та відгуків. Робив Хедер. Спільний, командний проект.",
    navPortfolioCSSR: "React - Використано;",
    navPortfolioCSST: "TipeScript - Використано;",
    navPortfolioCSSJ: "JS - Використано;",
    navPortfolioHtwoVQQ: "Додаток фільмів",
    navPortfolioPoneVQQQ:
      "Опис: React Movies – вебдодаток для перегляду інформації про фільми.",
    navPortfolioHtwoVQQQQ: "Гра на клавіатурі - Тест",
    navPortfolioHtwoVQQQW: "Пошук карток фільмів",
    navPortfolioCSSJJ: "Vercel - Використано;",
    navPortfolioPoneVQQQQ:
      "Опис: інтерактивна веб-гра для тренування набору тексту наклавіатурі. Тестуй свою швидкість і точність у написанні, зрізними рівнями складності та приємним інтерфейсом.",
  },

  en: {
    navPortfolioPoneVQQ:
      "Description: a catalog of music artists, their songs, biographies, and reviews. Worked on the Header. A shared, team project.",
    navPortfolioJSQQ: "JavaScript - Used;",
    navAbout: "About Me",
    navCapabilities: "Experience",
    navPortfolio: "Portfolio",
    navConnect: "Contacts",
    navAboutMe: "About Me",
    navAboutMeP:
      "I am a front-end developer based in Liberec, Czech Republic. I have a technical background in computer systems and specialize in building modern web interfaces. My main priorities are code quality, responsiveness, and accessibility for users. I am constantly improving my skills and exploring new tools.",
    navAboutMeTwoP:
      "In my work, I combine a pragmatic approach with creativity, as I believe that every interface should be not only functional but also enjoyable to use. I have a keen interest in exploring JavaScript and modern frameworks to create effective solutions for complex tasks. I build one-page websites, improve UI/UX, work with HTML, CSS, JS, and integrate external APIs. Outside of programming, I draw inspiration from my family and new ideas that help me grow both professionally and personally.",
    navButtonResume: "Download Resume",
    navAboutTextH: "Hi! I'm Vitalii — a junior Frontend Developer",
    navAboutTextP:
      "Currently, I am actively learning JavaScript and taking Fullstack development courses to become a professional in web development.",
    navAboutTextPtwo:
      "I have solid knowledge of HTML and CSS, and I can create adaptive and attractive interfaces that work across different devices.",
    navAboutTextPthree:
      "I work on projects to improve my skills and master new technologies step by step.",
    navAboutTextPfour:
      "I believe that continuous learning and practice are the key to success in the IT field.",
    navAboutTextPfive:
      "I am open to new challenges and ready to join interesting projects where I can apply my knowledge and continue to grow.",
    navAboutTextPsix:
      "If you are looking for a motivated and determined developer who learns quickly — get in touch with me!",
    navCapabilitiesH: "My Skills",
    navCapabilitiesP:
      "I grow every day to stay up to date with modern technologies and trends in web development. I believe that persistence and continuous learning will help me achieve new heights in my career. I am ready to take on complex projects and quickly learn new tools.",
    navExperienceH: "My Experience",
    navExperienceP: "Self-learning and Practical Projects",
    navExperiencePtwo: "2024 — Present",
    navExperiencePthree:
      "I am actively studying front-end development, working on educational and personal projects to consolidate my knowledge in practice. I am mastering modern technologies (HTML, CSS, JavaScript) and gradually expanding my competencies in web development. Examples of my projects can be seen below.",
    navExperiencePfour: "Courses and Online Learning",
    navExperiencePsix: "2024 — Present",
    navExperiencePseven: "Self-education",
    navExperiencePeight:
      "I am taking training programs and online courses that help me develop practical skills in creating adaptive and accessible interfaces. I regularly practice coding, implement my own mini-projects, and improve my ability to work with modern web development tools. In 2024, I started Fullstack development courses at <a href='https://goit.ua' target='_blank' class='goit'>GoIT</a> and continue learning to this day.",
    navPortfolioH: "Portfolio",
    navPortfolioHtwo: "Financial Consulting",
    navPortfolioPone:
      "Description: a one-page responsive website for a British financial consulting company. Includes service descriptions, company advantages, contact form, blog, interactive map.",
    navPortfolioT: "Technologies:",
    navPortfolioHTML: "HTML - Used + mobile-first;",
    navPortfolioCSS: "CSS - Used;",
    navPortfolioJS: "JavaScript - partially;",
    navPortfolioA: "Repository link",
    navPortfolioW: "Website",

    navPortfolioPtwo:
      "Description: a one-page website that allows users to watch movies and series in Ukrainian. The interface is simple and convenient.",
    navPortfolioHthree: "Barbershop",
    navPortfolioPthree:
      "Description: A single-page responsive website for a men's barbershop in Kyiv. It combines a stylish design with convenient functionality for online booking and quick service overview.",
    navPortfolioHfour: "Product for Business",
    navPortfolioPfour:
      "Description: a one-page website showcasing a platform for testing and validating products. Targeted at startups and companies looking to optimize products.",
    navPortfolioHfive: "Web Studio",
    navPortfolioPfive:
      "Description: a one-page responsive website created as part of homework #6 of the GoIT course. Showcases the capabilities of a web studio specializing in digital design and marketing solutions.",
    navPortfolioHsix: "Yachts",
    navPortfolioPsix:
      "Description: a one-page website developed as a team project, showcasing luxury yacht rental options for trips. Combines elegant design with user-friendly fleet and review browsing functionality.",
    navPortfolioHseven: "Weather Website",
    navPortfolioPseven:
      "Description: a web application for checking the weather forecast in selected cities. Supports hourly and daily forecasts, auto-complete when entering city names, and multiple languages (Czech, Ukrainian, English).",
    navPortfolioHeight: "SWES Reservation Module",
    navPortfolioPeight:
      "Description: Interface for booking and managing company equipment. Users can create bookings, view history, filter by type and status, and check the calendar.",
    navPortfolioLoadMore: "Load More",
    navPortfolioR: "Repository link",
    navСonnect: "Contact",
    navСonnectP: "Say hello here",
    navСonnectPtwo: "For more information, here is my",
    navСonnectR: "Resume",
    navСonnectName: "Name",
    navСonnectTelefon: "Phone",
    navСonnectMail: "Email",
    navСonnectComment: "Message",
    navСonnectButtonSend: "Send",
    navPortfolioHtwoV: "Music portfolio",
    navPortfolioPoneV:
      "Description: A responsive one-page website for a music artist showcasing new singles and an upcoming album. The website includes an integrated audio player.",
    navPortfolioHTMLV: "HTML - Desktop version only",
    navPortfolioCSSR: "React – Used;",
    navPortfolioCSST: "TypeScript – Used;",
    navPortfolioCSSJ: "JavaScript – Used;",
    navPortfolioHtwoVQQ: "Movie App",
    navPortfolioPoneVQQQ:
      "Description: React Movies – a web app for browsing movie information.",
    navPortfolioCSSJJ: "Vercel - Used;",
    navPortfolioHtwoVQQQQ: "Typing Keyboard Game",
    navPortfolioHtwoVQQQW: "Movie Card Search",
    navPortfolioPoneVQQQQ:
      "Description: an interactive web game for practicing keyboard typing. Test your speed and accuracy in writing with different difficulty levels and a pleasant interface.",
  },
  cz: {
    navPortfolioPoneVQQ:
      "Popis: katalog hudebních umělců, jejich písní, biografií a recenzí. Pracoval na hlavičce. Sdílený týmový projekt.",
    navPortfolioJSQQ: "JavaScript - Použito;",
    navAbout: "O mně",
    navCapabilities: "Zkušenosti",
    navPortfolio: "Portfolio",
    navConnect: "Kontakt",
    navAboutMe: "O mně",
    navAboutMeP:
      "Jsem front-end vývojář působící v Liberci, Česká republika. Mám technické vzdělání v oblasti počítačových systémů a specializuji se na tvorbu moderních webových rozhraní. Mými hlavními prioritami jsou kvalita kódu, responzivita a přístupnost pro uživatele. Neustále pracuji na zlepšování svých dovedností a objevování nových nástrojů.",
    navAboutMeTwoP:
      "Ve své práci kombinuji pragmatický přístup s kreativitou, protože věřím, že každé rozhraní by mělo být nejen funkční, ale také příjemné k používání. Zvláštní zájem mám o studium JavaScriptu a moderních frameworků, abych vytvářel efektivní řešení pro složité úkoly. Vytvářím jednostránkové weby, zlepšuji UI/UX, pracuji s HTML, CSS, JS a integruji externí API. Mimo programování se nechávám inspirovat rodinou a novými nápady, které mi pomáhají růst profesionálně i osobně.",
    navButtonResume: "Stáhnout životopis",
    navAboutTextH: "Ahoj! Jsem Vitalii — začínající Frontend vývojář",
    navAboutTextP:
      "Momentálně se aktivně učím JavaScript a absolvuji kurzy na Fullstack vývojáře, abych se stal profesionálem ve webovém vývoji.",
    navAboutTextPtwo:
      "Mám pevné znalosti HTML a CSS, umím vytvářet responzivní a atraktivní rozhraní, která fungují na různých zařízeních.",
    navAboutTextPthree:
      "Pracuji na projektech, abych zlepšil své dovednosti a krok za krokem ovládal nové technologie.",
    navAboutTextPfour:
      "Věřím, že neustálé učení a praxe jsou klíčem k úspěchu v IT oblasti.",
    navAboutTextPfive:
      "Jsem otevřený novým výzvám a připravený zapojit se do zajímavých projektů, kde mohu uplatnit své znalosti a dále růst.",
    navAboutTextPsix:
      "Pokud hledáš motivovaného a cílevědomého vývojáře, který se rychle učí — kontaktuj mě!",
    navCapabilitiesH: "Moje dovednosti",
    navCapabilitiesP:
      "Každý den se rozvíjím, abych byl v obraze s moderními technologiemi a trendy ve webovém vývoji. Věřím, že vytrvalost a neustálé učení mi pomohou dosáhnout nových úspěchů v kariéře. Jsem připraven přijímat náročné projekty a rychle se učit nové nástroje.",
    navExperienceH: "Moje zkušenosti",
    navExperienceP: "Samostudium a praktické projekty",
    navExperiencePtwo: "2024 — současnost",
    navExperiencePthree:
      "Aktivně se učím frontendový vývoj, pracuji na výukových i osobních projektech, abych si upevnil znalosti v praxi. Ovládám moderní technologie (HTML, CSS, JavaScript) a postupně rozšiřuji své kompetence v oblasti webového vývoje. Ukázky mých projektů můžete vidět níže.",
    navExperiencePfour: "Kurzy a online vzdělávání",
    navExperiencePsix: "2024 — současnost",
    navExperiencePseven: "Samostudium",
    navExperiencePeight:
      "Absolvuji vzdělávací programy a online kurzy, které mi pomáhají rozvíjet praktické dovednosti při tvorbě adaptivních a přístupných rozhraní. Pravidelně si procvičuji psaní kódu, realizuji vlastní miniprojekty a zlepšuji své schopnosti pracovat s moderními nástroji webového vývoje. V roce 2024 jsem zahájil kurzy Fullstack vývoje ve společnosti <a href='https://goit.ua' target='_blank' class='goit'>GoIT</a> a pokračuji ve studiu dodnes.",
    navPortfolioH: "Portfolio",
    navPortfolioHtwo: "Finanční poradenství",
    navPortfolioPone:
      "Popis: jednorázová responzivní stránka pro britskou společnost poskytující finanční poradenství. Obsahuje popis služeb, výhody společnosti, kontaktní formulář, blog, interaktivní mapu.",
    navPortfolioT: "Technologie:",
    navPortfolioHTML: "HTML - Použito + mobile-first;",
    navPortfolioCSS: "CSS - Použito;",
    navPortfolioJS: "JavaScript - částečně;",
    navPortfolioA: "Odkaz na repozitář",
    navPortfolioW: "Web",

    navPortfolioPtwo:
      "Popis: jednorázová stránka, která umožňuje uživatelům sledovat filmy a seriály v ukrajinštině. Rozhraní je jednoduché a pohodlné.",
    navPortfolioHthree: "Barbershop",
    navPortfolioPthree:
      "Popis: Jednostránková responzivní webová stránka pro pánský kadeřnický salon v Kyjevě. Spojuje stylový design s pohodlnou funkcionalitou pro online rezervace a rychlý přehled služeb.",
    navPortfolioHfour: "Produkt pro podnikání",
    navPortfolioPfour:
      "Popis: jednorázová stránka, která ukazuje možnosti platformy pro testování a validaci produktů. Stránka je zaměřena na startupy a firmy, které chtějí optimalizovat své produkty.",
    navPortfolioHfive: "Web Studio",
    navPortfolioPfive:
      "Popis: jednorázová responzivní stránka vytvořená v rámci domácího úkolu č. 6 kurzu GoIT. Ukazuje možnosti webového studia specializujícího se na digitální design a marketingová řešení.",
    navPortfolioHsix: "Jachty",
    navPortfolioPsix:
      "Popis: jednorázová stránka vyvinutá jako týmový projekt, ukazující možnosti pronájmu luxusních jachet pro cestování. Kombinuje elegantní design s uživatelsky přívětivým prohlížením flotily a recenzí.",
    navPortfolioHseven: "Počasí Web",
    navPortfolioPseven:
      "Popis: webová aplikace pro kontrolu předpovědi počasí ve vybraných městech. Podporuje hodinové a denní předpovědi, automatické doplňování při zadávání měst a několik jazyků (čeština, ukrajinština, angličtina).",
    navPortfolioHeight: "SWES Reservation Module",
    navPortfolioPeight:
      "Popis: rozhraní pro rezervaci a správu vybavení ve společnosti. Uživatelé mohou vytvářet rezervace, prohlížet historii, filtrovat podle typu a stavu a kontrolovat kalendář.",
    navPortfolioLoadMore: "Zobrazit více",
    navPortfolioR: "Odkaz na repozitář",
    navСonnect: "Kontakt",
    navСonnectP: "Řekněte ahoj zde",
    navСonnectPtwo: "Pro více informací zde je mé",
    navСonnectR: "Životopis",
    navСonnectName: "Jméno",
    navСonnectTelefon: "Telefon",
    navСonnectMail: "E-mail",
    navСonnectComment: "Komentář",
    navСonnectButtonSend: "Odeslat",
    navPortfolioHtwoV: "Hudební portfolio",
    navPortfolioPoneV:
      "Popis: Responzivní jednostránková webová stránka pro hudebního umělce, prezentující nové singly a připravované album. Web obsahuje integrovaný audio přehrávač.",
    navPortfolioHTMLV: "HTML - Pouze verze pro desktop",
    navPortfolioCSSR: "React – Použito;",
    navPortfolioCSST: "TypeScript – Použito;",
    navPortfolioCSSJ: "JavaScript – Použito;",
    navPortfolioHtwoVQQ: "Aplikace Filmů",
    navPortfolioPoneVQQQ:
      "Popis: React Movies – webová aplikace pro prohlížení informací o filmech.",
    navPortfolioCSSJJ: "Vercel - Použito;",
    navPortfolioHtwoVQQQQ: "Hra na klávesnici — Test",
    navPortfolioHtwoVQQQW: "Hledání filmových karet",
    navPortfolioPoneVQQQQ:
      "Popis: interaktivní webová hra pro procvičování psaní na klávesnici. Otestuj svou rychlost a přesnost psaní s různými úrovněmi obtížnosti a příjemným rozhraním.",
  },
};

// Функція зміни мови
// Функція перекладу
function translateAll() {
  const currentLang = localStorage.getItem("siteLang") || "ua";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[currentLang][key];
    if (translation) {
      el.innerHTML = translation;
    }
  });
}

// Зміна мови
function changeLanguage(lang) {
  if (!translations[lang]) return;
  localStorage.setItem("siteLang", lang);
  translateAll();
}

// Ініціалізація при завантаженні
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("siteLang") || "ua";
  changeLanguage(savedLang);

  // кнопки перемикання мови
  document.querySelectorAll(".language-switcher button").forEach((btn) => {
    btn.addEventListener("click", () => {
      changeLanguage(btn.dataset.lang);
    });
  });

  // рендеримо проекти після завантаження DOM
  renderProjects();
});
