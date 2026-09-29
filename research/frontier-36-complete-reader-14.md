# Step 5a reader report — frontier-36-complete, batch 14

## Run and scope

The manifest assigns the A page library/differential-geometry/jacobi-fields-conjugate-points-and-the-cut-locus.md and its B companion library/differential-geometry/jacobi-fields-conjugate-points-and-the-cut-locus-examples.md. I opened both current page files and all 61 listed item files. Every listed item is currently marked draft with origin: pipeline.

I recomputed run status with node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run frontier-36-complete --state-dir .autopilot. It reports the live run at 5a-read, with reader-14 assigned to batch 14. The recent repository history ends at 0d143b38f (Defer live citation checks from Step 3b to Step 5b). No run stamp or self-certification was made.

## Item inventory

A page, 49 items opened:

def-geodesic-variation; lem-covariant-derivatives-commute-up-to-curvature-in-a-two-parameter-variation; def-jacobi-field; thm-variation-field-of-a-geodesic-variation-is-a-jacobi-field; thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data; cor-the-space-of-jacobi-fields-along-a-geodesic-has-dimension-two-n; thm-every-jacobi-field-is-induced-by-a-geodesic-variation; prop-tangential-jacobi-fields-are-affine-multiples-of-the-velocity; prop-killing-fields-restrict-to-jacobi-fields-along-geodesics; lem-wronskian-of-two-jacobi-fields-is-constant; thm-differential-of-the-exponential-map-in-terms-of-jacobi-fields; def-conjugate-points-along-a-geodesic-and-their-multiplicity; thm-conjugate-points-are-critical-values-of-the-exponential-map-along-the-geodesic; prop-conjugate-instants-are-isolated-unless-the-geodesic-is-constant; prop-conjugate-points-and-multiplicity-are-invariant-under-affine-reparametrization; thm-second-variation-formula-for-energy; def-index-form-of-a-geodesic-segment; lem-integration-by-parts-for-the-index-form; prop-jacobi-fields-are-the-null-solutions-of-the-index-form-with-fixed-endpoints; thm-index-lemma; def-h-one-riemannian-curves-and-half-energy; lem-local-length-comparison-for-a-conjugate-free-geodesic; lem-h-one-local-length-comparison-for-a-conjugate-free-geodesic; cor-a-geodesic-segment-before-its-first-conjugate-point-is-locally-energy-minimizing; thm-a-geodesic-does-not-minimize-past-its-first-conjugate-point; prop-at-a-conjugate-endpoint-the-index-form-is-degenerate; def-cut-time-in-a-unit-tangent-direction; lem-minimizing-along-a-geodesic-is-an-initial-interval-property; def-cut-point-and-cut-locus-of-a-point; lem-finite-dimensional-unit-spheres-are-sequentially-compact; lem-the-pointwise-norm-is-smooth-off-the-zero-vector; thm-characterization-of-a-cut-point; thm-cut-time-is-positive-and-continuous; cor-cut-time-does-not-exceed-first-conjugate-time; prop-injectivity-radius-is-the-infimum-of-cut-times; thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p; thm-distance-from-p-is-smooth-off-p-and-the-cut-locus; prop-gradient-of-the-distance-is-the-outward-unit-radial-field-off-the-cut-locus; prop-hessian-of-distance-in-terms-of-radial-jacobi-fields; thm-cut-locus-of-a-point-is-closed; thm-cut-locus-of-a-point-has-riemannian-volume-zero; cor-polar-integration-may-discard-the-cut-locus; rem-the-morse-index-theorem-for-geodesics; fs-every-vector-field-along-a-geodesic-is-a-jacobi-field; fs-conjugacy-is-a-property-of-two-points-independent-of-the-geodesic-between-them; fs-a-geodesic-stops-minimizing-exactly-at-its-first-conjugate-point; fs-the-distance-from-p-is-smooth-on-m-minus-p; fs-the-cut-locus-of-a-point-is-always-a-smooth-hypersurface; fs-nullity-of-the-cut-locus-follows-merely-because-it-has-empty-interior.

B page, 12 items opened:

ex-jacobi-fields-in-euclidean-space; ex-jacobi-fields-in-constant-sectional-curvature; ex-conjugate-antipodes-on-the-round-sphere; ex-no-conjugate-points-in-nonpositive-constant-curvature; ex-killing-jacobi-fields-from-rotations; ex-cut-locus-of-a-point-on-a-round-sphere; ex-cut-locus-of-a-point-on-a-flat-circle; ex-cut-locus-on-a-flat-rectangular-torus-from-the-dirichlet-cell; cex-a-cut-point-that-is-not-conjugate-because-two-minimizers-arrive; cex-a-conjugate-point-at-which-there-are-many-geodesics; ex-distance-hessian-in-euclidean-space; ex-index-form-in-constant-curvature.

## Load-bearing dependencies and citations checked

For the polar formula and its cut-domain argument, I also opened items/thm-characterization-of-a-cut-point.md, items/thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p.md, items/thm-differential-of-the-exponential-map-in-terms-of-jacobi-fields.md, and published items/thm-gauss-lemma.md, items/thm-polar-coordinates-formula-for-lebesgue-measure.md, and items/thm-tonelli-theorem-for-sigma-finite-product-spaces.md. For the cut-locus volume argument I opened the published equidimensional C1 null-image, density chart-integration, intrinsic density-measure, and countable-chart nullity suppliers.

I cross-checked the relevant source locations: Datar, Lectures on Riemannian Geometry, §27.2, Lemma 27.2.1 (printed pp. 200–202), states the polar density/Jacobi wedge formula; its Proposition 24.1.1 (printed pp. 174–175) gives the normal Jacobi-field formula in constant curvature. Source: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf. Lee, Riemannian Manifolds: An Introduction to Curvature, Proposition 10.11 (printed pp. 182–183) identifies conjugacy with failure of the exponential map to be a local diffeomorphism, and Theorem 10.15 and the following cut-point discussion (printed pp. 188–190) support the conjugate-point and cut-locus conventions cited by the items. Source: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf. Folland, Real Analysis, 2nd ed., §2.7, Theorem 2.49, is the polar-coordinate measure formula cited by the polar integration item. Source: https://djvu.online/file/NPF4BEtSuqdFA.

The assigned proofs state their other linear-algebra, calculus, and measure-theory supplier interfaces where used. I did not re-audit every transitive foundational dependency proof.

## Findings, edits, and verdicts

No confirmed or suspected defect remained in the assigned pages or items. The false-statement items have valid counterexamples and do not assert their refuted claims as true.

- Edits: none.
- Repaired defects: none.
- Uneditable defects: none.
- Proposed withdrawals: none; every assigned item remains present.
- Proof-contract or verification.judge changes: none.
- Reflow/precheck: not run because no item changed.
- Blocker: none.

Page A verdict: no defect found; its definitions, Jacobi and conjugacy results, index/minimality claims, cut-time and cut-locus results, distance regularity claims, measure-zero result, and polar formula are mathematically supported under their stated assumptions.

Page B verdict: no defect found; the Euclidean and space-form calculations, sphere and quotient cut loci, torus Dirichlet cell, counterexamples, Euclidean distance Hessian, and constant-curvature index-form computations are supported under their stated assumptions.

## Coverage note

Both assigned pages and all 61 assigned items were opened and reviewed. The listed load-bearing supplier statements and relevant Lee/Datar/Folland locators were checked. I did not independently re-prove every transitive elementary dependency.
