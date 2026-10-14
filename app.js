(() => {
  const dict = {
    zh: {
      brand: "轻传",
      "nav.how": "怎么用",
      "nav.features": "功能",
      "nav.compare": "对比",
      "nav.screens": "界面",
      "nav.faq": "常见问题",
      "nav.download": "下载",
      "nav.contact": "联系",
      "nav.more": "其他产品",
      "hero.title": "无需云端，与附近设备分享文件",
      "hero.lead": "安卓、iPhone、iPad、Mac 同一 Wi‑Fi 直接互传。快速、私密、离线。原画质不压缩，无账号、无广告。",
      "hero.pill1": "跨系统",
      "hero.pill2": "原画质",
      "hero.pill3": "不经过云",
      "hero.cta": "立即下载",
      "hero.secondary": "看看怎么用",
      "stats.s1.n": "4",
      "stats.s1.l": "个平台互通",
      "stats.s2.n": "0",
      "stats.s2.l": "广告与追踪",
      "stats.s3.n": "~80",
      "stats.s3.l": "MB/s（5G Wi‑Fi 实测）",
      "stats.s4.n": "HTTPS",
      "stats.s4.l": "加密直连",
      "features.title": "你需要的，都在局域网里完成",
      "features.lead": "轻传只做一件事：把文件、文字、实况照片稳稳送到另一台设备，不压缩、不上传。",
      "features.f1.t": "四端互通",
      "features.f1.d": "安卓、iPhone、iPad、Mac 同一 Wi‑Fi 互相发现、互相传。Windows 即将推出。",
      "features.f2.t": "不经过云",
      "features.f2.d": "文件只在两台设备之间走，不经过任何服务器，不需要互联网。",
      "features.f3.t": "无账号无广告",
      "features.f3.d": "打开就能用。没有注册，没有追踪，没有广告。",
      "features.f4.t": "原画质不压缩",
      "features.f4.d": "照片、视频按原文件传输。拍摄时间、定位等信息尽量原样保留。",
      "features.f5.t": "配对才可发",
      "features.f5.d": "6 位配对码 + 对方点「允许」。只知道码发不过去。全程 HTTPS 加密。",
      "features.f6.t": "文字与链接",
      "features.f6.d": "在 App 里输入文字或链接发给对方，对方可复制或一键打开。",
      "features.f7.t": "文件夹",
      "features.f7.d": "整夹发送，保留目录结构。大文件、超多文件也能稳稳传完。",
      "features.f8.t": "实况照片互通",
      "features.f8.d": "iPhone 实况 ↔ 安卓动态照片互转，视频部分一起带走，信息尽量不丢。",
      "features.f9.t": "大文件与多文件",
      "features.f9.d": "大文件分块续传、边传边校验；一次发很多文件也不卡，失败的可单独重试。",
      "how.title": "三步开始传",
      "how.lead": "两台设备都装上，连同一个 Wi‑Fi。无需账号，无需配置。",
      "how.s1.t": "安装并打开",
      "how.s1.d": "每台设备会显示自己的 6 位配对码，并在局域网里自动被发现。",
      "how.s2.t": "第一次配对",
      "how.s2.d": "填对方屏幕上的码，对方点「允许」。以后互发不用再填。",
      "how.s3.t": "选文件发送",
      "how.s3.d": "照片、视频或任意文件，点附近设备即可发出。收完进相册或下载文件夹。",
      "safe.title": "为什么安全",
      "safe.lead": "文件不经过云，传输全程加密，还要对方亲手点「允许」。",
      "safe.s1.t": "自动发现",
      "safe.s1.d": "同一 Wi‑Fi 上的轻传设备互相广播，列表里就能看到对方。",
      "safe.s2.t": "配对确认",
      "safe.s2.d": "6 位码只是敲门；对方必须点「允许」才会建立信任。",
      "safe.s3.t": "加密直连",
      "safe.s3.d": "HTTPS + 证书指纹校验，文件只在两台设备之间走。",
      "compare.title": "为什么用轻传",
      "compare.lead": "和日常传文件的几种方式比一比。",
      "compare.h0": "",
      "compare.h1": "轻传",
      "compare.h2": "微信 / QQ",
      "compare.h3": "数据线",
      "compare.h4": "隔空投送",
      "compare.r1": "跨系统",
      "compare.r2": "原画质 / 不压缩",
      "compare.r3": "不经过云",
      "compare.r4": "不用账号",
      "compare.r5": "不用线",
      "compare.y": "✓",
      "compare.n": "会压缩",
      "compare.p": "有限",
      "screens.title": "打开就能用",
      "screens.lead": "附近设备、配对、发送、记录，一眼看明白。",
      "screens.c1": "截图 1",
      "screens.c2": "截图 2",
      "screens.c3": "截图 3",
      "screens.c4": "截图 4",
      "screens.c5": "截图 5",
      "screens.c6": "截图 6",
      "screens.c7": "截图 7",
      "screens.c8": "截图 8",
      "faq.title": "常见问题",
      "faq.lead": "快速了解轻传能不能解决你的问题。",
      "faq.q1": "真的免费吗？",
      "faq.a1": "是的。轻传免费使用，无广告、无追踪、无隐藏收费。",
      "faq.q2": "需要联网吗？能跨网传吗？",
      "faq.a2": "不需要互联网。两台设备连同一个 Wi‑Fi 即可。文件不会离开你的局域网，也不能通过互联网传给远方的人。",
      "faq.q3": "安全吗？",
      "faq.a3": "传输使用 HTTPS 加密，并用证书指纹校验对方身份。第一次发送还要输入对方的 6 位码，并由对方点「允许」。请勿在不可信的公共 Wi‑Fi 传输敏感文件。",
      "faq.q4": "文件保存在哪里？",
      "faq.a4": "安卓：照片进 Pictures/EasyDrop，视频进 Movies/EasyDrop，其他进 Download/EasyDrop。iPhone / iPad：照片视频进系统相册，其他进「文件」App。Mac：默认进「下载」文件夹，可在设置里改。",
      "faq.q5": "会压缩照片吗？拍摄时间和定位会丢吗？",
      "faq.a5": "不会按社交软件那样压缩。文件按原样传输。第一期还会加强：尽量保留拍摄时间、定位等原始信息；实况照片与安卓动态照片互转也在做。",
      "faq.q6": "为什么找不到设备？",
      "faq.a6": "请确认：两边都打开了轻传；连的是同一个 Wi‑Fi（不是个人热点或访客网络）；手机 / 电脑已允许「本地网络」权限；尽量关掉 VPN 或代理后再试。",
      "faq.q7": "有文件大小限制吗？",
      "faq.a7": "当前版本单文件上限 2GB。我们正在做大文件、断点续传和校验，上架前会根据压力测试决定正式上限。",
      "faq.q8": "支持哪些平台？",
      "faq.a8": "现已支持 Android、iPhone / iPad、Mac。Windows 即将推出。暂无 Linux 版。",
      "dl.title": "下载轻传",
      "dl.lead": "选你的平台。商店链接与安装包准备好后会更新到下载页。",
      "dl.ios": "iPhone / iPad",
      "dl.mac": "Mac",
      "dl.android": "Android",
      "dl.windows": "Windows",
      "dl.windows.sub": "微软商店",
      "dl.soon": "即将上架",
      "dl.more": "查看完整下载页 →",
      "contact.kicker": "联系我们",
      "contact.title": "有问题随时找我们",
      "contact.lead": "产品问题、反馈或合作，发邮件即可。我们会尽快回复。",
      "contact.bug": "报告问题",
      "contact.bug.d": "传不过去、找不到设备、崩溃等，告诉我们设备和现象。",
      "contact.idea": "功能建议",
      "contact.idea.d": "你觉得还缺什么？欢迎告诉我们。",
      "contact.biz": "合作咨询",
      "contact.biz.d": "媒体、渠道或商务合作。",
      "contact.email": "发邮件",
      "contact.pub": "开发者",
      "foot.tag": "无需互联网，与附近设备分享文件。",
      "foot.product": "产品",
      "foot.help": "帮助",
      "foot.legal": "法律",
      "foot.privacy": "隐私政策",
      "foot.terms": "使用协议",
      "dlpage.title": "下载轻传",
      "dlpage.lead": "选择你的平台。检测到的设备会高亮显示。",
      "dlpage.detect.android": "检测到你可能在使用 Android",
      "dlpage.detect.ios": "检测到你可能在使用 iPhone / iPad",
      "dlpage.detect.mac": "检测到你可能在使用 Mac",
      "dlpage.detect.windows": "检测到你可能在使用 Windows",
      "dlpage.detect.other": "请选择你的平台",
      "dlpage.android.req": "系统要求：Android 8.0 及以上",
      "dlpage.ios.req": "系统要求：iOS / iPadOS 15 及以上",
      "dlpage.mac.req": "系统要求：macOS 15 及以上",
      "dlpage.windows.req": "计划支持：Windows 10 1809 及以上（含 Windows 11）",
      "dlpage.play": "Google Play（即将上架）",
      "dlpage.apk": "直接下载 APK（准备中）",
      "dlpage.appstore": "App Store（即将上架）",
      "dlpage.macstore": "Mac App Store（即将上架）",
      "dlpage.msstore": "微软商店（即将推出）",
      "dlpage.android.n1": "国内部分机型无法使用 Google Play，可等官方 APK。",
      "dlpage.android.n2": "安装 APK 时如提示「未知来源」，请在系统设置里允许安装。",
      "dlpage.android.n3": "首次使用请允许本地网络 / 附近设备相关权限，否则找不到对方。",
      "dlpage.ios.n1": "首次打开请允许「本地网络」权限，否则找不到附近设备。",
      "dlpage.ios.n2": "接收照片进系统相册；其他文件在「文件」App › 轻传。",
      "dlpage.ios.n3": "iOS 限制后台接收，传大文件时请保持轻传在前台。",
      "dlpage.mac.n1": "首次打开请允许「本地网络」权限。",
      "dlpage.mac.n2": "轻传在菜单栏运行，文件默认保存到「下载」文件夹。",
      "dlpage.mac.n3": "可在设置里打开「登录时打开」。",
      "dlpage.windows.n1": "Windows 版排在安卓 / iOS / Mac 第一期功能完成之后。",
      "dlpage.windows.n2": "上架后请把 Wi‑Fi 设为「专用网络」，否则可能收不到文件。",
      "dlpage.windows.n3": "打开 HEIC 照片可能需要安装微软的 HEIF 扩展。",
      "dlpage.help": "安装或使用遇到问题？",
      "dlpage.help.link": "联系我们",
      "dlpage.home": "首页",
      // compare table cells that need locale-specific text beyond ✓
      "compare.cell.n.compress": "会压缩",
      "compare.cell.n.cloud": "走服务器",
      "compare.cell.n.login": "要登录",
      "compare.cell.n.cable": "必须插线",
      "compare.cell.n.apple": "仅苹果",
      "compare.cell.p": "有限",
    },
    en: {
      brand: "QuickToss",
      "nav.how": "How it works",
      "nav.features": "Features",
      "nav.compare": "Compare",
      "nav.screens": "Screens",
      "nav.faq": "FAQ",
      "nav.download": "Download",
      "nav.contact": "Contact",
      "nav.more": "Other products",
      "hero.title": "Share files nearby—no cloud required",
      "hero.lead": "Android, iPhone, iPad, and Mac on the same Wi‑Fi. Fast, private, offline. Full quality, no account, no ads.",
      "hero.pill1": "Cross-platform",
      "hero.pill2": "Full quality",
      "hero.pill3": "No cloud",
      "hero.cta": "Download",
      "hero.secondary": "See how it works",
      "stats.s1.n": "4",
      "stats.s1.l": "platforms",
      "stats.s2.n": "0",
      "stats.s2.l": "ads or trackers",
      "stats.s3.n": "~80",
      "stats.s3.l": "MB/s on 5 GHz Wi‑Fi",
      "stats.s4.n": "HTTPS",
      "stats.s4.l": "encrypted direct link",
      "features.title": "Everything stays on your LAN",
      "features.lead": "One job: get files, text, and Live Photos to another device—uncompressed, never uploaded.",
      "features.f1.t": "Four platforms",
      "features.f1.d": "Android, iPhone, iPad, and Mac discover each other on the same Wi‑Fi. Windows coming soon.",
      "features.f2.t": "No cloud",
      "features.f2.d": "Files travel only between your devices—never through a server. No internet needed.",
      "features.f3.t": "No account, no ads",
      "features.f3.d": "Open and use. No sign-up, no tracking, no ads.",
      "features.f4.t": "Full quality",
      "features.f4.d": "Photos and videos transfer as the original file. Capture time and location are preserved as much as possible.",
      "features.f5.t": "Consent to send",
      "features.f5.d": "6-digit code plus their Allow tap. Code alone isn’t enough. HTTPS end to end.",
      "features.f6.t": "Text & links",
      "features.f6.d": "Type text or a URL in the app; the other side can copy or open it.",
      "features.f7.t": "Folders",
      "features.f7.d": "Send whole folders with structure kept. Large files and many small files stay reliable.",
      "features.f8.t": "Live Photo ↔ Motion Photo",
      "features.f8.d": "iPhone Live Photos and Android motion photos convert both ways—video included, metadata kept.",
      "features.f9.t": "Large & many files",
      "features.f9.d": "Chunked transfer with resume and checksums; big batches stay smooth, with retry only for failures.",
      "how.title": "Up in three steps",
      "how.lead": "Install on both devices. Join the same Wi‑Fi. No account, no setup.",
      "how.s1.t": "Install & open",
      "how.s1.d": "Each device shows a 6-digit pair code and appears on the LAN.",
      "how.s2.t": "Pair once",
      "how.s2.d": "Enter their code; they tap Allow. You won’t need to again.",
      "how.s3.t": "Pick and send",
      "how.s3.d": "Photos, videos, or any files—tap a nearby device. Received items go to Photos or Downloads.",
      "safe.title": "Why it’s safe",
      "safe.lead": "No cloud, encrypted transfer, and the other person must tap Allow.",
      "safe.s1.t": "Discovery",
      "safe.s1.d": "Devices on the same Wi‑Fi announce themselves and show up in the list.",
      "safe.s2.t": "Pairing",
      "safe.s2.d": "The code is just a knock; they must Allow before trust is stored.",
      "safe.s3.t": "Encrypted link",
      "safe.s3.d": "HTTPS plus certificate fingerprint checks. Files stay between the two devices.",
      "compare.title": "Why QuickToss",
      "compare.lead": "How it stacks up against everyday ways to move files.",
      "compare.h0": "",
      "compare.h1": "QuickToss",
      "compare.h2": "Chat apps",
      "compare.h3": "Cable",
      "compare.h4": "AirDrop",
      "compare.r1": "Cross-platform",
      "compare.r2": "Full quality",
      "compare.r3": "No cloud",
      "compare.r4": "No account",
      "compare.r5": "No cable",
      "compare.y": "✓",
      "compare.n": "Compressed",
      "compare.p": "Limited",
      "screens.title": "Open and go",
      "screens.lead": "Nearby devices, pairing, send, and history—at a glance.",
      "screens.c1": "Screenshot 1",
      "screens.c2": "Screenshot 2",
      "screens.c3": "Screenshot 3",
      "screens.c4": "Screenshot 4",
      "screens.c5": "Screenshot 5",
      "screens.c6": "Screenshot 6",
      "screens.c7": "Screenshot 7",
      "screens.c8": "Screenshot 8",
      "faq.title": "FAQ",
      "faq.lead": "Quick answers to common questions.",
      "faq.q1": "Is it really free?",
      "faq.a1": "Yes. QuickToss is free—no ads, no tracking, no hidden fees.",
      "faq.q2": "Do I need the internet? Can I send remotely?",
      "faq.a2": "No internet required. Both devices need the same Wi‑Fi. Files never leave your LAN and can’t be sent across the internet.",
      "faq.q3": "Is it secure?",
      "faq.a3": "Transfers use HTTPS with certificate fingerprint checks. First send also needs their 6-digit code and an Allow tap. Avoid sensitive files on untrusted public Wi‑Fi.",
      "faq.q4": "Where are files saved?",
      "faq.a4": "Android: Pictures/EasyDrop, Movies/EasyDrop, Download/EasyDrop. iPhone/iPad: Photos for media, Files app otherwise. Mac: Downloads by default (changeable in settings).",
      "faq.q5": "Are photos compressed? Will date and GPS be lost?",
      "faq.a5": "We don’t compress like chat apps. Files transfer as-is. We’re strengthening capture time and location preservation, plus Live Photo ↔ Motion Photo conversion.",
      "faq.q6": "Why can’t I find devices?",
      "faq.a6": "Check both apps are open, same Wi‑Fi (not hotspot/guest), Local Network permission is allowed, and try turning off VPN/proxy.",
      "faq.q7": "Is there a size limit?",
      "faq.a7": "Current build caps a single file at 2 GB. Large-file resume and checksums are in progress; the final limit will follow stress tests before release.",
      "faq.q8": "Which platforms?",
      "faq.a8": "Android, iPhone/iPad, and Mac today. Windows coming soon. No Linux plan.",
      "dl.title": "Download QuickToss",
      "dl.lead": "Pick your platform. Store links and packages will appear on the download page when ready.",
      "dl.ios": "iPhone / iPad",
      "dl.mac": "Mac",
      "dl.android": "Android",
      "dl.windows": "Windows",
      "dl.windows.sub": "Microsoft Store",
      "dl.soon": "Coming soon",
      "dl.more": "Full download page →",
      "contact.kicker": "Contact",
      "contact.title": "We’re here when you need us",
      "contact.lead": "Bugs, ideas, or partnerships—just email us.",
      "contact.bug": "Report a problem",
      "contact.bug.d": "Transfers failing, devices missing, crashes—tell us the devices and what happened.",
      "contact.idea": "Feature ideas",
      "contact.idea.d": "What’s missing? We’d love to hear it.",
      "contact.biz": "Partnerships",
      "contact.biz.d": "Press, channels, or business inquiries.",
      "contact.email": "Email us",
      "contact.pub": "Publisher",
      "foot.tag": "Share files nearby—no internet required.",
      "foot.product": "Product",
      "foot.help": "Help",
      "foot.legal": "Legal",
      "foot.privacy": "Privacy Policy",
      "foot.terms": "Terms of Use",
      "dlpage.title": "Download QuickToss",
      "dlpage.lead": "Choose your platform. Detected devices are highlighted.",
      "dlpage.detect.android": "Looks like you’re on Android",
      "dlpage.detect.ios": "Looks like you’re on iPhone / iPad",
      "dlpage.detect.mac": "Looks like you’re on Mac",
      "dlpage.detect.windows": "Looks like you’re on Windows",
      "dlpage.detect.other": "Pick your platform",
      "dlpage.android.req": "Requires Android 8.0 or later",
      "dlpage.ios.req": "Requires iOS / iPadOS 15 or later",
      "dlpage.mac.req": "Requires macOS 15 or later",
      "dlpage.windows.req": "Planned: Windows 10 1809 or later (including Windows 11)",
      "dlpage.play": "Google Play (coming soon)",
      "dlpage.apk": "Download APK (preparing)",
      "dlpage.appstore": "App Store (coming soon)",
      "dlpage.macstore": "Mac App Store (coming soon)",
      "dlpage.msstore": "Microsoft Store (coming soon)",
      "dlpage.android.n1": "Some devices in China can’t use Google Play—use the official APK when available.",
      "dlpage.android.n2": "If install is blocked, allow unknown sources in system settings.",
      "dlpage.android.n3": "Allow local network / nearby-device permissions or discovery won’t work.",
      "dlpage.ios.n1": "Allow Local Network on first launch or nearby devices won’t appear.",
      "dlpage.ios.n2": "Photos go to the Photos app; other files go to Files › QuickToss.",
      "dlpage.ios.n3": "iOS limits background receive—keep QuickToss in the foreground for large files.",
      "dlpage.mac.n1": "Allow Local Network on first launch.",
      "dlpage.mac.n2": "Runs from the menu bar; files save to Downloads by default.",
      "dlpage.mac.n3": "Optional: open at login in Settings.",
      "dlpage.windows.n1": "Windows ships after the Android / iOS / Mac first-release features.",
      "dlpage.windows.n2": "Set Wi‑Fi to a Private network profile or receive may fail.",
      "dlpage.windows.n3": "Viewing HEIC may need Microsoft’s HEIF extension.",
      "dlpage.help": "Need help installing or using?",
      "dlpage.help.link": "Contact us",
      "dlpage.home": "Home",
      "compare.cell.n.compress": "Compressed",
      "compare.cell.n.cloud": "Via servers",
      "compare.cell.n.login": "Login required",
      "compare.cell.n.cable": "Cable required",
      "compare.cell.n.apple": "Apple only",
      "compare.cell.p": "Limited",
    },
  };

  const apply = (lang) => {
    const pack = dict[lang] || dict.zh;
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (pack[key] == null) return;
      el.textContent = pack[key];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (pack[key] != null) el.setAttribute("alt", pack[key]);
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });
    const onDownload = location.pathname.endsWith("download.html");
    document.title =
      lang === "en"
        ? onDownload
          ? "Download · QuickToss"
          : "QuickToss · 轻传"
        : onDownload
          ? "下载 · 轻传 QuickToss"
          : "轻传 · QuickToss";
    localStorage.setItem("qt-lang", lang);
    if (typeof window.__qtUpdateDetect === "function") window.__qtUpdateDetect(lang);
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

    track.addEventListener(
      "scroll",
      () => {
        window.requestAnimationFrame(syncDots);
      },
      { passive: true }
    );

    const step = (dir) => {
      const amount = (slides[0]?.offsetWidth || 240) + 20;
      track.scrollBy({ left: dir * amount, behavior: "smooth" });
    };
    prev?.addEventListener("click", () => step(-1));
    next?.addEventListener("click", () => step(1));
  }

  // Download page: platform detection + tabs
  const tabs = document.querySelector("[data-dl-tabs]");
  if (tabs) {
    const panels = [...document.querySelectorAll("[data-panel]")];
    const buttons = [...tabs.querySelectorAll("[data-platform]")];
    const detectLabel = document.querySelector("[data-detect-label]");

    const detect = () => {
      const ua = navigator.userAgent || "";
      if (/Android/i.test(ua)) return "android";
      if (/iPhone|iPad|iPod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1))
        return "ios";
      if (/Win/i.test(navigator.platform) || /Windows/i.test(ua)) return "windows";
      if (/Mac/i.test(navigator.platform) || /Macintosh/i.test(ua)) return "mac";
      return "android";
    };

    const show = (platform) => {
      buttons.forEach((b) => {
        const on = b.dataset.platform === platform;
        b.setAttribute("aria-selected", on ? "true" : "false");
        b.classList.toggle("is-active", on);
      });
      panels.forEach((p) => {
        p.hidden = p.dataset.panel !== platform;
      });
      history.replaceState(null, "", `#${platform}`);
    };

    window.__qtUpdateDetect = (lang) => {
      if (!detectLabel) return;
      const pack = dict[lang] || dict.zh;
      const platform = detect();
      detectLabel.textContent = pack[`dlpage.detect.${platform}`] || pack["dlpage.detect.other"];
    };
    window.__qtUpdateDetect(preferEn ? "en" : "zh");

    buttons.forEach((b) => b.addEventListener("click", () => show(b.dataset.platform)));

    const fromHash = location.hash.replace("#", "");
    const initial = ["android", "ios", "mac", "windows"].includes(fromHash) ? fromHash : detect();
    show(initial);
  }

})();
