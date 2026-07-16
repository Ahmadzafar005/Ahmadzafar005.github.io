# CLAUDE.md — Muhammad Ahmad Zafar Portfolio

Project context for Claude Code. Read this first when working on this repo.

---

## What this is
A free, static, single-page **video portfolio** for recruiters. Dark theme + violet accent,
modeled on the style of redoyanulhaque.me. All project demos are Google Drive videos embedded
as view-only. No build tools, no framework — plain HTML/CSS/JS.

- **Live URL:** https://ahmadzafar005.github.io
- **GitHub repo:** https://github.com/Ahmadzafar005/Ahmadzafar005.github.io
  (root user-site `<username>.github.io`, GitHub Pages from `main` branch, `/` root)
- **Local path:** `J:\Cursor Projects\Portfolio_Projects`
- **Cost:** $0 (GitHub Pages + Google Drive), free forever.

## Owner
- **Name:** Muhammad Ahmad Zafar
- **Titles:** AI-Driven Full-Stack Developer · Game Developer · Technical Project Manager
- **Email:** ahmadzafar005@gmail.com · **Phone:** +92 300 4344489
- **Location:** Lahore, Pakistan
- **LinkedIn:** https://www.linkedin.com/in/ahmad-zafar-686254b0
- **GitHub:** https://github.com/Ahmadzafar005
- **Education:** BSCS, Qarshi University (2011–2015)

---

## File structure
```
index.html    Section skeleton + Google Fonts links + preloader markup
styles.css    Full design system, all sections, animations, responsive
data.js       ALL content lives here in the SITE object — edit this to change anything
main.js       Renders every section from SITE; preloader, rotating title, scroll-spy, reveal
resume.pdf    The résumé, linked by the Resume / Download-CV buttons
CLAUDE.md     This file
```

**Key principle:** the site is data-driven. `main.js` builds the DOM from `SITE` in `data.js`.
To change content you almost always edit only `data.js` — no HTML/JS logic changes needed.

## The SITE object (data.js)
```
SITE = {
  name, initials,
  titles: [...],              // rotating hero titles + marquee
  about, aboutStats: [...],   // About Me paragraph + stat tiles
  whatIDo: [{title, blurb, chips[]}],   // 4 pillar cards
  experience: [{period, role, org, blurb, isEducation?}],  // timeline (newest first; last = education)
  categories: [{name, tag, tech[], videos: [{title, description, driveFileId}]}],  // the 25 videos
  techStack: [...],           // pill grid labels
  contact: {email, phone, location, github, linkedin, resume},
}
```

## The videos (Work section)
25 project videos across 4 categories:
- **2D** (9) · **AR & 3D** (7) · **VR** (3) · **Web3 / WebGL** (6)

Each is a Google Drive file embedded via `https://drive.google.com/file/d/<driveFileId>/preview`
(handled in `main.js` → `createVideoFrame`). `driveFileId` is the part between `/d/` and `/view`
in a Drive share link.

### Adding / changing a video
1. In Drive, share the file: **Anyone with the link → Viewer**, and (folder-level) **uncheck**
   "Viewers can download, print, copy" so the embed has no download button.
2. Copy the link, grab the `FILE_ID`.
3. Add `{ title, description, driveFileId: "FILE_ID" }` to the right category in `SITE.categories`.

### Muting a video (Drive embeds can't be muted by the site)
Drive's `/preview` player has no mute option and JS can't reach into a cross-origin iframe. To mute,
strip the audio from the source file and replace it in Drive:
```
ffmpeg -y -i "input.mp4" -c:v copy -an "muted/input.mp4"   # lossless, drops audio
```
Then re-upload to Drive (fresh upload → new FILE_ID → update it in data.js; "Manage versions" keeps
the same ID but is often greyed out for these files). The **2D and AR videos are already muted**.

### Video thumbnails (`thumbs/`)
Each video card shows a still **thumbnail + play badge** (facade pattern in `main.js` →
`createVideoFrame`); the heavy Drive `/preview` iframe loads only when the visitor clicks. The
thumbnail files live in `thumbs/<FILE_ID>.jpg` — one per video. They are **frames grabbed from the
middle of each video** (not Drive's auto first-frame, which was often a splash/permission/menu
screen). The `<img src>` is derived from `driveFileId`, so **no data.js change is needed** — just
drop the file in `thumbs/`. If a local file is missing, the card falls back to the live Drive
thumbnail URL (`https://drive.google.com/thumbnail?id=<FILE_ID>&sz=w1000`) automatically.

Regenerate a mid-video frame (ffmpeg + ffprobe required; stream-seeks over HTTP, no full download):
```bash
ID=FILE_ID
# Resolve the Drive download URL (handles the large-file "virus scan" confirm page):
PAGE=$(curl -sL -c ck.txt -b ck.txt "https://drive.google.com/uc?export=download&id=$ID")
UUID=$(echo "$PAGE" | grep -oE 'name="uuid" value="[^"]*"' | sed -E 's/.*value="([^"]*)".*/\1/')
URL="https://drive.usercontent.google.com/download?id=$ID&export=download&confirm=t&uuid=$UUID"
DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$URL")
MID=$(awk "BEGIN{printf \"%.2f\", $DUR/2}")
ffmpeg -y -v error -ss "$MID" -i "$URL" -frames:v 1 -q:v 3 -vf "scale='min(1000,iw)':-1" "thumbs/$ID.jpg"
```
If the midpoint lands on a menu/black frame, re-run with a different fraction (e.g. `$DUR*0.4`).
The full batch script used for all 25 is in the session scratchpad (`gen_thumbs.sh`).

---

## Design system (styles.css)
- Dark: bg `#08080c`, surface `#12131a`, border `#23232f`, text `#f5f6fa`, muted `#9aa1b0`
- Accent: violet `#8b5cf6` → `#a855f7` (gradient text, pills, active states, blurred glow blobs)
- Fonts: **Space Grotesk** (display) + **Inter** (body), via Google Fonts `<link>`
- Motion: animated preloader, rotating hero title, CSS marquee, IntersectionObserver scroll-reveal
  (`.reveal` → `.in-view`) and category scroll-spy. All respect `prefers-reduced-motion`.

## Sections (top → bottom)
Preloader → sticky nav → hero (rotating title + marquee) → About → What I Do (4 pillars) →
Experience timeline → Work (category buttons + video cards) → Tech Stack (pills) → Contact → footer.

---

## Deploy / update workflow
`gh` CLI is authenticated as **Ahmadzafar005**. Standard update:
```bash
git add -A
git commit -m "your message"
git push
```
GitHub Pages auto-rebuilds (~1 min). Check build status:
```bash
gh api "repos/Ahmadzafar005/Ahmadzafar005.github.io/pages/builds/latest"   # status: built
```

### PowerShell gotchas (this is a Windows repo)
- `git push`/`gh` print to stderr; PowerShell wraps that as a red "error" even on success —
  check the actual output line (e.g. `abc..def main -> main`) to confirm.
- Commit messages: use a single-quoted here-string `@'...'@` with the closing `'@` at column 0.
  Avoid double quotes inside the message (they break native-arg parsing).

## Verifying changes (headless browser)
The site renders client-side, so a plain fetch sees only the shell. Use Playwright (installed in the
session scratchpad) to render + screenshot the local `file://` build or the live URL. Note: Google
Drive iframes return 403 in headless — that's expected; they play fine in a real browser.

## Open items / notes
- Contact social shows **LinkedIn only** (GitHub intentionally hidden via empty `contact.github`).
- Line-ending warnings on commit (LF→CRLF) are harmless.
