/* ======================================================
   PROJECT CONTENT
   Edit titles, stories and image paths in this list.
   ====================================================== */

const projects = [
  {
    id: "mould",
    title: "Diploma Final-Year Injection Mould",
    category: "mechanical",
    credit: "Original design · Manufactured",
    description:
      "Component design, core and cavity, mould construction, " +
      "and physical moulded parts.",
    story: [
      ["The project",
        "For my diploma final-year project at NTTF, I worked on " +
        "an injection mould for a circular plastic component. " +
        "The work connected digital modelling with a manufactured tool " +
        "and the components produced using it."],
      ["My contribution",
        "I created the component geometry and corresponding core and " +
        "cavity, and worked through mould manufacture and assembly."],
      ["The outcome",
        "The photograph shows actual moulded components, including " +
        "the circular recesses and NTTF lettering represented in the CAD. " +
        "The project helped me connect tool geometry with the final part."]
    ],
    images: [
      ["images/circular-part.png", "Component CAD — intended geometry"],
      ["images/mould-components.png", "Core and cavity — forming geometry"],
      ["images/mould.png", "Complete mould assembly"],
      ["images/moulded-components.jpg", "Actual moulded components"]
    ]
  },
  {
    id: "press-tool",
    title: "Press Tool Design",
    category: "mechanical",
    credit: "Original CAD design",
    description:
      "An assembled press tool model showing its structure " +
      "and component relationships.",
    story: [
      ["The work",
        "I modelled this press tool as a complete assembly, bringing " +
        "together its plates and working components."],
      ["Design focus",
        "The project focuses on tool construction, component positioning " +
        "and assembly relationships. Its specific press operation will " +
        "be documented when confirmed."]
    ],
    images: [
      ["images/press-tool.png", "Press tool — assembled CAD view"]
    ]
  },
  {
    id: "gripper",
    title: "Robotic Gripper",
    category: "mechanical",
    credit: "Original CAD design",
    description:
      "A two-jaw mechanism with curved links, toothed gripping " +
      "faces and a supporting structure.",
    story: [
      ["The work",
        "I created the gripper as a mechanical assembly rather than " +
        "an isolated pair of jaws. The model shows the gripping faces, " +
        "link arrangement and mounting structure together."],
      ["Design focus",
        "This work demonstrates component modelling and assembly layout. " +
        "It is presented as a CAD design; gripping force and actuator " +
        "performance have not been established here."]
    ],
    images: [
      ["images/gripper.png", "Gripper — assembly view"]
    ]
  },
  {
    id: "assembly",
    title: "Exploded Mechanical Assembly",
    category: "mechanical",
    credit: "Original CAD design",
    description:
      "An exploded view communicating the relationship between " +
      "housings, plates, shafts and geared features.",
    story: [
      ["The work",
        "I separated the assembly into its main components so their " +
        "positions and interfaces could be inspected more clearly."],
      ["Design focus",
        "The exploded presentation communicates how the parts come " +
        "together. It demonstrates detailed modelling and assembly " +
        "presentation; the mechanism's exact name will be added when confirmed."]
    ],
    images: [
      ["images/assembly.png", "Mechanical assembly — exploded view"]
    ]
  },
  {
    id: "organiser",
    title: "Desktop Organiser",
    category: "product",
    credit: "Original CAD design",
    description:
      "An everyday product combining an angled device support " +
      "and multiple storage compartments.",
    story: [
      ["The work",
        "I designed the organiser around a device-support surface " +
        "and separate spaces for desk items, combining them into one form."],
      ["Design focus",
        "The model explores compartment arrangement, product proportions " +
        "and rounded edges. A physical prototype would allow dimensions, " +
        "stability and usability to be checked."]
    ],
    images: [
      ["images/organiser.png", "Desktop organiser — isometric view"]
    ]
  },
  {
    id: "robot",
    title: "Grey Robot CAD Study",
    category: "robotics",
    credit: "Original CAD design",
    description:
      "A robot form study with a box-shaped head, rounded body, " +
      "side arms and a supporting base.",
    story: [
      ["The work",
        "I created this robot model to explore the overall form and " +
        "relationship between the head, body, arms and base."],
      ["Presentation",
        "This is an original CAD work sample. It is shown separately " +
        "from the photograph of my actual companion-robot prototype."]
    ],
    images: [
      ["images/robot.png", "Original grey robot CAD model"]
    ]
  },
  {
    id: "aerothon",
    title: "SAE AeroTHON UAV",
    category: "robotics",
    credit: "Original CAD design",
    description:
      "A UAV design with a custom payload-release mechanism " +
      "and a CAD motion demonstration.",
    story: [
      ["The work",
        "I developed this design for SAE AeroTHON, considering the " +
        "aircraft arrangement and integration of a payload enclosure."],
      ["Mechanism",
        "The CAD animation shows a servo and linkage operating the " +
        "retaining arrangement so the lower panel opens and the payload " +
        "moves out. See the dedicated SAE AeroTHON section for the video."],
      ["Project distinction",
        "This is separate from my vision-guided crowd-monitoring " +
        "research, which uses a ready-made frame."]
    ],
    images: [
      ["images/aerothon.png", "SAE AeroTHON UAV — overall CAD assembly"]
    ]
  },
  {
    id: "wrench",
    title: "Tap Wrench",
    category: "mechanical",
    credit: "Original CAD design",
    description:
      "A hand-tool assembly with opposing handles and a central " +
      "clamping arrangement.",
    story: [
      ["The work",
        "I modelled the tool as an assembly to show the relationship " +
        "between the central body, clamping components and handles."],
      ["Design focus",
        "The model demonstrates mechanical part construction, " +
        "grip detailing and assembly interfaces."]
    ],
    images: [
      ["images/wrench.png", "Tap wrench — overall view"]
    ]
  },
  {
    id: "kitchen",
    title: "Kitchen & Spatial Modelling",
    category: "product",
    credit: "Original CAD design",
    description:
      "An overall room layout and detailed kitchen arrangement " +
      "with cabinetry and worktops.",
    story: [
      ["The work",
        "I extended my modelling work into spatial design, creating " +
        "an overall layout and a more detailed kitchen assembly."],
      ["Design focus",
        "The views communicate both the arrangement of spaces and " +
        "smaller repeated elements such as cabinets. This is a 3D " +
        "modelling study rather than a construction-ready drawing package."]
    ],
    images: [
      ["images/kitchen.png", "Kitchen — detailed CAD view"],
      ["images/room.png", "Room layout — overall view"]
    ]
  },
  {
    id: "adapted-robot",
    title: "Robot Model Adaptation",
    category: "adapted",
    credit: "Downloaded base · Edited",
    description:
      "A white-and-blue robot model sourced externally and edited by me.",
    story: [
      ["Attribution",
        "The base geometry was downloaded and is not claimed as my " +
        "original design. My contribution was editing the existing model."],
      ["Further documentation",
        "The original source and specific modifications will be added " +
        "when documented."]
    ],
    images: [
      ["images/adapted-robot.png", "White-and-blue robot — adapted model"]
    ]
  },
  {
    id: "adapted-frame",
    title: "Drone Frame Adaptation",
    category: "adapted",
    credit: "Downloaded base · Edited",
    description:
      "A bare drone frame model sourced externally and edited by me.",
    story: [
      ["Attribution",
        "The base frame geometry was downloaded. It is presented as " +
        "model adaptation rather than an original structural design."],
      ["Project context",
        "The autonomous-drone research uses a ready-made frame. " +
        "Original SAE AeroTHON design work is presented separately."]
    ],
    images: [
      ["images/adapted-frame.png", "Bare drone frame — adapted CAD model"]
    ]
  }
];

