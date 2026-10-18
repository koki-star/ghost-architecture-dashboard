# Ghost Architecture Explorer

AD371 companion prototype: a small interactive dashboard that explains a simplified Ghost publishing workflow. It uses plain HTML, CSS, and JavaScript. All interactions run in the browser. There is no Ghost installation, real database, backend, account, API key, environment variable, or package dependency.

## Links

- [Public GitHub repository](https://github.com/koki-star/ghost-architecture-dashboard)
- [Live website](https://koki-star.github.io/ghost-architecture-dashboard/)

## Run locally

Clone the repository:

```sh
git clone https://github.com/koki-star/ghost-architecture-dashboard.git
cd ghost-architecture-dashboard
```

Open `index.html` in a browser. You can also serve the project folder with Python 3:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Visit http://127.0.0.1:8000. Stop the server with Control+C.

## Features

- Four native buttons show component explanations.
- A four-step walkthrough illustrates publishing followed by a separate reader request.
- Reset returns the whole demonstration to its initial state.
- Responsive layout, visible keyboard focus, and live status messages.

## Architecture analysis and verification

Analyzed system: Ghost. Prototype: a standalone teaching dashboard, not a Ghost client.

Interpretation: Ghost Core is a modular monolith with a separate browser admin client and database persistence. **“Modular monolith” is our interpretation**, not Ghost's own label. Ghost's runtime guide says the backend and frontend applications share one Node.js process, boot sequence, configuration, and database. That shared process makes coordination within Core simpler, but its modules share resources and cannot be deployed as independent services.

The four boxes represent logical roles, not four independent servers. Admin Editor is a browser application. Ghost Core handles the APIs, server logic, and default theme rendering; the database stores publication data. The simplified sequence is:

1. Admin browser sends an authenticated HTTP request to the Admin API.
2. The server checks it and performs publishing logic.
3. The server persists publication data.
4. In a separate, later request, a reader opens the post and Ghost renders the active theme using stored content.

For default theme routes, Ghost's frontend can reach server APIs through an **in-process proxy**. This is different from an external frontend making an HTTP request to the public Content API. The dashboard omits email, payments, caching, background jobs, and optional integrations. It models the default theme setup, not every possible headless deployment.

Official sources rechecked on October 17, 2026:

- [Ghost runtime architecture](https://github.com/TryGhost/Ghost/blob/main/docs/codebase/runtime-architecture.md): Admin's HTTP boundary, shared Core process, API validation and permissions, database access, and server-rendered themes.
- [Ghost architecture guide](https://docs.ghost.org/architecture/): Admin and Content API roles, theme layer, MySQL recommendation for production, and SQLite for local development.
- [Ghost frontend proxy source](https://github.com/TryGhost/Ghost/blob/main/ghost/core/frontend/services/proxy.js) and [dependency rules](https://github.com/TryGhost/Ghost/blob/main/.dependency-cruiser.cjs): the frontend uses an in-process bridge to server API endpoints rather than reading server models directly.
- [Ghost post model source](https://github.com/TryGhost/Ghost/blob/main/ghost/core/server/models/post.js): posts are modeled against the `posts` database table.
- [Ghost API design](https://github.com/TryGhost/Ghost/blob/main/docs/practices/api-design.md): publishing is a post update through the API; it is distinct from a reader's later page request.

### AI verification audit

| Initial simplification | Verification and correction |
| --- | --- |
| Four components could appear to mean four independently running services. | Added an explicit logical-role label and clarified that core APIs and theme rendering share a process. |
| “Editor to database to website” could imply direct browser/database access or the database pushing a webpage. | Added API validation and a separate reader request; explained that server logic accesses storage. |
| A public website might be described as always fetching through an HTTP Content API request. | Default theme rendering uses an in-process proxy to server APIs; an external frontend may use the HTTP Content API. The dashboard uses the default theme path. |

These are refinements of the AI's initial high-level model, not claims that actual Ghost code was executed or tested.

## AI disclosure

AI tool: Codex in the desktop app. The exact underlying model identifier was not recorded. AI researched sources, drafted the implementation and documentation, and performed the checks explicitly logged in `QA.md`. See `AI-PROMPTS.md` for the user prompts and initial recommendation.

Customization by AI to fit this request: a reduced four-component scope, a manual flow rather than timed animation, native buttons, responsive CSS, explicit simulation labels, and source-backed corrections. Student review and any student-authored changes must be recorded honestly as they occur. Do not describe AI changes as independent student work.

## QA status

Codex's local checks passed in Chrome and Safari as recorded in `QA.md`. The deployed site also passed the listed Chrome checks, including a 375 × 812 mobile view. The local load timing is a limited measurement, not a production benchmark. **Screen-reader announcements were not tested.** Student review is still pending.

## Assignment status

| Requirement | Status |
| --- | --- |
| Initial prototype | Implemented; see `QA.md` for checks actually completed |
| Architecture explanation and sources | Reverified against official Ghost docs and source on October 17, 2026; student review pending |
| AI prompts and audit | Available staged prompts recorded; see `AI-PROMPTS.md` for gaps |
| QA | Local Chrome and Safari checks and deployed Chrome checks recorded; screen-reader announcements unverified |
| Public GitHub repository | [Published](https://github.com/koki-star/ghost-architecture-dashboard) |
| Live deployment | [GitHub Pages built and checked in Chrome](https://koki-star.github.io/ghost-architecture-dashboard/) |
| Student review | Pending |
| 5–7 minute screen-and-webcam recording | Pending |
| Canvas submission | Pending |

## Files

- `index.html`: page content and structure.
- `styles.css`: layout, colors, focus styles, responsive rules.
- `script.js`: component selection and flow/reset behavior.
- `AI-PROMPTS.md`: AI collaboration record.
- `QA.md`: test plan and actual results.
