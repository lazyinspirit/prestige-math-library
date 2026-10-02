# Step 5a reader report — batch 13

Run: `frontier-37-owner-30`  
Role: independent reader (`reader-13`)

## Opened assigned inventory

Read the batch manifest and both assigned pages, then reviewed all 66 listed item files. The inventory is grouped by its assigned page below.

### A page `riemannian-comparison-theorems` — [`library/differential-geometry/riemannian-comparison-theorems.md`](library/differential-geometry/riemannian-comparison-theorems.md)

Assigned items (54):

- `def-comparison-sine-cosine-and-cotangent-functions`
- `prop-model-functions-solve-the-constant-curvature-jacobi-equation`
- `def-radial-jacobi-tensor`
- `lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point`
- `def-radial-riccati-operator`
- `thm-radial-riccati-equation`
- `lem-trace-riccati-inequality`
- `thm-sturm-comparison-for-scalar-jacobi-equations`
- `thm-rauch-comparison-theorem-first-form`
- `lem-riccati-comparison-for-scalar-initial-shape`
- `thm-rauch-comparison-theorem-second-form`
- `prop-rigidity-in-rauch-comparison`
- `cor-upper-sectional-curvature-bounds-delay-conjugate-points`
- `cor-lower-positive-sectional-curvature-forces-conjugate-points`
- `def-laplace-beltrami-operator-as-trace-of-the-hessian`
- `thm-hessian-comparison-for-distance-under-sectional-curvature-bounds`
- `thm-laplacian-comparison-for-distance-under-a-ricci-lower-bound`
- `rem-weak-laplacian-comparison-at-the-cut-locus`
- `thm-no-conjugate-points-under-nonpositive-sectional-curvature`
- `thm-a-complete-local-isometry-is-a-covering-map`
- `thm-cartan-hadamard`
- `cor-simply-connected-complete-nonpositively-curved-manifolds-have-unique-geodesics-between-points`
- `cor-squared-distance-is-strictly-convex-along-geodesics-in-a-hadamard-manifold`
- `thm-bonnet-conjugate-radius-theorem`
- `thm-bonnet-myers`
- `lem-pullback-metric-on-a-cover-of-a-complete-manifold-is-complete`
- `cor-bonnet-myers-fundamental-group-is-finite`
- `prop-round-sphere-model-geometry`
- `prop-half-space-model-geometry`
- `prop-flat-torus-model-geometry`
- `def-model-space-radial-area-and-ball-volume`
- `def-radial-volume-jacobian`
- `lem-logarithmic-derivative-of-the-radial-volume-jacobian-is-the-distance-laplacian`
- `thm-relative-volume-density-comparison`
- `thm-bishop-gromov-volume-comparison`
- `thm-cheng-maximal-diameter-rigidity`
- `cor-bishop-volume-upper-bound`
- `cor-volume-doubling-under-a-nonnegative-ricci-lower-bound`
- `prop-rigidity-in-bishop-gromov-on-an-interval`
- `cor-complete-noncompact-manifolds-with-nonnegative-ricci-curvature-have-at-most-euclidean-volume-growth`
- `def-comparison-triangle-in-the-two-dimensional-space-form`
- `lem-first-variation-hinge-derivative-formula`
- `lem-toponogov-distance-support-inequality`
- `thm-toponogov-hinge-comparison`
- `thm-toponogov-triangle-comparison`
- `prop-distance-between-corresponding-side-points-in-toponogov-comparison`
- `cor-diameter-rigidity-from-toponogov-under-a-sectional-lower-bound`
- `rem-alexandrov-and-differentiable-sphere-theorems`
- `fs-higher-sectional-curvature-makes-jacobi-fields-spread-faster`
- `fs-cartan-hadamard-says-exp-p-is-injective-without-simple-connectedness`
- `fs-positive-ricci-curvature-without-a-uniform-lower-bound-implies-compactness`
- `fs-bishop-gromov-volume-ratio-is-nondecreasing-under-a-ricci-lower-bound`
- `fs-a-section-curvature-lower-bound-makes-triangles-thinner-than-the-model`
- `fs-the-laplace-beltrami-definition-licenses-the-use-of-all-euclidean-harmonic-function-theory-on-manifolds`

### B page `riemannian-comparison-theorems-examples` — [`library/differential-geometry/riemannian-comparison-theorems-examples.md`](library/differential-geometry/riemannian-comparison-theorems-examples.md)

Assigned items (12):

