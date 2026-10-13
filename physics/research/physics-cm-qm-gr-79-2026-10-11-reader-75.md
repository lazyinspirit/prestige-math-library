# Step 3a reader report — batch 75

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: batch 75 only

## Opened inventory

Pages opened:

- `gr-causal-and-initial-value-boundaries` (A)
- `gr-causal-and-initial-value-boundaries-examples` (B/examples)

Assigned items opened (28):

**A page — `gr-causal-and-initial-value-boundaries`**

- `def-gr-causal-curves-and-reachability`
- `lem-gr-causal-curve-calculus`
- `def-gr-causal-conditions-and-global-hyperbolicity`
- `lem-gr-temporal-functions-and-time-functions`
- `def-gr-spacelike-hypersurfaces-and-cauchy-sets`
- `def-gr-spacelike-initial-data-and-constraints`
- `lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form`
- `lem-gr-constraint-projections`
- `def-gr-geodesic-congruence-and-kinematics`
- `lem-gr-kinematic-decomposition-identities`
- `lem-gr-contracted-commutator-identity`
- `thm-gr-timelike-raychaudhuri-and-local-focusing`
- `lem-gr-maximal-geodesics-and-extension`
- `lem-gr-constant-component-chart-flatness`
- `def-gr-flat-minkowski-model-and-inertial-charts`
- `lem-gr-flat-inertial-cone-criterion-and-sums`
- `lem-gr-flat-time-monotonicity-and-lipschitz-graphs`
- `thm-gr-minkowski-cauchy-and-global-hyperbolicity`
- `lem-gr-quotient-by-isometric-free-proper-action`
- `thm-gr-flat-cylinder-closed-timelike-and-no-cauchy-set`
- `thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice`
- `rem-gr-causal-and-initial-value-scope`

**B/examples page — `gr-causal-and-initial-value-boundaries-examples`**

- `ex-gr-minkowski-level-sets-and-causal-double-cones`
- `ex-gr-flat-slab-vertical-line-proper-time`
- `ex-gr-radial-focusing-in-flat-minkowski`
- `cex-gr-flat-cylinder-has-a-closed-timelike-curve`
- `cex-gr-spacelike-hypersurface-need-not-be-cauchy`
- `cex-gr-achronal-set-need-not-be-acausal`

Dependency sources opened for the assigned claims:

- **Current-run batches 65–69:** `def-gr-smooth-covariant-two-tensor-field`, `def-gr-smooth-lorentzian-objects`, `def-gr-inverse-metric-and-musical-isomorphisms`, `lem-gr-future-causal-classification-by-a-timelike-field`, `lem-gr-inverse-metric-is-smooth`, `def-gr-metric-selected-connection`, `lem-gr-connection-conditions-in-chart-components`, `post-gr-spacetime-and-classical-domain`, `def-gr-observer-and-rest-space`, `def-gr-observer-congruence-and-adapted-charts`, `lem-gr-observer-pairing-with-future-causal-vectors`, `lem-gr-observer-projection-decomposition`, `cor-gr-adapted-chart-existence`, `def-gr-timelike-worldline-and-proper-time`, `lem-gr-parallel-transport-and-geodesic-speed`, `lem-gr-proper-time-reparametrization-and-four-velocity`, `thm-gr-local-geodesics-and-exponential-map`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `thm-gr-point-normal-and-exponential-coordinate-charts`, `post-gr-ideal-clocks-and-free-fall`, `def-gr-curvature-tensor-and-derived-tensors`, `thm-gr-curvature-algebraic-symmetries`, `thm-gr-curvature-tensoriality-and-coordinate-formula`, and `post-gr-einstein-field-law`.
- **Other local Lorentzian foundations opened:** `def-lorentz-form-and-inertia`, `def-causal-classification-of-lorentz-vectors`, `def-time-orientation-and-future-causal-sets`, `def-lorentz-orthogonality-and-orthogonal-complement`, `lem-lorentz-form-has-orthonormal-basis`, and `lem-timelike-cone-has-two-convex-components`.
- **Published direct mathematical prerequisites:** the Definition or Statement section was opened for each of the 39 published direct suppliers in the assigned items’ dependency lists. These include the absolute-continuity/FTC and choice suppliers, smooth-manifold/tangent-space suppliers, connection/geodesic suppliers, compactness/completeness results, and the quotient and integral inequalities.
- The SI convention `def-gr-si-unit-and-coordinate-conventions` was opened for the conditional unit reading in `ex-gr-flat-slab-vertical-line-proper-time`.

## Edits and evidence

Six assigned example/counterexample items had the final QED marker before the required trailing justification tags. I moved each QED marker after its tags without changing the argument:

