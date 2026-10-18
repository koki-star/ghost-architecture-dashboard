// Each key matches a button's data-component attribute in the HTML.
const components = {
  admin: {
    title: "Admin Editor",
    text: "The browser interface where an author writes and manages posts. It communicates with Ghost through the Admin API over HTTP."
  },
  server: {
    title: "Ghost Server",
    text: "Ghost Core is a Node.js application. Its Admin API checks publishing requests and calls server logic to update data. The same core application also renders the default public theme."
  },
  database: {
    title: "Database",
    text: "The persistence layer stores publication data. Ghost recommends MySQL for production and uses SQLite for local development. The server accesses the database; the browser editor does not write to it directly."
  },
  website: {
    title: "Public Website",
    text: "When a reader requests a page, Ghost renders the active Handlebars theme on the server. In this default theme setup, rendering uses internal server capabilities; it does not require an HTTP call to the public Content API."
  }
};

const steps = [
  { component: "admin", title: "1. Author submits a post", text: "The author chooses to publish “My first Ghost post.” The browser editor sends an authenticated request to the Admin API." },
  { component: "server", title: "2. Ghost checks the request", text: "The Admin API validates the request and checks permissions before the server handles the publishing operation." },
  { component: "database", title: "3. Ghost stores the post", text: "Server logic updates the database so the post is stored with its published state. This dashboard only illustrates that operation." },
  { component: "website", title: "4. A reader opens the page", text: "In a later request, a reader opens the post’s URL. Ghost uses the stored content and the active theme to render a page. The database does not send a page straight to the reader." }
];

const componentButtons = document.querySelectorAll("[data-component]");
const flowItems = document.querySelectorAll(".flow li");
const nextButton = document.querySelector("#next-step");
const stepCount = document.querySelector("#step-count");
const stepTitle = document.querySelector("#step-title");
const stepText = document.querySelector("#step-text");
let currentStep = 0;

function selectComponent(key) {
  const component = components[key];
  document.querySelector("#detail-title").textContent = component.title;
  document.querySelector("#detail-text").textContent = component.text;
  componentButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.component === key));
  });
}

componentButtons.forEach((button) => {
  button.addEventListener("click", () => selectComponent(button.dataset.component));
});

nextButton.addEventListener("click", () => {
  // Stop at the final step, even if an extra click is received.
  if (currentStep >= steps.length) return;
  const step = steps[currentStep];
  selectComponent(step.component);
  flowItems.forEach((item, index) => {
    if (index === currentStep) item.setAttribute("aria-current", "step");
    else item.removeAttribute("aria-current");
  });
  currentStep += 1;
  stepCount.textContent = `Step ${currentStep} of ${steps.length}`;
  stepTitle.textContent = step.title;
  stepText.textContent = step.text;
  const complete = currentStep === steps.length;
  nextButton.textContent = complete ? "Flow complete" : "Next step";
  nextButton.disabled = complete;
});

document.querySelector("#reset").addEventListener("click", () => {
  currentStep = 0;
  selectComponent("admin");
  flowItems.forEach((item) => item.removeAttribute("aria-current"));
  stepCount.textContent = "Ready · 0 of 4 steps";
  stepTitle.textContent = "Sample post: My first Ghost post";
  stepText.textContent = "Select “Show publishing flow” to begin. Use “Next step” to continue at your own pace.";
  nextButton.textContent = "Show publishing flow";
  nextButton.disabled = false;
});