- `ex-model-jacobi-fields-in-positive-zero-and-negative-curvature`
- `ex-rauch-comparison-between-euclidean-and-spherical-geodesics`
- `ex-distance-hessian-and-laplacian-in-space-forms`
- `ex-cartan-hadamard-for-hyperbolic-space`
- `ex-a-flat-torus-showing-simple-connectedness-is-needed-for-global-exp-injectivity`
- `ex-bonnet-myers-for-the-round-sphere`
- `ex-bishop-gromov-ratio-is-constant-in-the-model-space`
- `ex-volume-growth-in-euclidean-and-hyperbolic-space`
- `ex-toponogov-comparison-on-a-round-sphere`
- `cex-positive-sectional-curvature-with-no-fixed-lower-bound-on-a-noncompact-manifold`
- `cex-ricci-lower-bound-does-not-control-every-sectional-curvature-in-dimension-at-least-three`
- `ex-equality-cases-as-diagnostics-for-all-comparison-signs`

## Dependencies and source material checked

I followed the cited dependency statements needed for the audited claims, including the model sine/cosine definitions and ODE; Jacobi, index-form, Riccati, and Rauch comparison items; radial Hessian and Laplacian comparison suppliers; conjugate/cut-locus and exponential-map statements; Bishop–Gromov density and model-volume items; and the hinge, triangle, and side-length Toponogov suppliers. Specific in-run targets used in the repairs included:

