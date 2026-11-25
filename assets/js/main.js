(() => {
  const d = window.ACADEMIC_DATA || {};
  const el = (id) => document.getElementById(id);
  const esc = (s = "") => String(s);
  const links = (items = []) => `<div class="resource-links">${items.map(x => `<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.label)}</a>`).join("")}</div>`;
  const image = (src, alt, cls) => src
    ? `<div class="${cls}"><img src="${esc(src)}" alt="${esc(alt || "")}" onerror="this.parentElement.innerHTML='<div class=&quot;image-placeholder&quot;>Add image</div>'"></div>`
    : `<div class="${cls}"><div class="image-placeholder">${esc(alt || "Add teaser image")}</div></div>`;

  const hideIfEmpty = (id) => {
    const node = el(id);
    const section = node && node.closest("section");
    if (section) section.hidden = !node.innerHTML.trim();
  };

  el("experienceList").innerHTML = (d.experience || []).map(x => `
    <article class="experience-item">
      ${x.logo ? `<img class="experience-logo" src="${esc(x.logo)}" alt="${esc(x.logoAlt || x.organization || "")}">` : `<span></span>`}
      <div class="experience-date">${esc(x.date)}</div>
      <div class="experience-body"><div class="experience-role">${esc(x.role)} · ${esc(x.organization)}</div><div class="experience-detail">${esc(x.detail)}</div></div>
    </article>`).join("");

  const pubs = [...(d.publications || [])].sort((a,b) => String(b.year).localeCompare(String(a.year)));
  const years = [...new Set(pubs.map(x => x.year))];
  el("publicationList").innerHTML = years.map(year => `
    <div class="pub-year">${esc(year)}</div>
    ${pubs.filter(x => x.year === year).map(x => `
      <article class="publication${x.image ? "" : " no-image"}">
        ${x.image ? image(x.image, x.title, "pub-image") : ""}
        <div>
          <div class="pub-title">${esc(x.title)}</div>
          <div class="pub-meta">${x.authors || ""}</div>
          <div class="pub-meta">${esc(x.venue || "")} ${x.award ? `<span class="pub-award">· ${esc(x.award)}</span>` : ""}</div>
          ${links(x.links)}
        </div>
      </article>`).join("")}`).join("");

  el("newsList").innerHTML = (d.news || []).map(x => `<li><span class="news-date">${esc(x.date)}</span>${x.html || ""}</li>`).join("");
  el("projectList").innerHTML = (d.projects || []).map(x => `
    <article class="project-item">
      <div class="experience-date">${esc(x.date)}</div>
      <div class="experience-body"><div class="experience-role">${esc(x.title)}</div><div class="experience-detail">${esc(x.meta)}</div><div class="experience-detail">${esc(x.detail)}</div>${x.image ? `<img class="project-photo" src="${esc(x.image)}" alt="${esc(x.imageAlt || x.title)}">` : ""}</div>
    </article>`).join("");
  el("educationList").innerHTML = (d.education || []).map(x => {
    const lines = x.lines || (x.detail ? [x.detail] : []);
    const crest = x.logo ? `<img class="edu-crest" src="${esc(x.logo)}" alt="${esc(x.logoAlt || "")}">` : "";
    return `<div class="plain-item edu-item">${crest}<div><strong>${esc(x.title)}</strong>${lines.map(line => `<span>${esc(line)}</span>`).join("")}</div></div>`;
  }).join("");
  el("serviceList").innerHTML = (d.service || []).map(x => `<div class="plain-item"><strong>${esc(x.title)}</strong><span>${esc(x.detail)}</span></div>`).join("");
  ["experienceList", "publicationList", "educationList", "projectList", "serviceList"].forEach(hideIfEmpty);
  const newsList = el("newsList");
  if (newsList) newsList.hidden = !newsList.innerHTML.trim();
  document.querySelectorAll(".section-nav a").forEach(a => {
    const section = document.getElementById((a.getAttribute("href") || "").slice(1));
    if (section && section.hidden) a.hidden = true;
  });
  el("year").textContent = new Date().getFullYear();
  el("updated").textContent = d.lastUpdated || "Recently";
  document.querySelectorAll(".placeholder").forEach(a => a.addEventListener("click", e => e.preventDefault()));

  const impact = el("impact");
  if (impact) {
    fetch("https://api.openalex.org/authors/orcid:0000-0001-7083-0948")
      .then(r => r.json())
      .then(a => {
        const stats = a.summary_stats || {};
        if (a.cited_by_count == null || stats.h_index == null) return;
        el("impactCitations").textContent = a.cited_by_count;
        el("impactH").textContent = stats.h_index;
        el("impactI10").textContent = stats.i10_index ?? "—";
        if (a.id) el("impactSource").href = a.id;
        impact.hidden = false;
      })
      .catch(() => {});
  }
})();
