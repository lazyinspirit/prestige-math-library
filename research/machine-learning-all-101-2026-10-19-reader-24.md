# Step 3a reader report — batch 24

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Batch: `24`

## Opened inventory

Assigned pages:

- `library/machine-learning/ml02-metric-learning.md`
- `library/machine-learning/ml02-metric-learning-examples.md`

Assigned items, read in dependency order:

- Level 0: `def-mahalanobis-pseudometric`, `lem-symmetric-matrix-frobenius-isometry`, `thm-frobenius-projection-onto-psd-cone-is-spectral-clipping`, `lem-positive-semidefinite-cone-is-frobenius-closed`.
- Level 1: `alg-knn-classifier-with-fixed-tie-breaking`, `def-lmnn-fixed-target-objective`, `thm-mahalanobis-distance-is-pseudometric`, `lem-svec-transports-frobenius-subgradients`.
- Level 2: `thm-lmnn-fixed-target-objective-is-convex`, `ex-singular-mahalanobis-metric-identifies-distinct-points`, `ex-fixed-target-lmnn-triplet-conflict`.
- Level 3: `lem-lmnn-explicit-subgradient-and-data-bound`.
- Level 4: `alg-lmnn-finite-budget-projected-subgradient`.
- Level 5: `thm-lmnn-projected-subgradient-best-average-bound`, `ex-one-lmnn-projected-step-is-not-convergence`.

Published supplier items opened for the claims and procedures above:

- Definitions: `def-finite-sum`, `def-trace-of-a-square-matrix`, `def-subgradient-and-subdifferential`, `def-convex-and-strictly-convex-functions-on-euclidean-sets`, `def-convex-subset-of-euclidean-space`, `def-countable-choice`, `def-euclidean-inner-product`, `def-frobenius-matrix-norm`, `def-metric-space`, `def-metric-topology`, `def-metric-ball`, `def-interval`, `def-choice-function`, `def-axiom-of-choice`, `def-countable`, `def-norm-and-normed-space`, `def-matrix-space`, `def-finite-sum-in-a-commutative-monoid`, `def-inner-product-norm`, `def-hilbert-space`, `def-non-negative-and-positive-operator`, and `def-self-adjoint-and-normal-endomorphism`.
- Results and procedures: `thm-of-square-roots`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-non-negative-operator-characterisations`, `prop-operator-positivity-agrees-with-form-positivity-over-the-reals`, `prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases`, `thm-real-normal-endomorphism-classification`, `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `cor-triangle-inequality-for-inner-product-norm`, `prop-standard-coordinate-inner-products`, `thm-euclidean-space-complete`, `thm-projection-onto-a-nonempty-closed-convex-set`, `thm-nearest-point-in-a-nonempty-closed-convex-set`, `alg-projected-subgradient-method`, `thm-projected-subgradient-best-and-average-bound`, `lem-projected-subgradient-finite-budget-returns-status`, and `lem-projected-subgradient-one-step-estimate`.

I also read the batch pages manifest and its proof-contract file, the reader brief, and the repository instructions. The manifest lists 12 items on the A page and 3 examples on the B page; these match the page inventories. No TikZ or tikzcd diagrams occur in the assigned items.

## Review verdicts

- **`ml02-metric-learning` (A page): pass.** The page body is empty, `page_layout: compact-v1` is retained, and its item inventory matches the manifest. The assigned item definitions, algorithm, statements, and proofs are mathematically sound after the repairs below.
- **`ml02-metric-learning-examples` (B page): pass.** The page body is empty, `page_layout: compact-v1` is retained, and its three examples match the manifest. Their numerical witnesses and conclusions check out.

The Mahalanobis factorization and pseudometric argument, Frobenius spectral projection proof, PSD-cone closedness proof, svec isometry and transport arguments, fixed-target objective and convexity proof, hinge subgradient and data bound, both algorithms, conditional best/average theorem, and all three examples were checked. The conditional optimization theorem retains its Countable Choice and attained-minimizer assumptions; it does not claim a final-iterate, test-error, or generalization guarantee.

## Repairs and evidence

