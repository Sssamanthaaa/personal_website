Promise.all([
  fetch("about_me.html").then(response => response.text()),
  fetch("contact.html").then(response => response.text()),
  fetch("projects.html").then(response => response.text())
])
.then(([aboutData, contactData, projectData]) => {
  document.getElementById("about-section").innerHTML = aboutData;
  document.getElementById("contact-section").innerHTML = contactData;
  document.getElementById("project-section").innerHTML = projectData;
})
.catch(error => console.error("Error loading sections:", error));