/* ======================================================
   MOTION PREFERENCE
   Respect the visitor's reduced-motion setting.
   ====================================================== */

const motionPreference = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

function motionAllowed() {
  return !motionPreference.matches;
}

document.documentElement.classList.toggle(
  "motion-enabled", motionAllowed()
);

/* ======================================================
   REVEALS
   ====================================================== */

let revealObserver;

if ("IntersectionObserver" in window) {
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
}

function observeReveals() {
  document.querySelectorAll(".reveal:not(.ready)").forEach(element => {
    if (motionAllowed() && revealObserver) {
      element.classList.add("ready");
      revealObserver.observe(element);
    }
  });
}

/* ======================================================
   PROJECT GALLERY
   ====================================================== */

const grid = document.querySelector("#project-grid");
const count = document.querySelector("#project-count");

function renderProjects(category = "all") {
  const selected = projects.filter(project =>
    category === "all" || project.category === category
  );

  grid.innerHTML = selected.map(project => `
    <article class="project-card reveal">
      <button
        class="project-image-button"
        type="button"
        data-project="${project.id}"
        aria-label="Open ${project.title}"
      >
        <img
          src="${project.images[0][0]}"
          alt="${project.images[0][1]}"
          loading="lazy"
        >
      </button>

      <div class="project-body">
        <span class="badge ${
          project.category === "adapted" ? "adapted" : ""
        }">${project.credit}</span>

        <h3>${project.title}</h3>
        <p>${project.description}</p>

        <button
          class="project-open"
          type="button"
          data-project="${project.id}"
        >
          Explore project <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  `).join("");

  count.textContent = `${selected.length} projects · CAD work samples`;
  observeReveals();
}