- In `lem-positive-semidefinite-cone-is-frobenius-closed`, I made the metric used by the open-ball argument explicit: the Frobenius norm on the symmetric-matrix space induces (d_F(A,B)=\|A-B\|_F). I added `cor-triangle-inequality-for-inner-product-norm` and `def-norm-and-normed-space` to its dependencies and cited them in a new fact. This closes the gap between the entry norm and the metric-topology definitions used in the proof.
- In `lem-lmnn-explicit-subgradient-and-data-bound`, I corrected the proof's malformed `\sum_{i,j\in N_i}` expressions to the nested sums `\sum_i\sum_{j\in N_i}` and `\sum_i\sum_{j\in N_i}\sum_{l:y_l\ne y_i}`. I added `def-euclidean-inner-product` for the (\|\cdot\|_2) notation and `cor-triangle-inequality-for-inner-product-norm` for the Frobenius triangle inequality, and made those steps cite the exact suppliers.
- I corrected verified source page locators while preserving all links: the Bellet–Habrard–Sebban Mahalanobis discussion now points to printed pp. 9–10 in `def-mahalanobis-pseudometric` and `thm-mahalanobis-distance-is-pseudometric`; Bindel §2 now points to PDF pp. 1–2 in `lem-symmetric-matrix-frobenius-isometry`; Bindel §6 now points to PDF p. 5 in `thm-frobenius-projection-onto-psd-cone-is-spectral-clipping` and `lem-positive-semidefinite-cone-is-frobenius-closed`. The [Bellet survey](https://arxiv.org/pdf/1306.6709) places the Mahalanobis formula and interpretation on printed pp. 9–10; the [Bindel notes](https://www.cs.cornell.edu/courses/cs6210/2022fa/lec/2022-10-06.pdf) place §2 on PDF pp. 1–2 and §6 on PDF p. 5. Higham’s §2 Theorem 2.1 (article pp. 105–106) states the unique Frobenius-nearest PSD approximation, and Weinberger–Saul’s §2.1 and Appendix A.1–A.2 cover the Mahalanobis formulation, LMNN gradient, and PSD projection ([Higham](https://nhigham.com/wp-content/uploads/2023/10/high88d.pdf), [Weinberger–Saul](https://jmlr.org/papers/volume10/weinberger09a/weinberger09a.pdf)). The projected-subgradient source locations were checked in Bubeck §3.1 and Bertsekas Lecture 15 ([Bubeck](https://arxiv.org/pdf/1405.4980), [Bertsekas](https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf)).
- I regenerated the five affected proof-contract entries in `research/machine-learning-all-101-2026-10-19-batch-24.proof-contracts.json`. No changed item had a stale `verification.judge` record to remove.

Validation after the repairs:

- Reflow and precheck ran for all six changed items. Reflow reported each unchanged; precheck reported 0 failures for all six.
- The one batched `node tools/proof-layout.mjs` invocation checked all six changed items: 20 steps, 0 defects.
- Strict proof-contract validation checked the five proof-bearing changed items: 0 errors, 0 warnings.

## Uneditable finding

`def-frobenius-matrix-norm` is published and outside this batch’s write scope. In its Definition paragraph beginning “The displayed quantity is a norm,” it concludes that the Frobenius norm axioms hold because every inner-product norm satisfies them. Its dependency list includes `def-inner-product-norm` but does not reach `cor-triangle-inequality-for-inner-product-norm`, which proves those axioms; no local proof of that general implication is supplied there. The assigned consumer `lem-lmnn-explicit-subgradient-and-data-bound` uses the Frobenius triangle inequality in Facts & Assumptions [F4] and proof step 4.1. I added the corollary directly to that consumer’s dependencies, but the published supplier still needs its own dependency edge or local proof. The JSON finding records this as nonfatal because the exact published corollary is available and the mathematical claim is true.

## Blocker and coverage note

There is no workflow blocker. The one uneditable published-dependency gap above remains for owner routing. All assigned pages and items and the relevant direct suppliers were opened; I did not recursively re-audit every foundational dependency behind each published supplier theorem.
