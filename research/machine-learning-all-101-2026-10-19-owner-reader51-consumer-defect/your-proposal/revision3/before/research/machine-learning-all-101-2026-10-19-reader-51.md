# Step 3a reader report — batch 51

Run: `machine-learning-all-101-2026-10-19`  
Role: reader (`reader-51`)  
Batch: `51`

## Opened inventory

Assigned pages opened:

- `library/machine-learning/wasserstein-gradient-flow-existence-and-stability.md`
- `library/machine-learning/wasserstein-gradient-flow-existence-and-stability-examples.md`

Assigned A-page items opened and checked in dependency order for mathematical assessment:

- `def-feature-measure-energy`
- `lem-label-l2-space-is-separable-hilbert`
- `lem-bochner-time-l2-is-separable-hilbert`
- `lem-hilbert-valued-path-energy-characterization`
- `def-localized-hilbert-lift`
- `thm-semiconvex-hilbert-gradient-flow`
- `lem-lifted-energy-lipschitz-gradient`
- `lem-localized-lift-subdifferential`
- `def-generalized-wasserstein-geodesic-and-strong-subgradient`
- `def-wasserstein-gradient-flow-for-feature-energy`
- `lem-feature-energy-geodesically-semiconvex`
- `lem-characteristics-unique-and-stable`
- `lem-w2-distance-derivative-under-a-continuity-equation`
- `lem-feature-energy-strong-wasserstein-subgradient`
- `lem-localized-lift-generates-continuity-equation`
- `thm-localized-wasserstein-flow`
- `lem-feature-flow-escape-bound`
- `thm-global-wasserstein-flow-existence-uniqueness-and-stability`
- `thm-finite-particle-flows-converge-in-w2`

Assigned B-page examples opened:

- `ex-separated-and-nonseparated-initialization`
- `ex-mixture-convexity-not-displacement-convex`
- `ex-quadratic-feature-energy-flow`

The A-page contains only YAML frontmatter and preserves `page_layout: compact-v1`; the B-page likewise has no Markdown body or summary. I opened the foundational Hilbert and Bochner suppliers, the L2 density and countability results, the choice-principle results, the path-energy and scalar differentiation interfaces, and the measure integration results used by the local proofs. I also opened the Wasserstein suppliers from batch 50 (`def-wasserstein-two-space-and-couplings`, `thm-wasserstein-two-is-a-metric`, `prop-existence-and-lower-semicontinuity-of-optimal-couplings`, `def-ac2-curves-in-wasserstein-two`, `def-continuity-equation-with-finite-action`, `lem-wasserstein-gluing`, `thm-superposition-for-finite-action-continuity-equations`, `thm-continuity-equation-implies-ac2`, and `thm-ac2-curve-admits-minimal-velocity`) and the standard-Borel, disintegration, kernel, product-measure, and W2 derivative interfaces they use. The other opened supplier interfaces included Tonelli, Fatou, Lebesgue differentiation, Markov, Riesz representation, bounded-map/Bochner commutation, the calculus results, Heine–Borel, Arzelà–Ascoli, and the support and intermediate-value definitions used by the examples.

Diagram review: no mathematical diagram occurs in an assigned page or item. The opened supplier `lem-wasserstein-gluing` has a projection diagram; its arrows run from the triple law to the two adjacent-pair marginals, matching the text and proof.