document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach(other => {
      other.setAttribute("aria-pressed", String(other === button));
    });

    renderProjects(button.dataset.filter);
  });
});

/* ======================================================
   PROJECT DIALOG
   Native dialog supports Escape and keyboard focus.
   ====================================================== */

const dialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");
let opener;

function openProject(id, button) {
  const project = projects.find(item => item.id === id);
  if (!project) return;

  opener = button;

  dialogContent.innerHTML = `
    <p class="eyebrow">${project.credit}</p>
    <h2 id="dialog-title">${project.title}</h2>
    <p>${project.description}</p>

    ${project.story.map(([title, text]) => `
      <h3>${title}</h3>
      <p>${text}</p>
    `).join("")}

    ${project.images.map(([src, caption]) => `
      <figure class="dialog-image">
        <img src="${src}" alt="${caption}">
        <figcaption>${caption}</figcaption>
      </figure>
    `).join("")}
  `;

  dialog.showModal();
  document.body.classList.add("modal-open");
  dialog.scrollTop = 0;
}

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-project]");
  if (button) openProject(button.dataset.project, button);
});

document.querySelector("#close-dialog").addEventListener(
  "click", () => dialog.close()
);

dialog.addEventListener("click", event => {
  if (event.target !== dialog) return;

  const rect = dialog.getBoundingClientRect();

  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  ) {
    dialog.close();
  }
});

dialog.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  opener?.focus();
});

/* ======================================================
   MOULD SCROLL STORY
   Four stages driven by scroll position.
   ====================================================== */

const mouldSection = document.querySelector(".mould-sequence");
const mouldImages = [...document.querySelectorAll(".sequence-image")];
const mouldDots = [...document.querySelectorAll(".sequence-dots span")];
const mouldLabel = document.querySelector("#mould-step-label");
const mouldCopy = document.querySelector("#mould-step-copy");

const mouldSteps = [
  {
    label: "01 / Component design",
    text: "The circular component defined the geometry that the mould " +
          "needed to produce, including the recesses and NTTF lettering."
  },
  {
    label: "02 / Core & cavity",
    text: "I modelled the corresponding forming elements that define " +
          "the shape of the moulded component."
  },
  {
    label: "03 / Mould assembly",
    text: "The forming elements became part of the complete mould, " +
          "connecting the CAD work with manufacture and assembly."
  },
  {
    label: "04 / Physical result",
    text: "The manufactured mould produced these yellow components—" +
          "the physical outcome of my diploma final-year project."
  }
];

