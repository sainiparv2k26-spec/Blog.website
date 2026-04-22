(() => {
  "use strict";

  const CONFIG = {
    storageKeys: {
      theme: "yyc-theme",
      bookmarks: "yyc-bookmarks",
      announcementDismissed: "yyc-announcement-dismissed",
      signupPrefs: "yyc-signup-prefs"
    },
    selectors: {
      progressBar: "#progressBar",
      announcementBar: "#announcementBar",
      announcementCloseBtn: "#announcementCloseBtn",
      themeToggle: "#themeToggle",
      featuredStory: "#featuredStory",
      trendingList: "#trendingList",
      postsGrid: "#postsGrid",
      searchInput: "#searchInput",
      topicFilters: "#topicFilters",
      resultsCount: "#resultsCount",
      archiveMeta: "#archiveMeta",
      newsletterForm: "#newsletterForm",
      formStatus: "#formStatus",
      stickyCta: "#stickyCta",
      backToTopBtn: "#backToTopBtn",
      postModal: "#postModal",
      modalOverlay: "#modalOverlay",
      modalArticle: "#modalArticle",
      closeModalBtn: "#closeModalBtn"
    },
    focusableSelector:
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  };

  const rawPosts = [
    {
      id: 1,
      title: "YYC Cannabis Market Perspective: Chasing THC or Chasing Quality?",
      date: "2026-04-20",
      topic: "Culture",
      excerpt:
        "In Calgary’s growing cannabis scene, THC percentages dominate the conversation, but true quality goes far beyond potency alone.",
      content: `In Calgary’s growing cannabis scene, a clear trend has taken over: everyone’s chasing high THC numbers. Walk into almost any dispensary, and the first question you’ll hear is, “What’s the strongest you’ve got?” But in this rush for potency, something important is being overlooked: the quality and origin of the plant itself.

THC percentage has become a marketing tool, not necessarily a measure of a better experience. A higher number on the label doesn’t guarantee richer flavor, smoother smoke, or a more balanced effect. In fact, many high THC products sacrifice terpene profiles, the compounds responsible for aroma, taste, and the nuanced effects that make each strain unique.

What Calgary consumers should be paying closer attention to is how the cannabis is grown. Sun grown cannabis, cultivated outdoors under natural light, often develops more complex terpene profiles and a fuller expression of the plant’s natural characteristics. Unlike heavily controlled indoor environments focused on maximizing THC, sun grown plants benefit from real soil, fresh air, and the natural rhythm of the seasons.

This is not just about taste. It is about experience. A well grown, terpene rich strain with moderate THC can offer a more enjoyable, balanced high than a harsh, overly potent alternative. It is similar to choosing quality coffee or wine; the story behind how it is produced matters just as much as the final number on the label.

As YYC continues to build its cannabis culture, there is an opportunity to shift the conversation. Instead of asking for the highest THC, ask about terpene profiles, growing methods, and overall quality. Support producers who prioritize craft, sustainability, and the natural integrity of the plant.

Because at the end of the day, cannabis is not just about getting higher. It is about getting better.

Leon Zen
YYC Writer`,
      image: "IMG_0079.jpeg",
      featured: false
    },
    {
      id: 2,
      title: "YYC Tech Perspective: Calgary’s Rise as a Data and IT Hub",
      date: "2026-04-21",
      topic: "Tech",
      excerpt:
        "Calgary is quietly emerging as a growing tech and data hub, offering affordability, talent, and long term potential in the digital economy.",
      content: `Something interesting is happening in Calgary right now. For years, this city has been known for oil, gas, and engineering. But quietly, another story is starting to take shape. Calgary is stepping into the world of tech, and more specifically, into the future of data.

Across North America, the demand for data is growing fast. Everything from streaming to artificial intelligence depends on massive data centres. Cities like Toronto and Vancouver have had a head start, but they are becoming expensive and crowded. That is where Calgary begins to stand out.

There are some simple reasons behind this shift. Land here is more affordable. Energy is reliable and easier to access. The climate also helps, since cooler temperatures reduce the cost of keeping data centres running. These are not flashy advantages, but they matter a lot to companies making long term investments.

At the same time, Calgary already has something valuable. A strong base of engineers and problem solvers. Many professionals from the energy sector are now moving into tech, bringing with them real world experience and technical thinking. This creates a unique kind of workforce that blends old industry knowledge with new digital skills.

It is important to be realistic though. Calgary is not the largest data centre hub in North America, and it is not trying to be overnight. What is happening is slower and more grounded. Companies are starting to look at Calgary as a place where they can build, grow, and scale without the pressure of bigger markets.

There is also a bigger conversation around sustainability. Data centres use a lot of energy, and the world is paying attention to that. Alberta is working toward cleaner energy solutions, and if Calgary can connect its tech growth with more sustainable power, it could become an attractive option for companies that care about their environmental impact.

For the city, this shift means more than just new buildings or infrastructure. It is about identity. Calgary is beginning to move from being only an energy city to becoming part of the digital economy. That transition will take time, but the foundation is already there.

In the coming years, Calgary may not try to compete directly with the biggest tech cities. Instead, it can build its own path. A place where growth is steady, costs are manageable, and opportunities are real.

Because the future of power is changing. It is no longer only about what comes from the ground. It is also about the data we create, store, and use every day.

Leon Zen
YYC Writer`,
      image: "IMG_0086.jpeg",
      featured: false
    },
    {
      id: 3,
      title: "YYC Street Life Perspective: Patio Season Returns and Summer Is Calling",
      date: "2026-04-22",
      topic: "Local",
      excerpt:
        "As patios return to Calgary’s streets, the city begins to shift into its summer rhythm, with energy building ahead of festival season and the Stampede.",
      content: `YYC Street Life Perspective: Patio Season Returns and Summer Is Calling

April 22, 2026

There is a small change happening across Calgary that says a lot more than it seems. Cafes are setting their chairs back outside, and just like that, the city feels alive again.

After months of winter routines, people are slowing down. Sidewalks are no longer just for passing through. Coffee is being enjoyed under the sun, conversations are stretching, and there is a noticeable shift in energy. Calgary is stepping into its summer rhythm.

But this year, it feels like more than just warmer weather. It feels like the start of something bigger. As patios fill up in areas like Kensington and 17th Ave, there is a growing sense of anticipation. Summer in Calgary is never quiet, and the city is already preparing for it.

With major events like the Calgary Stampede returning in full force, along with a packed calendar of local markets, live music, and cultural festivals, the momentum is building. According to Tourism Calgary, the city sees a significant rise in visitors and local activity during the summer months, with the Stampede alone drawing over a million attendees each year. That kind of energy does not stay contained, it spreads across neighborhoods, businesses, and everyday life.

For local cafes, putting chairs outside is more than a seasonal habit. It is a signal. It means they are ready for the crowds, the longer days, and the steady flow of people exploring the city. Outdoor seating brings visibility and creates those small moments that turn into lasting habits for customers.

For Calgarians, it is a reminder to step back into the city. To take advantage of the short but vibrant season. To be part of the atmosphere instead of just passing through it.

Because in YYC, summer is not just about the weather. It is about the feeling. The buildup before the Stampede, the busy streets, the music, the late evenings, and the sense that the city is fully awake again.

And it all starts with something simple. A chair outside, waiting to be used.

Leon Zen
YYC Writer`,
      image: "IMG_0093.jpeg",
      featured: true
    }
  ];

  const dom = {};
  const state = {
    posts: [],
    filteredPosts: [],
    activeTopic: "All",
    searchTerm: "",
    activePost: null,
    lastFocusedElement: null,
    bookmarks: new Set(),
    theme: "dark"
  };

  const safeStorage = {
    get(key, fallback) {
      try {
        const value = window.localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch {
        return false;
      }
    },
    remove(key) {
      try {
        window.localStorage.removeItem(key);
        return true;
      } catch {
        return false;
      }
    }
  };

  function qs(selector) {
    return document.querySelector(selector);
  }

  function qsa(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function cacheDom() {
    Object.entries(CONFIG.selectors).forEach(([key, selector]) => {
      dom[key] = qs(selector);
    });
  }

  function normalizeText(value) {
    return String(value ?? "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  function slugify(value) {
    return String(value ?? "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function formatDateUS(dateString) {
    const date = new Date(`${dateString}T00:00:00`);
    if (Number.isNaN(date.getTime())) return dateString;

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  function getReadingTime(text) {
    const words = normalizeText(text).split(" ").filter(Boolean).length;
    return `${Math.max(1, Math.ceil(words / 220))} min read`;
  }

  function sanitizePosts(posts) {
    if (!Array.isArray(posts)) return [];

    return posts
      .filter((post) => post && typeof post === "object")
      .map((post, index) => {
        const clean = {
          id: Number(post.id) || index + 1,
          title: String(post.title || "Untitled Story").trim(),
          date: String(post.date || "").trim(),
          topic: String(post.topic || "Local").trim(),
          excerpt: String(post.excerpt || "").trim(),
          content: String(post.content || "").trim(),
          image: String(post.image || "").trim(),
          featured: Boolean(post.featured)
        };

        clean.slug = slugify(`${clean.id}-${clean.title}`);
        clean.readingTime = getReadingTime(clean.content);
        return clean;
      })
      .filter((post) => post.title && post.content)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  function getPostUrl(post) {
    const url = new URL(window.location.href);
    url.hash = post.slug;
    return url.toString();
  }

  function getTopics(posts) {
    return ["All", ...new Set(posts.map((post) => post.topic).filter(Boolean))];
  }

  function buildImage(src, alt, wrapperClass) {
    if (!src) return null;

    const wrapper = document.createElement("div");
    wrapper.className = wrapperClass;

    const img = document.createElement("img");
    img.className = "post-image";
    img.src = src;
    img.alt = alt || "";
    img.loading = "lazy";
    img.decoding = "async";

    img.addEventListener(
      "error",
      () => {
        wrapper.remove();
      },
      { once: true }
    );

    wrapper.appendChild(img);
    return wrapper;
  }

  function makeButton(className, text, attrs = {}) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = className;
    button.textContent = text;

    Object.entries(attrs).forEach(([key, value]) => {
      button.setAttribute(key, value);
    });

    return button;
  }

  function createReadButton(post) {
    return makeButton("read-btn", "Read full issue →", {
      "data-action": "read",
      "data-post-id": String(post.id),
      "aria-label": `Read ${post.title}`
    });
  }

  function createBookmarkButton(post) {
    const isBookmarked = state.bookmarks.has(post.id);
    return makeButton(`post-card__action${isBookmarked ? " is-active" : ""}`, isBookmarked ? "Saved" : "Save", {
      "data-action": "bookmark",
      "data-post-id": String(post.id),
      "aria-label": isBookmarked ? "Remove bookmark" : "Save bookmark",
      "aria-pressed": String(isBookmarked)
    });
  }

  function createShareButton(post) {
    return makeButton("post-card__action", "Share", {
      "data-action": "share",
      "data-post-id": String(post.id),
      "aria-label": `Copy share link for ${post.title}`
    });
  }

  function createCardActions(post) {
    const actions = document.createElement("div");
    actions.className = "post-card__actions";
    actions.append(createReadButton(post), createBookmarkButton(post), createShareButton(post));
    return actions;
  }

  function createFeaturedStory(post) {
    const article = document.createElement("article");
    article.className = "featured-story";

    const media = buildImage(post.image, post.title, "featured-story__media");
    const content = document.createElement("div");
    content.className = "featured-story__content";

    const topic = document.createElement("span");
    topic.className = "post-label";
    topic.textContent = post.topic;

    const title = document.createElement("h3");
    title.className = "featured-story__title";
    title.textContent = post.title;

    const meta = document.createElement("p");
    meta.className = "featured-story__meta";
    meta.textContent = `${formatDateUS(post.date)} · ${post.readingTime}`;

    const excerpt = document.createElement("p");
    excerpt.className = "post-excerpt";
    excerpt.textContent = post.excerpt;

    content.append(topic, title, meta, excerpt, createCardActions(post));

    if (media) article.append(media);
    article.append(content);
    return article;
  }

  function createTrendingItem(post) {
    const article = document.createElement("article");
    article.className = "trending-item";

    const topic = document.createElement("span");
    topic.className = "post-label";
    topic.textContent = post.topic;

    const title = document.createElement("h3");
    title.className = "featured-story__title";
    title.style.fontSize = "1.3rem";
    title.style.margin = "0";
    title.textContent = post.title;

    const meta = document.createElement("p");
    meta.className = "featured-story__meta";
    meta.textContent = `${formatDateUS(post.date)} · ${post.readingTime}`;

    article.append(topic, title, meta, createCardActions(post));
    return article;
  }

  function createPostCard(post) {
    const article = document.createElement("article");
    article.className = "post-card";

    const media = buildImage(post.image, post.title, "post-image-wrap");
    const body = document.createElement("div");
    body.className = "post-body";

    const topic = document.createElement("span");
    topic.className = "post-label";
    topic.textContent = post.topic;

    const meta = document.createElement("div");
    meta.className = "post-meta";

    const date = document.createElement("span");
    date.className = "post-date";
    date.textContent = formatDateUS(post.date);

    const reading = document.createElement("span");
    reading.className = "post-date";
    reading.textContent = post.readingTime;

    meta.append(date, reading);

    const title = document.createElement("h3");
    title.className = "post-title";
    title.textContent = post.title;

    const excerpt = document.createElement("p");
    excerpt.className = "post-excerpt";
    excerpt.textContent = post.excerpt;

    body.append(topic, meta, title, excerpt, createCardActions(post));

    if (media) article.append(media);
    article.append(body);
    return article;
  }

  function createEmptyState() {
    const wrap = document.createElement("div");
    wrap.className = "empty-state";

    const title = document.createElement("h3");
    title.textContent = "No newsletters found";

    const text = document.createElement("p");
    text.textContent = "Try another search term or choose a different topic.";

    wrap.append(title, text);
    return wrap;
  }

  function renderFeatured() {
    if (!dom.featuredStory) return;
    dom.featuredStory.replaceChildren();

    const featured = state.posts.find((post) => post.featured) || state.posts[0];
    if (!featured) return;

    dom.featuredStory.appendChild(createFeaturedStory(featured));
  }

  function renderTrending() {
    if (!dom.trendingList) return;
    dom.trendingList.replaceChildren();

    state.posts.slice(0, 3).forEach((post) => {
      dom.trendingList.appendChild(createTrendingItem(post));
    });
  }

  function renderTopicFilters() {
    if (!dom.topicFilters) return;
    dom.topicFilters.replaceChildren();

    getTopics(state.posts).forEach((topic) => {
      const button = makeButton(
        `post-card__action${state.activeTopic === topic ? " is-active" : ""}`,
        topic,
        {
          "data-action": "filter",
          "data-topic": topic,
          "aria-pressed": String(state.activeTopic === topic)
        }
      );
      dom.topicFilters.appendChild(button);
    });
  }

  function filterPosts() {
    const term = normalizeText(state.searchTerm);

    state.filteredPosts = state.posts.filter((post) => {
      const topicMatch = state.activeTopic === "All" || post.topic === state.activeTopic;
      if (!topicMatch) return false;

      if (!term) return true;

      const haystack = normalizeText(
        `${post.title} ${post.excerpt} ${post.content} ${post.date} ${post.topic}`
      );

      return haystack.includes(term);
    });
  }

  function renderPosts() {
    if (!dom.postsGrid || !dom.resultsCount || !dom.archiveMeta) return;

    filterPosts();
    dom.postsGrid.replaceChildren();

    dom.resultsCount.textContent = `${state.filteredPosts.length} newsletter${state.filteredPosts.length === 1 ? "" : "s"}`;
    dom.archiveMeta.textContent =
      state.activeTopic === "All"
        ? "Sorted by newest"
        : `Filtered by ${state.activeTopic}`;

    if (!state.filteredPosts.length) {
      dom.postsGrid.appendChild(createEmptyState());
      return;
    }

    state.filteredPosts.forEach((post) => {
      dom.postsGrid.appendChild(createPostCard(post));
    });
  }

  function findPostById(id) {
    return state.posts.find((post) => post.id === Number(id)) || null;
  }

  function findPostBySlug(slug) {
    return state.posts.find((post) => post.slug === slug) || null;
  }

  function openModal(post, updateHash = true) {
    if (!post || !dom.postModal || !dom.modalArticle) return;

    state.activePost = post;
    state.lastFocusedElement =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    dom.modalArticle.replaceChildren();

    const header = document.createElement("div");
    header.className = "modal-header";

    const topic = document.createElement("span");
    topic.className = "modal-label";
    topic.textContent = post.topic;

    const title = document.createElement("h2");
    title.className = "modal-title";
    title.id = "modalTitle";
    title.textContent = post.title;

    const meta = document.createElement("p");
    meta.className = "modal-date";
    meta.textContent = `${formatDateUS(post.date)} · ${post.readingTime}`;

    const actions = document.createElement("div");
    actions.className = "post-card__actions";
    actions.append(createBookmarkButton(post), createShareButton(post));

    header.append(topic, title, meta, actions);
    dom.modalArticle.appendChild(header);

    const image = buildImage(post.image, post.title, "modal-image-wrap");
    if (image) {
      dom.modalArticle.appendChild(image);
    }

    const body = document.createElement("div");
    body.className = "modal-content-text";
    body.id = "modalBody";
    body.textContent = post.content;
    dom.modalArticle.appendChild(body);

    dom.postModal.classList.remove("hidden");
    dom.postModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    if (updateHash) {
      history.replaceState(null, "", `#${post.slug}`);
    }

    dom.closeModalBtn?.focus();
  }

  function closeModal({ resetHash = true } = {}) {
    if (!dom.postModal) return;

    dom.postModal.classList.add("hidden");
    dom.postModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (resetHash && window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    if (state.lastFocusedElement) {
      state.lastFocusedElement.focus();
    }

    state.activePost = null;
  }

  function trapModalFocus(event) {
    if (!state.activePost || !dom.postModal || dom.postModal.classList.contains("hidden")) return;
    if (event.key !== "Tab") return;

    const focusable = qsa(CONFIG.focusableSelector, dom.postModal).filter(
      (element) => !element.hasAttribute("hidden")
    );

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch {}

    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      textarea.remove();
      return copied;
    } catch {
      return false;
    }
  }

  async function handleShare(post) {
    const url = getPostUrl(post);

    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url
        });
        return;
      } catch {}
    }

    const copied = await copyText(url);
    updateStatusMessage(copied ? "Story link copied." : "Unable to copy link.");
  }

  function updateBookmarks(postId) {
    if (state.bookmarks.has(postId)) {
      state.bookmarks.delete(postId);
    } else {
      state.bookmarks.add(postId);
    }

    safeStorage.set(CONFIG.storageKeys.bookmarks, Array.from(state.bookmarks));
    renderFeatured();
    renderTrending();
    renderTopicFilters();
    renderPosts();

    if (state.activePost && state.activePost.id === postId) {
      openModal(state.activePost, false);
    }
  }

  function updateStatusMessage(message) {
    if (!dom.archiveMeta) return;
    dom.archiveMeta.textContent = message;

    window.clearTimeout(updateStatusMessage._timer);
    updateStatusMessage._timer = window.setTimeout(() => {
      dom.archiveMeta.textContent =
        state.activeTopic === "All"
          ? "Sorted by newest"
          : `Filtered by ${state.activeTopic}`;
    }, 2200);
  }

  function clearFieldErrors(form) {
    qsa(".field-error").forEach((node) => {
      node.hidden = true;
      node.textContent = "";
    });

    qsa("input, select", form).forEach((field) => {
      field.removeAttribute("aria-invalid");
    });
  }

  function setFieldError(field, errorId, message) {
    if (!field) return;
    field.setAttribute("aria-invalid", "true");

    const errorNode = document.getElementById(errorId);
    if (errorNode) {
      errorNode.hidden = false;
      errorNode.textContent = message;
    }
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validateZip(value) {
    if (!value) return true;
    return /^\d{5}(?:-\d{4})?$/.test(value);
  }

  function showFormStatus(message, type = "") {
    if (!dom.formStatus) return;
    dom.formStatus.textContent = message;
    dom.formStatus.className = `form-status${type ? ` is-${type}` : ""}`;
  }

  function handleNewsletterSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement)) return;

    clearFieldErrors(form);
    showFormStatus("");

    const formData = new FormData(form);

    const firstName = String(formData.get("firstName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const zipCode = String(formData.get("zipCode") || "").trim();
    const stateValue = String(formData.get("state") || "").trim();
    const consent = formData.get("consent") === "on";
    const edition = String(formData.get("edition") || "Morning Brief");
    const topics = formData.getAll("topics").map(String);

    let valid = true;

    const firstNameField = form.querySelector("#firstName");
    const emailField = form.querySelector("#email");
    const zipField = form.querySelector("#zipCode");
    const consentField = form.querySelector("#consent");

    if (firstName && firstName.length < 2) {
      valid = false;
      setFieldError(firstNameField, "firstNameError", "Please enter at least 2 characters or leave it blank.");
    }

    if (!email || !validateEmail(email)) {
      valid = false;
      setFieldError(emailField, "emailError", "Please enter a valid email address.");
    }

    if (!validateZip(zipCode)) {
      valid = false;
      setFieldError(zipField, "zipCodeError", "Enter a valid U.S. ZIP code such as 10001 or 10001-1234.");
    }

    if (!consent) {
      valid = false;
      setFieldError(consentField, "consentError", "Please confirm consent to continue.");
    }

    if (!valid) {
      showFormStatus("Please correct the highlighted fields.", "error");
      return;
    }

    const saved = safeStorage.set(CONFIG.storageKeys.signupPrefs, {
      firstName,
      email,
      zipCode,
      state: stateValue,
      edition,
      topics,
      savedAt: new Date().toISOString()
    });

    if (!saved) {
      showFormStatus("Preferences could not be saved in this browser.", "error");
      return;
    }

    form.reset();
    showFormStatus("Thanks. Your preferences were saved locally in this browser.", "success");
  }

  function applySavedTheme() {
    const savedTheme = safeStorage.get(CONFIG.storageKeys.theme, "dark");
    state.theme = savedTheme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", state.theme);

    if (dom.themeToggle) {
      dom.themeToggle.setAttribute("aria-pressed", String(state.theme === "light"));
    }
  }

  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", state.theme);
    safeStorage.set(CONFIG.storageKeys.theme, state.theme);

    if (dom.themeToggle) {
      dom.themeToggle.setAttribute("aria-pressed", String(state.theme === "light"));
    }
  }

  function updateProgressBar() {
    if (!dom.progressBar) return;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
    dom.progressBar.style.width = `${progress}%`;
  }

  function updateBackToTop() {
    if (!dom.backToTopBtn) return;
    dom.backToTopBtn.classList.toggle("is-visible", window.scrollY > 500);
  }

  function updateStickyCta() {
    if (!dom.stickyCta) return;
    dom.stickyCta.classList.toggle("is-visible", window.scrollY > 700);
  }

  function dismissAnnouncement() {
    if (!dom.announcementBar) return;
    dom.announcementBar.hidden = true;
    safeStorage.set(CONFIG.storageKeys.announcementDismissed, true);
  }

  function restoreAnnouncementState() {
    const dismissed = safeStorage.get(CONFIG.storageKeys.announcementDismissed, false);
    if (dismissed && dom.announcementBar) {
      dom.announcementBar.hidden = true;
    }
  }

  function restoreBookmarks() {
    const saved = safeStorage.get(CONFIG.storageKeys.bookmarks, []);
    state.bookmarks = new Set(Array.isArray(saved) ? saved.map(Number) : []);
  }

  function handleHashOpen() {
    const slug = window.location.hash.replace(/^#/, "");
    if (!slug) return;

    const post = findPostBySlug(slug);
    if (post) {
      openModal(post, false);
    }
  }

  function handleDocumentClick(event) {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const actionEl = target.closest("[data-action]");
    if (!actionEl) return;

    const action = actionEl.getAttribute("data-action");

    if (action === "filter") {
      const topic = actionEl.getAttribute("data-topic") || "All";
      state.activeTopic = topic;
      renderTopicFilters();
      renderPosts();
      return;
    }

    const postId = Number(actionEl.getAttribute("data-post-id"));
    if (!postId) return;

    const post = findPostById(postId);
    if (!post) return;

    if (action === "read") {
      openModal(post, true);
      return;
    }

    if (action === "bookmark") {
      updateBookmarks(post.id);
      return;
    }

    if (action === "share") {
      handleShare(post);
    }
  }

  function handleSearchInput(event) {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;

    state.searchTerm = target.value || "";
    renderPosts();
  }

  function bindEvents() {
    document.addEventListener("click", handleDocumentClick);

    dom.searchInput?.addEventListener("input", handleSearchInput);
    dom.closeModalBtn?.addEventListener("click", () => closeModal());
    dom.modalOverlay?.addEventListener("click", () => closeModal());
    dom.themeToggle?.addEventListener("click", toggleTheme);
    dom.backToTopBtn?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    dom.announcementCloseBtn?.addEventListener("click", dismissAnnouncement);
    dom.newsletterForm?.addEventListener("submit", handleNewsletterSubmit);

    window.addEventListener(
      "scroll",
      () => {
        updateProgressBar();
        updateBackToTop();
        updateStickyCta();
      },
      { passive: true }
    );

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && state.activePost) {
        closeModal();
      }
      trapModalFocus(event);
    });

    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash && state.activePost) {
        closeModal({ resetHash: false });
        return;
      }
      handleHashOpen();
    });
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return;

    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {
        /* no-op */
      });
    });
  }

  function init() {
    cacheDom();
    state.posts = sanitizePosts(rawPosts);
    restoreBookmarks();
    restoreAnnouncementState();
    applySavedTheme();

    renderFeatured();
    renderTrending();
    renderTopicFilters();
    renderPosts();

    bindEvents();
    handleHashOpen();
    updateProgressBar();
    updateBackToTop();
    updateStickyCta();
    registerServiceWorker();
  }

  init();
})();