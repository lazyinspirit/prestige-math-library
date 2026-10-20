# Step 3a reader report — batch 11

Run: `machine-learning-all-101-2026-10-19`  
Role: reader (`reader-11`)  
Scope: batch `11` only

## Opened inventory

Reviewed both assigned page files:

- `library/machine-learning/adversarial-robustness-and-robust-risk.md`
- `library/machine-learning/adversarial-robustness-and-robust-risk-examples.md`

Reviewed all 18 assigned items, in dependency order:

- A page, 15 items: `def-adversarial-threat-set-and-robust-risk`; `def-two-class-spherical-gaussian-mixture-model`; `def-binary-feature-bernoulli-model`; `alg-gaussian-mixture-robust-mean-classifier`; `alg-coordinate-threshold-preprocessing`; `lem-gaussian-vector-norm-concentration`; `lem-gaussian-sample-mean-signal-alignment`; `cor-one-sample-natural-classification-error-gaussian-mixture`; `thm-robust-sample-upper-bound-gaussian-mixture`; `lem-common-shift-robust-risk-lower-bound`; `lem-gaussian-normal-prior-posterior`; `thm-robust-sample-lower-bound-gaussian-mixture`; `lem-finite-independent-sign-sum-tail`; `lem-bernoulli-coordinate-posterior-odds-bound`; `thm-architecture-dependent-robustness-binary-feature-model`.
- B page, 3 examples: `ex-gaussian-robust-risk-dimension-radius-scaling`; `ex-bernoulli-perturbations-preserve-signs`; `ex-natural-and-robust-risk-on-gaussian-model`.

Opened the batch proof-contract carrier and the direct supplier statements used by the assigned proofs. External item suppliers reviewed: `cor-markov-inequality-for-random-variables`; `def-axiom-of-choice`; `def-expectation-of-a-nonnegative-or-integrable-random-variable`; `def-function`; `def-independent-random-elements`; `def-measurable-function-between-measurable-spaces`; `def-measurable-space`; `def-multivariate-normal-law`; `def-natural-logarithm`; `def-probability-measure`; `def-product-sigma-algebra-and-finite-product-sigma-algebras`; `def-real-exponential-function-and-e`; `def-standard-normal-and-normal-laws`; `lem-characteristic-function-of-a-normal-law`; `lem-characteristic-functions-under-affine-maps-and-independent-sums`; `lem-measurable-functions-preserve-independence`; `prop-order-and-scalar-rules-for-the-nonnegative-integral`; `thm-cauchy-schwarz-and-the-euclidean-norm`; `thm-cramer-wold-device`; `thm-derivative-of-exponential`; `thm-exponential-addition-formula`; `thm-factorization-of-expectations-for-independent-variables`; `thm-finite-union-bound`; `thm-independent-random-elements-have-product-joint-law`; `thm-linearity-of-the-lebesgue-integral-on-l-one`; `thm-logarithm-derivative-and-integral`; `thm-natural-logarithm-laws`; `thm-nondegenerate-multivariate-normal-law-has-density`; `thm-tonelli-theorem-for-sigma-finite-product-spaces`; `thm-uniqueness-of-a-law-from-its-characteristic-function`.

Also opened the required prerequisite pages `central-limit-theorems`, `finite-class-pac-learning-and-erm`, `relations-functions-and-quotients`, and `mixed-effects-and-longitudinal-models`. The latter supplies the assigned posterior lemma's nondegenerate Gaussian density dependency. The finite-class page is page-level context; its theorems are not used as proof premises. No diagrams occur in the assigned scope.

## Review and edits

The definitions preserve their domains and hypotheses. The two algorithms specify inputs, outputs, tie behavior, and coordinate instructions. The Gaussian concentration, alignment, posterior, natural-risk, robust-risk, and Bernoulli arguments were checked against their stated assumptions and the supplier results. The lower-bound statements keep their prior-averaged scope distinct from the fixed-parameter upper bounds. The examples preserve that distinction. I found no unsupported proof prerequisite, missing case, defective computation, overstrong claim, or statement-link interruption.

Two source locators incorrectly named a nonexistent “Appendix F.2.” The cited paper has an Appendix B.2 heading on PDF p. 32, places Lemma 29 there, and gives Theorem 31 and its proof on PDF pp. 34–37. I corrected the source title and the immediately following Statement references in:

- `items/lem-finite-independent-sign-sum-tail.md`
- `items/lem-bernoulli-coordinate-posterior-odds-bound.md`

Evidence: Schmidt et al., [*Adversarially Robust Generalization Requires More Data*, arXiv:1804.11285v2](https://arxiv.org/pdf/1804.11285v2), Appendix B.2, PDF pp. 32–37. The proof steps, facts, dependency graph, and statements were unchanged, so their existing proof contracts remain applicable. The contract carrier has entries for all 13 proof-bearing items, and each derivation-step list matches its numbered proof steps. Both edited items had `verification: {}` and no stale `verification.judge` record to remove.

Other citation checks included the paper's Gaussian and Bernoulli definitions and target results; Pydi, Chapter 2 §§2.2.1 and 2.3.2, for expected-supremum risk and its measurability caveat; Kolter–Madry, Chapters 1–2, for input-dependent adversarial risk and the ℓ∞/ℓ₁ perturbation calculation; and Tao, Theorem 1.7.15, for the nonnegative Tonelli statement used by the Gaussian posterior arguments.

Required checks after the edits:

- `reflow` — both changed items unchanged.
- `precheck` — both changed items passed.
- `node tools/proof-layout.mjs items/lem-finite-independent-sign-sum-tail.md items/lem-bernoulli-coordinate-posterior-odds-bound.md` — 2 items, 8 steps, 0 defects.

## Page verdicts

- `adversarial-robustness-and-robust-risk`: pass. Draft A page has frontmatter only, `page_layout: compact-v1`, and the assigned 15-item inventory. Its prerequisites correspond to the page-level interfaces and supplied items.
- `adversarial-robustness-and-robust-risk-examples`: pass. Draft B page has frontmatter only, `page_layout: compact-v1`, lists the three assigned examples, and requires its A companion.

## Uneditable defects and blockers

No uneditable defect remains in the assigned pages or items. The supporting artifact `research/machine-learning-all-101-2026-10-19-batch-11.coverage.json`, at `pages[0].sources[0].locator`, still labels the paper's Bernoulli sections Appendix F.1/F.2; the PDF labels them Appendix B.1/B.2. I left that evidence artifact unchanged because the authorized repair scope is assigned items or A-page prose. The item citations are corrected and the source was checked directly. No blocker remains.
