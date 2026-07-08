const projects = [
  {
    title: "Sales Demo Dashboard",
    category: "Dashboard",
    publisher: "Probhat Patnaik",
    publisherPage: "publishers/probhat.html",
    description: "Retail sales analytics dashboard built in Power BI.",
    tags: ["Power BI", "Sales", "Retail"],
    link: "dashboards.html",
    thumbnail: "Power BI"
  }
];

const publishers = [
  {
    name: "Probhat Patnaik",
    role: "Finance • Power BI • Research • Photography",
    initials: "PP",
    page: "publishers/probhat.html"
  }
];

function renderProjects() {
  const container = document.getElementById("latest-projects");
  if (!container) return;

  container.innerHTML = projects.map(project => `
    <div class="project-card">
      <div class="thumb">${project.thumbnail}</div>
      <div class="project-content">
        <p class="type">${project.category}</p>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p class="publisher">By <a href="${project.publisherPage}">${project.publisher}</a></p>
        <div class="tags">
          ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
        <a href="${project.link}">Open →</a>
      </div>
    </div>
  `).join("");
}

function renderPublishers() {
  const container = document.getElementById("featured-publishers");
  if (!container) return;

  container.innerHTML = publishers.map(publisher => `
    <a href="${publisher.page}" class="publisher-card">
      <div class="avatar">${publisher.initials}</div>
      <h3>${publisher.name}</h3>
      <p>${publisher.role}</p>
      <span>View Profile →</span>
    </a>
  `).join("");
}

renderProjects();
renderPublishers();