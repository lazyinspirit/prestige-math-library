# Step 3a reader report — batch 29

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: independent reader  
Scope: batch `29` only

## Page verdicts

- `gr-fx01-hypersurface-and-null-geometry` — **hold for owner disposition**. Its five listed items and three published prerequisite pages match the assigned manifest. The mathematical content was reviewed; the in-flight repairs below close three presentation/type gaps. The focal-boundary proof still reaches the published malformed definition of the standard smooth step function.
- `gr-fx01-hypersurface-and-null-geometry-examples` — **hold, inherited from the A page**. Both example computations were checked and the B-to-A page requirement is correct. Both examples depend on the focal-boundary lemma and therefore inherit the same published-supplier issue.

Both page carriers are frontmatter-only, so there was no page-summary prose claim to review. No page edit was needed.

## Opened inventory

Assigned pages:

- `library/general-relativity/gr-fx01-hypersurface-and-null-geometry.md`
- `library/general-relativity/gr-fx01-hypersurface-and-null-geometry-examples.md`

The three A-page prerequisite page carriers were opened: `gr-causal-and-initial-value-boundaries`, `gr-curvature-and-tides`, and `gr-gr13-convex-normal-neighborhoods`. All three are published GR pages; their identities and the assigned pages’ `requires` fields match.

Assigned items were read and reviewed in dependency order:

1. `lem-gr-fx-null-normal-plane-and-screen`
2. `def-gr-fx-null-screen-geometry`
3. `prop-gr-fx-null-raychaudhuri`
4. `lem-gr-fx-null-screen-index-form`
5. `lem-gr-fx-null-focal-boundary-exclusion`
6. `ex-gr-fx01-1`
7. `ex-gr-fx01-2`

The published direct item suppliers needed for these claims were inspected at their relevant definition or statement sections: `def-gr-smooth-lorentzian-objects`, `def-embedded-submanifold-and-slice-chart`, `def-gr-metric-selected-connection`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `def-covariant-derivative-along-a-curve`, `thm-sylvesters-law-of-inertia`, `def-countable-choice`, `def-gr-curvature-tensor-and-derived-tensors`, `thm-gr-jacobi-equation-and-geodesic-deviation`, `thm-gr-curvature-algebraic-symmetries`, `thm-gr-local-geodesics-and-exponential-map`, `def-gr-causal-curves-and-reachability`, `def-dependent-choice`, `thm-gr-convex-normal-neighborhoods`, `thm-gr-normal-neighborhood-causal-cone`, `thm-smooth-dependence-of-ode-solutions-on-parameters`, `thm-smooth-inverse-function-theorem-on-manifolds`, `thm-intermediate-value`, `lem-gr-push-up-rule`, and `def-the-standard-smooth-step-function`. The transitive published inputs `thm-the-standard-flat-function-is-smooth-and-flat-at-zero` and imported `../items/def-the-standard-flat-function.md` were then opened to check the latter’s undefined symbol.

The task-named batch proof contracts and the current run notes were consulted as evidence, not as proof verdicts. The run’s native policy record says no statement-first marker is attached; I did not retrofit that later editorial policy onto this run.

## Mathematical review and source evidence

The local-normal-pair lemma’s projection, null normalization, positive quotient, symmetry and boost computations are valid. The screen definition gives the rank-two positive quotient, the initial-surface isometry and the optical definitions. The Raychaudhuri derivation has the correct sign for the declared curvature convention: the Jacobi equation gives the screen Riccati equation, its trace gives the two-dimensional shear term, and the affine focusing comparison yields the stated bound under the explicit Ricci inequality. The index-form proof has the positive `+chi_ell` boundary term for the declared sign of `chi_ell`; the focal-boundary proof supplies a negative index direction after the focal instant and then constructs an endpoint-fixed future causal curve with a timelike subcurve. The causal conclusion is conditional and does not claim geodesic incompleteness or curvature blow-up.

