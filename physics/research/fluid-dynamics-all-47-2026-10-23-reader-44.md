# Reader report — batch 44

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: Step 3a reader  
Scope: batch `44`

## Opened inventory

- Assigned manifest: `research/fluid-dynamics-all-47-2026-10-23-batch-44.pages.json`.
- Assigned proof contracts: `research/fluid-dynamics-all-47-2026-10-23-batch-44.proof-contracts.json`.
- Assigned A page: `library/fluid-dynamics-mathematics/fd-l01.md`.
- Assigned B page: `library/fluid-dynamics-mathematics/fd-l01-examples.md`.
- Assigned items, checked in supplier order:
  1. `def-fd-solenoidal-surrogate-residual`
  2. `thm-fd-surrogate-residual-error`
  3. `prop-fd-surrogate-law-shift-observable`
  4. `ex-fd-unseen-input-shift`
- Dependency items opened for the assigned claims: `def-countable-choice`, `def-the-one-dimensional-torus-and-normalized-haar-integral`, `def-fourier-coefficients-and-trigonometric-polynomials`, `thm-fourier-basis-and-parseval-on-the-n-torus`, `def-fd-periodic-fourier-sobolev-spaces`, `def-fd-periodic-leray-pressure-maps`, `thm-holder-inequality-for-integrals`, `def-fd-random-velocity-sensor-law`, `lem-fd-sensor-pairing-is-well-defined`, and `def-fd-random-fluid-observable`.
- Dependency pages opened: `fd-s01`, `fd-st02`, their transitive page prerequisite `fd-st01`, and the published page `the-lp-spaces-holder-minkowski-and-riesz-fischer`.
- Source passages checked: Tanveer, *Week 6 Notes*, §1.2, equations (1.8)–(1.15); Morosi–Pizzocchero, *On approximate solutions of the incompressible Euler and Navier–Stokes equations*, Definition 3.4 and §4.1–4.5; Axler, *Measure, Integration & Real Analysis*, §7A, Theorem 7.9; Sugiyama–Krauledat–Müller, §2.1; and *Dive into Deep Learning*, §3.7.3.1. The linked Golse PDF in the published Hölder supplier was opened to verify its actual title and content.

## Review

- `def-fd-solenoidal-surrogate-residual` is mathematically coherent. The normalized torus, Fourier/Leray conventions, smooth field domains, spatial divergence, tensor divergence, solenoidality, and continuous residual are explicit. Smoothness and boundedness of the Fourier projection justify the claimed continuity into $L^2$ and finite time-integrated residual. The source material is contextual; no whole-space decay or mean-zero assumption is imported.
- `thm-fd-surrogate-residual-error` is proved under the stated smooth periodic, divergence-free hypotheses for an already supplied exact solution. Subtracting equations gives the correct error equation; the projected transport cancellation, nonnegative viscous term, gradient bound, regularization at zero error, and integrating factor establish the stated estimate, including endpoints and ν = 0. It makes no existence claim and does not infer a continuous residual bound from finitely many collocation values.
- `prop-fd-surrogate-law-shift-observable` correctly proves the $L\sqrt C\,\varepsilon$ bound from a population mean-square error and bounded target density. Measurability, target integrability, and the finite-sample limitation are stated and justified. I corrected the display citation label as recorded below.
- `ex-fd-unseen-input-shift` is a valid finite measurable witness: the training-law state error is zero, the target bias is $M$, and the target law is singular with respect to the training law. The example does not extrapolate this construction into a statistical observation or an empirical claim.
- The assigned contracts' source mappings, derivation steps, boundary cases, finite checks, and supplier excerpts match the current items. I did not treat their readiness records as proof verdicts. The four assigned items contain no TikZ/tikzcd diagrams requiring review or addition.

## Edit and evidence

- In `items/prop-fd-surrogate-law-shift-observable.md`, `Statement references`, I changed the visible label `§7.9` to `Theorem 7.9 in §7A`. Axler's linked 12 June 2026 edition places Hölder's inequality as Theorem 7.9 in Section 7A (printed pp. 196–197; one-based PDF pp. 211–212). The source metadata already gave this exact locator; the edit makes the displayed reference agree with it. This citation-only edit leaves the statement, proof, dependencies, and contract derivations unchanged; there was no `verification.judge` record to remove.
- Required final layout check: `node tools/physics-support/proof-layout.mjs items/prop-fd-surrogate-law-shift-observable.md` — passed, 1 item, 4 steps, 0 defects.

## Uneditable finding

- Published dependency `thm-holder-inequality-for-integrals`, frontmatter `sources.references[1]` (line 26), labels its URL as “John K. Hunter, Measure Theory, Section 7.2”. The linked PDF title page identifies François Golse's *Mean-Field Limits in Statistical Dynamics* (arXiv:2201.02005v1), and a full-text search of that linked PDF found no Hölder entry. The supplier has a separate valid Axler Hölder reference and its local proof supports the p = q = 2 use here, so this is a nonfatal citation defect rather than a gap in the assigned proofs. The item is published and outside this batch's write scope. The routed finding is recorded in `research/fluid-dynamics-all-47-2026-10-23-reader-findings-44.json`, using `prop-fd-surrogate-law-shift-observable` as the assigned consumer.

## Page verdicts and blocker

- `fd-l01`: pass. Its frontmatter-only A-page inventory and prerequisites match the manifest; the three assigned items are coherent, with the citation-only repair above.
- `fd-l01-examples`: pass. Its frontmatter-only B-page inventory correctly places the assigned example and requires `fd-l01`.
- Blocker: none. All assigned pages and items were inspected. Dependency review was limited to the statements and exact uses needed for these assigned claims; it was not an audit of unrelated prerequisites or the whole mathematics library.
