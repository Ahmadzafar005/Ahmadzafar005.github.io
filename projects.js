/* =============================================================
   EDIT THIS LIST TO ADD / REMOVE CATEGORIES AND VIDEOS.

   Structure:  categories -> each category has a name + a list of videos.
   For each video you need:
     - title:        the video / project name
     - description:  a short sentence or two
     - driveFileId:  the ID from that video's Google Drive link.

   HOW TO GET driveFileId (do this per video):
     1. Open the video's folder in Google Drive.
     2. Right-click the video -> "Share" -> "Copy link".
        (Make sure General access = "Anyone with the link", role = Viewer.)
     3. The link looks like:
          https://drive.google.com/file/d/FILE_ID/view?usp=sharing
        Copy the part between  /d/  and  /view  -> that's the FILE_ID.

   VIEW-ONLY / NO DOWNLOAD:
     In the Share dialog, open settings (gear icon) and UNCHECK
     "Viewers and commenters can see the option to download, print,
     and copy." Doing this at the FOLDER level applies it to every
     video inside. That removes the download button in the player.
   ============================================================= */

const categories = [
  {
    name: "2D",
    videos: [
      {
        title: "Car Clean Up",
        description: "A 2D cleaning game where players scrub and restore a dirty car.",
        driveFileId: "1WGS1gX207DQyZWWZE4vOwaKO-zeYWbWA",
      },
      {
        title: "Coloring Book",
        description: "An interactive coloring game with a paint-and-fill mechanic.",
        driveFileId: "1yTQtmSUxHG5g_XUu8LvcHGMt3C31NvjH",
      },
      {
        title: "Count to Fill 10",
        description: "An educational counting game that teaches numbers up to ten.",
        driveFileId: "1UCPuX0k1T5XcrZajVk64Sm4LPd6SRfj-",
      },
      {
        title: "Emoji Bubble",
        description: "A casual bubble-popping game built around emoji targets.",
        driveFileId: "1VL2Yzy35lXLI3-kd2AXmrKSr8W3BWB6v",
      },
      {
        title: "Fidget Spinner",
        description: "A physics-based fidget spinner toy with spin and momentum.",
        driveFileId: "13oD3gx-yh81V8Wxv1F5aDnJpDv-HBepx",
      },
      {
        title: "Opposite",
        description: "A learning game that matches words with their opposites.",
        driveFileId: "1vqvCqQCT0tAIBwUmqVgAEpdx-LiIfueC",
      },
      {
        title: "Parts of Speech",
        description: "An English-learning game for identifying parts of speech.",
        driveFileId: "17IqfYHc0cqAYyXWaxZG1nOySTg06Mi1P",
      },
      {
        title: "Piñata Master",
        description: "A tap-and-smash game where players break open piñatas.",
        driveFileId: "12EDrXRxohAus763hODYCGWi8FOSn0UDj",
      },
      {
        title: "Sentences",
        description: "A word-arrangement game for building correct sentences.",
        driveFileId: "1-K4XDfWBhZGDGoBoxwdpA0zim-8R7p-7",
      },
    ],
  },
  {
    name: "AR & 3D",
    videos: [
      {
        title: "Burger Maker",
        description: "An AR cooking experience where players assemble burgers in real space.",
        driveFileId: "1bNxKoAYEo8mj8Y6dpGatbYOZ_IzFTuNb",
      },
      {
        title: "Cyber Run",
        description: "A fast-paced AR runner set in a cyber-themed environment.",
        driveFileId: "10ikkU_sLw9chrZvOFAkLbdHx0VgxtcG-",
      },
      {
        title: "Face Filters Prototype (iOS)",
        description: "An iOS AR face-filter prototype using real-time face tracking.",
        driveFileId: "1VXIoluaSuxqRUYtqZZA_Sirk1EK6C-k2",
      },
      {
        title: "Mojo Shooter",
        description: "An AR shooting game with target-based gameplay in the real world.",
        driveFileId: "1AWijwllPEHZq50KKYT03pizvFaoHGKTr",
      },
      {
        title: "Stadion",
        description: "An AR sports/stadium experience placing 3D scenes into your space.",
        driveFileId: "1G2OgPylEW4kONgQ3upgiu5kK6HUBk3sy",
      },
      {
        title: "Switch the Lanes",
        description: "An AR lane-switching arcade game with reaction-based controls.",
        driveFileId: "1ek7bP8L3BMNDQUj-y2Gcl6eOAmpI80m_",
      },
      {
        title: "Buildings Models Preview",
        description: "A preview of 3D building models rendered in an AR environment.",
        driveFileId: "1cHLHbhv1biSllVm45pyjdmAjk7vyH1Ny",
      },
    ],
  },
  {
    name: "VR",
    videos: [
      {
        title: "Agelore's Fantasy — Demo 1",
        description: "An immersive VR fantasy adventure experience.",
        driveFileId: "1O99Ijy2ekT9QS-TaJKtrz4KUQp4ji9o3",
      },
      {
        title: "Agelore's Fantasy — Demo 2",
        description: "A later build of the VR fantasy adventure showing new gameplay.",
        driveFileId: "1V-qCkIbYyUv0xtZgRiPVHP8z4idqI7Q7",
      },
      {
        title: "CPR Simulation",
        description: "A VR medical training simulation for practicing CPR procedures.",
        driveFileId: "1YJ2JQDlHto4SbisFCVsOsqGWAkCeVO3R",
      },
    ],
  },
  {
    name: "Web3 / WebGL",
    videos: [
      {
        title: "Gamers Lounge Experience — 1",
        description: "A WebGL multiplayer social lounge experience running in the browser.",
        driveFileId: "1Nn4rTCgyi--D1d7yNoC0Xnc4HGdT743N",
      },
      {
        title: "Gamers Lounge Experience — 2",
        description: "A second walkthrough of the WebGL social lounge experience.",
        driveFileId: "1f6qIfr1xJiqdAHXT2_05QvHpHfNWyBff",
      },
      {
        title: "Jetpack Hyperleague — Multiplayer",
        description: "The multiplayer mode of a WebGL jetpack racing game.",
        driveFileId: "1HclDpL0mC92loe3GLoejxMkeNnxQH3fL",
      },
      {
        title: "Jetpack Hyperleague — Single Player",
        description: "The single-player mode of the WebGL jetpack racing game.",
        driveFileId: "1DX7V6WC5ci-qCV_18JsM-Jh925ZU0AVj",
      },
      {
        title: "Virtua Metaverse — Cardano Island Land Claim (1)",
        description: "A Web3 metaverse land-claim flow on the Cardano blockchain.",
        driveFileId: "1qCfmjTkDBXvA2Xdlmi-n7ZEZLMwRx3p2",
      },
      {
        title: "Virtua Metaverse — Cardano Island Land Claim (2)",
        description: "A second demo of the Cardano-based metaverse land-claim experience.",
        driveFileId: "1WXLn_W_Zka5qq-vusmqU_HYoiL1XpYDj",
      },
    ],
  },
];

