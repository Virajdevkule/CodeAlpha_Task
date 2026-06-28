// ─── Photo Data ───
const PHOTOS = [
  // Nature
  { id: 1,  src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&auto=format&fit=crop", caption: "Morning mist on the mountain ridge", category: "nature", featured: true },
  { id: 2,  src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&auto=format&fit=crop", caption: "Where the ferns hold the rain", category: "nature" },
  { id: 3,  src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=750&auto=format&fit=crop", caption: "Light finds its way through everything", category: "nature", featured: true },
  { id: 4,  src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&auto=format&fit=crop", caption: "A valley the world forgot", category: "nature" },
  { id: 5,  src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=700&auto=format&fit=crop", caption: "Petals and patience", category: "nature" },
  { id: 6,  src: "https://images.unsplash.com/photo-1511497584788-876760111969?w=750&auto=format&fit=crop", caption: "A forest in the early hour", category: "nature" },
  { id: 7,  src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=600&auto=format&fit=crop", caption: "The calm before the wave turns", category: "nature" },
  { id: 8,  src: "https://images.unsplash.com/photo-1439853949212-36089f5f3a0d?w=650&auto=format&fit=crop", caption: "Wildflowers don't ask permission", category: "nature" },
  { id: 9,  src: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=700&auto=format&fit=crop", caption: "Where land meets the tide", category: "nature" },
  { id: 10, src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=750&auto=format&fit=crop", caption: "Sunset dissolving slowly", category: "nature" },

  // Architecture
  { id: 11, src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&auto=format&fit=crop", caption: "Glass and intention", category: "architecture", featured: true },
  { id: 12, src: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&auto=format&fit=crop", caption: "The geometry of dwelling", category: "architecture" },
  { id: 13, src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=700&auto=format&fit=crop", caption: "A city that never rests", category: "architecture" },
  { id: 14, src: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=650&auto=format&fit=crop", caption: "Arches that held centuries", category: "architecture", featured: true },
  { id: 15, src: "https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?w=700&auto=format&fit=crop", caption: "Light trapped in corridors", category: "architecture" },
  { id: 16, src: "https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?w=600&auto=format&fit=crop", caption: "The stairs nobody counts", category: "architecture" },
  { id: 17, src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop", caption: "Windows watching the street", category: "architecture" },
  { id: 18, src: "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=650&auto=format&fit=crop", caption: "Steel and silence above the fog", category: "architecture" },

  // People
  { id: 19, src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop", caption: "She reads the sky like a letter", category: "people", featured: true },
  { id: 20, src: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=700&auto=format&fit=crop", caption: "A moment between two silences", category: "people" },
  { id: 21, src: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=600&auto=format&fit=crop", caption: "Every laugh is a small ceremony", category: "people" },
  { id: 22, src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=700&auto=format&fit=crop", caption: "Eyes that have seen the long road", category: "people" },
  { id: 23, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=650&auto=format&fit=crop", caption: "The face remembers what the mind forgets", category: "people" },
  { id: 24, src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop", caption: "A quiet thought, unspoken", category: "people" },
  { id: 25, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&auto=format&fit=crop", caption: "He holds the morning lightly", category: "people" },

  // Travel
  { id: 26, src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=750&auto=format&fit=crop", caption: "The road before the map runs out", category: "travel", featured: true },
  { id: 27, src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop", caption: "Every doorway leads somewhere new", category: "travel" },
  { id: 28, src: "https://images.unsplash.com/photo-1501761095374-ce596b8ae4af?w=700&auto=format&fit=crop", caption: "The alley that smelled like rain", category: "travel" },
  { id: 29, src: "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?w=650&auto=format&fit=crop", caption: "A harbour in the golden hour", category: "travel" },
  { id: 30, src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop", caption: "Somewhere between here and there", category: "travel" },
  { id: 31, src: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=750&auto=format&fit=crop", caption: "The ancient city slept and woke", category: "travel", featured: true },
  { id: 32, src: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&auto=format&fit=crop", caption: "Markets that breathe their own air", category: "travel" },

  // Abstract
  { id: 33, src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=700&auto=format&fit=crop", caption: "Form without explanation", category: "abstract", featured: true },
  { id: 34, src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&auto=format&fit=crop", caption: "What colour does silence make?", category: "abstract" },
  { id: 35, src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&auto=format&fit=crop", caption: "Texture of something half-remembered", category: "abstract" },
  { id: 36, src: "https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3?w=650&auto=format&fit=crop", caption: "Blue is always honest", category: "abstract" },
  { id: 37, src: "https://images.unsplash.com/photo-1507149833265-60c372daea22?w=700&auto=format&fit=crop", caption: "The geometry of light on water", category: "abstract" },
  { id: 38, src: "https://images.unsplash.com/photo-1553949285-1ebf3b6c5e2a?w=600&auto=format&fit=crop", caption: "Pattern beneath the noise", category: "abstract" },
  { id: 39, src: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=700&auto=format&fit=crop", caption: "Waves of something unnamed", category: "abstract" },
  { id: 40, src: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=650&auto=format&fit=crop", caption: "Ink dissolving in water", category: "abstract", featured: true },
  { id: 41, src: "https://images.unsplash.com/photo-1483213097419-365e22f0f258?w=700&auto=format&fit=crop", caption: "The edge of something enormous", category: "abstract" },
  { id: 42, src: "https://images.unsplash.com/photo-1524678714210-9917a6c619c2?w=600&auto=format&fit=crop", caption: "Light playing with its own shadow", category: "abstract" },
  { id: 43, src: "https://images.unsplash.com/photo-1504437418993-57d3a52b5c5e?w=700&auto=format&fit=crop", caption: "A field of quiet colour", category: "nature" },
  { id: 44, src: "https://images.unsplash.com/photo-1500468756762-a401b6f17b46?w=650&auto=format&fit=crop", caption: "Carrying the weight of the light", category: "people" },
  { id: 45, src: "https://images.unsplash.com/photo-1521185496955-15097b20c5fe?w=700&auto=format&fit=crop", caption: "Stone worn smooth by time", category: "architecture" },
  { id: 46, src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop", caption: "The road ahead smells like pine", category: "travel" },
  { id: 47, src: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?w=750&auto=format&fit=crop", caption: "A lake at first light", category: "nature", featured: true },
  { id: 48, src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700&auto=format&fit=crop", caption: "Where the world turns golden", category: "travel" },
];

// ─── State ───
let allPhotos    = [...PHOTOS];
let activeFilter = "all";
let activeIndex  = 0;
let filtered     = [];
let visibleCount = 24;
const BATCH      = 12;

// ─── Elements ───
const grid         = document.getElementById("galleryGrid");
const filterBtns   = document.querySelectorAll(".filter-btn");
const photoCount   = document.getElementById("photoCount");
const loadMoreBtn  = document.getElementById("loadMoreBtn");
const lightbox     = document.getElementById("lightbox");
const lbImg        = document.getElementById("lightboxImg");
const lbCaption    = document.getElementById("lightboxCaption");
const lbCategory   = document.getElementById("lightboxCategory");
const lbClose      = document.getElementById("lightboxClose");
const lbPrev       = document.getElementById("lightboxPrev");
const lbNext       = document.getElementById("lightboxNext");
const uploadTrigger= document.getElementById("uploadTrigger");
const uploadModal  = document.getElementById("uploadModal");
const modalClose   = document.getElementById("modalClose");
const uploadDrop   = document.getElementById("uploadDrop");
const fileInput    = document.getElementById("fileInput");
const captionInput = document.getElementById("captionInput");
const categorySelect= document.getElementById("categorySelect");
const submitUpload = document.getElementById("submitUpload");

// ─── Render ───
function getFiltered() {
  return activeFilter === "all"
    ? allPhotos
    : allPhotos.filter(p => p.category === activeFilter);
}

function renderGallery() {
  filtered = getFiltered();
  const toShow = filtered.slice(0, visibleCount);

  grid.innerHTML = "";
  toShow.forEach((photo, i) => {
    const card = document.createElement("div");
    card.className = "photo-card" + (photo.featured ? " featured" : "");
    card.style.animationDelay = `${Math.min(i * 0.04, 0.6)}s`;
    card.dataset.index = i;

    const img = document.createElement("img");
    img.src   = photo.src;
    img.alt   = photo.caption;
    img.loading = i < 12 ? "eager" : "lazy";
    img.onerror = () => {
      img.src = `https://via.placeholder.com/600x400/f5f0e8/b0a89e?text=${encodeURIComponent(photo.category)}`;
    };

    const overlay = document.createElement("div");
    overlay.className = "card-overlay";
    overlay.innerHTML = `
      <p class="card-caption">${photo.caption}</p>
      <span class="card-tag">${photo.category}</span>
    `;

    card.appendChild(img);
    card.appendChild(overlay);

    card.addEventListener("click", () => openLightbox(i));
    grid.appendChild(card);
  });

  // Update count
  const n = filtered.length;
  photoCount.textContent = `${n} photograph${n !== 1 ? "s" : ""}`;

  // Load more button
  loadMoreBtn.parentElement.style.display = filtered.length > visibleCount ? "flex" : "none";
}

// ─── Filter ───
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    visibleCount = 24;
    renderGallery();
  });
});

// ─── Load More ───
loadMoreBtn.addEventListener("click", () => {
  visibleCount += BATCH;
  renderGallery();
});

// ─── Lightbox ───
function openLightbox(idx) {
  activeIndex = idx;
  const photo = filtered[idx];
  lbImg.src = photo.src;
  lbImg.alt = photo.caption;
  lbCaption.textContent = photo.caption;
  lbCategory.textContent = photo.category;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function navigateLightbox(dir) {
  activeIndex = (activeIndex + dir + filtered.length) % filtered.length;
  const photo = filtered[activeIndex];
  lbImg.style.opacity = "0";
  setTimeout(() => {
    lbImg.src = photo.src;
    lbImg.alt = photo.caption;
    lbCaption.textContent = photo.caption;
    lbCategory.textContent = photo.category;
    lbImg.style.opacity = "1";
  }, 150);
}

lbImg.style.transition = "opacity 0.15s ease";
lbClose.addEventListener("click", closeLightbox);
lbPrev.addEventListener("click", () => navigateLightbox(-1));
lbNext.addEventListener("click", () => navigateLightbox(1));

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape")      closeLightbox();
  if (e.key === "ArrowLeft")   navigateLightbox(-1);
  if (e.key === "ArrowRight")  navigateLightbox(1);
});

// ─── Upload Modal ───
uploadTrigger.addEventListener("click", () => {
  uploadModal.classList.add("open");
  uploadModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
});

function closeModal() {
  uploadModal.classList.remove("open");
  uploadModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
uploadModal.addEventListener("click", e => {
  if (e.target === uploadModal) closeModal();
});

// Drag & drop
["dragenter","dragover"].forEach(evt => {
  uploadDrop.addEventListener(evt, e => {
    e.preventDefault();
    uploadDrop.classList.add("dragover");
  });
});
["dragleave","drop"].forEach(evt => {
  uploadDrop.addEventListener(evt, e => {
    e.preventDefault();
    uploadDrop.classList.remove("dragover");
  });
});

uploadDrop.addEventListener("drop", e => {
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith("image/")) {
    handleFile(file);
  }
});

uploadDrop.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", () => {
  if (fileInput.files[0]) handleFile(fileInput.files[0]);
});

let pendingDataURL = null;

function handleFile(file) {
  const reader = new FileReader();
  reader.onload = e => {
    pendingDataURL = e.target.result;
    uploadDrop.innerHTML = `
      <img src="${pendingDataURL}" style="max-height:120px;border-radius:6px;margin-bottom:0.5rem;" alt="Preview" />
      <p style="font-size:0.8rem;color:var(--sage);">✓ Ready to add</p>
    `;
  };
  reader.readAsDataURL(file);
}

submitUpload.addEventListener("click", () => {
  if (!pendingDataURL) return;
  const newPhoto = {
    id:       Date.now(),
    src:      pendingDataURL,
    caption:  captionInput.value.trim() || "A moment worth keeping",
    category: categorySelect.value,
    featured: false,
  };
  allPhotos.unshift(newPhoto);
  pendingDataURL = null;
  captionInput.value = "";
  fileInput.value = "";
  closeModal();

  // Switch to the right filter to show uploaded photo
  if (activeFilter !== "all" && activeFilter !== newPhoto.category) {
    activeFilter = "all";
    filterBtns.forEach(b => {
      b.classList.toggle("active", b.dataset.filter === "all");
    });
  }

  visibleCount = 24;
  renderGallery();

  // Reset drop zone
  uploadDrop.innerHTML = `
    <div class="drop-icon">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
    </div>
    <p>Drag & drop or <label class="upload-label" for="fileInput">browse</label></p>
    <p class="drop-hint">JPG, PNG, WEBP — up to 10 MB</p>
  `;
});

// ─── Init ───
renderGallery();
