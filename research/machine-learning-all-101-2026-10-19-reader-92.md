# Step 3a reader report — batch 92

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Scope: batch `92`

## Review basis and coverage

I checked the live run status, `research/machine-learning-all-101-2026-10-19-batch-92.pages.json`, `briefs/reader.md`, the assigned pages and items, and the matching entries in `research/machine-learning-all-101-2026-10-19-proof-contracts.json`. The two pages are current draft pages with `page_layout: compact-v1`; both have YAML frontmatter only. Their `requires` targets resolve.

I reviewed every assigned item, each listed direct dependency, and the specifically cited supporting results opened to verify the arguments. This was a focused proof review, not an independent audit of every transitive proof in the library. No assigned item or page needed repair, so I made no item/page edits and did not run reflow, precheck, or `proof-layout.mjs`.

## Opened inventory

Assigned pages:

- `library/machine-learning/sketched-kernel-learning-and-certified-solves.md`
- `library/machine-learning/sketched-kernel-learning-and-certified-solves-examples.md`

Assigned items, reviewed in supplier-first order:

- `def-regularized-kernel-prediction-system`
- `lem-regularized-gram-matrix-inverse-bound`
- `thm-kernel-ridge-system-minimizes-mean-square-rkhs-objective`
- `thm-kernel-ridge-gram-perturbation-bound`
- `thm-kernel-ridge-residual-prediction-certificate`
- `alg-nystrom-kernel-ridge-fit`
- `rem-statistical-and-numerical-kernel-errors`
- `ex-kernel-ridge-singular-and-zero-gram-matrices`
- `ex-kernel-ridge-nystrom-exact-range`
- `ex-kernel-ridge-small-regularizer-amplifies-coefficient-error`
- `ex-training-gram-does-not-control-test-prediction`

Direct dependency items reviewed:

- `def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces`
- `thm-non-negative-operator-characterisations`
- `def-psd-nystrom-approximation`
- `def-moore-penrose-pseudoinverse`
- `thm-moore-penrose-pseudoinverse-exists-and-is-unique`
- `thm-psd-nystrom-order-and-exactness`
- `thm-nystrom-deterministic-spectral-residual-bound`
- `def-axiom-of-choice`
- `def-countable-choice`
- `def-gaussian-process-regression-observation-model`
- `def-standard-real-and-normalized-complex-gaussian-matrix-law`
- `thm-gp-regression-kernel-ridge-posterior-mean-equivalence`
- `thm-gaussian-rangefinder-expected-spectral-error`

Supporting results opened for the cited proof steps:

- `thm-canonical-rkhs-construction-and-reproducing-property`
- `def-gaussian-process`
- `def-independent-random-elements`
- `def-multivariate-normal-law`
- `cor-gp-regression-posterior-predictive-law`
- `lem-finite-span-orthogonal-projection-in-inner-product-space`
- `lem-gp-regression-observed-covariance-invertibility`
- `thm-least-squares-solutions-and-normal-equation`
- `thm-non-negative-square-root-exists-and-is-unique`
- `thm-finite-gaussian-process-posterior-and-predictive-laws`
- `thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel`
- `lem-nystrom-square-root-projector-identity`
- `lem-moore-penrose-products-are-orthogonal-projectors`
- `thm-singular-value-decomposition`
- `thm-operator-norm-is-the-largest-singular-value`
- `thm-of-square-roots`
- `def-non-negative-and-positive-operator`
- `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`
- `thm-complex-spectral-theorem-for-normal-endomorphisms`
- `alg-gaussian-randomized-range-finder`
- `lem-finite-scan-range-basis-is-borel`
- `lem-gaussian-matrix-law-normalization-and-second-moments`
- `thm-real-gaussian-rangefinder-expected-spectral-error`
- `lem-normalized-complex-rangefinder-direct-spectral-expectation`

## Assigned item findings and edits

No confirmed defect was found in the eleven assigned items. The normalization `tau = n lambda`, the inverse and resolvent estimates, the objective-difference proof of the unique RKHS minimizer, the coefficient/fitted-vector perturbation bounds, and the residual certificate all check under their stated hypotheses. The Nyström specialization uses the full-row-rank premise required by the deterministic residual result.

