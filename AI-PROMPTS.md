# AI collaboration record

This record preserves the earlier project-selection and implementation prompts and adds the staged prompts available in this conversation. Append later prompts and resulting changes. Generated source files are the initial code output for this project; preserve this version in the first approved Git commit before later changes. No commit has been made yet.

## Tool

Codex desktop app. Underlying model identifier not recorded.

## Prompt 1: select an application (verbatim)

> Which app would be the easiest for me to use for this assignment, and what small prototype could I build for it?

AI initially suggested Ghost with clickable components, a publishing simulation, a sample post form, and reset. That larger scope was reduced after the following prompts.

## Prompt 2: reduce scope (verbatim)

> Do you think that is the easiest option I can use for this assignment? I don't want to use complicated things, just something simple that will let me pass this assignment and get the score. That's all I need. I don't need to be creative or do something that requires more of my time. I just need to do a simple one so do you still recommend doing the Ghost or are there different easier things that we can go and do?

## Initial AI output after reducing scope (verbatim)

**Yes, I still recommend Ghost, but make the prototype smaller than I first suggested.** A simple architecture dashboard is explicitly allowed by the assignment.

Build **one webpage using HTML, CSS, and JavaScript** with:

- **Four clickable boxes:** Admin Editor, Ghost Server, Database, and Public Website. Each shows a short explanation.
- **One “Show publishing flow” button:** Step through a simplified explanation of how a post gets published.
- **One reset button:** Restart the demonstration.

**Skip the post form, real database, API connections, login, and installing Ghost.** Those add work you do not need for this option.

You would still need to verify the architecture, document your AI prompts and changes, test the page, publish it, and record the required video. Those requirements make up much of the grade regardless of which app you choose.

This is the lowest-complexity approach I recommend. It fits the assignment, though your score will depend on completing the documentation, testing, and presentation too.

## Prompt 3: build and teach (verbatim)

> Okay, let's do the simple Ghost dashboard. Can you help me complete it step by step and make sure we cover what the assignment requires? Even though we are allowed to use AI, I want you to do more of the things. I also want you to teach me what you're doing so that I can learn on the side as well.

## Implementation output and audit

The initial code output consists of `index.html`, `styles.css`, and `script.js`. AI also drafted this record, `README.md`, and `QA.md`.

The earlier record says official Ghost documentation and runtime source were consulted before implementation. The README audit lists corrections to the initial simplified model. No Ghost installation or live publishing API was used. QA results must be logged separately from implementation claims. Student review, presentation, deployment, and final submission are not complete.

## Prompt 4: copy the existing prototype into AD371 (verbatim, available in this conversation)

~~~text
We are completing an AD371 assignment in stages. My AD371 folder is open in VS Code. Each assignment must have its own subfolder.

For this step, locate and copy an existing Ghost dashboard project into AD371.

Existing project:\
`/Users/kokobhaile/Documents/ChatGPT/Fall/ghost-dashboard`

Tasks:

1. Confirm the full path of the AD371 folder currently open. Read any applicable AGENTS.md instructions.
2. Inspect the existing project and check whether AD371 already contains a `ghost-dashboard` folder.
3. If the destination does not exist, copy the project into `AD371/ghost-dashboard`. Keep the original intact. If the destination already exists, report what you find before overwriting anything.
4. Include `index.html`, `styles.css`, `script.js`, `README.md`, `AI-PROMPTS.md`, and `QA.md`. The optional `preview.png` can be left out.
5. Read the files to understand the project, but do not change the code, install dependencies, run tests, initialize Git, commit, push, deploy, or submit anything yet.

Context:\
The prototype is a simple HTML/CSS/JavaScript architecture dashboard explaining Ghost. It has four clickable components, a four-step publishing simulation, and a Reset button. It does not connect to a real Ghost server or database.

The assignment also requires verified architecture analysis, AI disclosure and prompts, testing, a public GitHub repository, a live deployment, and a 5–7 minute screen-and-webcam demonstration. Those later stages are not authorized in this step.

Report back briefly with:

- The exact source and destination paths.
- Whether the copy succeeded and which files were copied.
- Any missing files, existing-folder conflicts, or relevant local instructions.
- How I can open the copied page for an initial look.
- A short explanation of what the HTML, CSS, and JavaScript files do.

Stop after this setup report so I can share it with the other chat.
~~~

The destination folder existed but was empty. AI copied the six required files without overwriting and left the original intact; `preview.png` was omitted.

## Prompt 5: local functionality testing and beginner explanation (verbatim, available in this conversation)

~~~text
The project setup is complete. Work only in:

`/Users/kokobhaile/Library/Mobile Documents/com~apple~CloudDocs/NSC/AD371/ghost-dashboard`

This stage is local functionality testing and a short beginner explanation.

1. Read the current HTML, CSS, JavaScript, and QA.md.
2. Run a JavaScript syntax check.
3. If browser tools are available, open a local preview and check:
   - Each component button shows the correct explanation and selected state.
   - The publishing flow shows all four steps in order.
   - The final step disables the Next button.
   - Reset works before starting, midway, and after completion.
   - Selecting a component during the flow does not break progression.
   - Repeated clicks do not cause errors.
