# Step 5a reader report — batch 4

Run label: `frontier-36-complete`  
Assigned output: this report  
Verdict: no confirmed defect remained in the assigned pages or items; no repair was made.

## Opened inventory

Read the batch manifest `research/frontier-36-complete-batch-4.pages.json`, both assigned pages, and all 60 assigned item files in their current form.

**A page:** `library/algebraic-geometry/zariski-tangent-spaces-regular-points-smoothness-and-bertini.md`

Items opened: `def-zariski-cotangent-space-point`, `def-zariski-tangent-space-point`, `lem-cotangent-localization-at-rational-point`, `lem-tangent-vectors-as-dual-number-points`, `lem-tangent-points-over-square-zero-vector-extensions`, `def-jacobian-matrix-affine-algebraic-set`, `thm-zariski-tangent-space-jacobian-kernel`, `lem-tangent-space-functoriality-classical`, `lem-tangent-space-product`, `def-regular-local-ring-geometric-point`, `lem-local-dimension-reduced-variety-components`, `thm-embedding-dimension-at-least-local-dimension`, `def-singular-and-regular-loci-variety`, `thm-jacobian-criterion-affine-variety`, `cor-hypersurface-singular-locus-gradient`, `lem-regular-point-lies-on-one-component`, `thm-regular-locus-is-open-variety`, `lem-separating-hypersurface-chart-variety`, `thm-nonempty-regular-locus-reduced-variety-perfect-field`, `cor-minimum-tangent-dimension-and-homogeneous-regularity`, `def-smooth-morphism-to-field-classical`, `thm-regular-equals-smooth-over-perfect-field`, `thm-regular-not-smooth-imperfect-field`, `def-tangent-cone-point`, `lem-tangent-cone-initial-ideal-presentation`, `lem-tangent-cone-linear-span-tangent-space`, `def-multiplicity-hypersurface-point`, `lem-hypersurface-smooth-iff-multiplicity-one`, `lem-smoothness-stable-under-product-classical`, `def-smooth-morphism-classical`, `lem-smooth-map-tangent-surjectivity-criterion`, `lem-smooth-hyperplane-slice-at-transverse-point`, `lem-smooth-curve-realizing-a-tangent-direction`, `lem-dominant-map-generic-differential-surjectivity-char-zero`, `cor-generic-smoothness-on-source-characteristic-zero`, `lem-critical-locus-image-dimension-bound`, `thm-generic-smoothness-characteristic-zero`, `lem-zero-scheme-of-line-bundle-section`, `def-linear-system-base-locus`, `lem-linear-system-incidence-is-smooth`, `thm-bertini-smooth-hyperplane-section`, `cor-smooth-projective-complete-intersections-general`, and `rem-jacobian-presentation-independence`.

**B page:** `library/algebraic-geometry/zariski-tangent-spaces-regular-points-smoothness-and-bertini-examples.md`

Items opened: `ex-tangent-space-parabola`, `ex-node-two-tangent-directions`, `ex-cusp-double-tangent`, `ex-smooth-quadric-hypersurface`, `cex-nonreduced-hypersurface-jacobian`, `cex-regular-not-smooth-purely-inseparable-point`, `cex-bertini-characteristic-p-failure`, `ex-tangent-space-product-origin`, `ex-projective-cone-singular-vertex`, `cex-generic-target-smoothness-needs-smooth-source`, `ex-determinantal-quadric-singularity`, `ex-tangent-spaces-general-and-special-linear-groups`, `ex-tangent-dimension-distinguishes-three-line-configurations`, `ex-higher-plane-curve-tangent-cones`, `ex-orthogonal-and-symplectic-tangent-matrices`, `ex-irreducible-curve-with-arbitrary-embedding-dimension`, and `cex-nonradical-ideal-can-have-the-same-tangent-space`.

## Review notes and evidence

- Checked the actual statements and proof steps for domains, point types, residue fields, characteristic and perfectness qualifications, equation ideals, tangent/Jacobian computations, tangent-cone initial ideals, multiplicities, dimensions, open loci, fibre claims, witnesses, and the page summaries. The scheme-theoretic examples consistently retain the stated nilpotents; the reduced examples use the stated radical ideals.
- Checked the higher plane-curve source claims against Milne, *Algebraic Geometry* v6.10, §4b, printed pp. 84–85 (PDF pp. 83–84), especially Examples 4.13–4.17. The source identifies the first pair as a tacnode and a ramphoid cusp with the same Y^2 cone, and records the displayed triple-, double-axis-, and triple-line cone cases. Source: <https://www.jmilne.org/math/CourseNotes/AG.pdf>.
- Read the current proof of the external dependency `thm-ag-standard-smooth-geometric-regularity`, used by the generic-target counterexample. Its pointwise standard-smooth/geometrically-regular-fibre criterion matches the application made there.
- In `thm-generic-smoothness-characteristic-zero`, the passage from the closed-point differential check to smoothness of the restricted morphism leaves the usual openness/density bridge implicit. Under the stated finite-type classical-variety hypotheses a nonempty closed complement would contain a closed point, so this is an immediately closable proof compression, not a defective statement or a material omission. No edit was warranted.

## Edits

None. Consequently no proof contracts or `verification.judge` records were changed, and reflow/precheck were not run.

## Uneditable defects

None confirmed in the assigned pages, items, or the dependency opened above. No proposed withdrawal was identified.

## Page verdicts

- **A page — pass:** the summary matches the checked tangent-space, regularity, smoothness, generic-smoothness, and Bertini claims, with their stated hypotheses.
- **B page — pass:** the examples and counterexamples match their computations and the distinctions summarized on the page; no repair or withdrawal was needed.

## Blocker and coverage limitation

The assigned artifacts were readable and the mathematical review was not blocked. The repository instructions call for checking the live run state, but `.autopilot/` contains `frontier-36-twelve-categories`; the requested `frontier-36-complete` status command therefore reports a different-run state. The assigned manifest and files were still available and were reviewed as dispatched.

I did not independently reread the full transitive published-supplier closure (the manifest has 274 distinct direct dependency IDs outside these 60 assigned items). The review checked the supplier hypotheses as stated in the current item proofs and opened the external smoothness criterion noted above, but it does not certify the proofs of every external supplier. No supplier citation was judged insufficient.
