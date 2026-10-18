# QA notes

## Checks completed

Codex helped run these local checks on October 17, 2026. The page was tested in Google Chrome and Safari using the local preview at `http://127.0.0.1:5500/ghost-dashboard/index.html`.

- `node --check script.js` passed.
- In Chrome, Codex checked the four component buttons, the full publishing flow, Reset at different points, repeated clicks, keyboard use, and a rapid sequence of Next clicks.
- In Safari (WebKit), Codex checked all four components, the full flow, the disabled final button, and Reset.
- In Chrome, Codex checked the layout at 1920 × 1080, 768 × 1024, and 375 × 812. Chrome DevTools was used for Console, Network, and basic load timing.

## Results

### Local preview (Chrome and Safari)

- Each component showed the matching explanation and one selected state. Clicking the same button twice stayed consistent. Selecting Database during step one changed the detail, and Next still advanced to step two and selected Ghost Server.
- The publishing steps appeared in order from one through four. Step four disabled the button and showed “Flow complete.” Reset worked before starting, at step two, and after completion; it restored Admin Editor, zero steps, and the enabled start button. The component, flow, and Reset checks also passed in Safari.
- At all three Chrome viewport sizes, text and controls remained visible, with no overlap, clipping, or horizontal scrolling. The page width matched the viewport width in each check.
- In Chrome, Tab moved through the skip link, four component buttons, flow button, and Reset in that order. Shift+Tab moved backward. Focus was visible; the skip link reached `#main`. Enter and Space activated the buttons checked.
- A fresh Chrome reload showed zero Console messages. The page, CSS, and JavaScript each returned HTTP 200; the local preview WebSocket returned 101. No failed requests or missing project assets appeared.
- Four back-to-back automated Next clicks reached step four in 1.36 seconds, including automation overhead. An extra Enter did not advance the disabled button, and Reset still worked.
- Chrome and Safari exposed button names and selected states in their accessibility trees. The component detail uses `aria-live="polite"` and `aria-atomic="true"`; the flow uses `role="status"` and `aria-atomic="true"`.
- One local Chrome DevTools reload measured DOMContentLoaded at 81 ms, Load at 201 ms, and Finish at 581 ms. Three automated reload-to-DOM reads took 386, 108, and 97 ms; one click-to-detail read took 535 ms. The automated times include tool overhead and warm reloads, so these are basic local observations, not Web Vitals or production performance results.
- Form validation does not apply because the prototype has no form or editable input.

### Deployed website (Chrome, October 17, 2026)

- GitHub Pages reported the deployment as built. HTTP checks returned 200 for the page, `styles.css`, and `script.js`; Chrome loaded the page and both assets.
- Codex checked all four component buttons, all four publishing steps, the disabled final Next button, and Reset. They worked on the deployed site.
- At 375 × 812, the page remained readable without horizontal scrolling. Chrome showed no console errors or missing project assets.

## Still unverified

- Screen-reader announcements were not tested with assistive technology.
- Student review and the 5–7 minute screen-and-webcam recording are pending. The project has not been submitted to Canvas.