- `cex-gr-achronal-set-need-not-be-acausal`
- `cex-gr-spacelike-hypersurface-need-not-be-cauchy`
- `cex-gr-flat-cylinder-has-a-closed-timelike-curve`
- `ex-gr-flat-slab-vertical-line-proper-time`
- `ex-gr-minkowski-level-sets-and-causal-double-cones`
- `ex-gr-radial-focusing-in-flat-minkowski`

I also edited the assigned A-page summary paragraph “Causal curves and the causal ladder” and the item `rem-gr-causal-and-initial-value-scope`, subsection “What is proved here.” Both now state that the local chart-neighborhood gap in the causal-curve definition leaves the curve-calculus and temporal-function claims under review. This corrects their former unconditional description of those results as proved; it does not repair the underlying definition or the affected proofs.

After these final item edits I ran:

`node tools/physics-support/proof-layout.mjs items/cex-gr-achronal-set-need-not-be-acausal.md items/cex-gr-spacelike-hypersurface-need-not-be-cauchy.md items/cex-gr-flat-cylinder-has-a-closed-timelike-curve.md items/ex-gr-flat-slab-vertical-line-proper-time.md items/ex-gr-minkowski-level-sets-and-causal-double-cones.md items/ex-gr-radial-focusing-in-flat-minkowski.md items/rem-gr-causal-and-initial-value-scope.md`

Result after the final edits: `proof-layout: 7 items, 23 steps, 0 defects`.

The six proof edits were formatting-only. The summary edits were status clarifications. The changed remark has no proof-contract entry or judge stamp. Its required reflow reported `unchanged`; precheck reported `0 checked, 0 failing`. No proof contract or judge record changed. No mathematical Statement or Definition was edited.

## Remaining defects

- `def-gr-causal-curves-and-reachability`, Definition (a), the paragraph defining “locally absolutely continuous”: the condition tests a chart representative only for charts that contain the entire image of each compact subinterval. It never requires that each parameter have a neighborhood whose image lies in some chart. Thus, for a compact subinterval whose image is not contained in one chart, the condition imposes no regularity there. This does not establish the usual local chartwise absolute-continuity property needed by the consumers. The definition should require, for each parameter value, a relative interval neighborhood mapped into a chart with absolutely continuous coordinate representative. I did not change this definition because correcting it changes a core interface whose current-run dependency closure has 99 consumers across batches 75, 77, 78 and 79; only batch 75 is assigned here.
- `lem-gr-causal-curve-calculus`, Statement (b), Proof 1.1 and Proof 2.1: the proof assumes finite chart subdivisions of each compact parameter interval and uses them to obtain chartwise differentiability almost everywhere. The assigned definition does not guarantee that each parameter has a neighborhood mapped into a chart, so compactness cannot supply the asserted finite chart cover. The theorem's differentiability claim is therefore not established from its current hypotheses.
- `lem-gr-temporal-functions-and-time-functions`, Statement (b)–(c), Proof 2.1 and 3.1: the proof uses the smooth-composition and FTC results for $u\circ\gamma$ across the full parameter interval. Those steps require local absolute continuity of the composite, which in turn requires the missing chart-neighborhood condition for $\gamma$. The existing dependencies do not supply that condition, so the claimed time-function and no-closed-causal-curve conclusions are not established by this proof.

## Page verdicts

- **`gr-causal-and-initial-value-boundaries` (A):** the flat-model, initial-data, and focusing calculations reviewed are coherent under their displayed models and hypotheses. Its summary now records the unresolved causal-curve regularity issue; acceptance is blocked by the definition and affected proofs above.
- **`gr-causal-and-initial-value-boundaries-examples` (B/examples):** the six model computations and counterexamples are valid under the stated flat models. The final-step formatting defects are repaired; no page-local mathematical defect remains.

## Blockers and coverage limits

The causal-curve defect requires a public Definition correction and affected-consumer review outside batch 75. I did not modify another batch or assume those consumers remain sound after such a change.

The assigned 28 items and both pages were reviewed. I read exact primary claims from the direct published suppliers and the relevant direct draft suppliers, but did not audit every proof in the full transitive dependency closure (1,491 items including the assigned carriers); deeper defects in transitive suppliers not opened remain possible. I also opened assigned carriers before completing the dependency-source pass, so the initial reading order was not supplier-first. I corrected that review gap for the cited/direct sources before forming the verdicts, but do not claim a full proof audit of all transitive suppliers.

The repository-wide diff at handoff contains 505 modified tracked files, most outside batch 75. I did not audit or modify those outside-scope changes.

