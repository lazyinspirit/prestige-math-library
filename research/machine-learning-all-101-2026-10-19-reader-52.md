# Step 3a reader report — batch 52

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Output: `research/machine-learning-all-101-2026-10-19-reader-52.md`

## Current run state

At the final status check, autopilot reported the run as **PAUSED**, with batch 52 still uncovered at `3a-read` and no dispatch in flight. The listed blockers were `split-51` and `collect-36`, each failed three times; neither is a batch-52 mathematics blocker. The earlier batch note described a 29-item `1-scaffold` snapshot; the current assigned manifest contains 31 A-page items and 3 B-page examples, and I reviewed the current files and manifest independently.

## Opened pages and items

Pages:

- `library/machine-learning/mean-field-training-and-feature-learning.md`
- `library/machine-learning/mean-field-training-and-feature-learning-examples.md`

A-page items (31):

`lem-partial-negative-weight-crossing-time`; `lem-pushforward-support-is-closure-of-image`; `def-partial-one-homogeneous-measure-projection`; `def-two-homogeneous-measure-projection`; `lem-bounded-domain-degree-properties`; `lem-feature-energy-continuous-under-w2-on-a-common-cutoff`; `lem-mean-field-first-variation-and-measure-optimality`; `lem-partial-energy-continuous-under-w2`; `lem-partial-feature-flow-moment-and-energy-identities`; `lem-partial-homogeneous-negative-level-trapping`; `lem-partial-homogeneous-penalty-is-constant-under-global-hypotheses`; `lem-signed-narrow-convergence-controls-bochner-moments`; `def-bounded-domain-degree-from-relative-homology`; `def-one-hidden-layer-particle-measure-model`; `def-partial-homogeneous-relaxed-objective`; `def-signed-square-relu-feature-map`; `lem-flow-preserves-spherical-separation`; `lem-mean-field-projection-identities`; `lem-w2-convergence-implies-homogeneous-projection-convergence`; `thm-mean-field-particle-time-limits-interchange`; `lem-flow-preserves-box-separation`; `lem-partial-homogeneous-escape-from-nonoptimal-projection`; `lem-partial-homogeneous-projection-limit-is-stationary`; `lem-partial-relaxed-objective-signwise-optimality`; `lem-two-homogeneous-projection-limit-is-stationary`; `lem-partial-homogeneous-projection-limit-has-convergent-penalty`; `lem-two-homogeneous-escape-from-nonoptimal-projection`; `thm-partial-homogeneous-projected-limit-is-global-minimizer`; `thm-two-homogeneous-projected-limit-is-global-minimizer`; `cor-partial-homogeneous-wasserstein-limit-is-global-minimizer`; `cor-two-homogeneous-wasserstein-limit-is-global-minimizer`.

B-page examples (3):

`ex-single-particle-initialization-does-not-separate`; `ex-moving-features-versus-fixed-features`; `cex-signed-square-relu-differential-is-not-locally-lipschitz`.

The page bodies are empty, both pages retain `page_layout: compact-v1`, and the page inventories and prerequisite metadata match the current batch manifest. No page summary was authored.

## Dependency and source review

I read the direct dependency statements needed by the assigned arguments, including the feature-energy and Wasserstein definitions; measure, signed-measure, Jordan, total-variation, Bochner-integration and Lebesgue-integration items; the relative-homology orientation, functoriality and excision items; the choice, Hilbert-space, uniform-boundedness, Arzelà–Ascoli, Heine–Borel, absolute-continuity and Cauchy–Schwarz items; the network and risk definitions; and the W2 coupling, optimal-coupling, superposition, characteristic-flow, escape-bound, localized-flow and global-flow items. I also read the proof sections of the in-run superposition, Hilbert-path, characteristic, escape-bound and global-flow suppliers where the assigned arguments relied on their constructions.

Primary-source checks:

