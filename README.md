# 🥋 Keystone Taekwondo Academy (KETA) — Website Documentation

**Live Site:** [keystonetaekwondo.com](https://keystonetaekwondo.com)
**Location:** 374 East Penn Drive, Enola, Pennsylvania 17025
**Phone:** 701-203-6535 · 701-203-6777
**Email:** keystonetaekwondo@gmail.com

---

## Project Overview

A fully custom website for **Keystone Taekwondo Academy (KETA)** — a martial arts school in Enola, PA founded in 2024. Built with plain HTML, CSS, and JavaScript (no frameworks). Uses **Firebase** for backend data and **Formspree** for contact form email delivery.

---

## File Structure

```
KETA/
├── index.html      ← Main public-facing website
├── style.css       ← All styles for the main site
├── admin.html      ← Password-protected admin panel
├── admin.css       ← Styles for the admin panel
├── config.js       ← Reserved for shared config
└── README.md       ← This documentation file
```

---

## Website Sections (index.html)

### 1. News Marquee Bar
- Red scrolling ticker fixed at the very top of the page
- Displays: welcome messages, belt test dates, contact info, class info
- Items can be managed from the Admin Panel via Firebase Firestore

### 2. Navigation Bar (fixed, below marquee)
All links are on the **right side**. Contains:

| Button | Action |
|--------|--------|
| Home | Scrolls to hero section |
| Intro | Scrolls to about/intro section |
| Classes | Scrolls to photo gallery |
| Instructors | Scrolls to instructors section |
| Events | Scrolls to calendar |
| Contact | Scrolls to contact/enrollment form |
| Free Trial *(red)* | Scrolls to free trial section |
| 📍 Directions *(green)* | Opens Google Maps to academy address |
| Admin *(gold)* | Opens the admin login page |

### 3. Hero / Home Section
- Full-screen hero with KETA branding
- Headline: "KEYSTONE TAEKWONDO Academy"
- Tagline and stats (4+ Age Groups, 25+ Yrs Experience, 100% Certified)
- CTA buttons: Free Trial Class, Learn More

### 4. Intro / About Section
- Academy description and mission statement
- Address card with phone, email, and website link
- Classes offered grid (4 class types)

### 5. Advantages Section
6 benefit cards: Self-Defense, Increased Stamina, Reduced Stress, Discipline, Leadership Focus, Confidence

### 6. Photo Gallery / Classes Section
Tabbed gallery with photo carousels per class category:
- All Classes · 🐯 Little Tigers · 🔥 Core Tigers · ⚡ Teens & Adults · 👨‍👩‍👧 Family · 🏆 Events
- Photos load dynamically from Firebase (uploaded via Admin Panel)

### 7. Instructors Section
- **Instructor Ram Adhikari** — 2nd Degree Black Belt, Chief Instructor (25+ years)
- **Instructor Sonu Adhikari** — 1st Degree Black Belt, Instructor (20+ years)
- Instructor photos uploadable via Admin Panel

### 8. Free Trial Section
- Highlights the free first class offer
- Perks: Full Class Access, Meet Instructors, All Age Groups, Zero Cost

### 9. Contact & Enrollment Form
- Left: Address, phone, email, hours, 📍 Get Directions button, social links
- Right: Registration form — parent name, child name, email, phone, age, class interest, experience, message
- Submits via **Formspree** → emails go to you
- Spam protection via honeypot field

### 10. Events / Calendar Section
- Lists upcoming and past belt promotion tests and events
- Loads dynamically from Firebase Firestore
- Static fallback events shown until Firebase is connected

### 11. Testimonials Section
3 community reviews in a card grid

### 12. Footer
- Branding, navigation links, class links
- Newsletter signup
- Social media: Facebook, Twitter/X, Yelp
- Privacy Policy, Terms & Conditions, Admin link

---

## Classes Offered

| Class | Ages | Description |
|-------|------|-------------|
| 🐯 Little Tigers | 4–6 | Foundational skills, discipline, and confidence |
| 🔥 Core Tigers | 7–12 | Technique, focus, and competitive spirit |
| ⚡ Teens & Adults | 13+ | Advanced training and sport-style Taekwondo |
| 👨‍👩‍👧 Family Classes | All | Special sessions for families to train together |

---

## Class Schedule

| Day | Hours |
|-----|-------|
| Monday – Friday | 4:00 PM – 8:00 PM |
| Saturday | 10:00 AM – 2:00 PM |
| Sunday | Closed |

*School closes for most US National Holidays.*

---

## Admin Panel (admin.html)

The admin panel is **100% password-protected** via Firebase Authentication. No one can access it without logging in.

### How to Access
1. Click the **Admin** button in the navbar (top right)
2. Enter your admin email and password
3. Only authenticated users can view or make any changes

### Admin Panel Features

| Panel | What You Can Do |
|-------|----------------|
| 📊 Dashboard | Overview of site stats and recent activity |
| 📣 Marquee News | Add / edit / delete the scrolling news ticker items |
| 📸 Photos / Gallery | Upload photos by class category via Cloudinary |
| 📅 Events & Calendar | Add / edit / delete upcoming events and belt tests |
| 📥 Form Submissions | View all enrollment inquiries from the website |
| ⚙️ Site Settings | Change admin password and other settings |

---

## Technologies Used

| Technology | Purpose |
|-----------|---------|
| HTML5 / CSS3 / JavaScript | Core website — no frameworks |
| Firebase Firestore | Database: marquee, photos, events, submissions |
| Firebase Authentication | Admin login security |
| Cloudinary | Photo hosting and uploads |
| Formspree | Contact form → email delivery |
| Google Fonts (Bebas Neue, Rajdhani) | Typography |
| Google Maps | Directions button |

---

## Design System

- **Colors:** Black `#0a0a0a` · Red `#c8102e` · Gold `#d4a017`
- **Fonts:** Bebas Neue (headings) · Rajdhani (body)
- **Animations:** Scroll fade-in, hero ring spin, marquee ticker, carousel auto-advance
- **Responsive:** Mobile hamburger menu with full mobile nav

---

## Setup & Configuration (To Go Live)

### Step 1 — Firebase Setup
1. Go to [firebase.google.com](https://firebase.google.com) → create a project
2. Enable **Firestore Database** (Production mode)
3. Enable **Authentication** → Email/Password
4. Create your admin user: Authentication → Users → Add user
5. Replace the placeholder config in **both** `index.html` and `admin.html`:

```javascript
const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};
```

### Firestore Security Rules
In Firestore → Rules, paste this:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /photos/{doc}    { allow read: if true; allow write: if request.auth != null; }
    match /marquee/{doc}   { allow read: if true; allow write: if request.auth != null; }
    match /events/{doc}    { allow read: if true; allow write: if request.auth != null; }
    match /config/{doc}    { allow read: if true; allow write: if request.auth != null; }
    match /submissions/{doc} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

### Step 2 — Formspree Setup
1. Go to [formspree.io](https://formspree.io) → create a free account
2. Create a new form → copy your Form ID (e.g. `xwkgabcd`)
3. In `index.html`, replace:
```
https://formspree.io/f/YOUR_FORM_ID
```

### Step 3 — Cloudinary Setup (photo uploads)
1. Go to [cloudinary.com](https://cloudinary.com) → create a free account
2. Go to Settings → Upload → Upload Presets → Add preset
   - Name: `keta_unsigned` · Signing Mode: **Unsigned** · Folder: `keta`
3. In `admin.html`, replace:
```javascript
const CLOUDINARY_CLOUD  = "YOUR_CLOUD_NAME";
const CLOUDINARY_PRESET = "keta_unsigned";
```

### Step 4 — Deploy to GitHub Pages
```bash
git init
git add .
git commit -m "Initial KETA website"
git remote add origin https://github.com/YOUR_USERNAME/REPO.git
git branch -M main
git push -u origin main
```
In GitHub → Settings → Pages → Source: main / (root) → Custom domain: `keystonetaekwondo.com`

### Step 5 — DNS (Namecheap)
Add these A records in your domain's Advanced DNS:

| Type  | Host | Value |
|-------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR_USERNAME.github.io |

---

## Development Changes Log

| Change | Description |
|--------|-------------|
| Nav links → right side | Added `margin-left: auto` to `.nav-links` in style.css |
| Marquee overlap fixed | Changed marquee to `position: fixed; top: 0` and navbar to `top: 38px` |
| Admin button added | Added gold Admin button to desktop navbar linking to admin.html |
| Directions button added | Added green 📍 Directions button to navbar and contact section (opens Google Maps) |
| Free Trial button | Added red Free Trial button to desktop navbar |
| CSS path bug fixed | Corrected `css/style.css` → `style.css` and `css/admin.css` → `admin.css` |
| Admin CSS path fixed | Admin login page now loads styles correctly |

---

## Security Notes

- Firebase API keys for web apps are **safe to be public** — security is enforced by Firestore Rules
- Admin credentials are managed entirely through Firebase Authentication
- No hardcoded passwords anywhere in the codebase
- Contact form uses a honeypot field to block spam bots

---

## Support / Contact

**Keystone Taekwondo Academy**
374 East Penn Drive, Enola, Pennsylvania 17025
📞 701-203-6535 · 701-203-6777
✉ keystonetaekwondo@gmail.com
🌐 keystonetaekwondo.com
