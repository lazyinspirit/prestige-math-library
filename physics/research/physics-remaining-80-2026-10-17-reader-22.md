# Step 3a reader report — batch 22

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Date: 2026-10-17

## Scope and opened inventory

Reviewed the assigned manifest `research/physics-remaining-80-2026-10-17-batch-22.pages.json`, both listed pages, all 15 listed items, and the mathematical suppliers needed to trace their definitions, tensor calculations, causal arguments, and Stokes applications.

Pages opened:

- `emg-ms02` — `library/einstein-maxwell-models-mathematics/emg-ms02.md` (A-page).
- `emg-ms02-examples` — `library/einstein-maxwell-models-mathematics/emg-ms02-examples.md` (B-page).

Assigned items opened and reviewed (grouped by assigned page; supplier statements were checked before finalizing consumer assessments):

- A-page: `def-emg-xs-ingoing-rn`, `prop-emg-xs-rn-local-gauges`, `prop-emg-xs-rn-horizon-data`, `thm-emg-xs-rn-crossing`, `thm-emg-xs-kn-extension`, `prop-emg-xs-kn-horizon-data`, `prop-emg-xs-kn-ergoregion`, `prop-emg-xs-charged-ring-obstruction`, `lem-emg-xs-null-barrier`, `thm-emg-xs-rn-escape`, and `thm-emg-xs-kn-escape`.
- B-page: `ex-emg-xs-superextremal-rn`, `ex-emg-xs-extremal-horizon`, `ex-emg-xs-topological-charge`, and `cex-emg-xs-ergo-is-not-horizon`.

Relevant supplier context opened included the RN/KN data and extension definitions; geometric electrovac and Lorentzian Hodge definitions; smooth-singular-chain integration and Stokes; causal and horizon vocabulary; the Lorentzian metric, time-orientation, future-cone, inverse-metric, temporal-function, tetrad, Killing-field, and geodesic definitions/results; the RN and KN verification and invariant calculations; and the Euclidean calculus, compactness, Cauchy–Schwarz, and mean-value results used by the proofs. Current batch-21 `prop-emg-xs-kn-dyonic-flux` and its cited full-sphere exterior and duality interfaces were inspected as conditional supplier context.

## Edits and evidence

- `prop-emg-xs-rn-local-gauges`, Proof 1.1: replaced the unsupported assertion that each sphere already supplies a finite smooth singular cycle with an explicit construction. The eight octahedron faces radially project smoothly onto the sphere because their affine planes avoid the origin; the global vertex order makes common edge simplices coincide with opposite boundary coefficients. Their outward-oriented sum is a finite cycle covering the sphere once. The stated polar area form then gives flux $4\pi q_m$; the exact Lorentzian Hodge calculation gives $4\pi q_e$. This supplies the chain required by the cited smooth-singular-chain Stokes theorem.
- `ex-emg-xs-topological-charge`, Facts & Assumptions: removed the unproved cycle assumption. The RN case now points to the construction in the assigned RN gauge proposition; the KN case explicitly retains the finite sphere and shell chains from the exact current batch-21 draft interface and remains conditional on it.
- `cex-emg-xs-ergo-is-not-horizon`, Facts & Assumptions: made the counterexample witness explicit by fixing $M=2\,\mathrm m$, $a=1\,\mathrm m$, $q=0\,\mathrm m$, and the equator. These parameters satisfy the stated subextremal conditions; the outer equatorial stationary-limit radius is $4\,\mathrm m$, while the outer horizon radius is $(2+\sqrt3)\,\mathrm m$. The proof therefore refutes the universal identification with a concrete selected model.
- Updated the affected entries in `research/physics-remaining-80-2026-10-17-batch-22.proof-contracts.json`. The three edited item carriers had no `verification.judge` record, so none required removal. No Statement or Definition interface changed.

Required checks after the final edits:

- Reflow passed for all three edited items (unchanged on the final run).
- Precheck passed for `prop-emg-xs-rn-local-gauges`, `ex-emg-xs-topological-charge`, and `cex-emg-xs-ergo-is-not-horizon`.
- `node tools/physics-support/proof-layout.mjs items/prop-emg-xs-rn-local-gauges.md items/ex-emg-xs-topological-charge.md items/cex-emg-xs-ergo-is-not-horizon.md` reported 3 items, 11 steps, 0 defects.

## Page verdicts

- `emg-ms02`: pass. The summary accurately describes the selected RN/KN domains, the regular ingoing charts, the local RN bifurcation construction, and the limits on global horizon interpretation. Its sketch is explicitly non-proof.
- `emg-ms02-examples`: pass. The summary distinguishes the extremal and superextremal RN cases, the rotating stationary-limit comparison, and the RN gauge result. The KN flux comparison is identified as conditional on its current draft supplier.

## Unedited defects and limitations

No confirmed uneditable defect was found in the assigned carriers or the exact supplier interfaces inspected. The KN flux comparison remains conditional on the current batch-21 draft `prop-emg-xs-kn-dyonic-flux`; the charged-curvature obstruction remains conditional on the current draft `prop-emg-xs-kn-invariants`. The RN and KN extension items likewise preserve their stated conditional status for field-equation continuation. This batch report does not confer acceptance on those out-of-batch proof chains.

## Blocker

None.
