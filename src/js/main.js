import "./swiper";
import "../style/style.scss";
import "./back-color";

document.addEventListener("click", documentActions);

function documentActions(e) {
   const targetElement = e.target;

   if (targetElement.closest(".icon-menu")) {
      document.documentElement.classList.toggle("menu-open");
   }
}

if (document.querySelectorAll("[data-tr]").length) {
   const translations = {
      en: {
         a1: "photo",
         a2: "anonces",
         a3: "restaurants",
         a4: "contacts",

         phoneNumber: "phone number",
         whatsapp: "via whatsapp",
         email: "our email",
         instagram: "our instagram",

         photoReportTitle: "order a photo",
         vacancyTitle: "do you want to get a job with us",
         vacancyBtn: "job vacancies",

         headliner1: `Headliner of the evening the best DJ in France, on the bill who has two full-length records, his own party in Paris and the Radio Show - DAVID VENDETTA`,
         headliner2: `Headliner of the evening the best DJ in France, on the bill who has two full-length records, his own party in Paris and the Radio Show - DAVID VENDETTA`,
         headliner3: `Headliner of the evening the best DJ in France, on the bill who has two full-length records, his own party in Paris and the Radio Show - DAVID VENDETTA`,
         headliner4: `Headliner of the evening the best DJ in France, on the bill who has two full-length records, his own party in Paris and the Radio Show - DAVID VENDETTA`,
         headliner5: `Headliner of the evening the best DJ in France, on the bill who has two full-length records, his own party in Paris and the Radio Show - DAVID VENDETTA`,
         headliner6: `Headliner of the evening the best DJ in France, on the bill who has two full-length records, his own party in Paris and the Radio Show - DAVID VENDETTA`,

         anonceDate1: `August 15th <br> at @6/45 <br> Gathering of guests – 23:00`,
         anonceDate2: `August 15th <br> at @6/45 <br> Gathering of guests – 23:00`,
         anonceDate3: `August 15th <br> at @6/45 <br> Gathering of guests – 23:00`,
         anonceDate4: `August 15th <br> at @6/45 <br> Gathering of guests – 23:00`,
         anonceDate5: `August 15th <br> at @6/45 <br> Gathering of guests – 23:00`,
         anonceDate6: `August 15th <br> at @6/45 <br> Gathering of guests – 23:00`,

         anonceAddress: `Dostyrk 123 <br> Reserve: <a href="tel:81231231234"> 8-123-123-1234</a>`,

         search: "Search",

         infoBtn: "info",

         allWorksBtn: "see all photos",

         vacanciesText: "Please send your resume and your Portfolio to our email address:",

         vacancy1: "An SMM manager is required!",
         vacancy2: "An SMM manager is required!",
         vacancy3: "An SMM manager is required!",

         datetime1: `August <br> <span>15th</span>`,
         datetime2: `August <br> <span>15th</span>`,
         datetime3: `August <br> <span>15th</span>`,
         datetime4: `August <br> <span>15th</span>`,
         datetime5: `August <br> <span>15th</span>`,
         datetime6: `August <br> <span>15th</span>`,
      },
      ru: {
         a1: "фото",
         a2: "анонсы",
         a3: "заведения",
         a4: "контакты",

         phoneNumber: "номер телефона",
         whatsapp: "ЧЕРЕЗ WHAT’S APP",
         email: "НАШ E-MAIL",
         instagram: "НАШ INSTAGRAM",

         photoReportTitle: "заказать фотоотчет",
         vacancyTitle: "хотите устроится к нам на работу",
         vacancyBtn: "вакансии",

         headliner1: `Headliner вечера лучший ди-джей Франции, на счету которого две полноформатные пластинки, собственная вечеринка в Париже и радиошоу - DAVID VENDETTA`,
         headliner2: `Headliner вечера лучший ди-джей Франции, на счету которого две полноформатные пластинки, собственная вечеринка в Париже и радиошоу - DAVID VENDETTA`,
         headliner3: `Headliner вечера лучший ди-джей Франции, на счету которого две полноформатные пластинки, собственная вечеринка в Париже и радиошоу - DAVID VENDETTA`,
         headliner4: `Headliner вечера лучший ди-джей Франции, на счету которого две полноформатные пластинки, собственная вечеринка в Париже и радиошоу - DAVID VENDETTA`,
         headliner5: `Headliner вечера лучший ди-джей Франции, на счету которого две полноформатные пластинки, собственная вечеринка в Париже и радиошоу - DAVID VENDETTA`,
         headliner6: `Headliner вечера лучший ди-джей Франции, на счету которого две полноформатные пластинки, собственная вечеринка в Париже и радиошоу - DAVID VENDETTA`,

         anonceDate1: `15 августа <br> в @6/45 <br> Сбор гостей – 23:00`,
         anonceDate2: `15 августа <br> в @6/45 <br> Сбор гостей – 23:00`,
         anonceDate3: `15 августа <br> в @6/45 <br> Сбор гостей – 23:00`,
         anonceDate4: `15 августа <br> в @6/45 <br> Сбор гостей – 23:00`,
         anonceDate5: `15 августа <br> в @6/45 <br> Сбор гостей – 23:00`,
         anonceDate6: `15 августа <br> в @6/45 <br> Сбор гостей – 23:00`,

         anonceAddress: `Достык 123 <br> Забронировать: <a href="tel:81231231234"> 8-123-123-1234</a>`,

         search: "Поиск",

         infoBtn: "инфо",

         allWorksBtn: "посмотреть все фотографии",

         vacanciesText: "Резюме и Ваше Портфолио просим отправлять на нашу электронную почту:",

         vacancy1: "Требуется SMM менеджер!",
         vacancy2: "Требуется SMM менеджер!",
         vacancy3: "Требуется SMM менеджер!",

         datetime1: `<span>15</span> <br />августа`,
         datetime2: `<span>15</span> <br />августа`,
         datetime3: `<span>15</span> <br />августа`,
         datetime4: `<span>15</span> <br />августа`,
         datetime5: `<span>15</span> <br />августа`,
         datetime6: `<span>15</span> <br />августа`,
      },
      kz: {
         a1: "фото",
         a2: "хабарлама",
         a3: "мейрамхана",
         a4: "байланыс",

         phoneNumber: "телефон нөмірі",
         whatsapp: "WHATSAPP АРҚЫЛЫ",
         email: "БІЗДІҢ E-MAIL",
         instagram: "БІЗДІҢ INSTAGRAM",

         photoReportTitle: "Фото тапсырыс беріңіз",
         vacancyTitle: "бізге жұмысқа орналасқыңыз келе ме",
         vacancyBtn: "бос жұмыс орындары",

         headliner1: `Headliner түндері Францияның ең жақсы диджейі, оның екі толық метражды жазбасы, Париждегі Жеке кеші және радио шоуы - Дэвид Вендетта`,
         headliner2: `Headliner түндері Францияның ең жақсы диджейі, оның екі толық метражды жазбасы, Париждегі Жеке кеші және радио шоуы - Дэвид Вендетта`,
         headliner3: `Headliner түндері Францияның ең жақсы диджейі, оның екі толық метражды жазбасы, Париждегі Жеке кеші және радио шоуы - Дэвид Вендетта`,
         headliner4: `Headliner түндері Францияның ең жақсы диджейі, оның екі толық метражды жазбасы, Париждегі Жеке кеші және радио шоуы - Дэвид Вендетта`,
         headliner5: `Headliner түндері Францияның ең жақсы диджейі, оның екі толық метражды жазбасы, Париждегі Жеке кеші және радио шоуы - Дэвид Вендетта`,
         headliner6: `Headliner түндері Францияның ең жақсы диджейі, оның екі толық метражды жазбасы, Париждегі Жеке кеші және радио шоуы - Дэвид Вендетта`,

         anonceDate1: `15 тамыз <br> @6/45 <br> Қонақтарды жинау – 23:00`,
         anonceDate2: `15 тамыз <br> @6/45 <br> Қонақтарды жинау – 23:00`,
         anonceDate3: `15 тамыз <br> @6/45 <br> Қонақтарды жинау – 23:00`,
         anonceDate4: `15 тамыз <br> @6/45 <br> Қонақтарды жинау – 23:00`,
         anonceDate5: `15 тамыз <br> @6/45 <br> Қонақтарды жинау – 23:00`,
         anonceDate6: `15 тамыз <br> @6/45 <br> Қонақтарды жинау – 23:00`,

         anonceAddress: `Достық 123 <br> Брондау: <a href="tel:81231231234"> 8-123-123-1234</a>`,

         search: "Іздеу",

         infoBtn: "инфо",

         allWorksBtn: "барлық фотосуреттерді қарау",

         vacanciesText: "Түйіндеме мен сіздің Портфолиоңызды біздің электрондық поштаға жіберуіңізді сұраймыз:",

         vacancy1: "SMM менеджері қажет!",
         vacancy2: "SMM менеджері қажет!",
         vacancy3: "SMM менеджері қажет!",

         datetime1: `<span>15</span> <br />тамыз`,
         datetime2: `<span>15</span> <br />тамыз`,
         datetime3: `<span>15</span> <br />тамыз`,
         datetime4: `<span>15</span> <br />тамыз`,
         datetime5: `<span>15</span> <br />тамыз`,
         datetime6: `<span>15</span> <br />тамыз`,
      },
   };

   const langSelectors = document.querySelectorAll("[data-lang]");

   const menuLinks1 = document.querySelectorAll("[data-menu-link-1]");
   const menuLinks2 = document.querySelectorAll("[data-menu-link-2]");
   const menuLinks3 = document.querySelectorAll("[data-menu-link-3]");
   const menuLinks4 = document.querySelectorAll("[data-menu-link-4]");

   const phoneNumber = document.querySelector("[data-phone-number]");
   const whatsapp = document.querySelector("[data-whatsapp]");
   const email = document.querySelector("[data-email]");
   const instagram = document.querySelector("[data-instagram]");

   const photoReportTitle = document.querySelector("[data-photo-report-title]");
   const vacancyTitle = document.querySelector("[data-vacancy-title]");
   const vacancyBtns = document.querySelectorAll("[data-vacancy-btn]");

   const headliner1 = document.querySelector("[data-headliner-1]");
   const headliner2 = document.querySelector("[data-headliner-2]");
   const headliner3 = document.querySelector("[data-headliner-3]");
   const headliner4 = document.querySelector("[data-headliner-4]");
   const headliner5 = document.querySelector("[data-headliner-5]");
   const headliner6 = document.querySelector("[data-headliner-6]");

   const anonceDate1 = document.querySelector("[data-date-1]");
   const anonceDate2 = document.querySelector("[data-date-2]");
   const anonceDate3 = document.querySelector("[data-date-3]");
   const anonceDate4 = document.querySelector("[data-date-4]");
   const anonceDate5 = document.querySelector("[data-date-5]");
   const anonceDate6 = document.querySelector("[data-date-6]");

   const addresses = document.querySelectorAll("[data-address]");

   const searchInput = document.querySelector("[data-search]");

   const infoBtn = document.querySelector("[data-info]");

   const allWorksBtn = document.querySelector("[data-works]");

   const vacanciesText = document.querySelector("[data-vacancies-text]");

   const vacancy1 = document.querySelector("[data-vacancy-1]");
   const vacancy2 = document.querySelector("[data-vacancy-2]");
   const vacancy3 = document.querySelector("[data-vacancy-3]");

   const datetime1 = document.querySelector("[data-datetime-1]");
   const datetime2 = document.querySelector("[data-datetime-2]");
   const datetime3 = document.querySelector("[data-datetime-3]");
   const datetime4 = document.querySelector("[data-datetime-4]");
   const datetime5 = document.querySelector("[data-datetime-5]");
   const datetime6 = document.querySelector("[data-datetime-6]");

   langSelectors.forEach((langSelector) => {
      langSelector.addEventListener("click", (e) => {
         setLanguage(e.target.innerText);
         if (e.target.innerText === "ENGLISH") {
            e.target.innerText = "ҚАЗАҚША";
         } else if (e.target.innerText === "ҚАЗАҚША") {
            e.target.innerText = "РУССКИЙ";
         } else if (e.target.innerText === "РУССКИЙ") {
            e.target.innerText = "ENGLISH";
         }
      });
   });

   function setLanguage(language) {
      if (language === "ENGLISH") {
         menuLinks1.forEach((menuLink1) => (menuLink1.innerText = translations.en.a1));
         menuLinks2.forEach((menuLink2) => (menuLink2.innerText = translations.en.a2));
         menuLinks3.forEach((menuLink3) => (menuLink3.innerText = translations.en.a3));
         menuLinks4.forEach((menuLink4) => (menuLink4.innerText = translations.en.a4));

         searchInput.placeholder = translations.en.search;

         if (phoneNumber) {
            phoneNumber.innerText = translations.en.phoneNumber;
         }
         if (whatsapp) {
            whatsapp.innerText = translations.en.whatsapp;
         }
         if (email) {
            email.innerText = translations.en.email;
         }
         if (instagram) {
            instagram.innerText = translations.en.instagram;
         }

         if (photoReportTitle) {
            photoReportTitle.innerText = translations.en.photoReportTitle;
         }
         if (vacancyTitle) {
            vacancyTitle.innerHTML = translations.en.vacancyTitle;
         }
         if (vacancyBtns.length) {
            // vacancyBtn.innerHTML = translations.en.vacancyBtn;
            vacancyBtns.forEach((btn) => (btn.innerText = translations.en.vacancyBtn));
         }

         if (headliner1) {
            headliner1.innerHTML = translations.en.headliner1;
         }
         if (headliner2) {
            headliner2.innerHTML = translations.en.headliner2;
         }
         if (headliner3) {
            headliner3.innerHTML = translations.en.headliner3;
         }
         if (headliner4) {
            headliner4.innerHTML = translations.en.headliner4;
         }
         if (headliner5) {
            headliner5.innerHTML = translations.en.headliner5;
         }
         if (headliner6) {
            headliner6.innerHTML = translations.en.headliner6;
         }

         if (anonceDate1) {
            anonceDate1.innerHTML = translations.en.anonceDate1;
         }
         if (anonceDate2) {
            anonceDate2.innerHTML = translations.en.anonceDate2;
         }
         if (anonceDate2) {
            anonceDate3.innerHTML = translations.en.anonceDate3;
         }
         if (anonceDate4) {
            anonceDate4.innerHTML = translations.en.anonceDate4;
         }
         if (anonceDate5) {
            anonceDate5.innerHTML = translations.en.anonceDate5;
         }
         if (anonceDate6) {
            anonceDate6.innerHTML = translations.en.anonceDate6;
         }

         if (addresses.length) {
            addresses.forEach((address) => (address.innerHTML = translations.en.anonceAddress));
         }

         if (infoBtn) {
            infoBtn.innerText = translations.en.infoBtn;
         }

         if (allWorksBtn) {
            allWorksBtn.innerText = translations.en.allWorksBtn;
         }

         if (vacanciesText) {
            vacanciesText.innerText = translations.en.vacanciesText;
         }

         if (vacancy1) {
            vacancy1.innerText = translations.en.vacancy1;
         }
         if (vacancy2) {
            vacancy2.innerText = translations.en.vacancy2;
         }
         if (vacancy3) {
            vacancy3.innerText = translations.en.vacancy3;
         }

         if (datetime1) {
            datetime1.innerHTML = translations.en.datetime1;
         }
         if (datetime2) {
            datetime2.innerHTML = translations.en.datetime2;
         }
         if (datetime3) {
            datetime3.innerHTML = translations.en.datetime3;
         }
         if (datetime4) {
            datetime4.innerHTML = translations.en.datetime4;
         }
         if (datetime5) {
            datetime5.innerHTML = translations.en.datetime5;
         }
         if (datetime6) {
            datetime6.innerHTML = translations.en.datetime6;
         }
      }
      if (language === "РУССКИЙ") {
         menuLinks1.forEach((menuLink1) => (menuLink1.innerText = translations.ru.a1));
         menuLinks2.forEach((menuLink2) => (menuLink2.innerText = translations.ru.a2));
         menuLinks3.forEach((menuLink3) => (menuLink3.innerText = translations.ru.a3));
         menuLinks4.forEach((menuLink4) => (menuLink4.innerText = translations.ru.a4));

         searchInput.placeholder = translations.ru.search;

         if (phoneNumber) {
            phoneNumber.innerText = translations.ru.phoneNumber;
         }
         if (whatsapp) {
            whatsapp.innerText = translations.ru.whatsapp;
         }
         if (email) {
            email.innerText = translations.ru.email;
         }
         if (instagram) {
            instagram.innerText = translations.ru.instagram;
         }

         if (photoReportTitle) {
            photoReportTitle.innerText = translations.ru.photoReportTitle;
         }
         if (vacancyTitle) {
            vacancyTitle.innerHTML = translations.ru.vacancyTitle;
         }
         if (vacancyBtns.length) {
            // vacancyBtn.innerHTML = translations.ru.vacancyBtn;
            vacancyBtns.forEach((btn) => (btn.innerText = translations.ru.vacancyBtn));
         }

         if (headliner1) {
            headliner1.innerHTML = translations.ru.headliner1;
         }
         if (headliner2) {
            headliner2.innerHTML = translations.ru.headliner2;
         }
         if (headliner3) {
            headliner3.innerHTML = translations.ru.headliner3;
         }
         if (headliner4) {
            headliner4.innerHTML = translations.ru.headliner4;
         }
         if (headliner5) {
            headliner5.innerHTML = translations.ru.headliner5;
         }
         if (headliner6) {
            headliner6.innerHTML = translations.ru.headliner6;
         }

         if (anonceDate1) {
            anonceDate1.innerHTML = translations.ru.anonceDate1;
         }
         if (anonceDate2) {
            anonceDate2.innerHTML = translations.ru.anonceDate2;
         }
         if (anonceDate2) {
            anonceDate3.innerHTML = translations.ru.anonceDate3;
         }
         if (anonceDate4) {
            anonceDate4.innerHTML = translations.ru.anonceDate4;
         }
         if (anonceDate5) {
            anonceDate5.innerHTML = translations.ru.anonceDate5;
         }
         if (anonceDate6) {
            anonceDate6.innerHTML = translations.ru.anonceDate6;
         }

         if (addresses.length) {
            addresses.forEach((address) => (address.innerHTML = translations.ru.anonceAddress));
         }

         if (infoBtn) {
            infoBtn.innerText = translations.ru.infoBtn;
         }

         if (allWorksBtn) {
            allWorksBtn.innerText = translations.ru.allWorksBtn;
         }

         if (vacanciesText) {
            vacanciesText.innerText = translations.ru.vacanciesText;
         }

         if (vacancy1) {
            vacancy1.innerText = translations.ru.vacancy1;
         }
         if (vacancy2) {
            vacancy2.innerText = translations.ru.vacancy2;
         }
         if (vacancy3) {
            vacancy3.innerText = translations.ru.vacancy3;
         }

         if (datetime1) {
            datetime1.innerHTML = translations.ru.datetime1;
         }
         if (datetime2) {
            datetime2.innerHTML = translations.ru.datetime2;
         }
         if (datetime3) {
            datetime3.innerHTML = translations.ru.datetime3;
         }
         if (datetime4) {
            datetime4.innerHTML = translations.ru.datetime4;
         }
         if (datetime5) {
            datetime5.innerHTML = translations.ru.datetime5;
         }
         if (datetime6) {
            datetime6.innerHTML = translations.ru.datetime6;
         }
      }
      if (language === "ҚАЗАҚША") {
         menuLinks1.forEach((menuLink1) => (menuLink1.innerText = translations.kz.a1));
         menuLinks2.forEach((menuLink2) => (menuLink2.innerText = translations.kz.a2));
         menuLinks3.forEach((menuLink3) => (menuLink3.innerText = translations.kz.a3));
         menuLinks4.forEach((menuLink4) => (menuLink4.innerText = translations.kz.a4));

         searchInput.placeholder = translations.kz.search;

         if (phoneNumber) {
            phoneNumber.innerText = translations.kz.phoneNumber;
         }
         if (whatsapp) {
            whatsapp.innerText = translations.kz.whatsapp;
         }
         if (email) {
            email.innerText = translations.kz.email;
         }
         if (instagram) {
            instagram.innerText = translations.kz.instagram;
         }

         if (photoReportTitle) {
            photoReportTitle.innerText = translations.kz.photoReportTitle;
         }
         if (vacancyTitle) {
            vacancyTitle.innerHTML = translations.kz.vacancyTitle;
         }
         if (vacancyBtns.length) {
            // vacancyBtn.innerHTML = translations.ru.vacancyBtn;
            vacancyBtns.forEach((btn) => (btn.innerText = translations.kz.vacancyBtn));
         }

         if (headliner1) {
            headliner1.innerHTML = translations.kz.headliner1;
         }
         if (headliner2) {
            headliner2.innerHTML = translations.kz.headliner2;
         }
         if (headliner3) {
            headliner3.innerHTML = translations.kz.headliner3;
         }
         if (headliner4) {
            headliner4.innerHTML = translations.kz.headliner4;
         }
         if (headliner5) {
            headliner5.innerHTML = translations.kz.headliner5;
         }
         if (headliner6) {
            headliner6.innerHTML = translations.kz.headliner6;
         }

         if (anonceDate1) {
            anonceDate1.innerHTML = translations.kz.anonceDate1;
         }
         if (anonceDate2) {
            anonceDate2.innerHTML = translations.kz.anonceDate2;
         }
         if (anonceDate2) {
            anonceDate3.innerHTML = translations.kz.anonceDate3;
         }
         if (anonceDate4) {
            anonceDate4.innerHTML = translations.kz.anonceDate4;
         }
         if (anonceDate5) {
            anonceDate5.innerHTML = translations.kz.anonceDate5;
         }
         if (anonceDate6) {
            anonceDate6.innerHTML = translations.kz.anonceDate6;
         }

         if (addresses.length) {
            addresses.forEach((address) => (address.innerHTML = translations.kz.anonceAddress));
         }

         if (infoBtn) {
            infoBtn.innerText = translations.kz.infoBtn;
         }

         if (allWorksBtn) {
            allWorksBtn.innerText = translations.kz.allWorksBtn;
         }

         if (vacanciesText) {
            vacanciesText.innerText = translations.kz.vacanciesText;
         }

         if (vacancy1) {
            vacancy1.innerText = translations.kz.vacancy1;
         }
         if (vacancy2) {
            vacancy2.innerText = translations.kz.vacancy2;
         }
         if (vacancy3) {
            vacancy3.innerText = translations.kz.vacancy3;
         }

         if (datetime1) {
            datetime1.innerHTML = translations.kz.datetime1;
         }
         if (datetime2) {
            datetime2.innerHTML = translations.kz.datetime2;
         }
         if (datetime3) {
            datetime3.innerHTML = translations.kz.datetime3;
         }
         if (datetime4) {
            datetime4.innerHTML = translations.kz.datetime4;
         }
         if (datetime5) {
            datetime5.innerHTML = translations.kz.datetime5;
         }
         if (datetime6) {
            datetime6.innerHTML = translations.kz.datetime6;
         }
      }
   }
}
