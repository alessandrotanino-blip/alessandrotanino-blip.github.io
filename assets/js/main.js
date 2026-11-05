/* Alessandro Tanino — personal site
   Interazioni: i18n (EN default, IT da browser o selettore manuale),
   effetto typing, menu mobile, reveal on scroll, anno. */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- i18n: EN di default, IT dal browser o dal selettore ---------- */
  const IT = {
    "meta.title": "Alessandro Tanino — IT Infrastructure Engineer | Self-Service Portals, SQL Server, PKI",
    "meta.desc":
      "Sito personale di Alessandro Tanino, Senior System Engineer. Portali self-service: provisioning SQL Server su Availability Groups (MSCS/Failover Cluster), web enrollment PKI con AD CS e ACME nativo (RFC 8555), scanner certificati SSL/TLS, portale reporting multi-hypervisor. PowerShell, IIS, automazione.",
    "crumb.home": "Home",
    "crumb.projects": "Progetti",
    "crumb.back": "Torna a tutti i progetti",
    "read.more": "Dettagli completi",
    "related.title": "Altri progetti",
    "page.pki.title": "PKI Web Enrollment Portal — AD CS, Web Enrollment, ACME (RFC 8555) | Alessandro Tanino",
    "page.pki.desc":
      "Portale web per l'emissione certificati enterprise PKI (ASP.NET Core 8) che sostituisce il Web Enrollment Microsoft (certsrv/ActiveX): generazione chiavi client-side, custodia cifrata delle chiavi, RBAC sui template, workflow di approvazione e server ACME (RFC 8555) nativo per l'emissione automatica di certificati con AD CS.",
    "page.ssl.title": "SSL/TLS Certificate Scanner — Audit di rete PowerShell | Alessandro Tanino",
    "page.ssl.desc":
      "Scanner PowerShell per certificati SSL/TLS su infrastruttura IT: scan su singolo host, file di lista e range di rete CIDR con supporto HTTPS e LDAPS, fingerprinting OS, reverse DNS, filtri per scadenza, esportazione CSV e report automatici via email.",
    "page.sql.title": "SQL Server Provisioning Portal — Self-Service, Availability Groups, MSCS | Alessandro Tanino",
    "page.sql.desc":
      "In arrivo: portale self-service e motore di orchestrazione PowerShell per SQL Server 2022 Contained Availability Groups su MSCS / Windows Server Failover Cluster. Approvazione DBA con Windows SSO, creazione/restore automatici, backup, join all'AG e sicurezza.",
    "page.hyp.title": "HyperVisor Portal — Multi-Hypervisor Inventory & Reporting (vSphere, Nutanix, Proxmox) | Alessandro Tanino",
    "page.hyp.desc":
      "Piattaforma enterprise di inventario e reporting multi-hypervisor per VMware vSphere, Nutanix AHV e Proxmox VE: dashboard unificate su IIS, tracciamento progetti/centri di costo, storico SQL Server, report zombie VM, snapshot sprawl e compliance backup.",
    "nav.projects": "Progetti",
    "nav.about": "Chi sono",
    "nav.contact": "Contattami",
    "hero.hello": "Ciao, il mio nome è",
    "hero.desc":
      "Progetto e automazione di infrastrutture IT enterprise: database Always On, infrastrutture PKI e sicurezza SSL/TLS. Trasformo processi manuali in strumenti automatici, affidabili e self-service.",
    "hero.projectsBtn": "Vedi i progetti",
    "sec.projects.tag": "// progetti",
    "sec.projects.title": "Cose che ho costruito",
    "sec.projects.sub":
      "Strumenti e portali nati da problemi reali in ambienti enterprise: automazione, sicurezza e self-service.",
    "proj.sql.desc":
      "Portale enterprise self-service e motore di orchestrazione per l'erogazione automatica di database su <strong>SQL Server 2022 Contained Availability Groups</strong> in ambiente Windows Server Failover Cluster (MSCS). Gli utenti inoltrano richieste da un portale web IIS, i DBA le approvano con SSO Windows e un motore PowerShell esegue end-to-end creazione/restore, backup, join all'AG e sicurezza — senza interventi manuali.",
    "proj.sql.badge": "IN ARRIVO",
    "proj.sql.f1": "Richieste self-service: nuovo database o restore da .bak",
    "proj.sql.f2": "Dashboard di approvazione DBA con Windows SSO e verifica gruppi AD",
    "proj.sql.f3": "Motore PowerShell non presidiato: creazione/restore, backup, join all'AG",
    "proj.sql.f4": "Sicurezza Contained AG: credenziali replicate su ogni nodo",
    "proj.sql.f5": "Script di deploy automatico per Windows Server 2022/2025 + IIS",
    "proj.sql.d1": "Target: SQL Server 2022 Enterprise, Windows Server 2022/2025, IIS 10+",
    "proj.sql.d2": "Full recovery model + backup full e log su share di rete",
    "proj.sql.d3": "Sincronizzazione automatica della replica sul nodo secondario",
    "proj.sql.d4": "CAG: login SQL e account Windows creati nel catalogo dell'AG",
    "proj.sql.d5": "Notifica email al richiedente con i parametri di connessione",
    "proj.sql.d6": "Stato delle richieste in tempo reale nella dashboard DBA",
    "proj.pki.desc":
      "Portale moderno in <strong>ASP.NET Core 8</strong> che sostituisce il deprecato Web Enrollment (certsrv/ActiveX) di Microsoft. Generazione chiavi direttamente nel browser, integrazione nativa con AD CS, workflow di approvazione e <strong>server ACME (RFC 8555)</strong> per il rinnovo automatico con win-acme, Certbot e Traefik.",
    "proj.pki.f1": "Generazione chiavi client-side via Web Crypto (RSA / ECC)",
    "proj.pki.f2": "Chiavi private cifrate a riposo (DPAPI + AES-256-GCM)",
    "proj.pki.f3": "Server ACME nativo (RFC 8555): win-acme, Certbot, Traefik",
    "proj.pki.f4": "RBAC sui template tramite gruppi Active Directory",
    "proj.pki.f5": "Workflow di approvazione hold & review con note degli amministratori",
    "proj.pki.f6": "7 lingue, temi chiaro/scuro, REST API",
    "proj.pki.d1": "Funziona su Windows Server + IIS, affiancato a Microsoft AD CS",
    "proj.pki.d2": "Modalità standalone (per foresta) o hub multi-CA in DMZ",
    "proj.pki.d3": "Integrazione COM CCertRequest con fallback su certreq.exe",
    "proj.pki.d4": "Pacchetto PKCS#12 (.pfx) con password scelta dall'utente",
    "proj.pki.d5": "Simulatore integrato per sviluppo e ambienti offline",
    "proj.pki.d6": "Controllo di proprietà: certificati ritirabili solo dal richiedente o dagli admin",
    "proj.ssl.desc":
      "Scanner <strong>PowerShell</strong> per audit di certificati SSL/TLS su singoli host, liste da file o interi range di rete in CIDR. Scansione multi-thread con supporto HTTPS e LDAPS, fingerprint dell'OS, reverse DNS, filtri per scadenza e report automatici.",
    "proj.ssl.f1": "Scan su singolo host, file di lista e range di rete CIDR",
    "proj.ssl.f2": "Supporto dei protocolli HTTPS e LDAPS",
    "proj.ssl.f3": "Fingerprinting dell'OS e reverse DNS lookup",
    "proj.ssl.f4": "Filtro per scadenza dei certificati a rischio",
    "proj.ssl.f5": "Elaborazione parallela multithread",
    "proj.ssl.f6": "Esportazione CSV e report automatici via email",
    "proj.ssl.d1": "Windows PowerShell 5.1 o PowerShell 7+",
    "proj.ssl.d2": "Porte custom e versioni legacy dei protocolli SSL",
    "proj.ssl.d3": "Tuning per scansione: numero di thread e timeout",
    "proj.ssl.d4": "Documentazione integrata (-Help e -Examples)",
    "proj.ssl.d5": "Modalità append per esportazioni CSV incrementali",
    "proj.ssl.d6": "Server DNS custom per i reverse lookup",
    "proj.hyp.desc":
      "Piattaforma enterprise di <strong>inventario e reporting multi-hypervisor</strong> per VMware vSphere, Nutanix AHV e Proxmox VE. Agenti PowerShell raccolgono periodicamente dati su compute, memoria, disco, rete e backup, pubblicando dashboard HTML5 interattive su IIS con storico completo su SQL Server.",
    "proj.hyp.f1": "Inventario unificato su vSphere, Nutanix AHV e Proxmox VE",
    "proj.hyp.f2": "Tracciamento progetti / centri di costo via tag e categorie",
    "proj.hyp.f3": "Storico su SQL Server con ricerca delle VM rimosse",
    "proj.hyp.f4": "Report su zombie VM, snapshot sprawl e compliance backup",
    "proj.hyp.f5": "Report di differenza risorse tra due date qualsiasi",
    "proj.hyp.f6": "Pubblicazione automatica su IIS con archivio storico 7-Zip",
    "proj.hyp.d1": "PowerShell 5.1/7.x, PowerCLI 12+ e Prism Central v3 REST",
    "proj.hyp.d2": "Hosting IIS 10+ con ambienti Production e Development",
    "proj.hyp.d3": "Motore LastSeenOn ad alta affidabilità, senza dipendere dai log vCenter",
    "proj.hyp.d4": "Valutazione backup su 4 livelli con soglie di retention custom",
    "proj.hyp.d5": "Ricerca live, filtri rapidi, toggle colonne e sorting in ogni vista",
    "proj.hyp.d6": "Dashboard executive settimanali, mensili e trimestrali sulla capacità",
    "proj.details.title": "Dettagli tecnici",
    "proj.githubLink": "Il codice su GitHub",
    "sec.about.tag": "// chi sono",
    "sec.about.title": "Oltre i progetti",
    "about.p1":
      "Sono un <strong>Senior System Engineer</strong> con oltre 30 anni di esperienza in IT enterprise: Windows Server, virtualizzazione VMware, Citrix, cluster Exchange, servizi cloud e project management.",
    "about.p2":
      "Il mio lavoro preferito è prendere un processo manuale e ripetitivo e trasformarlo in uno strumento che funziona da solo — e documentarlo. I miei progetti nascono da problemi reali e sono pensati per essere riusati: li trovate open source su GitHub.",
    "about.socialTitle": "Trovami qui",
    "footer.rights": "Tutti i diritti riservati.",
    "footer.mono": "Costruito a mano con HTML, CSS e un pizzico di PowerShell",
  };

  /* Testo EN di default: catturato dal DOM (l'inglese vive in index.html). */
  const EN = {};
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    EN[el.getAttribute("data-i18n")] = el.textContent;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    EN[el.getAttribute("data-i18n-html")] = el.innerHTML;
  });
  const EN_TITLE = document.title;
  const descMeta = document.querySelector('meta[name="description"]');
  const EN_DESC = descMeta ? descMeta.getAttribute("content") : "";

  const PHRASES = {
    en: [
      "Senior System Engineer",
      "SQL Server Always On",
      "PKI & Certificates",
      "Automation with PowerShell",
    ],
    it: [
      "Senior System Engineer",
      "SQL Server Always On",
      "PKI & Certificati",
      "Automazione con PowerShell",
    ],
  };

  let lang = "en";
  let phrases = PHRASES[lang];
  let pi = 0, ci = 0, deleting = false, typeTimer = null;
  const typedEl = document.getElementById("typed");

  function applyLang(next) {
    if (next !== "it" && next !== "en") return;
    lang = next;
    const dict = lang === "it" ? IT : EN;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.title = dict["meta.title"] || EN_TITLE;
    if (descMeta && dict["meta.desc"]) descMeta.setAttribute("content", dict["meta.desc"]);

    /* Effetto typing: cambia le frasi senza spezzare il loop. */
    phrases = PHRASES[lang];
    pi = 0;
    ci = 0;
    deleting = false;

    /* Il pulsante mostra la lingua verso cui si passa. */
    const btn = document.getElementById("langToggle");
    if (btn) {
      btn.textContent = lang === "it" ? "EN" : "IT";
      btn.setAttribute("aria-pressed", String(lang === "it"));
    }

    try {
      localStorage.setItem("site-lang", lang);
    } catch (e) {
      /* storage non disponibile: la scelta vale solo per la sessione */
    }
  }

  function detectLang() {
    let saved = null;
    try {
      saved = localStorage.getItem("site-lang");
    } catch (e) {
      /* ignorato */
    }
    if (saved === "it" || saved === "en") return saved;
    const langs = navigator.languages || [navigator.language || "en"];
    return langs.some((l) => /^it/i.test(l)) ? "it" : "en";
  }

  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      applyLang(lang === "it" ? "en" : "it");
    });
  }
  applyLang(detectLang());

  /* ---------- Effetto typing (robusto ai cambi di lingua a metà frase) ---------- */
  if (typedEl) {
    const step = () => {
      const phrase = phrases[pi];
      if (!deleting) {
        ci++;
        if (ci >= phrase.length) {
          ci = phrase.length;
          deleting = true;
          typedEl.textContent = phrase;
          typeTimer = setTimeout(step, 1900);
          return;
        }
      } else {
        ci--;
        if (ci <= 0) {
          ci = 0;
          deleting = false;
          pi = (pi + 1) % phrases.length;
          typedEl.textContent = "";
          typeTimer = setTimeout(step, 400);
          return;
        }
      }
      typedEl.textContent = phrase.slice(0, ci);
      typeTimer = setTimeout(step, deleting ? 35 : 75);
    };
    typeTimer = setTimeout(step, 300);
  }

  /* ---------- Tab progetti (pannelli mostrati su selezione) ---------- */
  const tabs = Array.from(document.querySelectorAll(".project-tab"));
  const panels = Array.from(document.querySelectorAll(".project-panel"));

  function activateTab(tab) {
    tabs.forEach((t) => t.setAttribute("aria-selected", String(t === tab)));
    panels.forEach((p) => {
      const show = p.id === "panel-" + tab.dataset.tab;
      p.hidden = !show;
      p.classList.remove("active");
      if (show) {
        void p.offsetWidth;
        p.classList.add("active");
      }
    });
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => activateTab(tab));
    tab.addEventListener("keydown", (e) => {
      let idx = null;
      if (e.key === "ArrowRight") idx = (i + 1) % tabs.length;
      else if (e.key === "ArrowLeft") idx = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === "Home") idx = 0;
      else if (e.key === "End") idx = tabs.length - 1;
      if (idx !== null) {
        e.preventDefault();
        activateTab(tabs[idx]);
        tabs[idx].focus();
      }
    });
  });
  if (tabs.length) activateTab(tabs[0]);

  /* ---------- Like sui progetti (contatore per visitatore, localStorage) ---------- */
  document.querySelectorAll(".like-btn").forEach((btn) => {
    const id = btn.dataset.project;
    const likedKey = "like-" + id;
    const countKey = "like-count-" + id;
    const countEl = btn.querySelector(".like-count");

    let liked = false;
    let count = 0;
    try {
      liked = localStorage.getItem(likedKey) === "1";
      count = parseInt(localStorage.getItem(countKey) || "0", 10) || 0;
    } catch (e) {
      /* storage non disponibile */
    }

    btn.setAttribute("aria-pressed", String(liked));
    countEl.textContent = count;

    btn.addEventListener("click", () => {
      liked = !liked;
      count += liked ? 1 : -1;
      if (count < 0) count = 0;
      btn.setAttribute("aria-pressed", String(liked));
      countEl.textContent = count;
      try {
        localStorage.setItem(likedKey, liked ? "1" : "0");
        localStorage.setItem(countKey, String(count));
      } catch (e) {
        /* ignorato */
      }
      btn.classList.remove("pop");
      void btn.offsetWidth;
      btn.classList.add("pop");
    });
  });

  /* ---------- Menu mobile ---------- */
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  /* ---------- Anno corrente ---------- */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
