const translations = {
  zh: {
    navServices:"服務項目", navAbout:"關於我們", navContact:"聯絡我們",
    eyebrow:"IDEAS INTO EXPERIENCES",
    heroTitle:"讓每一個好點子，<br>成為值得被看見的現場。",
    heroCopy:"從第二現場轉播到小型展演，整合活動企劃、現場執行與行銷溝通，讓內容觸及更多人。",
    heroCta:"聊聊你的活動", heroNote:"活動行銷・現場製作・轉播整合",
    servicesEyebrow:"WHAT WE DO", servicesTitle:"把想法，變成現場。",
    service1Title:"第二現場轉播", service1Copy:"規劃多點觀賞體驗，整合現場影像、聲音與活動流程，讓更多觀眾同步參與。",
    service2Title:"小型展演企劃", service2Copy:"協助演出、分享會、品牌活動與小型展演，從前期規劃到現場執行。",
    service3Title:"活動行銷整合", service3Copy:"串連活動定位、宣傳內容、合作夥伴與觀眾溝通，打造完整的活動體驗。",
    aboutEyebrow:"ABOUT E.DOT", aboutTitle:"每一個點子，<br>都值得多一點可能。",
    aboutCopy:"E.DOT Entertainment 藝點娛樂相信，好的活動不只發生在舞台上，也發生在觀眾之間。從內容規劃、現場製作到轉播與行銷，我們以靈活的合作方式，為每個企劃找到適合的呈現方式。",
    aboutNote:"依專案需求彈性整合製作、技術與行銷資源。",
    contactEyebrow:"LET'S MAKE IT HAPPEN", contactTitle:"有個點子？<br>一起把它實現。",
    contactCopy:"歡迎洽詢活動合作、轉播需求或行銷企劃。", emailCta:"Email 聯絡", lineCta:"LINE 聯絡 ↗",
    contactReminder:"上線前請將此 Email 與 LINE 連結換成正式聯絡資訊。"
  },
  en: {
    navServices:"Services", navAbout:"About", navContact:"Contact",
    eyebrow:"IDEAS INTO EXPERIENCES",
    heroTitle:"Good ideas deserve<br>a live moment.",
    heroCopy:"From overflow-screening broadcasts to intimate showcases, we bring event planning, on-site production and marketing together to help your ideas reach more people.",
    heroCta:"Tell us about your event", heroNote:"Event marketing · Live production · Broadcast integration",
    servicesEyebrow:"WHAT WE DO", servicesTitle:"Ideas, brought to life.",
    service1Title:"Overflow Broadcasts", service1Copy:"Create multi-location viewing experiences by coordinating live visuals, audio and event flow so more audiences can join in.",
    service2Title:"Intimate Showcases", service2Copy:"Planning and on-site coordination for performances, talks, brand events and small-scale showcases.",
    service3Title:"Integrated Event Marketing", service3Copy:"Connect event positioning, promotional content, partners and audience communication into one cohesive experience.",
    aboutEyebrow:"ABOUT E.DOT", aboutTitle:"Every idea deserves<br>room to grow.",
    aboutCopy:"At E.DOT Entertainment, we believe great events happen not only on stage, but also between people. From content planning and live production to broadcast and marketing, we build a flexible team around each project's needs.",
    aboutNote:"Production, technical and marketing resources tailored to each project.",
    contactEyebrow:"LET'S MAKE IT HAPPEN", contactTitle:"Have an idea?<br>Let's make it happen.",
    contactCopy:"Get in touch about event partnerships, broadcast needs or marketing projects.", emailCta:"Email us", lineCta:"Contact on LINE ↗",
    contactReminder:"Before launch, replace the placeholder email and LINE link with your official contact details."
  }
};
let language = "zh";
document.getElementById("lang-toggle").addEventListener("click", () => {
  language = language === "zh" ? "en" : "zh";
  document.documentElement.lang = language === "zh" ? "zh-Hant" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[language][key]) el.innerHTML = translations[language][key];
  });
  document.getElementById("lang-toggle").textContent = language === "zh" ? "EN" : "中文";
});
document.getElementById("year").textContent = new Date().getFullYear();
