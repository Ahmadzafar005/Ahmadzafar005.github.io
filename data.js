/* =============================================================
   ALL SITE CONTENT LIVES HERE.
   Edit this file to change any text, projects, experience, or
   tech — main.js renders everything from the SITE object below.

   To add a project video: find its category in SITE.categories
   and add { title, description, driveFileId }.
   (driveFileId = the part between /d/ and /view in the Drive link.)
   ============================================================= */

const SITE = {
  name: "Muhammad Ahmad Zafar",
  initials: "AZ",

  // Rotating titles shown in the hero.
  titles: [
    "AI-Driven Full-Stack Developer",
    "Game Developer",
    "Technical Project Manager",
  ],

  about:
    "I'm a technologist from Lahore, Pakistan with 10+ years across game development, AR/VR, " +
    "and the web. I build immersive experiences and military-grade training simulators, lead " +
    "engineering teams, and ship complex projects on time and within budget — from 2D kids' " +
    "games to metaverse and Web3 integrations. Code is craft; interactive worlds are the canvas.",

  aboutStats: [
    { value: "10+", label: "Years experience" },
    { value: "25+", label: "Projects shipped" },
    { value: "AR·VR·Web3", label: "Specialties" },
    { value: "BSCS", label: "Qarshi University" },
  ],

  // "What I Do" pillar cards.
  whatIDo: [
    {
      title: "Game Development",
      blurb:
        "Designing and building 2D & 3D games in Unity across mobile, WebGL, and standalone platforms.",
      chips: ["Unity 3D", "C#", "2D", "3D", "Mobile", "WebGL", "Standalone"],
    },
    {
      title: "AR / VR & Immersive",
      blurb:
        "Crafting AR/VR training simulators, metaverse worlds, and real-time 3D experiences with Unity & Unreal.",
      chips: ["AR", "VR", "Metaverse", "RT3D", "Simulations", "Unreal", "XR"],
    },
    {
      title: "AI-Driven Full-Stack & Web3",
      blurb:
        "Building web apps and connecting them with RESTful APIs, Web3/blockchain, third-party services, and SSO.",
      chips: ["React", "Node.js", "RESTful API", "Web3", "SSO", "Integrations"],
    },
    {
      title: "Technical Project Management",
      blurb:
        "Leading teams with Agile workflows to deliver complex, high-quality products on time and within budget.",
      chips: ["Project Management", "Agile", "Jira", "Zoho", "Team Leadership", "Problem Solving"],
    },
  ],

  // Career timeline (newest first). The last entry is education.
  experience: [
    {
      period: "Oct 2024 — Present",
      role: "Research & Development Engineer",
      org: "Alpha Ptech",
      blurb:
        "Develop military-grade training simulators and real-time data intelligence dashboards for Army clients — end-to-end across AR, VR, Web, and Standalone with offline-first architectures.",
    },
    {
      period: "Apr 2024 — Present",
      role: "Technical Project Manager",
      org: "Birz Studio",
      blurb:
        "Deliver complex projects on time, within budget, and at high quality through project planning, technical oversight, and proactive problem-solving.",
    },
    {
      period: "Dec 2023 — Apr 2024",
      role: "Team Lead",
      org: "Game District",
      blurb:
        "Improved team processes and performance by 20% by streamlining Agile workflows and introducing new project-management tooling; mentored developers.",
    },
    {
      period: "Sep 2023 — Dec 2023",
      role: "RT3D Manager",
      org: "Vertex Motion Studios",
      blurb:
        "Oversaw development and management of real-time 3D projects and teams, building interactive experiences with Unity, Unreal, and VR/AR.",
    },
    {
      period: "Jan 2021 — Sep 2023",
      role: "Team Lead · Head of Unity Department",
      org: "Big Immersive",
      blurb:
        "Managed projects and teams and planned architectures; delivered Metaverse and game integrations across WebGL, AR, and VR from Unity.",
    },
    {
      period: "Jan 2018 — Dec 2020",
      role: "Lead Game Developer",
      org: "Big Immersive",
      blurb:
        "Led timelines, task management, code reviews, and hands-on development across VR, AR, Mobile, and Web3 platforms.",
    },
    {
      period: "Jan 2015 — Dec 2017",
      role: "Senior Game Developer",
      org: "Unit M",
      blurb:
        "Built 2D kids' apps and 3D endless-runner games from scratch — including fan favorites Princess Taylor and Piñata — shipping to production on deadline.",
    },
    {
      period: "Oct 2014 — Dec 2015",
      role: "Unity 3D Developer",
      org: "Eureka Studios",
      blurb:
        "Developed games for smartwatches and mobile (Android & iOS), and built iOS apps using Swift.",
    },
    {
      period: "Jun 2014 — Sep 2014",
      role: "Junior Web Developer",
      org: "Wrangler Studios",
      blurb: "Started as an intern and moved into a Junior Web Developer role.",
    },
    {
      period: "2011 — 2015",
      role: "BSCS — Bachelor of Science in Computer Science",
      org: "Qarshi University",
      blurb: "Education.",
      isEducation: true,
    },
  ],

  // Project videos, grouped by category (reused from the live site).
  categories: [
    {
      name: "2D",
      tag: "2D Games",
      tech: ["Unity 3D", "C#", "2D", "Mobile"],
      videos: [
        { title: "Car Clean Up", description: "A 2D cleaning game where players scrub and restore a dirty car.", driveFileId: "1WGS1gX207DQyZWWZE4vOwaKO-zeYWbWA" },
        { title: "Coloring Book", description: "An interactive coloring game with a paint-and-fill mechanic.", driveFileId: "1yTQtmSUxHG5g_XUu8LvcHGMt3C31NvjH" },
        { title: "Count to Fill 10", description: "An educational counting game that teaches numbers up to ten.", driveFileId: "1UCPuX0k1T5XcrZajVk64Sm4LPd6SRfj-" },
        { title: "Emoji Bubble", description: "A casual bubble-popping game built around emoji targets.", driveFileId: "1VL2Yzy35lXLI3-kd2AXmrKSr8W3BWB6v" },
        { title: "Fidget Spinner", description: "A physics-based fidget spinner toy with spin and momentum.", driveFileId: "13oD3gx-yh81V8Wxv1F5aDnJpDv-HBepx" },
        { title: "Opposite", description: "A learning game that matches words with their opposites.", driveFileId: "1vqvCqQCT0tAIBwUmqVgAEpdx-LiIfueC" },
        { title: "Parts of Speech", description: "An English-learning game for identifying parts of speech.", driveFileId: "17IqfYHc0cqAYyXWaxZG1nOySTg06Mi1P" },
        { title: "Piñata Master", description: "A tap-and-smash game where players break open piñatas.", driveFileId: "12EDrXRxohAus763hODYCGWi8FOSn0UDj" },
        { title: "Sentences", description: "A word-arrangement game for building correct sentences.", driveFileId: "1-K4XDfWBhZGDGoBoxwdpA0zim-8R7p-7" },
      ],
    },
    {
      name: "AR & 3D",
      tag: "Augmented Reality",
      tech: ["Unity 3D", "C#", "ARKit", "ARCore"],
      videos: [
        { title: "Burger Maker", description: "An AR cooking experience where players assemble burgers in real space.", driveFileId: "1bNxKoAYEo8mj8Y6dpGatbYOZ_IzFTuNb" },
        { title: "Cyber Run", description: "A fast-paced AR runner set in a cyber-themed environment.", driveFileId: "10ikkU_sLw9chrZvOFAkLbdHx0VgxtcG-" },
        { title: "Face Filters Prototype (iOS)", description: "An iOS AR face-filter prototype using real-time face tracking.", driveFileId: "1VXIoluaSuxqRUYtqZZA_Sirk1EK6C-k2" },
        { title: "Mojo Shooter", description: "An AR shooting game with target-based gameplay in the real world.", driveFileId: "1AWijwllPEHZq50KKYT03pizvFaoHGKTr" },
        { title: "Stadion", description: "An AR sports/stadium experience placing 3D scenes into your space.", driveFileId: "1G2OgPylEW4kONgQ3upgiu5kK6HUBk3sy" },
        { title: "Switch the Lanes", description: "An AR lane-switching arcade game with reaction-based controls.", driveFileId: "1ek7bP8L3BMNDQUj-y2Gcl6eOAmpI80m_" },
        { title: "Buildings Models Preview", description: "A preview of 3D building models rendered in an AR environment.", driveFileId: "1cHLHbhv1biSllVm45pyjdmAjk7vyH1Ny" },
      ],
    },
    {
      name: "VR",
      tag: "Virtual Reality",
      tech: ["Unity 3D", "C#", "XR", "Oculus"],
      videos: [
        { title: "Agelore's Fantasy — Demo 1", description: "An immersive VR fantasy adventure experience.", driveFileId: "1O99Ijy2ekT9QS-TaJKtrz4KUQp4ji9o3" },
        { title: "Agelore's Fantasy — Demo 2", description: "A later build of the VR fantasy adventure showing new gameplay.", driveFileId: "1V-qCkIbYyUv0xtZgRiPVHP8z4idqI7Q7" },
        { title: "CPR Simulation", description: "A VR medical training simulation for practicing CPR procedures.", driveFileId: "1YJ2JQDlHto4SbisFCVsOsqGWAkCeVO3R" },
      ],
    },
    {
      name: "Web3 / WebGL",
      tag: "Web3 / WebGL",
      tech: ["Unity WebGL", "Web3.js", "Blockchain", "Metaverse"],
      videos: [
        { title: "Gamers Lounge Experience — 1", description: "A WebGL multiplayer social lounge experience running in the browser.", driveFileId: "1Nn4rTCgyi--D1d7yNoC0Xnc4HGdT743N" },
        { title: "Gamers Lounge Experience — 2", description: "A second walkthrough of the WebGL social lounge experience.", driveFileId: "1f6qIfr1xJiqdAHXT2_05QvHpHfNWyBff" },
        { title: "Jetpack Hyperleague — Multiplayer", description: "The multiplayer mode of a WebGL jetpack racing game.", driveFileId: "1HclDpL0mC92loe3GLoejxMkeNnxQH3fL" },
        { title: "Jetpack Hyperleague — Single Player", description: "The single-player mode of the WebGL jetpack racing game.", driveFileId: "1DX7V6WC5ci-qCV_18JsM-Jh925ZU0AVj" },
        { title: "Virtua Metaverse — Cardano Island Land Claim (1)", description: "A Web3 metaverse land-claim flow on the Cardano blockchain.", driveFileId: "1qCfmjTkDBXvA2Xdlmi-n7ZEZLMwRx3p2" },
        { title: "Virtua Metaverse — Cardano Island Land Claim (2)", description: "A second demo of the Cardano-based metaverse land-claim experience.", driveFileId: "1WXLn_W_Zka5qq-vusmqU_HYoiL1XpYDj" },
      ],
    },
  ],

  // Glowing pill grid.
  techStack: [
    "Unity 3D", "C#", "Unreal", "AR", "VR", "XR", "Metaverse", "RT3D",
    "Web3", "WebGL", "Blockchain", "RESTful API", "API Integrations",
    "Third-Party Integrations", "SSO", "React", "Node.js", "Swift",
    "iOS", "Android", "GitHub", "Plastic SCM", "Jira", "Zoho", "Agile",
  ],

  contact: {
    email: "ahmadzafar005@gmail.com",
    phone: "+92 300 4344489",
    location: "Lahore, Pakistan",
    github: "", // hidden — LinkedIn shown instead
    linkedin: "https://www.linkedin.com/in/ahmad-zafar-686254b0",
    resume: "resume.pdf",
  },
};
