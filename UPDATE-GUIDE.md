# 📖 Portfolio Update Guide (Owner's Manual)

A plain-English manual so **you** can update your portfolio yourself — no coding background needed.

- **Your live site:** https://ahmadzafar005.github.io
- **Your code (on GitHub):** https://github.com/Ahmadzafar005/Ahmadzafar005.github.io
- **On your PC:** `J:\Cursor Projects\Portfolio_Projects`

> 💡 **The one thing to remember:** almost everything you'll ever want to change is in **one file
> called `data.js`**. Change the text, save, publish — the website updates itself.

---

## PART 1 — What each file does

| File | What it's for | Will you edit it? |
|------|---------------|-------------------|
| **`data.js`** | ALL your content — name, titles, About text, projects/videos, experience, skills, contact | ✅ **Yes — this is the main one** |
| `styles.css` | Colors, fonts, spacing (the "look") | 🎨 Only to change colors |
| `resume.pdf` | Your CV (the Resume / Download buttons open this) | 📄 Replace when your CV updates |
| `index.html` | Page skeleton | ⚠️ Rarely / never |
| `main.js` | The engine that builds the page from `data.js` | ❌ Don't touch |

### ⚠️ 3 safety rules (read once)
1. **Only change the words inside the quotes** — e.g. in `title: "Car Clean Up"`, only edit
   `Car Clean Up`. Leave the `title:`, quotes, and comma alone.
2. **Every comma, quote `"`, and curly brace `{ }` matters.** Deleting one by accident can make the
   page go blank. When in doubt, change less.
3. **You can always undo** (see Part 4). Nothing you do is permanent, so don't be afraid to try.

---

## PART 2 — How to make a change and publish it

You have **two ways**. Method A (website) is easiest and needs nothing installed.

### ✅ Method A — Edit on the GitHub website (recommended, works from any computer)

**To change text in an existing file (e.g. `data.js`):**
1. Go to **https://github.com/Ahmadzafar005/Ahmadzafar005.github.io**
2. Click the file you want to edit (e.g. `data.js`).
3. Click the **pencil ✏️ icon** (top-right of the file) → "Edit this file".
4. Make your change in the text.
5. Scroll down → green **"Commit changes"** button → **"Commit changes"** again.
6. Wait ~1 minute, then open your site and press **Ctrl + F5** to see it.

**To upload a new file (e.g. a new `resume.pdf`):**
1. On the repo page → **"Add file"** → **"Upload files"**.
2. Drag the file in (same name = it replaces the old one) → **"Commit changes"**.

### 💻 Method B — Edit on your PC with git

1. Open the files in `J:\Cursor Projects\Portfolio_Projects` (edit with Notepad, VS Code, etc.).
2. Save your changes.
3. Open a terminal in that folder and run:
   ```
   git add -A
   git commit -m "describe what you changed"
   git push
   ```
> **PowerShell note:** after `git push` you may see **red text** — that's normal. If the last line
> says something like `main -> main`, it worked. To write a multi-line commit message in PowerShell,
> use a single-quoted here-string:
> ```
> git commit -m @'
> your message here
> '@
> ```

### Seeing your change live
After publishing (either method), GitHub takes **~1 minute** to update the site. Then open
**https://ahmadzafar005.github.io** and press **Ctrl + F5** (hard refresh) — a normal refresh may
show the old cached version.

---

## PART 3 — Step-by-step for common changes

All of these are edits inside **`data.js`** unless it says otherwise.

### ➕ Add a new project video
**First, prep the video in Google Drive:**
1. Right-click the video → **Share** → set **"Anyone with the link" → Viewer**.
2. Click the **⚙️ gear** in the Share box → **uncheck** "Viewers can download, print, copy"
   (do this once at the **folder** level and every video inside inherits it — this removes the
   download button).
3. Copy the link. It looks like `https://drive.google.com/file/d/`**`THIS_PART`**`/view?...`
   The bold part (between `/d/` and `/view`) is the **FILE_ID**.

**Then add it to `data.js`:** find the category (e.g. `name: "2D"`) and add a new block inside its
`videos: [ ... ]` list:
```js
{ title: "My New Game", description: "One line about the game.", driveFileId: "PASTE_FILE_ID_HERE" },
```
👉 Make sure there's a **comma** after the previous `}` and after your new `}` (unless it's the last one).

### ➖ Remove a video
Delete its whole `{ title: ..., description: ..., driveFileId: ... },` line. Done.

### 🔀 Reorder videos or categories
Cut and paste the blocks into the order you want. Videos are numbered automatically (01, 02, …),
so they renumber themselves. Category buttons follow the order of the categories in the file.

### 🗂️ Add a whole new category
Copy an existing category block and change it:
```js
{
  name: "Mobile",
  tag: "Mobile Games",
  tech: ["Unity 3D", "C#", "Android", "iOS"],
  videos: [
    { title: "Game One", description: "…", driveFileId: "FILE_ID" },
  ],
},
```
A matching button appears in the Work section automatically.

### ✏️ Change a video's title or description
Edit the words inside the quotes for that video's `title` or `description`.

