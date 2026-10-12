(() => {
  const dict = {
    zh: {
      brand: "轻传",
      "nav.how": "怎么用",
      "nav.features": "特点",
      "nav.screens": "界面",
      "nav.download": "下载",
      "nav.contact": "联系",
      "hero.brand": "轻传",
      "hero.aka": "QuickToss",
      "hero.title": "同一 Wi‑Fi，文件直接过去",
      "hero.lead": "安卓、iPhone、iPad、Mac 互相传。无账号，不经过云，无广告。",
      "hero.cta": "立即下载",
      "hero.secondary": "看看怎么用",
      "features.title": "只做一件事：把文件传过去",
      "features.lead": "局域网直连，配对一次，以后点一下就发。",
      "features.f1.t": "不经过云",
      "features.f1.d": "文件只在两台设备之间走，不上传到任何服务器。",
      "features.f2.t": "无账号无广告",
      "features.f2.d": "打开就能用。没有注册，没有追踪，没有广告。",
      "features.f3.t": "配对才可发",
      "features.f3.d": "对方屏幕上的 6 位码，还要对方点「允许」。只知道码发不过去。",
      "features.f4.t": "四端互通",
      "features.f4.d": "安卓、iPhone、iPad、Mac，同一 Wi‑Fi 就能互相找、互相传。",
      "how.title": "三步开始传",
      "how.lead": "两台设备都装上，连同一个 Wi‑Fi。",
      "how.s1.t": "打开应用",
      "how.s1.d": "每台设备会显示自己的 6 位配对码。",
      "how.s2.t": "第一次配对",
      "how.s2.d": "填对方的码，对方点「允许」。以后不用再填。",
      "how.s3.t": "选文件发送",
      "how.s3.d": "照片、视频或任意文件，点附近设备即可发出。",
      "screens.title": "打开就能用",
      "screens.lead": "附近设备、配对、发送、记录，一眼看明白。",
      "screens.c1": "主页 · 附近设备",
      "screens.c2": "配对 · 对方确认",
      "screens.c3": "传输进度",
      "screens.c4": "历史记录",
      "mock.home": "轻传",
      "mock.code": "本机配对码",
      "mock.nearby": "附近设备",
      "mock.send": "发送",
      "mock.pair": "配对请求",
      "mock.pair.from": "「Mac · 书房」想发给你文件",
      "mock.pair.hint": "确认是你认识的设备再允许",
      "mock.deny": "拒绝",
      "mock.allow": "允许",
      "mock.sending": "发送中",
      "mock.to": "发往 Mac · 书房",
      "mock.history": "传输记录",
      "dl.title": "下载",
      "dl.lead": "选你的平台。商店上架后链接会更新到这里。",
      "dl.ios": "iPhone / iPad",
      "dl.mac": "Mac",
      "dl.android": "Android",
      "dl.apk": "Android APK",
      "dl.apk.sub": "官方安装包",
      "dl.soon": "即将上架",
      "dl.apk.soon": "准备中",
      "contact.kicker": "联系我们",
      "contact.title": "有问题随时找我们",
      "contact.lead": "产品咨询、反馈或合作，发邮件即可。",
      "contact.support": "支持与反馈",
      "contact.support.d": "使用问题、Bug、功能建议，发邮件即可。",
      "contact.pub": "开发者",
      "contact.pub.d": "LogStudio Dev\n轻传 / QuickToss · 局域网文件互传",
      "foot.privacy": "隐私政策",
      "foot.terms": "使用协议",
      "foot.contact": "联系我们",
    },
    en: {
      brand: "QuickToss",
      "nav.how": "How it works",
      "nav.features": "Features",
      "nav.screens": "Screens",
      "nav.download": "Download",
      "nav.contact": "Contact",
      "hero.brand": "QuickToss",
      "hero.aka": "轻传",
      "hero.title": "Same Wi‑Fi. Files go straight across.",
      "hero.lead": "Android, iPhone, iPad, and Mac. No account, no cloud, no ads.",
      "hero.cta": "Download",
      "hero.secondary": "See how it works",
      "features.title": "One job: get the file there",
      "features.lead": "Direct on your LAN. Pair once, then send with a tap.",
      "features.f1.t": "No cloud",
      "features.f1.d": "Files travel only between your devices—never uploaded to a server.",
      "features.f2.t": "No account, no ads",
      "features.f2.d": "Open and use. No sign-up, no tracking, no ads.",
      "features.f3.t": "Consent to send",
      "features.f3.d": "Enter the 6-digit code on their screen, and they must tap Allow. Code alone isn’t enough.",
      "features.f4.t": "Four platforms",
      "features.f4.d": "Android, iPhone, iPad, and Mac find each other on the same Wi‑Fi.",
      "how.title": "Up in three steps",
      "how.lead": "Install on both devices. Join the same Wi‑Fi.",
      "how.s1.t": "Open the app",
      "how.s1.d": "Each device shows its own 6-digit pair code.",
      "how.s2.t": "Pair once",
      "how.s2.d": "Enter their code; they tap Allow. You won’t need to again.",
      "how.s3.t": "Pick and send",
      "how.s3.d": "Photos, videos, or any files—tap a nearby device to send.",
      "screens.title": "Open and go",
      "screens.lead": "Nearby devices, pairing, send, and history—at a glance.",
      "screens.c1": "Home · Nearby",
      "screens.c2": "Pair · Consent",
      "screens.c3": "Transfer progress",
      "screens.c4": "History",
      "mock.home": "QuickToss",
      "mock.code": "Your pair code",
      "mock.nearby": "Nearby devices",
      "mock.send": "Send",
      "mock.pair": "Pair request",
      "mock.pair.from": "“Mac · Study” wants to send you files",
      "mock.pair.hint": "Allow only if you know this device",
      "mock.deny": "Deny",
      "mock.allow": "Allow",
      "mock.sending": "Sending",
      "mock.to": "To Mac · Study",
      "mock.history": "History",
      "dl.title": "Download",
      "dl.lead": "Pick your platform. Store links will appear here when live.",
      "dl.ios": "iPhone / iPad",
      "dl.mac": "Mac",
      "dl.android": "Android",
      "dl.apk": "Android APK",
      "dl.apk.sub": "Official package",
      "dl.soon": "Coming soon",
      "dl.apk.soon": "Preparing",
      "contact.kicker": "Contact",
      "contact.title": "We’re here when you need us",
      "contact.lead": "Product questions, feedback, or partnership—email us.",
      "contact.support": "Support & feedback",
      "contact.support.d": "Bugs, questions, and feature ideas—just email us.",
      "contact.pub": "Publisher",
      "contact.pub.d": "LogStudio Dev\nQuickToss / 轻传 · LAN file transfer",
      "foot.privacy": "Privacy Policy",
      "foot.terms": "Terms of Use",
      "foot.contact": "Contact",
    },
  };

  const apply = (lang) => {
    const pack = dict[lang] || dict.zh;
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (pack[key] == null) return;
      if (key === "contact.pub.d") {
        el.innerHTML = pack[key].replace(/\n/g, "<br />");
      } else {
        el.textContent = pack[key];
      }
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });
    document.title = lang === "en" ? "QuickToss · 轻传" : "轻传 · QuickToss";
    localStorage.setItem("qt-lang", lang);
  };

  const saved = localStorage.getItem("qt-lang");
  const preferEn =
    saved === "en" ||
    (!saved && typeof navigator !== "undefined" && /^en\b/i.test(navigator.language));
  apply(preferEn ? "en" : "zh");

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => apply(btn.dataset.lang));
  });

  const top = document.querySelector(".top");
  if (top) {
    const onScroll = () => {
      top.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Screenshot carousel
  const root = document.querySelector("[data-carousel]");
  if (root) {
    const track = root.querySelector("[data-carousel-track]");
    const dotsWrap = root.querySelector("[data-carousel-dots]");
    const slides = [...track.querySelectorAll(".phone-frame")];
    const prev = root.querySelector("[data-carousel-prev]");
    const next = root.querySelector("[data-carousel-next]");

    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Slide ${i + 1}`);
      if (i === 0) dot.classList.add("is-active");
      dot.addEventListener("click", () => {
        slides[i].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      });
      dotsWrap.appendChild(dot);
    });

    const dots = [...dotsWrap.querySelectorAll("button")];
    const syncDots = () => {
      const mid = track.scrollLeft + track.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      slides.forEach((s, i) => {
        const c = s.offsetLeft + s.offsetWidth / 2;
        const d = Math.abs(c - mid);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      dots.forEach((d, i) => d.classList.toggle("is-active", i === best));
    };

    track.addEventListener("scroll", () => {
      window.requestAnimationFrame(syncDots);
    }, { passive: true });

    const step = (dir) => {
      const amount = (slides[0]?.offsetWidth || 240) + 20;
      track.scrollBy({ left: dir * amount, behavior: "smooth" });
    };
    prev?.addEventListener("click", () => step(-1));
    next?.addEventListener("click", () => step(1));
  }
})();
