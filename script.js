const projects = [
  {
    title: "Pocket Tracker",
    description: "A simple and intuitive app to track daily expenses and manage budgets efficiently.    Visualizes spending with charts, categorizes expenses, and helps build smarter financial habits",
    image: "assests/11877756.webp", // Replace with real image if needed
    link: "https://github.com/faizal1108/pocket-expense-tracker/"
  }
  ,{
    title: "Resume Template",
    description: "A web-based tool that lets users design and customize professional resumes effortlessly.Offers multiple templates, drag-and-drop sections, and instant download options.",
    image: "assests/resume.png", // Replace with real image if needed
    link: "https://github.com/faizal1108/resume-builder"
  },


];

const container = document.getElementById("project-cards");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" style="width:100%">
    <div class="container">
      <h4><b>${project.title}</b></h4>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">
        <button>Learn More</button>
      </a>
    </div>
  `;

  container.appendChild(card);
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });