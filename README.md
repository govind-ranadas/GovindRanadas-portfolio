# Govind Ranadas — Portfolio Website
## Setup & Hosting Guide

---

## STEP 1 — Install Required Tools

1. **Node.js** → https://nodejs.org (download the LTS version, install it, then restart your computer)
2. **Angular CLI** → open terminal / command prompt and run:
   ```
   npm install -g @angular/cli
   ```
3. **Git** → https://git-scm.com/downloads

---

## STEP 2 — Set Up the Project

1. Unzip this project into a folder, e.g. `C:\govind-portfolio` (keep the path short, no spaces)
2. Open terminal in that folder
3. Run:
   ```
   npm install
   ```
   (installs all dependencies — takes 1-2 minutes)

---

## STEP 3 — Run Locally (Preview)

```
ng serve
```
Then open browser and go to: **http://localhost:4200**

---

## STEP 4 — Host for FREE on GitHub Pages

### 4a. Create a GitHub account (if not already)
- https://github.com

### 4b. Create a new repository
- Name it: `govind-portfolio`
- Set to **Public**
- Do NOT add README, .gitignore, or license

### 4c. Create a .gitignore BEFORE pushing (important!)
```
echo node_modules/> .gitignore
echo dist/>> .gitignore
echo .angular/>> .gitignore
```

### 4d. Push your code to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/govind-portfolio.git
git push -u origin main
```

### 4e. Deploy to GitHub Pages
```
npm run deploy
```

### 4f. Enable GitHub Pages
- Go to repo → Settings → Pages
- Source: Deploy from a branch
- Branch: `gh-pages` → `/ (root)` → Save

Wait 2-3 minutes, then visit:
**https://YOUR-USERNAME.github.io/govind-portfolio**

---

## Updating Content Later

| What to change | File to edit |
|---|---|
| Name, bio, socials | `src/app/components/hero/hero.component.ts` / `.html` |
| About section text | `src/app/components/about/about.component.html` |
| Skills | `src/app/components/skills/skills.component.ts` |
| Work experience | `src/app/components/experience/experience.component.ts` |
| Projects | `src/app/components/projects/projects.component.ts` |
| Contact info | `src/app/components/contact/contact.component.ts` |
| Profile photo | Replace `src/assets/profile.jpg` |
| Resume PDF | Replace `src/assets/Govind_Ranadas_Resume.pdf` |

After any change, run `npm run deploy` again to push the update live.
