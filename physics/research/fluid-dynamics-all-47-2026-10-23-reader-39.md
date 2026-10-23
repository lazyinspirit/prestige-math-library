# Reader report — batch 39

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader (`reader-39`)

## Opened inventory

Assigned pages:

- `fd-g01` — A page, mathematics; assigned items: `def-fd-rotating-stratified-shallow-equations`, `thm-fd-stratified-linear-energy`, `thm-fd-shallow-water-smooth-energy`.
- `fd-g01-examples` — B page, mathematics; assigned example: `ex-fd-geophysical-rest-state`.

All four assigned item carriers were opened. The supplier context included the in-run draft `def-fd-x00`; its six mathematical definition suppliers (`def-divergence-and-curl-of-a-c1-vector-field`, `def-laplacian-of-a-c2-function`, `def-jacobian-matrix-and-gradient`, `def-euclidean-inner-product`, `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`, `def-oriented-unit-normal-and-flux-of-a-surface-patch`); the equation-definition prerequisites (`def-countable-choice`, `def-lebesgue-outer-measure`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `thm-lebesgue-measure-is-a-complete-measure`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `def-integrable-real-and-complex-functions-and-their-integrals`); and the integration suppliers (`thm-continuous-on-a-rectangle-is-riemann-integrable`, `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`, `thm-riemann-fubini-on-product-rectangles`, `thm-newton-leibniz-with-interior-derivative`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, `thm-multidimensional-integral-properties`). The relevant definition/statement sections and applicable hypotheses were checked. All 18 imported mathematical item byte hashes match `research/math-imports.json`.

The page prerequisite records for `fd-x01`, `countability-and-uncountability`, `fubini-and-change-of-variables`, `lebesgue-measure-on-euclidean-space`, `measurable-densities-and-radon-volume-on-manifolds`, `the-fundamental-theorems-of-calculus`, `the-lebesgue-and-riemann-integrals-compared`, `the-lebesgue-integral-and-the-convergence-theorems`, and `the-riemann-integral-in-rn-and-jordan-content` were located and their canonical IDs, status, and inventories checked. The directly used item suppliers on these pages are listed above. I also opened the batch-40 consumers `post-fd-geophysical-model-branches` and `pthm-fd-geophysical-conditional-energy` to review the equation-definition interface change.

The assigned items were first opened before the full external dependency excerpts; I inspected the supplier statements before completing the mathematical review or editing. I relied on the accepted published interfaces rather than independently reconstructing the proofs of the published measure-theory and real-analysis suppliers. Page-level prerequisite prose outside the directly used item suppliers was not independently audited.

## Review and repairs

- `thm-fd-stratified-linear-energy`, `## Facts & Assumptions`, `[L3]`: corrected the Riemann–Fubini summary. The cited theorem states that ordinary iterated integration equals the product integral when every section in that order is integrable, and explicitly warns that product Riemann integrability alone does not guarantee integrability of every section. The local proof applies the result only to continuous integrands; their sections are continuous and Riemann integrable. The proof-contract `L3` citation now records the exact conditional clause.
- `thm-fd-shallow-water-smooth-energy`, `## Facts & Assumptions`, `[L3]`: made the same correction. Each section used in the proof is continuous, so the stated condition holds. Its proof-contract citation was updated to the same exact supplier clause.
- `def-fd-rotating-stratified-shallow-equations`: specified `dt` as integration against the real-line Lebesgue measure `lambda_1`, which fixes the measure used in its iterated time-space integral. In the rotating-frame interpretation, specified the potential as `Phi: I x R^3 -> R` with continuous spatial first derivatives and gave the domain of `Phi_eff`. The potential coordinates and regularity agree with the use in batch-40's geophysical postulate; the conditional energy theorem's time-integration convention is also covered. The definition proof-contract endpoint evidence was updated. No equation or physical-model claim was changed.
- No statement, proof argument, page inventory, or physical premise was otherwise changed. No assigned diagrams were present.