The finite-budget algorithm specifies its exact arithmetic, inputs, loop bound, residual checks, stopping branches, and returned statuses. Its `certified` status checks both actual residuals; budget exhaustion makes no solve-accuracy claim. The four examples' matrix and feature calculations check, including the distinct test predictions with a shared one-point training Gram matrix. The remark confines the guarantees to finite training vectors, distinguishes expected Gaussian bounds from arbitrary-sketch/per-draw guarantees, and makes no finite-precision claim.

All assigned statements, definitions, algorithm instructions, and example descriptions are complete before their reference sections; proof supplier links remain in Facts & Assumptions and proofs. Numbered proof steps are separated, each step ends with valid tags, and the final steps use `[tags] ∎`. The Gaussian-process observation diagram agrees with its stated dependence and addition conventions; no other assigned item contains a diagram.

Edits: none. The proof-contract file contains entries for all eleven assigned items; the citation and derivation records checked match current item text. No proof-contract update or judge-record removal was needed.

## Page verdicts

- `sketched-kernel-learning-and-certified-solves`: no page defect found. Its seven-item inventory matches the batch manifest, its required page IDs resolve, and its body is empty.
- `sketched-kernel-learning-and-certified-solves-examples`: no page defect found. Its four examples match the batch manifest, its required page resolves, and its body is empty.

## Uneditable dependency finding

`def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces` is a draft dependency assigned to batch `15`, outside this reader's edit scope. At `items/def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces.md`, Definition lines 38–42 describe the canonical quotient-and-completion construction for a real PSD kernel without stating a choice hypothesis, and line 42 says its well-definedness is justified by `thm-canonical-rkhs-construction-and-reproducing-property`. That theorem's Statement at line 37 assumes Countable Choice; its Facts & Assumptions at lines 63–67 and proof step 4.1 at line 85 use that assumption to obtain the compatible completion. The definition therefore lacks a hypothesis supplied by its only cited construction result. It needs to state and record Countable Choice as an essential assumption, or provide a proof/source establishing the completion without it.

The finding is routed through assigned consumer `thm-kernel-ridge-system-minimizes-mean-square-rkhs-objective`, whose `deps` directly include this definition. The dependency source remained current at split; its raw SHA-256 is `619dc6bc2be1ef30b7d44c16aefddbbf4b2ab59275483961120d449a97515274`.

## Source checks

- Rasmussen and Williams, [*Gaussian Processes for Machine Learning*](https://gaussianprocess.org/gpml/chapters/RW6.pdf), Chapter 6 §6.2.2, equations (6.19)–(6.20), printed pp. 132–133: squared-error RKHS objective and shifted coefficient system; the local `tau = n lambda` scaling is consistent.
- Martinsson and Tropp, [*Randomized Numerical Linear Algebra*](https://www.tropp.caltech.edu/books/MT20-Randomized-Numerical-arXiv-v3.pdf), §14.2, equation (14.1) and square-root projection form, printed pp. 62–63: Nyström formula and projection identity.
- Gittens and Mahoney, [“Revisiting the Nyström Method”](https://www.jmlr.org/papers/volume17/gittens16a/gittens16a.pdf), Lemma 1 and Theorem 2, §4.1.1, printed pp. 42–43: projection identity and deterministic residual bound under the full-row-rank leading sketch condition.
- Axler, [*Linear Algebra Done Right*](https://linear.axler.net/LADR4e.pdf), 4th ed., Theorem 7.38, printed p. 252: nonnegative operator characterizations used in the inverse bound.
- Martinsson and Tropp, [*Randomized Numerical Linear Algebra*](https://www.tropp.caltech.edu/books/MT20-Randomized-Numerical-arXiv-v3.pdf), §19.1.6, printed p. 87: finite kernel-ridge coefficient system and prediction at a new input. Their Theorem 11.5 at printed p. 47 is specifically the real Gaussian range-finder result; the local normalized-complex conclusion is separately supplied by the opened complex-rangefinder lemma.

## Blocker

No blocker prevents completion of this batch's reader review. The cross-batch dependency defect above remains for its owner to address.