For the definition repair, I checked Chizat–Bach, *On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport*, [Assumption 2.1(i)](https://arxiv.org/pdf/1805.09545), printed p. 3 / PDF p. 3. The source explicitly requires the differential `dR` to be bounded on sublevel sets. I also inspected its Assumptions 2.1 and the relevant Appendix B.2.1 passages, and the cited AGS Hilbert-flow theorem as context; the local proofs do not import those theorems as logical suppliers.

Because the feature-energy Definition was repaired, I checked the current-run downstream dependency closure in batch 52. I opened all 27 batch-52 items whose dependency closure reaches `def-feature-measure-energy`, including the 13 whose closure also reaches `def-wasserstein-gradient-flow-for-feature-energy`. This was a focused interface-impact check, not a full independent review of unrelated batch-52 claims. The one remaining concern is recorded below and in the findings JSON. The affected closure inventory was: `def-partial-one-homogeneous-measure-projection`, `def-two-homogeneous-measure-projection`, `lem-feature-energy-continuous-under-w2-on-a-common-cutoff`, `lem-mean-field-first-variation-and-measure-optimality`, `lem-partial-energy-continuous-under-w2`, `lem-partial-feature-flow-moment-and-energy-identities`, `lem-partial-homogeneous-penalty-is-constant-under-global-hypotheses`, `def-one-hidden-layer-particle-measure-model`, `def-partial-homogeneous-relaxed-objective`, `def-signed-square-relu-feature-map`, `lem-flow-preserves-spherical-separation`, `lem-mean-field-projection-identities`, `lem-w2-convergence-implies-homogeneous-projection-convergence`, `thm-mean-field-particle-time-limits-interchange`, `lem-flow-preserves-box-separation`, `lem-partial-homogeneous-escape-from-nonoptimal-projection`, `lem-partial-homogeneous-projection-limit-is-stationary`, `lem-partial-relaxed-objective-signwise-optimality`, `lem-two-homogeneous-projection-limit-is-stationary`, `lem-partial-homogeneous-projection-limit-has-convergent-penalty`, `lem-two-homogeneous-escape-from-nonoptimal-projection`, `thm-partial-homogeneous-projected-limit-is-global-minimizer`, `thm-two-homogeneous-projected-limit-is-global-minimizer`, `cor-partial-homogeneous-wasserstein-limit-is-global-minimizer`, `cor-two-homogeneous-wasserstein-limit-is-global-minimizer`, `ex-moving-features-versus-fixed-features`, and `cex-signed-square-relu-differential-is-not-locally-lipschitz`.

## Repairs and evidence

- `items/def-feature-measure-energy.md`, Definition opening paragraph and notation before `F(μ)`: replaced the tautological/incorrect phrase “R bounded on every sublevel set” with the precise hypothesis that `dR` is bounded on each sublevel set. Chizat–Bach Assumption 2.1(i), printed p. 3, is the authoritative support. This is needed by the escape estimate through the finite constant `M_0`. I also defined `P_2(A)` for Borel `A ⊆ Ω` as the Borel probability measures on `R^d` concentrated on `A` with finite second moment, so the later `P_2(Ω)` and `P_2(Q_r)` notation is explicit.

- `items/lem-hilbert-valued-path-energy-characterization.md`, frontmatter title: changed the title from “characterizes” to “yields.” The statement proves that finite partition energy gives an AC2 representation and energy identity, but it states no converse.

- `items/def-localized-hilbert-lift.md`, Definition clause for `E_r`: made `E_r` explicitly piecewise, evaluating its integrals only on `C_r` and setting it to `+∞` off `C_r`. This avoids evaluating `Φ(X(s))` outside the domain `Ω`, where `Φ` is not defined. The admissible branch records the bounded-measurability/Bochner-integrability conditions supplied by the feature-energy assumptions.

- `items/def-wasserstein-gradient-flow-for-feature-energy.md`, Definition opening paragraph: defined `AC²_loc` as restriction to every finite time interval. The rest of the definition uses the upstream `P_2(A)` convention.

- `items/lem-characteristics-unique-and-stable.md`, proof step 1.1: added the missing argument that the self-consistent feature-moment paths are continuous before the proof invokes the continuous-forcing characteristic construction. Superposition paths remain in the closed convex cutoff; `Φ` is `A_r`-Lipschitz there, so the path-law estimate gives continuity of `m_t`, and local Lipschitzness of `dR` gives continuity of the forcing. Updated the `F3` contract citation and step-1.1 derivation to include this use.

- `items/lem-localized-lift-generates-continuity-equation.md`, Statement, Fact `F6`, and proof step 3.1: specified the zero extension of the selected velocity off `Q_r`, making it a Borel field on the full Euclidean domain required by the continuity-equation definition. Repaired the minimum-action argument: the proof now derives orthogonality to the spatial gradient closure directly from the two continuity equations and the local closure result, then obtains the Pythagorean identity. It no longer imports an unstated “minimum field lies in the gradient closure” claim from the supplier statement. Updated `F6` and the affected contract derivations/citation.

The repaired statements preserve their hypotheses and conclusions. No stale `verification.judge` records were present on the changed draft items. Definition items have no proof-contract rows; the two affected proof contracts were updated for the characteristic moment-continuity step and the localized lift’s minimum-action proof.

Validation after final edits:

- `node tools/tsx-run.mjs tools/reflow.mts ...` on all six changed item paths: all unchanged after reflow.
- `node tools/tsx-run.mjs tools/precheck.mts ...` on all six changed item paths: all passed.
- `node tools/proof-layout.mjs items/def-feature-measure-energy.md items/lem-hilbert-valued-path-energy-characterization.md items/def-localized-hilbert-lift.md items/def-wasserstein-gradient-flow-for-feature-energy.md items/lem-characteristics-unique-and-stable.md items/lem-localized-lift-generates-continuity-equation.md`: `6 items, 17 steps, 0 defects`.

## Defect not repaired

- `lem-partial-energy-continuous-under-w2` (batch 52), Statement, first sentence: the result refers to the feature-energy `F`, but its local hypotheses only give a closed convex `Θ` and bounded Lipschitz `φ`/`Ṽ`. Those data do not ensure that `Ω = R × Θ` is a feature domain allowed by `def-feature-measure-energy` (the closed convex set may have empty interior), or that the resulting `Φ(w,θ)=wφ(θ)` is Fréchet differentiable as that definition requires. The item can be closed by explicitly imposing the full feature-energy model hypotheses, or by defining a separate energy for this lower-regularity class and stating the continuity result for that definition. This carrier is outside batch 51, so I did not edit it.

## Page verdicts

- `wasserstein-gradient-flow-existence-and-stability`: pass. Frontmatter inventory and prerequisites are preserved; the body is empty and there is no summary.
- `wasserstein-gradient-flow-existence-and-stability-examples`: pass. Frontmatter inventory and prerequisites are preserved; the body is empty and there is no summary.

## Blocker

No blocker in batch 51. The recomputed run status still reports the separate run-level blocker `3a-split`: `split-8` failed three times for batch 8. No batch-51 gate or transition was attempted.

## Coverage note

All assigned pages, all 22 assigned items, the cited supplier interfaces needed for their proofs, and the affected batch-52 consumer closure were reviewed. The first four assigned carriers were initially opened to identify their supplier set before those suppliers were read; their mathematical assessment was completed after opening the required supplier interfaces. I did not re-audit every transitive published proof behind the published supplier theorems, and I did not review unrelated batch-52 mathematics beyond the consumer impact of the repaired definitions. The remaining out-of-scope carrier defect is stated above and in the findings JSON.
