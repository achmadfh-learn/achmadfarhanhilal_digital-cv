// === frontend/script.js ===
document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/cv")
    .then(res => res.json())
    .then(cv => {
      // === PERSONAL INFORMATION ===
      const p = cv.personal;
      document.querySelector("#personal").innerHTML = `
        <h2>👤 Personal Information</h2>
        <div class="card personal-card">
          <p><b>Name:</b> ${p.name}</p>
          <p><b>NIM:</b> ${p.nim}</p>
          <p><b>Gender:</b> ${p.gender}</p>
          <p><b>Place & Date of Birth:</b> ${p.birthPlace}, ${p.birthDate}</p>
          <p><b>Nationality:</b> ${p.nationality}</p>
          <p><b>Address:</b> ${p.address}, ${p.city}</p>
          <p><b>Phone:</b> ${p.phone}</p>
          <p><b>Email:</b> <a href="mailto:${p.email}">${p.email}</a></p>
          <p><b>Social Media:</b> ${p.social}</p>
          <p><b>Hobby:</b> ${p.hobby}</p>
          <p><b>Religion:</b> ${p.religion}</p>
          <p><b>Height:</b> ${p.height}</p>
          <p><b>Weight:</b> ${p.weight}</p>
          <p><b>Marital Status:</b> ${p.maritalStatus}</p>
        </div>
      `;

      // === EDUCATION ===
      document.querySelector("#education").innerHTML = `
        <h2>🎓 Education</h2>
        ${cv.education.map(e => `
          <div class="card">
            <h3>${e.stage}</h3>
            <p><b>Institution:</b> ${e.name}</p>
            <p><b>Major:</b> ${e.major}</p>
            <p><b>Years:</b> ${e.year}</p>
          </div>
        `).join("")}
      `;

      // === ACHIEVEMENTS ===
      if (cv.achievements) {
  const achSection = document.querySelector("#achievements");
  achSection.innerHTML = `
    <h2>🏆 Achievements & Certifications</h2>
    ${cv.achievements.map(a => `
      <div class="card">
        <h3>${a.name}</h3>
        <p><b>Year:</b> ${a.year}</p>
        <p><b>Description:</b> ${a.result}</p>
      </div>
    `).join("")}
  `;
}


      // === SKILLS ===
      document.querySelector("#skills").innerHTML = `
        <h2>💡 Skills</h2>
        <ul class="skill-list">
          ${cv.skills.map(s => `<li>${s}</li>`).join("")}
        </ul>
      `;

      // === EXPERIENCE ===
      document.querySelector("#experience").innerHTML = `
        <h2>💼 Work & Internship Experience</h2>
        ${cv.experiences.map(exp => `
          <div class="card">
            <h3>${exp.title}</h3>
            <p><b>Institution:</b> ${exp.place}</p>
            <p><b>Period:</b> ${exp.period}</p>
            <ul>${exp.description.map(d => `<li>${d}</li>`).join("")}</ul>
          </div>
        `).join("")}
      `;

      // === ORGANIZATION ===
      document.querySelector("#organization").innerHTML = `
        <h2>🤝 Organization Experience</h2>
        ${cv.organizations.map(o => `
          <div class="card">
            <h3>${o.name}</h3>
            <p><b>Role:</b> ${o.role}</p>
            <p><b>Years:</b> ${o.years}</p>
            <p><b>Description:</b> ${o.description}</p>
          </div>
        `).join("")}
      `;
    })
    .catch(err => {
      console.error("Error loading CV data:", err);
      document.body.innerHTML = "<p style='color:red'>Failed to load CV data.</p>";
    });
});
