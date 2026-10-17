# Step 3a reader report — batch 14

Run: `physics-remaining-80-2026-10-17`  
Role: independent read-only reader  
Batch: `14`

## Opened inventory

Assigned pages:

- `library/einstein-maxwell-models/emg-g03.md`
- `library/einstein-maxwell-models/emg-g03-examples.md`

Assigned items:

- `items/pthm-emg-observer-maxwell-current.md` (draft)
- `items/pthm-emg-gauss-global-constraints.md` (draft)
- `items/ex-emg-electric-stress.md` (draft)

Batch evidence inspected as navigation and review context, not as a verdict:

- `research/physics-remaining-80-2026-10-17-batch-14.pages.json`
- `research/physics-remaining-80-2026-10-17-batch-14.proof-contracts.json`
- `research/physics-remaining-80-2026-10-17-batch-14.cross-batch-dependencies.json`
- `research/physics-remaining-80-2026-10-17-batch-14.coverage.json`
- `research/physics-remaining-80-2026-10-17-batch-14.notes.md`

Direct suppliers and proof-critical prerequisite content inspected:

- Current-run batch 1: `post-emg-covariant-maxwell`, `def-emg-geometry-units`.
- Current-run batch 2: `def-emg-topological-sector`, `def-emg-local-potentials-and-circle-data`, `lem-emg-sphere-flux-holonomy`, `lem-emg-circle-connection-gluing`, `def-emg-finite-real-supremum-domain`, `def-emg-real-metric-axiom-convention`, `lem-emg-metric-axioms-imply-nonnegativity`, `def-emg-explicit-power-regimes`, `lem-emg-sequence-limit-criterion-with-choice`, `def-emg-boundaryless-completeness-domain`, and `def-emg-set-size-and-class-schema`.
- Current-run batch 3: `lem-emg-maxwell-current-forms`, `lem-emg-gauss-finite-chain`, `lem-emg-maxwell-observer-stress`, and `lem-emg-maxwell-action-variation`.
- Relevant mathematical suppliers: `def-countable-choice`, `def-emg-lorentzian-forms`, `def-gr-metric-volume-form-and-current-flux`, `lem-emg-lorentz-hodge-calculus`, `thm-gr-density-divergence-and-finite-chain-flux`, `thm-gr-local-lorentz-tetrad-existence`, `thm-gr-point-normal-and-exponential-coordinate-charts`, `thm-gr-local-geodesics-and-exponential-map`, `thm-sylvesters-law-of-inertia`, `thm-stokes-theorem-for-smooth-singular-chains`, `lem-emg-observer-field-decomposition`, `thm-nth-roots-exist`, and `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`.

The import receipt identifies `def-countable-choice`, `thm-stokes-theorem-for-smooth-singular-chains`, and `thm-sylvesters-law-of-inertia` as pinned mathematical imports. Their source bytes were not edited. The mathematical sources inspected here support the exact identities used by batch 14; this was not a full independent audit of unrelated transitive mathematical results elsewhere in the library.

The batch notes record seven missing MG01 carriers for the sphere-flux and stress chains. Those carriers are present in the current workspace and listed in the current batch 2 inventory. I checked their current definitions/statements and the consuming draft proofs directly; the historical note was not treated as current source evidence.

## Review

### `pthm-emg-observer-maxwell-current`

The statement keeps the curved-spacetime formulas pointwise in a point-normal chart aligned with the value `n(p)` and separately limits the across-chart claim to a fixed flat inertial chart. It defines the observer field, the local chart components, the SI coefficient conventions, and the finite smooth-chain charge used in its conclusion. The rest-space orthonormalization is supplied locally using the nondegenerate Lorentz form and Sylvester inertia; the point-normal supplier provides the chart with the selected time axis.

The sign and coefficient calculations agree with the current `lem-emg-maxwell-current-forms` statement: `d(*F)=mu0 i_j vol_g`, `d(i_j vol_g)=(∇_a j^a)vol_g`, and the four normal-coordinate coefficients give the displayed SI component equations. The finite-chain flux factor and orientation agree with `lem-emg-gauss-finite-chain`. The argument is conditional on the draft physical postulate and draft mathematical suppliers, as the item states. No empirical result or certainty claim is made. **Verdict: no confirmed defect.**

### `pthm-emg-gauss-global-constraints`

The finite side-flux identity, cycle neutrality, and bounding-surface flux statements match the exact finite-chain hypotheses in `lem-emg-gauss-finite-chain`; no decay at infinity or zero flux for nonbounding cycles is inferred. The punctured-Minkowski field is defined only away from the origin. The current `lem-emg-sphere-flux-holonomy` proof supplies the closed punctured-domain form and its sphere flux; the consumer also computes the flux for arbitrary radius. The Hodge-star sign `*^2=-id` on two-forms gives the stated source-free dual field and its flux. The text keeps the sphere result conditional on the draft supplier and asserts nothing at the excluded origin.

The external `mu0` status claim was checked against the BIPM *SI Brochure*, 9th ed., v4.01, §2.3.1, printed pp. 128–129 (official PDF: https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf); the current edition says the revised ampere fixes `e` rather than `mu0`, so `mu0` must be determined experimentally. The exact SI convention also appears in the current `def-emg-geometry-units` supplier. **Verdict: no confirmed defect.**

### `ex-emg-electric-stress`

The two substitutions into the current `lem-emg-maxwell-observer-stress` component formula give the displayed diagonal stresses and vanishing Lorentz trace. The example is pointwise and explicitly conditional on its draft mathematical supplier; it does not report observations or assert a global solution. The stress and action-variation signs, SI factors, and observer-frame conventions used by the calculation agree with the current supplier statements. **Verdict: no confirmed defect.**

## Page verdicts

- `emg-g03`: The summary accurately describes conditional observer-frame SI equations, current conservation, finite-chain flux, and the distinction between point-normal components and a global inertial chart. It preserves the stated limits on singular sources and infinity claims. **Pass; no confirmed page defect.**
- `emg-g03-examples`: The summary accurately describes the pointwise pure-field stress calculation, its draft supplier dependence, and the absence of measurement or global-field claims. **Pass; no confirmed page defect.**

## Edits, unresolved defects, and blockers

- Edits: none. This is a read-only assignment; no item or page prose was changed.
- Uneditable defects: none confirmed.
- Blocker: none.
- Formatting tools were not run because no assigned item was edited.

## Coverage note

All assigned pages and items, their declared direct suppliers, and the mathematical statements needed for the inspected proof steps were opened. For navigation, I opened the assigned carriers before finishing the supplier reads, so the literal file-open order was not strictly topological; I checked the supplier arguments before reaching the review verdicts. I did not independently re-prove the full unrelated transitive closure of published mathematical suppliers. The findings array is empty for defects confirmed in the inspected current claims and their uses.