- `prop-model-functions-solve-the-constant-curvature-jacobi-equation`, `def-comparison-sine-cosine-and-cotangent-functions`, `thm-sturm-comparison-for-scalar-jacobi-equations`, `lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point`, `thm-radial-riccati-equation`, `lem-trace-riccati-inequality`, `lem-riccati-comparison-for-scalar-initial-shape`, `thm-rauch-comparison-theorem-first-form`, and `thm-rauch-comparison-theorem-second-form`;
- `prop-hessian-of-distance-in-terms-of-radial-jacobi-fields`, `thm-hessian-comparison-for-distance-under-sectional-curvature-bounds`, `thm-laplacian-comparison-for-distance-under-a-ricci-lower-bound`, `thm-distance-from-p-is-smooth-off-p-and-the-cut-locus`, the cut-locus and conjugate-point suppliers, and `cor-simply-connected-complete-nonpositively-curved-manifolds-have-unique-geodesics-between-points`;
- `def-model-space-radial-area-and-ball-volume`, `thm-bishop-gromov-volume-comparison`, `prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, and the positive-measure/density suppliers used in rigidity and volume arguments;
- `def-comparison-triangle-in-the-two-dimensional-space-form`, `lem-first-variation-hinge-derivative-formula`, `lem-toponogov-distance-support-inequality`, `thm-toponogov-hinge-comparison`, `thm-toponogov-triangle-comparison`, `prop-distance-between-corresponding-side-points-in-toponogov-comparison`, and `thm-a-geodesic-does-not-minimize-past-its-first-conjugate-point`.

External source checks were used for niche comparison and weak-Laplacian claims:

- U. Lang, *Riemannian and Metric Geometry*, [Chapter 5 PDF](https://people.math.ethz.ch/~lang/RG.pdf): Lemmas 5.1–5.2, printed pp. 64–65, for the model cosine law and strict monotonicity of the opposite side in the included angle; Theorem 5.15, printed pp. 70–71 (PDF pp. 73–74), for Toponogov.
- J.-H. Eschenburg, [*Comparison Theorems in Riemannian Geometry*](https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf), §6, printed pp. 22–24, for the distance-support argument; Corollary 6.3, §6, for the hinge first-variation comparison.
- A. Dai, [*Ricci Curvature and Geometric Analysis*](https://web.math.ucsb.edu/~dai/Ricci-book.pdf), §1.2, Theorem 1.2.2 and (1.2.10), p. 8, for the pointwise Laplacian comparison off the cut locus; §1.3, pp. 9–11, including Lemma 1.3.6, for barrier and weak formulations.
- V. Datar, [*Lectures on Riemannian Geometry*](https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf), §25.2, was checked and found to concern Jacobi-field comparison, not Toponogov. I retained it only where it supports Jacobi/conjugate-point claims and replaced its inaccurate Toponogov citations with the exact Lang/Eschenburg locations above.

## Repairs made

All repaired item files belong to this assigned in-flight batch. Mathematical basis for each repair is given with it.

### Model functions and Jacobi/Riccati comparison

- `def-comparison-sine-cosine-and-cotangent-functions`: gave `ct_k` its full denominator domain (all spherical sine zeros for `k>0`, and only zero for `k≤0`) and corrected the positive-domain sign description: for `k>0`, `ct_k` is positive only before `π/(2√k)`, zero there, and negative after; for `k≤0` it is positive. This follows from the explicit sine/cosine formulas.
- `prop-model-functions-solve-the-constant-curvature-jacobi-equation`: removed the false claim that `cs_k` never vanishes; retained the correct fact that `sn_k` and `cs_k` do not vanish simultaneously, with `cs_k>0` when `k≤0`.
- `lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point` and `thm-radial-riccati-equation`: restricted invertibility to each time strictly before the first conjugate/focal time rather than claiming a conclusion at or after that time.
- `lem-trace-riccati-inequality`: made explicit that the shape/Riccati operator is defined on the pre-first-conjugate interval, even if the Jacobi tensor later becomes invertible again.
- `thm-sturm-comparison-for-scalar-jacobi-equations`: capped the comparison at the supplied segment `[0,L]`, using `τ_L=min(τ,L)` and continuity at a finite endpoint; this avoids extending a comparison past the actual domain.
- `thm-rauch-comparison-theorem-first-form`: changed the positivity interval to `(0,b₀+δ)`, since the comparison solution vanishes at zero.
- `lem-riccati-comparison-for-scalar-initial-shape`: scoped first singular times to `[0,T]` (or `+∞` if absent there), capped claims at the segment, corrected the comparison order to `t₁≤t₂`, and fixed the positivity and endpoint clauses.
- `thm-rauch-comparison-theorem-second-form`: specified the tangent-space isometry used to transport initial data into the model, restricted focal-time claims to the finite segment, and capped conclusions at `T`.
- `prop-rigidity-in-rauch-comparison`: repaired the first- and second-form equality arguments using full tangent isometries and correctly typed parallel transport. In the second form the proof now uses `y=P_t^{-1}J`, applies the Riccati equation on the transported normal space, and converts the conclusion back to the actual curvature vector equation. The endpoint and first-focal-time scopes are explicit.
- `cor-upper-sectional-curvature-bounds-delay-conjugate-points`: included the initial magnitude in the model-field norm, `|J_k(t)|=|sn_k(t)||w|`.
- `ex-model-jacobi-fields-in-positive-zero-and-negative-curvature`: states that the first positive-curvature model zero is `π/√k` and that refocusing occurs only when this time lies in the field's interval.

### Hessian, Laplacian, and weak comparison

- `def-laplace-beltrami-operator-as-trace-of-the-hessian`: states the trace formula at interior points and its one-sided extension when the data are smooth to a boundary; the definition no longer implies an unwarranted global boundary convention.
- `thm-hessian-comparison-for-distance-under-sectional-curvature-bounds`: wrote the comparison as a quadratic-form inequality `Hess r(X,X)≤/≥ct_k(r)g(X,X)`, scoped radial-tensor invertibility correctly, and fixed the sign of the scalar Dini integrating factor.
- `cor-squared-distance-is-strictly-convex-along-geodesics-in-a-hadamard-manifold`: used the quadratic-form Hessian estimate in the convexity argument.
- `thm-laplacian-comparison-for-distance-under-a-ricci-lower-bound`: corrected the malformed derivative and the sign in the integrating-factor exponent.
- `rem-weak-laplacian-comparison-at-the-cut-locus`: separated smoothness off the cut locus from model-pole restrictions, cited Dai's exact pointwise and weak-comparison locations, and retained a clearly marked proposed 5b withdrawal for the unsupported claim that a one-sided derivative inequality along every minimizing geodesic is equivalent to the weak formulation. No equivalence is asserted without matched hypotheses and a source.

### Volume comparison and rigidity

- `prop-half-space-model-geometry`: fixed the undefined `c` by translating/rotating the model so `c̄=0` and `u=e₁`.
- `def-model-space-radial-area-and-ball-volume`: defined the spherical endpoint area continuously as zero and the saturated ball volume by the finite endpoint integral.
- `thm-bishop-gromov-volume-comparison`: corrected Step 3.1 to allow `D>0, E≥0`; after a spherical pole the radial weight may be zero.
- `thm-cheng-maximal-diameter-rigidity`: removed an erroneous `R²` factor in the sphere pullback, normalized ambient sphere basis vectors by `R`, and supplied valid radial paths plus path-connectedness of `S^{n−1}` for the punctured-sphere argument.
- `prop-rigidity-in-bishop-gromov-on-an-interval`: replaced the invalid inference from a zero weighted integral with equality of averages on `[0,r]` and `[r,R]` plus a nonnegative double-integral identity, yielding constancy of the monotone ratio almost everywhere and then `c=1`. The proof now includes the spherical pole in the exponential image, cites the unique-geodesics dependency for `K≤0`, proves radial equality of metric and exponential distance by unique minimizers, and explains why a full-measure set of directions is dense using positive measure of nonempty open caps.
- `cor-complete-noncompact-manifolds-with-nonnegative-ricci-curvature-have-at-most-euclidean-volume-growth`: removed language that implicitly assumed a positive uniform Ricci lower bound; the argument uses `Ric≥0` directly.
- `thm-bonnet-conjugate-radius-theorem`: limited the asserted bound to `k>0`; the test-field argument supplies no positive sine zero when `k≤0`.

### Toponogov claims, citations, and examples

- `def-comparison-triangle-in-the-two-dimensional-space-form`, `lem-first-variation-hinge-derivative-formula`, `lem-toponogov-distance-support-inequality`, `thm-toponogov-hinge-comparison`, `thm-toponogov-triangle-comparison`, `prop-distance-between-corresponding-side-points-in-toponogov-comparison`, `rem-alexandrov-and-differentiable-sphere-theorems`, `ex-toponogov-comparison-on-a-round-sphere`, `fs-a-section-curvature-lower-bound-makes-triangles-thinner-than-the-model`, and `ex-equality-cases-as-diagnostics-for-all-comparison-signs`: replaced inaccurate Datar §25.2 Toponogov citations with Lang Chapter 5 and Eschenburg §6 locators. Eschenburg §6 Corollary 6.3 is the source for the hinge first-variation formula; Lang Theorem 5.15 is the Toponogov theorem locator.
- `lem-toponogov-distance-support-inequality`: repaired the support proof's comparison-parameter choice for both signs of `k`, corrected the scaling at the contact point, distinguished the smooth-distance case from the cut-point support case, used only the valid inequality `d(o_ε,·)+ε≥d(p,·)` with equality at contact, and included the addition-formula error tending to zero in the Hessian estimate. The first-conjugate obstruction now cites the exact minimizing theorem.
- `thm-toponogov-hinge-comparison`: removed the unjustified requirement that the third side be positive; the zero/degenerate case is handled explicitly.
- `prop-distance-between-corresponding-side-points-in-toponogov-comparison`: corrected the degenerate comparison-angle tuple to `0, π, 0`.
- `ex-a-flat-torus-showing-simple-connectedness-is-needed-for-global-exp-injectivity`: corrected the homotopy-lifting contradiction: the right-edge lift of a constant path remains `e₁`, whereas the top-edge lift beginning at zero remains zero.
- `ex-equality-cases-as-diagnostics-for-all-comparison-signs`: corrected the cotangent sign; asserted monotonicity only for `ρ`, not `G`; handled the saturated positive-curvature interval by reflecting `s` to `D−s`; supplied the strict-volume comparison on the shared integration domain including the spherical pole; and repaired the proof-step structure so the equality-in-model, half-angle, saturated-volume, and ratio arguments each have their own correctly numbered section. In the angle derivative, replaced an invalid fixed-argument chain-rule phrase by the explicit identity `∂_k h(t)=2 sn_k(t)∂_k sn_k(t)=−G(t)` from Step 1.2 and updated the exact citations. The source claim is derived from the explicit formulas rather than an inaccurate Toponogov citation.

### Assigned A-page prose

- `riemannian-comparison-theorems`: distinguished the first Rauch form (`J(0)=0` with matched derivative norms) from the second (`J(0)≠0` and scalar initial shape `D_tJ(0)=λJ(0)`); corrected the page's false count from five false-statement items to six.

## Defects not edited

None. All confirmed repairs were in assigned in-flight items or assigned A-page prose. No proposed withdrawal was deleted. No published dependency or B-page prose defect remains to route as a finding.

## Page verdicts

- **A — `riemannian-comparison-theorems`: repaired summary wording; otherwise reviewed and acceptable.**
- **B — `riemannian-comparison-theorems-examples`: reviewed; no confirmed page-prose defect and no edit made.**

## Validation and blocker

- Reflow and precheck were run for all 35 materially changed item files. The final two repaired step structures, `prop-rigidity-in-rauch-comparison` and `ex-equality-cases-as-diagnostics-for-all-comparison-signs`, both pass; all other changed items had already passed in the same batch validation.
- Regenerated the batch proof contracts: 57 entries regenerated and 9 definitions/remarks skipped because they contain no parsed proof facts or steps. After the final angle-derivative repair, regenerated that item’s entry again and aligned its boundary clauses with the corrected step numbering; the weak-Laplacian no-iff clauses remain marked not applicable.
- No stale `verification.judge` record was present in the assigned items. No judge stamp or self-certification was added.
- **Blocker:** none.
