# Step 3a reader report — batch 17

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Batch: `17`

## Opened inventory

Assigned pages:

- `emg-mm02` — `library/einstein-maxwell-models-mathematics/emg-mm02.md` (A page).
- `emg-mm02-examples` — `library/einstein-maxwell-models-mathematics/emg-mm02-examples.md` (B page).

Assigned items, read in their within-batch supplier order:

1. `def-emg-conformastatic-chart-data`
2. `lem-emg-conformastatic-chart-is-lorentzian`
3. `lem-emg-conformastatic-curvature`
4. `thm-emg-smooth-counterpoised-dust`
5. `cor-emg-regular-counterpoised-sphere`
6. `ex-emgmath-ml-b05`
7. `ex-emgmath-ml-b06`

I read the batch manifest, batch notes, cross-batch dependency rows, proof-contract inventory and the task brief as navigation/evidence, then checked the current carriers independently. The six proof-bearing contracts cover the six assigned result/example items; the chart definition is not proof-bearing.

Page and cross-batch context opened:

- `emg-mm01`, `emg-mg04`, `countability-and-uncountability`, and `qm-math-orbital-and-spin`.
- Draft item suppliers in batch 2: `def-emg-explicit-power-regimes` and `lem-emg-positive-square-root-smoothness`.
- Draft item suppliers in batch 15: `def-emg-matter-formal-systems`, `thm-emg-charged-dust-projection`, and `thm-emg-selected-matter-energy-conditions`.
- The published supplier `lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates` on the QM page.

I checked the exact relevant statements of the published mathematical dependencies used by the assigned proofs: `def-countable-choice`; `thm-real-power-continuity-and-derivatives`; `thm-ck-euclidean-maps-closed-under-algebra-and-composition`; `thm-chain-rule`; `thm-algebra-of-derivatives`; `thm-clairaut-schwarz-mixed-partials`; `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`; `thm-local-coordinate-formula-for-the-exterior-derivative`; `thm-the-exterior-derivative-squares-to-zero`; `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`; `def-nonnegative-lebesgue-integral`; `def-integrable-real-and-complex-functions-and-their-integrals`; `thm-linearity-of-the-lebesgue-integral-on-l-one`; `cor-continuous-functions-are-borel-measurable`; `thm-borel-sets-are-lebesgue-measurable`; `def-polar-surface-measure-on-the-unit-sphere`; `thm-polar-coordinates-formula-for-lebesgue-measure`; `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`; `thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null`; `thm-sine-and-cosine-derivatives`; `thm-quarter-turn-values-and-shift-formulas`; `thm-sine-cosine-signs-monotonicity-and-ranges`; `cor-trigonometric-parity-and-pythagorean-identity`; `thm-euclidean-inverse-function-theorem`; `thm-intermediate-value`; `thm-continuous-implies-integrable`; `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`; `thm-newton-leibniz-with-interior-derivative`; and `thm-monotonicity-of-the-integral`.

I checked the cited GR passages against the current source texts: Carroll, *Lecture Notes on General Relativity*, equations (3.65)–(3.67), (3.90), (3.92), and (3.95), <https://arxiv.org/pdf/gr-qc/9712019v1>; Tong, *General Relativity*, §3.2.2 equation (3.14) and §3.4.1 equations (3.39)–(3.41), <https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf>; and Meinel and Hütten, §2 equations (1)–(7), <https://arxiv.org/pdf/1105.3807>. Carroll and Tong's curvature/Ricci conventions agree with the locally stated convention. Meinel and Hütten display the same positive spatial conformal factor and inverse-square time factor; their `c=G=1` Gaussian-unit conventions are not imported into these calculations.

## Review and repair

The chart definition gives an open domain, coordinate chart, positive C3 function, coordinate orientation, metric coefficients, and the derivative quantities needed later. The Lorentzian-frame lemma's inverse, determinant, signature, orthonormality and orientation calculations are correct. I independently expanded the Christoffel and Ricci contractions in `lem-emg-conformastatic-curvature`; the stated Ricci, scalar and Einstein tables have the stated signs and coefficients. The local curvature proof uses only the declared C3 regularity and does not impose harmonicity.

The smooth dust item is a conditional theorem about the explicitly defined formal equations. Its Maxwell components, density sign, dust exchange identity (including `rho=0`), Einstein components and energy-condition use follow from the cited definitions and current draft supplier statements. It does not claim physical realization or use experimental premises. The sphere corollary's smooth profile, proper-volume factor, nonnegative/signed Lebesgue integrability, mass and charge integrals, and dilute bounds follow from its displayed calculations and stated countable-choice and measure hypotheses. The two examples specialize these results without introducing empirical claims. The existing proof-contract derivation for B05 step 2.1 already records the same `E_i=cF(e_i,n)` computation; no derivation or citation became stale, and no `verification.judge` record was present.

I repaired one in-scope definition defect in `items/ex-emgmath-ml-b05.md`: the example's statement used `E_i(0)` before defining the static-frame electric component. It now defines `n=H∂_0`, `e_i=H^{-1}∂_i`, and `E_i=cF(e_i,n)` before the center-value formula. The proof's existing local calculation supplies the value. The proof contract remains current because its step 2.1 already contains that formula and its citations to the family and frame; no judge record required removal.

Post-repair checks on the changed item:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/ex-emgmath-ml-b05.md` — unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/ex-emgmath-ml-b05.md` — pass, 1 checked, 0 failing.
- `node tools/physics-support/proof-layout.mjs items/ex-emgmath-ml-b05.md` — 1 item, 4 steps, 0 defects.

## Uneditable findings

1. `qm-math-orbital-and-spin` is a published page whose angular-layer summary says “All items here are draft mathematics under construction.” Its frontmatter is `status: published`, lists `lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates`, and that listed supplier's item frontmatter is also `status: published`. The assigned consumer `cor-emg-regular-counterpoised-sphere` directly uses that supplier for σ(S²)=4π. This is a nonfatal false page-summary claim; the published page is outside reader edit scope.
2. `thm-sine-cosine-signs-monotonicity-and-ranges` is a published supplier used by `cor-emg-regular-counterpoised-sphere`. Its Statement uses `m` in interval endpoints such as `-pi/2+2m*pi` and `pi/2+2m*pi`, but does not state its domain or quantify it. The corollary uses the resulting monotonicity on `[0,pi/2]`. An explicit `m∈Z` would make the intended statement precise. I did not edit this published item; this is a nonfatal ill-formed statement finding.

Both findings are also recorded in the task findings JSON. No assigned in-flight defect remains after the B05 clarification.

## Page verdicts and blocker

- `emg-mm02`: pass for its current A-page prose. Its summary accurately presents the chart, arbitrary-positive-H curvature calculation and conditional formal solution, and does not infer physical realization. The published QM prerequisite page-summary issue above is routed separately.
- `emg-mm02-examples`: pass for its current B-page prose. Its summary matches the two exact mathematical examples; the B05 electric component is now defined before use.

No blocker prevents the assigned mathematical review. The two external published findings remain for owner disposition.

## Coverage limitation

I opened all assigned carriers and the direct mathematical suppliers identified above, but did not consistently read every supplier before its consumer: the published calculus statements and the batch-2/batch-15 draft supplier items were inspected after the consuming curvature/theorem/corollary prose. I have recorded that ordering limitation rather than claim a fully supplier-first reading sequence. The current claims and proofs were checked against those exact supplier statements and locally recalculated where appropriate.
