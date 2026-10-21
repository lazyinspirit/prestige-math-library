# Step 3a reader report — batch 21

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: `reader-21`

## Opened inventory

Assigned pages:

- `library/inverse-problems/credible-sets-and-frequency-coverage-in-inverse-problems.md`
- `library/inverse-problems/credible-sets-and-frequency-coverage-in-inverse-problems-examples.md`

Assigned items reviewed independently of their authors:

- `def-ip-credible-set-and-frequency-coverage` — definition.
- `op-ip-honest-coverage-over-ill-posed-truth-classes` — open problem.
- `ex-ip-inverse-coordinate-credible-interval-undercoverage` — example.
- `cex-ip-empirical-bayes-coverage-fails-for-sparse-gap-truth` — counterexample.

Relevant item suppliers opened to check the definitions, model, argument, and cited results: `def-posterior-credible-set`, `def-confidence-set-and-coverage`, `def-statistical-experiment`, `def-choice-function`, `def-axiom-of-choice`, `def-countable-choice`, `def-standard-normal-and-normal-laws`, `lem-normal-density-has-total-mass-one`, `lem-normal-location-scale-mean-and-variance`, `thm-intermediate-value`, `def-ip-posterior-contraction-rate`, `def-ip-gaussian-sequence-inverse-model`, `def-square-summable-family-on-an-arbitrary-index-set`, `def-adaptive-empirical-bayes-gaussian-sequence-procedure`, `lem-gaussian-sequence-empirical-bayes-posterior-formula`, `def-gaussian-sequence-hyperrectangle-class`, `def-polished-tail-class-for-gaussian-sequence`, `lem-uniform-empirical-bayes-marginal-score-bound`, `lem-empirical-bayes-maximizer-bracket-on-polished-tails`, `lem-empirical-bayes-radius-bias-and-noise-comparison`, `thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails`, `cex-sparse-gap-truth-causes-empirical-bayes-credible-set-undercoverage`, and `thm-tonelli-theorem-for-sigma-finite-product-spaces`.

The current run status showed batch 21 still awaiting its reader report. The two pages contain YAML frontmatter only, retain `page_layout: compact-v1`, and have inventories matching the batch manifest. No diagrams or page-body summaries are present.

## Edit and evidence

Repaired one missing proof dependency in `items/ex-ip-inverse-coordinate-credible-interval-undercoverage.md`, step 1.1. The witness (z) is obtained by the intermediate value theorem, but the item did not declare or link that theorem. Added `thm-intermediate-value` to `deps`, recorded its exact statement as Fact F3, and made the application explicit by choosing (B>0) with Φ(B)>0.975 before applying the theorem on ([0,B]). The theorem's hypotheses and conclusion are supplied by the published local item `items/thm-intermediate-value.md`.

Updated the example's citation and derivation entries in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-21.proof-contracts.json`. The item had no `verification.judge` record to remove.

Validation after the final item edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-ip-inverse-coordinate-credible-interval-undercoverage.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-ip-inverse-coordinate-credible-interval-undercoverage.md` — PASS; 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/ex-ip-inverse-coordinate-credible-interval-undercoverage.md` — 1 item, 6 steps, 0 defects.

## Mathematical review

- `def-ip-credible-set-and-frequency-coverage`: its graph-measurability, posterior-mass, fixed-truth coverage, honesty, and calibration formulations are coherent. Its complete definition has references in the following `Definition references` section.
- `op-ip-honest-coverage-over-ill-posed-truth-classes`: the model, selector, class restrictions, branch at α=0, posterior-mass condition, uniform exact-coverage target, and diameter target are stated as a question, not an established result. The cited sources provide neighboring results: the inverse-sequence sparse-gap and polished-tail statements of Szabó, van der Vaart, and van Zanten (Theorems 3.1 and 3.6), the direct-white-noise result of Ray (Proposition 4.1, §4.1), the inverse-sequence contraction result of Knapik et al. (Theorem 2.3), the general sieve framework of Rousseau and Szabó (§§1–2), and the confidence-set background of Giné and Nickl (§§6.4 and 8.3). I checked the complete local proofs for the sparse-gap and polished-tail suppliers. These inspected results do not establish the stated simultaneous (p>0) target. This is a scoped source review, not an exhaustive claim about all literature.
- `ex-ip-inverse-coordinate-credible-interval-undercoverage`: completing the square gives the stated posterior; the event equivalence and (0.95) posterior mass are correct; the fixed-truth coverage is strictly below (0.95). The only repair was the missing intermediate-value dependency above.
- `cex-ip-empirical-bayes-coverage-fails-for-sparse-gap-truth`: the sparse-gap construction satisfies the hyperrectangle bound and θ₀,1=0; the block after each gap violates every fixed polished-tail inequality; the constant-inflation specialization meets the cited published sparse-gap bound. Its conclusion is limited to the broader hyperrectangle and does not conflict with conservative coverage on polished-tail truths. The complete local supplier proof was checked against its hypotheses.

The statements and descriptions are uninterrupted by hyperlinks; their references are in the immediately following references sections where applicable. No other confirmed defect remained.

## Page verdicts

- `credible-sets-and-frequency-coverage-in-inverse-problems`: pass. Its two items and required-page metadata match the manifest; there is no summary prose.
- `credible-sets-and-frequency-coverage-in-inverse-problems-examples`: pass. Its example and counterexample inventories and parent-page requirement match the manifest; there is no summary prose.

## Uneditable findings and blockers

No uneditable defects were confirmed. No blocker remains. The open problem remains unresolved by the particular sources inspected; this review does not claim exhaustive literature coverage.

## Source locators

- [Szabó, van der Vaart, and van Zanten, *Frequentist coverage of adaptive nonparametric Bayesian credible sets*](https://arxiv.org/pdf/1310.4489v5), §§1–3, Theorems 3.1 and 3.6, proofs §§5 and 9.
- [Rousseau and Szabó, *Asymptotic frequentist coverage properties of Bayesian credible sets for sieve priors*](https://arxiv.org/pdf/1609.05067), §§1–2.
- [Ray, *Adaptive Bernstein–von Mises theorems in Gaussian white noise*](https://arxiv.org/pdf/1407.3397), §§2.1 and 3.1, Proposition 4.1 and surrounding remarks in §4.1.
- [Knapik, Szabó, van der Vaart, and van Zanten, *Bayes procedures for adaptive inference in inverse problems for the white noise model*](https://arxiv.org/pdf/1209.3628), §§2.1–2.3, Theorem 2.3.
- [Giné and Nickl, *Mathematical Foundations of Infinite-Dimensional Statistical Models*](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf), Definition 6.4.1 and §§6.4, 8.3.