The edits are supported by the exact local supplier `thm-riemann-fubini-on-product-rectangles`, whose statement contains the all-sections hypothesis and caveat. The Lebesgue convention is supported by `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, which specializes to the real-line measure `lambda_1`.

None of the three changed items had a `verification.judge` record, so there was no stale judge record to remove. The proof contracts remain valid JSON and now reflect the corrected `L3` scope and explicit time-measure convention.

## Source checks

- Vallis, *Fluid Dynamics of the Atmosphere and Ocean*, §1.6.3, equations (1.72)–(1.78), printed pp. 15–17: the notes derive a Boussinesq energy equation for their inviscid formulation. The assigned linear, diffusive identity is established by the local proof and is not attributed as an exact statement of Vallis's model. [Lecture notes](https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf)
- Vallis, §2.4.2, equations (2.55)–(2.59), printed pp. 38–39: the notes derive shallow-water kinetic and potential energy densities and the corresponding local energy flux for a flat-bottom model. The assigned rotating periodic result is proved locally, including the vanishing Coriolis work and periodic boundary cancellation. Same [lecture notes](https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf).
- Holm, *Ideal shallow water dynamics in a rotating frame*, §§1.1 and 1.4, printed pp. 3–5: the equations are given in nondimensional rotating form and energy conservation is posed as an exercise. This is supporting context; the assigned proof supplies the calculation. [Lecture notes](https://www.ma.ic.ac.uk/~dholm/classnotes/MPE2015-RSWlectures-6Dec.pdf)
- Rizzoli, MIT OCW 12.802, Lecture 12, pp. 1–4: the notes treat rotating shallow-water wave equations and their reduced/linearized forms. This is supporting model context, not a proof of the assigned nonlinear energy balance. [Lecture notes](https://ocw.mit.edu/courses/12-802-wave-motion-in-the-ocean-and-the-atmosphere-spring-2008/b480aaaa3a6dff999df6d5007b5b73f6_MIT12_802S08_lec12.pdf)

These items make mathematical deductions about specified equation systems. They contain no reported experiment, measured premise, or statistical inference.

## Page verdicts

- `fd-g01`: pass. Its draft mathematics metadata and item inventory match the batch manifest; the page body is empty and `page_layout: compact-v1` is preserved. Its A-page items state the periodic domains, classical regularity, equation conventions, and conditional mathematical claims explicitly.
- `fd-g01-examples`: pass. Its draft mathematics metadata matches the batch manifest; `items` is empty, its `examples` list contains exactly `ex-fd-geophysical-rest-state`, and its page body is empty with `page_layout: compact-v1` preserved.

## Uneditable findings and blocker

- Published dependency `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `## Definition`, paragraph 2: the explanatory sentence is merged and duplicated (`“Under countable choice, Assuming countable choice, Lebesgue outer measure is an outer measure that restricts to elementary volume makes …”`) and the later theorem-title insertion is also syntactically broken. Its Carathéodory formula is clear, and the complete-measure claim is separately supplied by `thm-lebesgue-measure-is-a-complete-measure`; this is a nonfatal published prose defect. The imported original is read-only. The assigned consumer reaching it is `def-fd-rotating-stratified-shallow-equations`.
- Published dependency `def-euclidean-inner-product`, `## Definition`, opening paragraph before the displayed inner-product formula: the sentence beginning `“This is the same set that …”` is grammatically corrupted and does not give an intelligible continuation about the function-space identification and the metrics. The displayed coordinate inner-product formula used by this batch is explicit and correct; this is a nonfatal published prose defect. The imported original is read-only. The assigned consumer reaching it through `def-fd-x00` is `def-fd-rotating-stratified-shallow-equations`.

No fatal mathematical blocker remains in batch 39. The two read-only published prose defects are listed in the findings JSON. Requested reflow reported all three changed items unchanged; precheck passed for both theorem items and reported zero proof steps / zero failures for the definition; the final proof-layout pass checked all three changed items and reported 7 steps with 0 defects.

## Coverage note

The mathematical supplier statements used in the proofs and all relevant cited source sections were opened, and imported item hashes matched their pins. The full proofs of published mathematical suppliers and the narrative bodies of page-level prerequisite pages were not independently audited; those materials were not used in place of the exact item statements and local derivations above.