4. Check browser console errors and missing local assets if your tools support it.
5. Update QA.md with only the checks actually performed, their results, and the browser used. Clearly mark anything you could not test as pending. Do not count these checks as completing the full assignment QA.
6. If you find a small functional bug, fix it and repeat the affected check. Keep the existing scope and design.

Do not install dependencies, add features, initialize Git, stage, commit, push, deploy, or submit anything. Keep the original project outside AD371 unchanged.

Report back briefly:

- Checks passed, failed, or still pending.
- Any files changed and why.
- How I can open the local preview.
- Explain how a button click changes the displayed component, how the current publishing step is tracked, and how Reset works. Use plain English and point to the relevant code.

Stop after this stage so I can share your report with the other chat.
~~~

AI ran `node --check script.js`, tested the requested behavior in Chrome, and updated `QA.md`. No application code changed.

## Prompt 6: remaining local QA (verbatim, available in this conversation)

~~~text
Continue the AD371 Ghost dashboard assignment. Work only in:

`/Users/kokobhaile/Library/Mobile Documents/com~apple~CloudDocs/NSC/AD371/ghost-dashboard`

Basic functionality testing passed in Chrome. This stage covers the remaining local QA.

Read QA.md first, then perform these checks using available tools:

1. Responsive layout: check 1920×1080 desktop, 768×1024 tablet, and 375×812 mobile. Look for horizontal scrolling, clipped text, overlapping elements, and inaccessible controls.
2. Keyboard: navigate using Tab and Shift+Tab. Check visible focus, logical order, the skip link, and activation of buttons using Enter and Space.
3. Cross-browser: repeat component selection, the complete publishing flow, and Reset in Safari or Firefox. Chrome plus another Chromium browser does not satisfy the two-engine requirement.
4. Console and Network: reload the page and check for uncaught JavaScript errors, failed requests, and missing assets.
5. Edge cases: perform a rapid sequence of Next clicks and confirm the flow stops safely at step four and Reset still works.
6. Performance: record a basic load measurement if supported and check that controls respond promptly. State the method and limits of the measurement.
7. Accessibility: inspect accessible names and live-region markup. Only claim screen-reader announcements work if you actually test them with assistive technology.

Update QA.md with actual results, browser names, viewport sizes, and any limitations. Keep untested items marked pending. Save useful screenshots in an `evidence` subfolder if supported.

If a small issue is found, fix it and repeat the affected checks. Keep the project simple and preserve its current scope.

If tools cannot perform a check, do not install anything. Give me short manual instructions for that check.

Do not initialize Git, stage, commit, push, deploy, or submit anything. Do not modify the original project outside AD371.

Report briefly:

- What passed, failed, or remains pending.
- Files changed and why.
- Any manual checks I need to perform.

Stop after this QA stage so I can share your report with the other chat.
~~~

AI checked three Chrome viewport sizes, keyboard behavior, Chrome Console/Network, a short repeated-click sequence, basic local timing, and the core flow in Safari. Results and limits are in `QA.md`. No application code changed; screen-reader announcements remain unverified.

## Prompt 7: architecture verification and documentation cleanup (verbatim, available in this conversation)

~~~text
Continue the AD371 Ghost dashboard assignment. Work only in:

`/Users/kokobhaile/Library/Mobile Documents/com~apple~CloudDocs/NSC/AD371/ghost-dashboard`

This stage is architecture verification and documentation cleanup.

1. Read the current project files and QA.md.
2. Verify the dashboard’s architectural claims against official Ghost documentation and source code. Check:
   - Admin communicates with Ghost through the Admin API.
   - Ghost Core handles server logic and default theme rendering.
   - The database stores publication data.
   - Publishing and a reader requesting a page are separate actions.
   - “Modular monolith” is clearly identified as our interpretation of Ghost Core’s runtime structure.
3. Correct any inaccurate claims using the smallest necessary changes. Include source links and the actual verification date.
4. Update README.md so it accurately describes the current prototype, setup instructions, architecture, trade-off, AI assistance, and completed QA. Keep repository and deployment URLs marked pending.
5. Review AI-PROMPTS.md. Preserve existing entries and append the exact implementation and testing prompts available in this conversation. Do not invent missing prompts, model details, initial outputs, or student-authored work. Clearly identify any gaps.
6. Make the QA summary consistent with the detailed results. Keep screen-reader announcements marked unverified unless actually tested.
7. If application code changes, repeat the affected checks. Documentation-only changes do not require repeating browser tests.

Do not add features, install dependencies, initialize Git, stage, commit, push, deploy, or submit anything. Keep the original project outside AD371 unchanged.

Report briefly:

- Whether the architecture is accurate and any corrections made.
- Files changed and why.
- Any documentation gaps still remaining.
- A beginner explanation of Ghost’s four components and one architectural trade-off that I can understand before recording.

Stop after this stage so I can share your report with the other chat.
~~~

AI rechecked official Ghost documentation and source, clarified the README, and kept the QA summary aligned with completed checks. No application code changed.

## Record gaps and limits

- Prompts 1–3 and the initial AI recommendation above were preserved from the existing record. Their original chat transcript was not available here for independent word-for-word comparison.
- Exact earlier implementation sub-prompts, intermediate AI outputs, and the underlying model identifier were not recorded. None are reconstructed here.
- No student-authored code change or student review has been claimed. Record any later student contribution when it happens.
