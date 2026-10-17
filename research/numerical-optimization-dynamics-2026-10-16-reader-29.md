# Step 3a reader report — batch 29

Run: numerical-optimization-dynamics-2026-10-16  
Role: reader-29

## Result

Reviewed batch 29 independently. The run status reported the run as active with no worker running at the time of review. No blocker remains. The workspace already contained extensive unrelated modifications; none of those files was changed.

## Opened inventory

Assigned pages:

- A page: library/numerical-differential-equations-and-stochastic-dynamics/pseudo-arclength-continuation-and-fold-certificates.md
- B page: library/numerical-differential-equations-and-stochastic-dynamics/pseudo-arclength-continuation-and-fold-certificates-examples.md

Page-level prerequisites:

- Published page library/real-analysis/the-inverse-function-theorem-completed.md
- Draft page library/numerical-optimization-inverse-problems-and-uncertainty-quantification/nonlinear-equations-and-newton-methods.md

Assigned items, read in dependency order:

- Level 0: def-simple-fold-complement-splitting-and-projection; lem-pseudo-arclength-border-matrix-invertibility-and-inverse-bound; thm-augmented-residual-contraction-certificate.
- Level 1: lem-regular-curve-chart-and-pseudo-arclength-predictor-defect; lem-simple-fold-complement-restriction-is-an-isomorphism; ex-zero-tangent-angle-makes-bordered-corrector-singular.
- Level 2: lem-transverse-hyperplane-selects-unique-local-branch-point; thm-simple-fold-lyapunov-schmidt-parameterization.
- Level 3: thm-pseudo-arclength-local-newton-correction; ex-natural-parameterization-fails-at-x-squared-fold.
- Level 4: alg-pseudo-arclength-continuation-with-certified-local-corrector.
- Level 5: thm-pseudo-arclength-finite-trace-partial-correctness-and-termination; ex-local-trace-misses-disconnected-branch; ex-pseudo-arclength-crosses-x-squared-fold.

Opened the assigned proof-contract file and checked the current claims against the item proofs. Opened all item dependencies listed for the assigned items, including the batch 3 draft suppliers alg-newton-correction-for-vector-residuals, alg-finite-budget-newton-for-vector-residuals, lem-finite-budget-newton-work-and-status, and thm-updated-jacobian-newton-local-quadratic-convergence.

Additional supporting items opened for the Newton, integration, and complement arguments included def-invertible-euclidean-linear-map; def-c-one-map-and-local-inverse; def-jacobian-matrix-and-gradient; thm-total-derivative-computes-directional-and-partial-derivatives; lem-vector-newton-correction-error-under-lipschitz-jacobian; lem-newton-contraction-near-an-invertible-derivative; thm-mean-value-inequality; def-vector-valued-derivative-and-integral; cor-vector-valued-ftc-and-lipschitz-bound; thm-norm-inequality-for-the-vector-valued-integral; thm-finite-dimensional-orthogonal-decomposition; and cor-dimension-of-a-direct-sum.

## Review and edits

The direct dependency proofs support the assigned local claims under their stated hypotheses. In particular, the bordered inverse estimate follows from the complement decomposition and the stated transversality margin; the regular-curve chart and predictor bound follow from the implicit function theorem and the local derivative Lipschitz bound; the fold curvature is \(\lambda''(0)=-b/a\); and the finite-trace theorem keeps callback termination conditional and does not infer global branch completeness.

Repaired ex-pseudo-arclength-crosses-x-squared-fold. Its title claimed a crossing, but its former realization started at the fold and stepped only to the positive side. The revised example starts from the certified seed \((-\alpha,\alpha^2)\), uses \(0<\alpha<1/32\), and advances to \(x=\alpha+\alpha^2>0\). Its supplied chart contains \(x=0\), its offset and angle bounds satisfy the continuation procedure, one exact Newton correction reaches the positive section root, and both seed and corrected balls satisfy the contraction certificate with \(q=\alpha<1\). This now demonstrates a finite trace through the fold.

Updated the batch 29 proof contract for that item: citation-use step references, derivation step IDs and dependencies, a finite check for the crossing step, and boundary evidence. The item had no verification.judge record to remove. No other item or page prose was edited.

Final validation for the changed item:

- Reflow: unchanged.
- Precheck: PASS, direct strategy; one proof checked, zero failures.
- Proof-layout: one item, six steps, zero defects.

An initial precheck found an untagged-step formatting issue. The display equations in proof steps were changed to inline equations and the direct-proof step numbering was normalized; the final precheck and proof-layout both pass.

## Page verdicts

- pseudo-arclength-continuation-and-fold-certificates: sound. The summary’s local regularity, fold curvature, residual-certificate, finite-trace, and global-completeness limits match the assigned items.
- pseudo-arclength-continuation-and-fold-certificates-examples: sound after the assigned fold-crossing example repair. The other examples correctly illustrate singular zero-angle sections, failure of the natural parameter at a fold, and a finite trace missing a disconnected component.

## Uneditable defects and blocker

None found. No blocker remains.