/* =============================================================
   Rendering logic — you normally don't need to touch below here.
   ============================================================= */

function createVideoFrame(driveFileId) {
  const wrap = document.createElement("div");
  wrap.className = "video";

  const hasId = driveFileId && driveFileId !== "PASTE_FILE_ID_HERE";

  if (!hasId) {
    wrap.classList.add("video--empty");
    wrap.textContent =
      "Add this video's Google Drive FILE_ID in projects.js to show it here.";
    return wrap;
  }

  const iframe = document.createElement("iframe");
  iframe.src = "https://drive.google.com/file/d/" + driveFileId + "/preview";
  iframe.setAttribute("allow", "autoplay");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("loading", "lazy");
  iframe.title = "Project video";
  wrap.appendChild(iframe);
  return wrap;
}

function createCard(video) {
  const card = document.createElement("article");
  card.className = "card";

  card.appendChild(createVideoFrame(video.driveFileId));

  const body = document.createElement("div");
  body.className = "card-body";

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = video.title;

  const desc = document.createElement("p");
  desc.className = "card-desc";
  desc.textContent = video.description;

  body.appendChild(title);
  body.appendChild(desc);
  card.appendChild(body);
  return card;
}

// Turn a category name into a URL-safe id, e.g. "AR & 3D" -> "ar-3d".
function slugify(name) {
  return String(name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createCategorySection(category) {
  const section = document.createElement("section");
  section.className = "category";
  section.id = slugify(category.name);

  const heading = document.createElement("h2");
  heading.className = "category-title";
  heading.textContent = category.name;
  section.appendChild(heading);

  const grid = document.createElement("div");
  grid.className = "grid";
  (category.videos || []).forEach((v) => grid.appendChild(createCard(v)));
  section.appendChild(grid);

  return section;
}

function renderCategories() {
  const container = document.getElementById("projects");
  if (!container) return;
  const fragment = document.createDocumentFragment();
  categories.forEach((c) => fragment.appendChild(createCategorySection(c)));
  container.appendChild(fragment);
}

// Build the sticky category buttons that jump to each section.
function renderCategoryNav() {
  const list = document.getElementById("category-nav");
  if (!list) return;
  categories.forEach((c) => {
    const id = slugify(c.name);
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#" + id;
    link.className = "nav-btn";
    link.textContent = c.name;
    link.dataset.target = id;
    li.appendChild(link);
    list.appendChild(li);
  });
}

// Highlight the button for whichever section is currently in view.
function setupScrollSpy() {
  const links = Array.from(document.querySelectorAll(".nav-btn"));
  if (!links.length || !("IntersectionObserver" in window)) return;

  const byId = {};
  links.forEach((l) => (byId[l.dataset.target] = l));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove("is-active"));
          const active = byId[entry.target.id];
          if (active) active.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  document.querySelectorAll(".category").forEach((sec) => observer.observe(sec));
}

document.addEventListener("DOMContentLoaded", function () {
  renderCategoryNav();
  renderCategories();
  setupScrollSpy();
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
});