### 🧑 Change your name or the rotating job titles
Near the top of `data.js`:
```js
name: "Muhammad Ahmad Zafar",
titles: [
  "AI-Driven Full-Stack Developer",
  "Game Developer",
  "Technical Project Manager",
],
```
Edit the name, or add/remove/reword the rotating titles.

### 📝 Edit the About paragraph or the stat tiles
```js
about: "…your bio…",
aboutStats: [
  { value: "10+", label: "Years experience" },
  ...
],
```

### 🧩 Edit the "What I Do" cards
In the `whatIDo: [ ... ]` list, each card is `{ title, blurb, chips: [...] }`. Edit the title,
the one-line blurb, or the list of skill chips.

### 📅 Add or edit an Experience timeline entry
In `experience: [ ... ]`, each job is:
```js
{ period: "Jan 2025 — Present", role: "Your Role", org: "Company", blurb: "What you did." },
```
Newest goes at the **top**. (The education entry has `isEducation: true`.)

### 🏷️ Edit the Tech Stack pills
In `techStack: [ ... ]`, add or remove quoted words, e.g. `"Unity 3D", "C#", "Blender"`.

### 📇 Change contact info or social links
```js
contact: {
  email: "ahmadzafar005@gmail.com",
  phone: "+92 300 4344489",
  location: "Lahore, Pakistan",
  github: "",                       // leave "" to hide GitHub
  linkedin: "https://www.linkedin.com/in/ahmad-zafar-686254b0",
  resume: "resume.pdf",
},
```
To show GitHub again, put its URL back in the `github` quotes. Empty `""` = hidden.

### 📄 Replace your résumé (CV)
Upload a new **`resume.pdf`** (Method A: Add file → Upload, same name; or Method B: replace the
file locally and push). The Resume / Download-CV buttons will point to the new one.

### 🔇 Mute a video's audio
The website can't mute a Google Drive video — you have to remove the audio from the file and
re-upload it. On a PC with **ffmpeg** installed:
```
ffmpeg -y -i "video.mp4" -c:v copy -an "video-muted.mp4"
```
(`-an` = drop audio; `-c:v copy` = no quality loss, takes seconds.) Then upload the muted file to
Drive as a **new** file, get its new FILE_ID, and paste that ID into `data.js`.

### 🎨 Change the colors (in `styles.css`)
At the very top of `styles.css` is a `:root { ... }` block. Change these hex codes:
```css
--bg: #08080c;        /* page background */
--accent: #8b5cf6;    /* main purple */
--accent-2: #a855f7;  /* lighter purple (gradients) */
--text: #f5f6fa;      /* main text */
```
Pick colors at https://colorhexa.com if you want new ones.

---

## PART 4 — Undo a mistake & troubleshooting

### ⏪ How to undo
You can always go back to a working version:
- **On GitHub:** repo → **"Commits"** (clock icon) → click an older working commit → **"..." →
  Revert**, or use "Browse files" to copy the old content back.
- **On your PC:** `git revert HEAD` (undoes the last change) then `git push`.

### 🛠️ Troubleshooting

| Problem | Likely cause & fix |
|---------|--------------------|
| A video shows an **error** instead of playing | That file isn't shared publicly. In Drive, set it to **Anyone with the link → Viewer**. |
| The **whole page is blank** after an edit | A typo in `data.js` (a missing comma, quote, or brace). Undo (Part 4) or carefully re-check your last edit. Press **F12** in the browser → **Console** tab to see the error line. |
| My change **isn't showing** | Wait ~1 min for GitHub to rebuild, then **Ctrl + F5**. GitHub repo → **Actions** tab shows the build status. |
| A video **still has sound** | You must re-upload a muted copy (see "Mute a video's audio") — the site can't mute it. |
| Download button still appears on a video | In Drive, uncheck "Viewers can download, print, copy" at the folder level. |

---

## PART 5 — Changelog

A record of what's been done, and a place to log your own future changes.

### History
- **2026-07-15 — Initial site.** Built a static video portfolio (`index.html`, `styles.css`,
  `projects.js`); 25 project videos across 4 categories (2D, AR & 3D, VR, Web3/WebGL), embedded
  from Google Drive as view-only.
- **2026-07-15 — Category buttons.** Added a sticky nav with jump-to buttons + active highlighting.
- **2026-07-15 — Muted audio.** Removed audio from the 2D and AR videos (ffmpeg) and re-uploaded.
- **2026-07-15 — Went live.** Deployed free to GitHub Pages at https://ahmadzafar005.github.io.
- **2026-07-15 — Full redesign.** Rebuilt in a dark + purple animated style (preloader, rotating
  hero title, About, What I Do, experience timeline, tech stack, contact). Split content into
  `data.js` and rendering into `main.js`. Added `resume.pdf`.
- **2026-07-15 — Contact.** Showed LinkedIn instead of GitHub in the social links.
- **2026-07-15 — Wording.** Emphasized "AI-Driven Full-Stack" in the title, What-I-Do card, and blurb.

### Template — copy this for each future change
```
- YYYY-MM-DD — <short title>. <What you changed and why.>
```
Example:
```
- 2026-08-01 — Added new VR project "Space Walk" and updated my job title.
```

---

*You've got this. Change a little, publish, refresh — and if anything breaks, just undo. 🚀*