- Chizat and Bach, *On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport*, Lemma C.18, Appendix C.4.2, PDF p. 26 (lines 2496–2526): the printed proof uses a crossing-time bound that does not scale with the initial negative-weight magnitude. The assigned crossing lemma correctly supplies the (2M/\eta) bound and the corresponding displacement estimate.
- Chizat and Bach, Proposition 2.3, §2.2, PDF pp. 3–4 (lines 282–324): the classical finite-particle subgradient flow has the finite-dimensional energy identity under the (m^{-1}\sum_i\) metric convention.
- Chizat and Bach, Assumptions 3.4(iii)(b), §3.3, PDF p. 7 (lines 477–499): the bounded-domain Neumann premise is imposed on each (G_f\), including (f=0\).
- Ambrosio, Gigli, and Savaré, Theorem 11.2.1, printed pp. 295–296: the theorem assumes a proper, lower-semicontinuous, coercive energy that is convex along generalized geodesics. Those global hypotheses are not asserted for the authored feature energy, so the two-homogeneous stationarity proof now derives the needed energy identity directly.

## Repairs made

- `lem-bounded-domain-degree-properties`: replaced the diagram that identified the whole source relative homology group with \(\mathbb Z\). For disconnected preimages that group can have rank greater than one; the degree definition maps the chosen orientation class to an integer multiple of the target local generator. The repaired diagram shows that element-level equation.
- `lem-feature-energy-continuous-under-w2-on-a-common-cutoff`: made the uniform derivative bound explicit from the feature-energy growth assumption. Replaced the incorrect claim that bounded linear maps establish marginal pullback identities with the pushforward simple-function argument and then the bounded-map identity for Bochner moments.
- `lem-partial-energy-continuous-under-w2`: corrected the same marginal-integral justification for scalar penalties and Bochner feature moments.
- `lem-mean-field-projection-identities`: repaired the missing TeX command in the finite-net approximation estimate (`\Phi`).
- `lem-partial-homogeneous-negative-level-trapping`: added the exact dependency AC\(\Rightarrow\)DC\(\Rightarrow\)countable choice. The uniform-boundedness principle requires DC, and the cited scalar FTC requires DC and countable choice.
- `lem-partial-feature-flow-moment-and-energy-identities`: made the same AC-to-DC/countable-choice prerequisite explicit for its scalar FTC.
- `lem-partial-homogeneous-escape-from-nonoptimal-projection`: supplied the Taylor estimate showing that a bounded feature with Lipschitz differential has bounded derivative on the unbounded parameter domain; this gives the finite BL-to-moment constant used in step 1.1.
- `lem-flow-preserves-box-separation`: removed the unnecessary interior-crossing assertion and made the forward boundary-invariance argument explicit by restricting the tangent characteristic equation to the boundary and using ambient uniqueness.
- `lem-two-homogeneous-projection-limit-is-stationary`: replaced use of the cutoff-supported global-flow theorem for an unrestricted finite-energy initial law with a direct finite-time energy identity from the definition, path superposition, and the semiconvex pathwise chain rule. The proof establishes the moment and penalty chain rules, uses the stated (\mathcal P_2\) bound for integrability, and obtains finite total action for the stationarity argument without narrowing the initial-data claim.
- `lem-signed-narrow-convergence-controls-bochner-moments`: explicitly transferred tightness from the variations of \(y_n=\sigma_n-\nu\) to \(|\sigma_n|\) using \(|\sigma_n|\le |y_n|+|\nu|\).
- `thm-mean-field-particle-time-limits-interchange`: replaced the unsupported claim that each particle flow is a localized Wasserstein flow with the exact finite-particle dissipation identity from Chizat–Bach Proposition 2.3, using the same scaled product metric as the item’s definition.

All 11 affected proof contracts were regenerated while preserving their boundary and risk-review records. No stale `verification.judge` records were present on these draft items. Reflow and precheck passed for every changed item; the final `node tools/proof-layout.mjs` batch run checked 11 items and 46 steps with 0 defects.

## Defects not repaired

None. No assigned defect remains outside the authorized write scope.

## Page verdicts

- `mean-field-training-and-feature-learning` (A): **pass** for page presentation and inventory. Its YAML-only body, `requires`, item inventory and compact layout flag are consistent with the assigned manifest. Item repairs are recorded above.
- `mean-field-training-and-feature-learning-examples` (B): **pass** for page presentation and inventory. Its YAML-only body, companion prerequisite, example inventory and compact layout flag are consistent with the assigned manifest.

## Blockers

There is no batch-52 mathematical blocker and no uneditable finding. The run itself is currently paused by the unrelated `split-51` and `collect-36` failures reported in autopilot status.
