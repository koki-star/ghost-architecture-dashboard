# QA checklist and evidence

Status: local functionality, viewport, keyboard, two-engine browser, Console/Network, and basic load checks are recorded below. Full assignment evidence and actual screen-reader announcements remain pending. Record actual results only; a code check does not prove browser or accessibility behavior.

| Test | Expected result | Actual result |
| --- | --- | --- |
| Select each of four components | Correct text; one selected button | Passed in Chrome: each button showed its matching title and explanation, with exactly one selected state. |
| Complete publishing flow | Four steps in order; then disabled completion button | Passed in Chrome: each step was checked in order; step four changed the button to disabled “Flow complete.” |
| Reset midway and after completion | First component, zero steps, enabled start button | Passed in Chrome at step two and after step four. |
| Reset before starting; repeat component clicks | No errors or inconsistent state | Passed in Chrome: Reset restored the initial state before starting; selecting Admin Editor twice kept the same state. |
| Select components during flow | Details change; flow progresses from its existing step | Passed in Chrome: selecting Database at step one changed the detail; Next still advanced to step two and selected Ghost Server. |
| Rapidly activate Next | Stops at step four without errors | Passed for four back-to-back automated Chrome clicks in 1.36 s: step four disabled Next; an extra Enter did not advance it; Reset worked. More extreme input timing was not tested. |
| Desktop 1920 × 1080 | No overlap or horizontal overflow | Passed in Chrome at 1920 × 1080: full-page visual check and DOM widths showed no overlap, clipped text, or horizontal overflow. Controls remained visible in the page. |
| Tablet and mobile | Readable layout without clipping | Passed in Chrome at 768 × 1024 and 375 × 812: full-page visual checks and DOM widths showed readable text, controls within the page, no overlap, and no horizontal overflow. |
| Chromium and Safari or Firefox | Core flow works in both engines | Passed in Chrome and Safari: in Safari, all four component explanations and selected states, all four flow steps, disabled completion button, and Reset were checked. |
| DevTools console and Network | No uncaught errors or missing assets | Passed on a fresh Chrome reload: Console showed 0 messages; `index.html`, `styles.css`, and `script.js` each returned HTTP 200 in Network. No failed requests appeared. The local preview WebSocket returned 101. |
| Keyboard only | Visible focus; buttons work with Enter/Space; logical order | Passed in Chrome: Tab reached skip link, four components, Next, and Reset in order; Shift+Tab moved backward; a visible focus outline appeared. Skip link reached `#main`; Enter and Space activated tested buttons. |
| Accessible names and announcements | Buttons named; changing detail/status announced | Partial: Chrome and Safari accessibility trees exposed named controls and selected states; markup has a polite live component detail and a `role="status"` flow region. Actual screen-reader announcements were not tested. |
| Loading and responsiveness | Page loads promptly; controls respond immediately | Basic local check passed in Chrome: one DevTools Network reload reported DOMContentLoaded 81 ms, Load 201 ms, Finish 581 ms. An automated component click plus result read took 535 ms, including tool overhead. Broader performance profiling remains pending. |

Input validation: not applicable because this version contains no form or editable input. In the video, demonstrate repeated clicks, end-of-flow behavior, and reset as applicable edge cases. Explain this scope plainly; do not claim to have tested form validation.

## Evidence log

Initial checks on October 17, 2026 in the in-app browser:

- Clicking Database displayed its explanation and selected state.
- Starting the flow showed step 1 and selected Admin Editor.
- Three further clicks reached step 4, selected Public Website, and disabled the completion button.
- Reset after completion restored zero steps, Admin Editor, and the enabled start button.
- JavaScript syntax check passed with `node --check script.js`.
- Saved `preview.png` as a visual snapshot, not proof of mobile or cross-browser QA.

This earlier in-app browser check did not establish the two-engine, viewport, keyboard, assistive technology, Network-panel, or performance requirements. See the newer local check below for the additional flow and reset results.

## Local functionality check — October 17, 2026

Browser: Google Chrome, existing local preview at `http://127.0.0.1:5500/ghost-dashboard/index.html`.

- `node --check script.js` passed.
- All four component buttons showed the matching explanation and exactly one `aria-pressed="true"` state. Clicking Admin Editor twice left a consistent state.
- Checked all four publishing steps individually, including their titles, step counts, highlighted list items, and selected components. Step four disabled Next.
- Reset worked before starting, at step two, and after completion: it restored Admin Editor, zero steps, and an enabled “Show publishing flow” button.
- At step one, selecting Database changed only the component detail; Next still advanced to step two and selected Ghost Server.
- Four consecutive Next clicks reached step four without a captured console error. This was not a timed rapid-input test.
- Chrome's captured console error list was empty during these checks. Its page asset inventory listed `styles.css` and `script.js` as resources. HTTP status codes and the full Network panel were not checked.

No functional bug was found, and no application code was changed at this stage. The later local QA stage below covers viewport, cross-browser, keyboard, and basic load checks.

## Remaining local QA — October 17, 2026

Browsers: Google Chrome for viewport, keyboard, Console, Network, edge, and load checks; Safari for the second-engine functionality check. Preview: `http://127.0.0.1:5500/ghost-dashboard/index.html`.

- **Responsive layout:** Chrome full-page visual checks at 1920 × 1080, 768 × 1024, and 375 × 812 found no clipped text, overlap, or inaccessible controls. At each width, `document.documentElement.scrollWidth` equaled `clientWidth` (1920, 768, and 375 pixels respectively); no element in the checked page exceeded its own content width. The desktop used four component columns, and the mobile view stacked the buttons.
- **Keyboard:** After reload, Tab order was skip link → Admin Editor → Ghost Server → Database → Public Website → Show publishing flow → Reset. Shift+Tab returned from Reset to the flow button. Focus matched `:focus-visible`, and the visible outline was inspected. Enter activated Ghost Server and Next; Space activated Database and Reset. Enter on the skip link changed the URL to `#main` and focused the main content.
- **Safari (WebKit):** Each component showed its matching explanation and selected state. The flow showed steps 1, 2, 3, and 4 in order, ending with disabled “Flow complete.” Reset restored zero steps, Admin Editor, and the enabled start button.
- **Console and Network:** On a fresh Chrome DevTools reload with Network recording and cache disabled, Console showed 0 messages. The page, local stylesheet, and local script each returned 200; the preview server WebSocket returned 101. The other observed requests were browser-extension or injected font resources and returned 200. No failed request or missing project asset appeared in this run.
- **Edge sequence:** Four back-to-back automated Next clicks took 1.36 seconds including automation overhead, stopped at step four, and disabled Next. An extra Enter left the count at step four. Reset then restored the start state. This does not simulate simultaneous events or every possible input rate.
- **Basic load timing:** The same Chrome DevTools Network run showed DOMContentLoaded at 81 ms, Load at 201 ms, and Finish at 581 ms. Three separate automation-observed reload-to-DOM-snapshot times were 386, 108, and 97 ms; those include tool overhead and warm reloads. One automated component click-to-observed-detail took 535 ms, also including tool overhead. These local measurements are not Web Vitals or a production performance test.
- **Accessibility markup:** Browser accessibility trees exposed button names and pressed states. The component detail has `aria-live="polite"` and `aria-atomic="true"`; the flow has `role="status"` and `aria-atomic="true"`. No assistive technology was used, so audible announcements remain **pending**.

Screenshots were inspected during the viewport checks but were not saved as files by the available browser screenshot tool. No application code was changed. Full assignment QA and evidence collection remain separate from these local checks.
