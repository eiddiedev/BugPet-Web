import "./styles.css";

const app = document.querySelector("#app");

const appConfig = {
  productName: "BugPet",
  downloadUrl: "https://github.com/eiddiedev/BugPet/releases/latest",
  releasesUrl: "https://github.com/eiddiedev/BugPet/releases",
  repoUrl: "https://github.com/eiddiedev/BugPet",
  feedbackEmail: "2314869561a@gmail.com",
  developerName: "Eiddie"
};

const translations = {
  en: {
    langLabel: "Language",
    langCurrent: "EN",
    langOther: "中文",
    kicker: "Official download page / native macOS app",
    shortLine: "A quiet desktop pet for coding hours on macOS.",
    heroNote: "Direct distribution. DMG build. No notarization yet.",
    download: "Download for macOS",
    featuresIndex: "01 / Features",
    featuresTitle: "Quiet tools around a living pet.",
    features: [
      {
        title: "Desktop presence",
        body: "A transparent pet stays on the desktop and keeps the workspace alive."
      },
      {
        title: "Focus XP",
        body: "Coding time and focus time turn into quiet growth, not loud gamification."
      },
      {
        title: "Heatmap",
        body: "A contribution-style view shows how steady the recent days have been."
      },
      {
        title: "TODO panel",
        body: "Small tasks stay close to the pet, not buried in another browser tab."
      },
      {
        title: "Pet system",
        body: "More pets, richer interactions, and future forms are already part of the direction."
      }
    ],
    usageIndex: "02 / Usage",
    usageTitle: "Simple actions. No ceremony.",
    usage: [
      "Drag BugPet anywhere on the desktop.",
      "Right-click the pet to open the control panel.",
      "Add coding apps to the whitelist.",
      "Keep focus. XP grows while you work."
    ],
    notesIndex: "03 / Download Notes",
    notesTitle: "Read this before the first launch.",
    notesLead: "This download is meant to be clear, not frictionless.",
    releasePage: "Open release page",
    notes: [
      "BugPet is a native macOS app.",
      "The current build is distributed directly outside the App Store.",
      "There is no Apple Developer certification or notarization yet.",
      "On first launch, macOS may block the app.",
      "If that happens, open System Settings > Privacy & Security and allow it manually."
    ],
    repoIndex: "04 / Repository",
    repoTitle: "Open source. Still growing.",
    repoBodyA: "The code is public. Contributions are welcome.",
    repoBodyB: "Debugging, new pets, animation polish, panel UX, and small fixes all matter.",
    releases: "Releases",
    openGitHub: "Open GitHub",
    devIndex: "05 / Developer Panel",
    devTitle: "Made by Eiddie.",
    devBody: "Use the button below to copy the feedback email.",
    copyEmail: "Copy feedback email",
    emailCopied: "Email copied.",
    copyFailed: "Copy failed",
    githubIssuesOpen: "GitHub issues are also open.",
    iconTag: "BUGCAT / LV.02",
    repoTag: "OPEN SOURCE"
  },
  zh: {
    langLabel: "语言",
    langCurrent: "中",
    langOther: "EN",
    kicker: "官方下载页 / 原生 macOS 应用",
    shortLine: "一只待在桌面上的编码宠物。",
    heroNote: "当前为站外直链分发。可下载 DMG。暂未 notarize。",
    download: "下载 macOS 版",
    featuresIndex: "01 / 功能",
    featuresTitle: "它在桌面上。也陪着专注。",
    features: [
      {
        title: "桌面陪伴",
        body: "透明桌宠常驻桌面，让工作区不那么空。"
      },
      {
        title: "专注成长",
        body: "编码时间和专注时间会慢慢变成成长经验。"
      },
      {
        title: "热力图",
        body: "像 contribution 一样，看最近几天有没有持续投入。"
      },
      {
        title: "TODO 面板",
        body: "小任务就放在宠物旁边，不必再切去别的页面。"
      },
      {
        title: "宠物系统",
        body: "更多宠物、更多形态和互动，还会继续往里长。"
      }
    ],
    usageIndex: "02 / 使用说明",
    usageTitle: "用法很简单。",
    usage: [
      "拖动 BugPet 到桌面任意位置。",
      "右键宠物，打开控制面板。",
      "把编码应用加入白名单。",
      "保持专注。经验会慢慢增长。"
    ],
    notesIndex: "03 / 下载说明",
    notesTitle: "首次打开前，先看这里。",
    notesLead: "先说清楚，再下载。",
    releasePage: "打开发布页",
    notes: [
      "BugPet 是原生 macOS 应用。",
      "当前版本通过站外直接分发，不在 App Store 内。",
      "暂时还没有 Apple Developer 认证或 notarization。",
      "第一次打开时，macOS 可能会拦截。",
      "如果被拦截，请到 系统设置 > 隐私与安全性 里手动允许。"
    ],
    repoIndex: "04 / 仓库",
    repoTitle: "开源。持续生长中。",
    repoBodyA: "代码公开。欢迎一起改。",
    repoBodyB: "调试、新宠物、动画细节、面板体验，都可以继续补。",
    releases: "发布记录",
    openGitHub: "打开 GitHub",
    devIndex: "05 / 开发者面板",
    devTitle: "开发者 / Eiddie",
    devBody: "下面可以复制反馈邮箱。",
    copyEmail: "复制反馈邮箱",
    emailCopied: "邮箱已复制。",
    copyFailed: "复制失败",
    githubIssuesOpen: "也可以直接去 GitHub 提 issue。"
  }
};

