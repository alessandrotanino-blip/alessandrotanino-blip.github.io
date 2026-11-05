# Sito personale — Alessandro Tanino

Sito statico (HTML/CSS/JS, zero dipendenze) per pubblicare i progetti IT,
i social e il canale YouTube. Pronto per **GitHub Pages**.

## Struttura

```
├── index.html            # pagina unica (hero, progetti, area personale)
├── assets/
│   ├── css/styles.css    # stile dark/tech
│   ├── js/main.js        # i18n, tab, like, typing, menu mobile, reveal on scroll
│   └── og-image.png      # immagine Open Graph per le condivisioni
├── projects/             # una pagina dedicata per ogni progetto (SEO)
├── robots.txt            # per i crawler
├── sitemap.xml           # sitemap per i motori di ricerca
├── hypervisorPortal/     # README del progetto HyperVisor Portal
├── pki/                  # README del progetto PKI Web Enrollment Portal
├── sql/                  # README del progetto SQL Server Provisioning Portal
└── ssl/                  # SSL Scanner (script + README)
```

## Come pubblicarlo su GitHub Pages

1. Crea un repository pubblico con nome `alessandrotanino-blip.github.io`
   (oppure un repository nuovo che poi punti su GitHub Pages).
2. Copia i file del sito alla root del repository:

   ```powershell
   git init
   git add index.html assets projects robots.txt sitemap.xml README.md
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/alessandrotanino-blip/alessandrotanino-blip.github.io.git
   git push -u origin main
   ```

3. Sul repository: **Settings → Pages → Build and deployment**
   - Source: `Deploy from a branch`
   - Branch: `main`, cartella `/ (root)` → **Save**
4. Dopo qualche minuto il sito è online su:
   `https://alessandrotanino-blip.github.io`

> Le cartelle `pki/`, `sql/` e `ssl/` contengono solo documentazione/script
> dei progetti: puoi lasciarle nel repository come repository "mondo" dei
> progetti o spostarle in repository separati.

## Personalizzazione veloce

**Lingua**: il sito è in **inglese di default** e passa automaticamente
all'**italiano** se la lingua del browser è italiana. Nella navbar c'è un
**selettore manuale** (pulsante EN/IT) che ha priorità sulla rilevazione:
la scelta viene memorizzata in `localStorage` (`site-lang`). Le traduzioni
italiane vivono nel dizionario `IT` in `assets/js/main.js`; il testo di
default (EN) è in `index.html`, associato a chiavi `data-i18n` /
`data-i18n-html`.

| Cosa | Dove |
| --- | --- |
| Nome in evidenza | `index.html` → classi `hero-title` e `brand` |
| Ruoli con effetto typing | `assets/js/main.js` → oggetto `PHRASES` (chiavi `en`/`it`) |
| Link LinkedIn | già impostato: `https://www.linkedin.com/in/alessandro-tanino` |
| Canale YouTube | già impostato: `https://youtube.com/@alextan75` |
| Aggiungere un progetto | duplica un blocco `<article class="card">` in `index.html` (aggiungi anche chiavi `proj.xxx.*` in `main.js` e un pulsante `.like-btn` con `data-project` univoco) |
| Like sui progetti | contatore per visitatore, salvato in `localStorage` (GitHub Pages è un sito statico, senza backend) |
