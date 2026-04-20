/*
  HOW TO ADD A NEW POST:

  1. Copy one object inside the posts array.
  2. Change the id to a new unique number.
  3. Set the category to one of:
     - "blog"
     - "newsletter"
     - "journal"
  4. Use date format: "YYYY-MM-DD" for correct newest sorting.
  5. image is optional. Leave it as "" if you do not want one.

  Example:
  {
    id: 5,
    title: "My New Post",
    category: "blog",
    date: "2026-04-21",
    excerpt: "A short summary shown on the card.",
    content: `Your full post goes here.`,
    image: ""
  }
*/

const posts = [
  {
    id: 1,
    title: "Why Daily Writing Brings Clarity",
    category: "blog",
    date: "2026-04-20",
    excerpt:
      "A reflection on how regular writing creates focus, self-awareness, and a steadier inner voice.",
    content: `Writing every day changes the way thoughts settle inside you.

At first, it may feel like you are only recording moments. But over time, patterns appear. You notice what matters to you, what keeps returning, and what quietly shapes your life.

A daily writing habit does not need to be perfect to be meaningful. Even small entries create momentum. One honest paragraph can be enough.

Clarity often comes after expression. When something is written down, it becomes easier to understand. That is one reason writing remains one of the simplest and strongest personal tools.`,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Sunday Letter: Small Progress Still Counts",
    category: "newsletter",
    date: "2026-04-18",
    excerpt:
      "A short note on patience, consistency, and why quiet progress deserves respect.",
    content: `Welcome to this week's letter.

Not every week arrives with visible milestones. Some weeks are quieter than others. But quiet progress still matters.

A routine that looks ordinary from the outside may be the very thing holding your life together. Reading a few pages, writing one post, making one better choice, or staying consistent with something small can shape more than you realize.

Keep going with what is steady. Slow progress still counts.`,
    image: ""
  },
  {
    id: 3,
    title: "Journal Note on an Uncomplicated Evening",
    category: "journal",
    date: "2026-04-15",
    excerpt:
      "A journal entry about peace, silence, and letting the day end without pressure.",
    content: `Tonight felt simple in the best way.

The room was quiet. My thoughts were not especially dramatic. Nothing huge happened, but something in me softened. I think I needed that.

There is a kind of healing in evenings that ask nothing from you. No performance, no urgency, no need to prove that the day was significant.

Sometimes peace is enough reason to remember a moment.`,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    title: "How I Keep a Publishing Rhythm Without Burnout",
    category: "blog",
    date: "2026-04-11",
    excerpt:
      "A practical approach to posting regularly without turning writing into pressure.",
    content: `Consistency becomes easier when the system stays simple.

Instead of forcing every post to be big, polished, or deeply original, it helps to think in formats. Some days can hold a longer blog post. Other days may only need a short letter or a quiet journal note.

When you allow different types of writing to coexist, posting starts to feel lighter. A rhythm forms. You stop waiting for perfect conditions and begin working with what is available.

That is often how sustainable publishing begins.`,
    image: ""
  }
];

const postsGrid = document.getElementById("postsGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const resultsCount = document.getElementById("resultsCount");

const postModal = document.getElementById("postModal");
const modalArticle = document.getElementById("modalArticle");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalOverlay = document.getElementById("modalOverlay");

let activeCategory = "all";
let searchTerm = "";

function formatDisplayDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function getFilteredPosts() {
  return [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .filter((post) => {
      const matchesCategory =
        activeCategory === "all" || post.category === activeCategory;

      const searchableText = `
        ${post.title}
        ${post.category}
        ${post.excerpt}
        ${post.content}
      `.toLowerCase();

      const matchesSearch = searchableText.includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
}

function renderPosts() {
  const filteredPosts = getFilteredPosts();

  resultsCount.textContent = `${filteredPosts.length} post${
    filteredPosts.length === 1 ? "" : "s"
  }`;

  if (filteredPosts.length === 0) {
    postsGrid.innerHTML = `
      <div class="empty-state">
        <h3>No posts found</h3>
        <p>Try a different search word or category.</p>
      </div>
    `;
    return;
  }

  postsGrid.innerHTML = filteredPosts
    .map((post) => {
      const imageMarkup = post.image
        ? `
          <div class="post-image-wrap">
            <img class="post-image" src="${escapeHtml(post.image)}" alt="${escapeHtml(post.title)}" />
          </div>
        `
        : "";

      return `
        <article class="post-card">
          ${imageMarkup}
          <div class="post-body">
            <div class="post-meta">
              <span class="category-tag ${escapeHtml(post.category)}">${escapeHtml(post.category)}</span>
              <span class="post-date">${formatDisplayDate(post.date)}</span>
            </div>

            <h3 class="post-title">${escapeHtml(post.title)}</h3>
            <p class="post-excerpt">${escapeHtml(post.excerpt)}</p>
            <button class="read-btn" data-post-id="${post.id}">Read More →</button>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll(".read-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const postId = Number(button.dataset.postId);
      openPostModal(postId);
    });
  });
}

function openPostModal(postId) {
  const post = posts.find((item) => item.id === postId);
  if (!post) return;

  const imageMarkup = post.image
    ? `
      <div class="modal-image-wrap">
        <img class="post-image" src="${escapeHtml(post.image)}" alt="${escapeHtml(post.title)}" />
      </div>
    `
    : "";

  modalArticle.innerHTML = `
    <div class="modal-meta">
      <span class="category-tag ${escapeHtml(post.category)}">${escapeHtml(post.category)}</span>
    </div>

    <h2 id="modalTitle" class="modal-title">${escapeHtml(post.title)}</h2>
    <p class="modal-date">${formatDisplayDate(post.date)}</p>
    ${imageMarkup}
    <div class="modal-content-text">${escapeHtml(post.content)}</div>
  `;

  postModal.classList.remove("hidden");
  postModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePostModal() {
  postModal.classList.add("hidden");
  postModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value.trim();
  renderPosts();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    activeCategory = button.dataset.category;
    renderPosts();
  });
});

closeModalBtn.addEventListener("click", closePostModal);
modalOverlay.addEventListener("click", closePostModal);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !postModal.classList.contains("hidden")) {
    closePostModal();
  }
});

renderPosts();