let activeMouldStep = -1;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function updateMouldSequence() {
  if (!motionAllowed()) {
    mouldLabel.textContent = "Component → Core & cavity → Mould → Result";
    mouldCopy.textContent =
      "The four views show the progression from CAD geometry " +
      "to actual components produced using the mould.";
    return;
  }

  const bounds = mouldSection.getBoundingClientRect();
  const distance = mouldSection.offsetHeight - window.innerHeight;
  const progress = clamp(-bounds.top / Math.max(1, distance), 0, 1);
  const index = Math.min(3, Math.floor(progress * 4));

  if (index !== activeMouldStep) {
    mouldImages.forEach((image, i) => {
      image.classList.toggle("active", i === index);
    });

    mouldDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    mouldLabel.textContent = mouldSteps[index].label;
    mouldCopy.textContent = mouldSteps[index].text;
    activeMouldStep = index;
  }

  /* Gentle scale progression within each stage. */
  const localProgress = progress === 1 ? 1 : (progress * 4) % 1;

  mouldImages.forEach((image, i) => {
    image.style.transform = i === index
      ? `scale(${1.025 - localProgress * 0.025})`
      : "scale(1.025)";
  });
}

/* ======================================================
   PAGE PROGRESS, HERO MOVEMENT & ACTIVE NAVIGATION
   requestAnimationFrame batches visual updates.
   ====================================================== */

const progressBar = document.querySelector(".progress");
const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");
const heroOrb = document.querySelector(".hero-orb");
const navLinks = [...document.querySelectorAll("nav a")];

const navigationSections = navLinks.map(link => ({
  link,
  section: document.querySelector(link.getAttribute("href"))
}));

let scheduled = false;

function updatePage() {
  const available =
    document.documentElement.scrollHeight - window.innerHeight;

  const readingProgress = available > 0
    ? clamp(window.scrollY / available, 0, 1)
    : 0;

  progressBar.style.transform = `scaleX(${readingProgress})`;

  if (motionAllowed()) {
    const heroProgress = clamp(
      -hero.getBoundingClientRect().top / hero.offsetHeight, 0, 1
    );

    heroContent.style.translate = `0 ${heroProgress * 55}px`;
    heroContent.style.opacity = String(1 - heroProgress * 0.55);
    heroOrb.style.transform = `scale(${1 + heroProgress * 0.15})`;
  } else {
    heroContent.style.translate = "none";
    heroContent.style.opacity = "1";
    heroOrb.style.transform = "none";
  }

  updateMouldSequence();

  let current = null;

  navigationSections.forEach(({ link, section }) => {
    if (section && section.getBoundingClientRect().top <= 190) {
      current = link;
    }
  });

  navLinks.forEach(link => {
    const active = link === current;
    link.classList.toggle("active", active);

    if (active) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  scheduled = false;
}

function requestUpdate() {
  if (!scheduled) {
    scheduled = true;
    requestAnimationFrame(updatePage);
  }
}

window.addEventListener("scroll", requestUpdate, { passive: true });
window.addEventListener("resize", requestUpdate);
window.addEventListener("load", requestUpdate);

motionPreference.addEventListener("change", () => {
  document.documentElement.classList.toggle(
    "motion-enabled", motionAllowed()
  );

  if (!motionAllowed()) {
    document.querySelectorAll(".reveal").forEach(element => {
      element.classList.add("visible");
    });

    mouldImages.forEach(image => {
      image.style.transform = "none";
    });
  }

  activeMouldStep = -1;
  observeReveals();
  requestUpdate();
});

renderProjects();
observeReveals();
updatePage();