const initialLang =
  localStorage.getItem("bugpet-lang") ||
  (navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");

let currentLang = initialLang in translations ? initialLang : "en";

function renderApp(lang) {
  const t = translations[lang];

  app.innerHTML = `
    <main class="page page--${lang}">
      <section class="hero">
        <div class="hero-pixels hero-pixels--left" aria-hidden="true"></div>
        <div class="hero-pixels hero-pixels--right" aria-hidden="true"></div>
        <div class="hero-inner">
          <div class="hero-toolbar" data-reveal>
            <p class="hero-kicker">${t.kicker}</p>
            <div class="language-switch" aria-label="${t.langLabel}">
              <button type="button" class="lang-button ${lang === "en" ? "is-active" : ""}" data-lang="en">EN</button>
              <button type="button" class="lang-button ${lang === "zh" ? "is-active" : ""}" data-lang="zh">中</button>
            </div>
          </div>

          <div class="hero-title-wrap" data-reveal>
            <div class="hero-visual">
              <div class="hero-icon-shell">
                <div class="hero-icon">
                  <img src="/bugcat-level2.png" alt="BugCat level 2" class="hero-logo" />
                </div>
              </div>
            </div>

            <div class="hero-title-block">
              <h1 class="hero-title">
                <span class="hero-title__bug">Bug</span><span class="hero-title__pet">Pet</span>
              </h1>
              <p class="hero-copy">${t.shortLine}</p>
            </div>
          </div>

          <a class="download-button" href="${appConfig.downloadUrl}" target="_blank" rel="noreferrer" data-reveal>
            ${t.download}
          </a>
          <p class="hero-note" data-reveal>${t.heroNote}</p>
        </div>
      </section>

      <section class="section" id="features">
        <div class="section-shell">
          <div class="section-heading" data-reveal>
            <p class="section-index">${t.featuresIndex}</p>
            <h2>${t.featuresTitle}</h2>
          </div>
          <div class="section-body feature-list">
            ${t.features
              .map(
                (feature) => `
                  <article class="list-item" data-reveal>
                    <h3>${feature.title}</h3>
                    <p>${feature.body}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section" id="usage">
        <div class="section-shell">
          <div class="section-heading" data-reveal>
            <p class="section-index">${t.usageIndex}</p>
            <h2>${t.usageTitle}</h2>
          </div>
          <div class="section-body usage-list">
            ${t.usage
              .map(
                (step, index) => `
                  <div class="usage-step" data-reveal>
                    <span class="usage-step__index">0${index + 1}</span>
                    <p>${step}</p>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section" id="download-notes">
        <div class="section-shell section-shell--download">
          <div class="section-heading" data-reveal>
            <p class="section-index">${t.notesIndex}</p>
            <h2>${t.notesTitle}</h2>
          </div>
          <div class="section-body download-layout">
            <div class="download-summary" data-reveal>
              <p>${t.notesLead}</p>
              <a class="text-link" href="${appConfig.releasesUrl}" target="_blank" rel="noreferrer">${t.releasePage}</a>
            </div>
            <div class="download-list">
              ${t.notes
                .map(
                  (note) => `
                    <div class="list-item list-item--note" data-reveal>
                      <p>${note}</p>
                    </div>
                  `
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="repository">
        <div class="section-shell">
          <div class="section-heading" data-reveal>
            <p class="section-index">${t.repoIndex}</p>
            <h2>${t.repoTitle}</h2>
          </div>
          <div class="section-body repo-layout">
            <div class="repo-copy" data-reveal>
              <p>${t.repoBodyA}</p>
              <p>${t.repoBodyB}</p>
            </div>
            <div class="repo-actions" data-reveal>
              <a class="text-link text-link--strong" href="${appConfig.repoUrl}" target="_blank" rel="noreferrer">
                github.com/eiddiedev/BugPet
              </a>
              <a class="ghost-button" href="${appConfig.releasesUrl}" target="_blank" rel="noreferrer">${t.releases}</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section section--last" id="developer-panel">
        <div class="section-shell">
          <div class="section-heading" data-reveal>
            <p class="section-index">${t.devIndex}</p>
            <h2>${t.devTitle}</h2>
          </div>
          <div class="section-body developer-layout" data-reveal>
            <p>${t.devBody}</p>
            <div class="developer-actions">
              <button type="button" class="ghost-button" id="copy-email">${t.copyEmail}</button>
              <a class="ghost-button" href="${appConfig.repoUrl}" target="_blank" rel="noreferrer">${t.openGitHub}</a>
            </div>
            <p class="developer-status" id="copy-status">${t.githubIssuesOpen}</p>
          </div>
        </div>
      </section>
    </main>
  `;

  bindInteractions();
}

function bindInteractions() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  document.querySelectorAll("[data-reveal]").forEach((element, index) => {
    element.style.setProperty("--delay", `${index * 45}ms`);
    revealObserver.observe(element);
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLang = button.getAttribute("data-lang");

      if (nextLang && nextLang !== currentLang) {
        currentLang = nextLang;
        localStorage.setItem("bugpet-lang", currentLang);
        renderApp(currentLang);
      }
    });
  });

  const copyButton = document.querySelector("#copy-email");
  const copyStatus = document.querySelector("#copy-status");
  const t = translations[currentLang];

  copyButton?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(appConfig.feedbackEmail);
      copyStatus.textContent = t.emailCopied;
      copyButton.textContent = t.emailCopied;
    } catch {
      copyStatus.textContent = appConfig.feedbackEmail;
      copyButton.textContent = t.copyFailed;
    }

    window.setTimeout(() => {
      copyStatus.textContent = t.githubIssuesOpen;
      copyButton.textContent = t.copyEmail;
    }, 1800);
  });
}

renderApp(currentLang);
