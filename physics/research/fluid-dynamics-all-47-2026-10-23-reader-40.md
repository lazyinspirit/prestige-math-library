# Step 3a reader report — batch 40

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader  
Scope: `fd-pg01`, `fd-pg01-examples`, and the three assigned items.

## Opened inventory

Assigned pages:

- `library/fluid-dynamics/fd-pg01.md`
- `library/fluid-dynamics/fd-pg01-examples.md`

Assigned items:

- `items/post-fd-geophysical-model-branches.md`
- `items/pthm-fd-geophysical-conditional-energy.md`
- `items/ex-fd-coriolis-no-work.md`

Page prerequisites and item dependencies inspected:

- `library/fluid-dynamics/fd-f01.md`
- `library/fluid-dynamics-mathematics/fd-g01.md`
- imported page `library/real-analysis/countability-and-uncountability.md`
- `items/def-fd-quantity-and-frame-conventions.md`
- `items/def-fd-smooth-motion.md`
- `items/def-fd-rotating-stratified-shallow-equations.md`
- `items/def-fd-x00.md`
- `items/thm-fd-stratified-linear-energy.md`
- imported item `items/def-countable-choice.md`
- imported integration suppliers: `thm-continuous-on-a-rectangle-is-riemann-integrable`, `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`, `thm-riemann-fubini-on-product-rectangles`, `thm-newton-leibniz-with-interior-derivative`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, and `thm-multidimensional-integral-properties`
- imported measure/integration definitions and results used by `def-fd-rotating-stratified-shallow-equations`: `def-lebesgue-outer-measure`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `thm-lebesgue-measure-is-a-complete-measure`, `thm-lebesgue-measure-of-a-box-of-every-kind`, and `def-integrable-real-and-complex-functions-and-their-integrals`

The imported items and page named above were checked against their entries in `research/math-imports.json`; their local bytes matched the recorded hashes. The assigned page inventories agree with the current batch manifest. Both assigned pages have `page_layout: compact-v1` and empty Markdown bodies.

## Review and repair

The assigned postulate adopts two separate models. Its rotating-coordinate map, velocity convention, and Coriolis sign are consistent with the displayed rotation matrix. The 3D branch explicitly adopts the linear, constant-stratification, periodic Boussinesq system; the 2D branch explicitly adopts the positive-depth, flat-bottom, hydrostatic, depth-independent one-layer system. The approximations are identified as assumptions, with no error estimate or claim of empirical adequacy.

I repaired `post-fd-geophysical-model-branches` by specifying the effective-potential map's domain, type, spatial regularity, units, and gradient convention; identifying the upward direction; and specifying the background-pressure map used to define the pressure perturbation. The equations and their hypotheses did not change. The proof contract's `physics_review.formulation` and `.scope` evidence was updated. The item had no `verification.judge` record to remove.

I reviewed both assigned consumers after this public-interface clarification. `pthm-fd-geophysical-conditional-energy` uses the unchanged Boussinesq equations, coefficient conventions, and reference density; neither its supplier match nor its energy deduction depends on the newly specified background-potential or background-pressure fields. `ex-fd-coriolis-no-work` uses the unchanged right-handed Coriolis convention; the clarified upward `e_3` convention is consistent with its statement. A search of the current batch manifests and current item sources found no other consumer.

The mathematical supplier `thm-fd-stratified-linear-energy` has the same interval, periodic cell, field regularity, coefficient signs, equations, and normalized energy as the assigned physics theorem. Its proof derives the local balance by product rules, cancels the buoyancy-work terms, removes periodic fluxes, and integrates in time. The cited integration statements supply the continuity, Riemann-to-Lebesgue, section-integral, and Newton–Leibniz steps under the stated `AC_omega` assumption. The physics-theorem proof then matches those hypotheses, applies the exact supplier identity on `[t_0,t_1]`, and obtains conservation/monotonicity and units. No measured premise or empirical claim is used. The Coriolis example's two verification steps are the direct coordinate expansion and scalar cancellation, with correct units.

The source passages were checked in [Vallis, *Fluid Dynamics of the Atmosphere and Ocean*](https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf): §1.2, printed pp. 4–6, for rotating-frame velocity, Coriolis acceleration and centrifugal potential; §1.6.2, pp. 13–15, for the Boussinesq approximation; §1.6.3, pp. 15–16, for broader Boussinesq energy context; and §2.1, pp. 27–30, for the one-layer shallow-water assumptions and equations. The corresponding assumptions are also present in [Berloff, *Lectures on Introduction to Geophysical Fluid Dynamics*](https://wwwf.imperial.ac.uk/~pberloff/gfd_lectures.pdf), pp. 36–38 and 41–42. Those notes support the broad approximations but do not state the exact constant-`N`, linear, diffusive, periodic equation family or the exact quadratic identity used here. The former is explicitly adopted in the postulate; the latter is proved by the local mathematical supplier.

Checks after the item repair:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/post-fd-geophysical-model-branches.md` — unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/post-fd-geophysical-model-branches.md` — pass, one checked, zero failing.
- `node tools/physics-support/proof-layout.mjs items/post-fd-geophysical-model-branches.md` — one item, zero proof steps, zero defects.

## Defect not editable in this assignment

The published imported item `def-lebesgue-measure-and-the-lebesgue-sigma-algebra` is ill-formed in its Definition prose at paragraphs 2 and 6 (source lines 41–45 and 55–59). The first paragraph contains the duplicate fragment “Under countable choice, Assuming countable choice” and joins “an outer measure that restricts to elementary volume” to “makes `lambda_n^*` an outer measure.” The later paragraph repeats “in Assuming countable choice” before the complete theorem description. The item remains read-only here. Its explicit Carathéodory criterion and restriction formula are still stated, so this is nonfatal for the assigned energy deduction, but the published Definition prose needs correction. The assigned consumer whose dependency closure reaches it is `pthm-fd-geophysical-conditional-energy`, through `thm-fd-stratified-linear-energy` and `def-fd-rotating-stratified-shallow-equations`.

## Page verdicts

- `fd-pg01` — pass. Its item inventory matches the assigned manifest and orders the postulate before its conditional theorem; prerequisites match the manifest; its body is empty.
- `fd-pg01-examples` — pass. Its example inventory and prerequisite match the manifest; its body is empty.

## Blocker

None. The published dependency defect above is routed for owner disposition; no assigned item or page defect remains unrepaired.

## Coverage limits

This review covers the assigned frontier, exact dependency statements and proof steps used by its claims, and the cited source passages listed above. It does not reconstruct every internal proof in the already-published mathematical dependency closure, review unrelated sections of the cited PDFs, or claim empirical validation of either adopted model.