Both cited PDFs were opened and the relevant sections read. Gourgoulhon and Jaramillo define the two-dimensional expansion/shear split in §5.6, equations 5.64–5.67, and derive the null Raychaudhuri equation in §6.2, equations 6.5–6.8; the displayed non-affinity term is zero in the assigned affine setting. [Full PDF](https://arxiv.org/pdf/gr-qc/0503113). Witten’s §8.2, equations 8.5–8.10, gives the causal-deformation quadratic functional; §8.3, equations 8.14–8.22, relates its zero modes to null geodesic deviation; §8.4, equations 8.24–8.41, treats orthogonal null geodesics from a spacelike codimension-two surface and its initial boundary term; and §8.5, equations 8.42–8.52, recovers Raychaudhuri from the Jacobi matrix. Section 5.2 also explains loss of promptness at a focal point. The assigned focal proof supplies its local smoothness, endpoint and timelike-correction details rather than importing them from the lecture notes. [Full lecture PDF](https://www.claymath.org/wp-content/uploads/2022/03/WittenLectures.pdf).

The round-sphere example checks directly: `theta_ell=2/R`, `theta_k=-2/R`, the inward screen map is `(1-lambda/R) id`, and the opposite point on the sphere gives a future timelike comparison exactly for `R<lambda<3R`. The boost example’s scaling is correct when `f` is constant on each generator. Its screen map is unchanged modulo the null generator direction even when `f` varies across the initial surface. No empirical observation or physical postulate is used in these mathematical examples.

The sole TikZ diagram, in `def-gr-fx-null-screen-geometry`, matches the text: it shows the spacelike tangent plane and the two future null rays with normalization `g(ell,k)=-2`. No other assigned item needs a diagram for its exposition, and no diagram repair was needed.

## Repairs made

- `lem-gr-fx-null-screen-index-form`: specified the spacetime, spacelike surface, positive segment length, geodesic regularity, screen quotient, initial tangent-to-screen isometry, curvature convention, and a smooth orthogonal representative using the time-orientation field. This replaces the undefined “parallel null frame” and makes the initial values in `T_pS` well-typed. The proof now verifies pointwise self-adjointness directly from the curvature symmetries, without relying on an unintroduced frame. The direct consumer `lem-gr-fx-null-focal-boundary-exclusion` was checked: its admissible screen field, initial value and realization use agree with the clarified statement and need no repair.
- `ex-gr-fx01-1`: fixed `M`, the time orientation `N=partial_t`, and the radial coordinate/vector field on `x != 0`. This makes “future” and `partial_r` explicit; the computation is unchanged.
- `ex-gr-fx01-2`: introduced the ambient spacetime, surface `S`, open subset `U`, normalized null pair and initial expansion `theta_0(p)`, and defined the future sets used in `E^+(S)`. The numerical focusing-bound rescaling is now explicitly conditional on negative initial expansion and nonnegative `Ric(ell,ell)`. Proof step 3.1 now states why the extra variation term from differentiating `f(p)` is parallel to `ell` and vanishes in the screen quotient.
- Updated the batch proof contracts for the index-form derivation, the two example computations and their added boundary/finite checks. The changed items had no `verification.judge` record to remove.

## Uneditable defect and blocker

`def-the-standard-smooth-step-function` is published and outside this reader’s write scope. Its `## Definition` begins “Let `beta` be the standard flat function” without stating or identifying the exact definition. Its only declared dependency is `thm-the-standard-flat-function-is-smooth-and-flat-at-zero`; that theorem’s Statement also only names `beta`, while its Fact [F1] points to the imported `def-the-standard-flat-function`, which gives the piecewise formula. The focal-boundary consumer uses the step function’s properties in Facts [F12] and proof step 3.1. Under the required explicit-definition rule, this published Definition needs to state or link the exact `beta` definition and declare the appropriate prerequisite. I left the published source untouched. This is the fatal routed finding in the accompanying JSON, assigned to `lem-gr-fx-null-focal-boundary-exclusion`.

No other confirmed defect remained. The only blocker is owner disposition of that published dependency finding.

## Validation and coverage limits

After the final repairs, reflow and precheck were run for each changed item; precheck passed all three. Final `proof-layout` reported `3 items, 10 steps, 0 defects`. No tests were added or run. All assigned pages/items and the direct suppliers needed for their claims were checked. I did not audit every unrelated ancestor in the larger transitive dependency closure, and the imported mathematical source’s raw hash was not recomputed in this reader pass.
