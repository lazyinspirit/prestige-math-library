# Step 3a reader report — batch 15

Run: `machine-learning-all-101-2026-10-19`  
Batch: `15`  
Role: read and repair assigned draft items

## Review state

The live autopilot status was `running` at `3a-read` when reviewed, with no completed reader result yet. Batch 15 has no in-run pair suppliers in its current dependency inputs. The source review found no blocker.

## Opened inventory

Assigned pages opened:

- `library/machine-learning/ml02-rkhs-svm.md`
- `library/machine-learning/ml02-rkhs-svm-examples.md`

All 12 assigned items were opened in supplier-first order:

- `def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces`
- `lem-finite-dimensional-projection-in-a-real-inner-product-space`
- `thm-canonical-rkhs-construction-and-reproducing-property`
- `lem-positive-semidefinite-gram-matrix-has-euclidean-feature-factorization`
- `thm-finite-sample-representer-theorem-in-an-rkhs`
- `def-hard-and-soft-margin-support-vector-machines`
- `lem-soft-margin-svm-primal-attainment`
- `thm-soft-margin-svm-dual-and-kkt-conditions`
- `ex-linear-and-polynomial-kernels`
- `ex-gaussian-radial-kernel`
- `ex-separable-hard-margin-svm`
- `ex-overlapping-soft-margin-svm-score-and-kkt`

The directly required published item suppliers opened for the assigned claims were:

- `def-inner-product-space`, `def-hilbert-space`, `def-completion-of-a-normed-space`, `def-metric-completion`, and `def-countable-choice`
- `def-orthogonal-projection`, `thm-orthogonal-projection-is-the-unique-nearest-point`, and `prop-pythagorean-parallelogram-and-polarisation-identities`
- `thm-metric-completion-exists`, `thm-metric-completion-carries-a-unique-banach-space-structure`, `thm-completion-of-an-inner-product-space-is-hilbert`, and `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`
- `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`, and `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`
- `def-convex-program-duality-and-slater-condition`, `thm-slater-strong-duality-and-dual-attainment`, `def-inequality-constrained-program-and-kkt-geometry`, and `thm-convex-kkt-sufficiency-and-normal-cone-certificate`

The batch pages manifest, dependency inputs, cross-batch dependency record, and all 12 proof-contract entries were consulted as navigation and evidence, not treated as mathematical verdicts.

## Page verdicts

| Page | Verdict |
| --- | --- |
| `ml02-rkhs-svm` | Pass. Its nine-item inventory matches the manifest. The page is frontmatter-only, has `page_layout: compact-v1`, and has no summary body. Its prerequisite pages are listed in `requires`. |
| `ml02-rkhs-svm-examples` | Pass. Its three examples match the manifest. The page is frontmatter-only, has `page_layout: compact-v1`, and has no summary body. It requires the main RKHS/SVM page. |

All assigned statements and example descriptions are uninterrupted by links; references follow their complete sections. No assigned page has summary prose. No TikZ/tikzcd or other diagram occurs in the assigned items, and no diagram was needed to state or prove these results.

## Repairs

1. In `items/ex-separable-hard-margin-svm.md`, Verification step 1.1, the previous wording said the linear-kernel example established that the given feature map realizes the kernel. Its cited fact establishes positive semidefiniteness, not the feature identity. The step now computes `⟨φ(x),φ(z)⟩ = xz = k(x,z)` directly and uses the cited example only for positive semidefiniteness. The corresponding `hard-margin-constraints` derivation in `research/machine-learning-all-101-2026-10-19-batch-15.proof-contracts.json` was updated. No statement or consumer interface changed.

2. In `items/lem-soft-margin-svm-primal-attainment.md`, Verification step 3.1, the previous proof applied the orthonormal-basis result to `M × R × R^n` without specifying its inner-product structure. The proof now states the product inner product and its finite dimension before applying the cited finite-dimensional orthonormal-basis result. The corresponding `mixed-label-sublevel` contract derivation was updated. No statement or consumer interface changed.

Neither changed item had a `verification.judge` record to remove. For each changed item, reflow reported `unchanged` and precheck passed. The final combined `node tools/proof-layout.mjs items/ex-separable-hard-margin-svm.md items/lem-soft-margin-svm-primal-attainment.md` reported 2 items, 7 steps, 0 defects.

## Unedited defects

None. The remaining definitions, theorem statements, constructions, proof steps, witnesses, finite computations, references, dependencies, and contracts were consistent with the opened suppliers and hypotheses. In particular, the finite-sample RKHS projection, singular Gram factorization, one-label attainment cases, unpenalized-bias bounds, Slater application, dual constraints, KKT tuple, and logistic-score comparison were checked directly.

## Source checks and coverage limitation

- Axler, *Linear Algebra Done Right*, 4th ed., Result 6.61, printed pp. 217–218, states the nearest-point result for a finite-dimensional subspace of an arbitrary inner-product space; Theorem 7.29, printed pp. 244–245, supplies the real self-adjoint spectral theorem. [Author-hosted PDF](https://linear.axler.net/LADR4e.pdf).
- Rasmussen and Williams, *Gaussian Processes for Machine Learning*, §6.1, Definition 6.1 and Theorem 6.1 (printed pp. 129–130), give the RKHS and Moore–Aronszajn statements; §6.2 (pp. 132–133) states the finite representer expansion; §6.2.1, equations (6.17)–(6.18) (p. 134), gives the squared-exponential kernel; §6.4.1, equations (6.33) and (6.36) (pp. 142–143), gives the hard- and soft-margin formulations. The assigned arguments were checked locally and do not rely on the source as a substitute for proof. [MIT Press chapter PDF](https://gaussianprocess.org/gpml/chapters/RW6.pdf).
- The cited *Elements of Statistical Learning* landing page identifies the corrected twelfth printing, but its download link returned HTTP 403 in the browser tool. I did not independently inspect those cited pages. Their assigned kernel and finite SVM claims have local derivations; the RKHS and SVM background statements were also checked in the Rasmussen–Williams chapter above. [Author-hosted book page](https://hastie.su.domains/ElemStatLearn/main.html).

No other coverage limitation or blocker was observed.
