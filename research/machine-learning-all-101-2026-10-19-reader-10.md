# Step 3a reader report — batch 10

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Batch: `10`

## Opened inventory

### Assigned pages

- `library/machine-learning/distribution-shift-and-domain-adaptation.md` (A page)
- `library/machine-learning/distribution-shift-and-domain-adaptation-examples.md` (B page)

### Page dependencies opened

- `library/mathematical-statistics/dominated-experiments-likelihood-and-sufficiency.md` (published)
- `library/machine-learning/prediction-problems-risks-and-empirical-minimization.md` (batch 2)
- `library/machine-learning/rademacher-complexity-and-generalization.md` (batch 5)

### Assigned items opened in dependency order

- `def-source-target-distributions-and-shift`
- `def-h-delta-h-divergence`
- `def-loss-discrepancy-between-domains`
- `lem-covariate-shift-joint-law-density`
- `thm-covariate-shift-importance-weighting`
- `thm-target-risk-bound-by-source-risk-divergence-and-joint-error`
- `thm-discrepancy-domain-adaptation-bound`
- `ex-support-mismatch-prevents-covariate-weighting`
- `ex-unbounded-covariate-shift-weights`
- `ex-label-shift-identical-input-laws-has-large-joint-error`

### Item dependencies opened

Published measure-theory and likelihood suppliers:

- `cor-integral-over-a-null-set-vanishes`
- `def-absolutely-continuous-with-respect-to-a-positive-measure`
- `def-axiom-of-choice`
- `def-likelihood-density`
- `def-likelihood-ratio-as-rn-derivative`
- `def-measurable-function-between-measurable-spaces`
- `def-measure-kernel-and-probability-kernel`
- `def-measure-with-density`
- `def-pi-system`
- `def-product-sigma-algebra-and-finite-product-sigma-algebras`
- `lem-finite-measure-uniqueness-on-a-pi-system`
- `prop-closure-properties-of-measurable-functions-used-by-the-integral`
- `prop-order-and-scalar-rules-for-the-nonnegative-integral`
- `thm-likelihood-ratio-change-of-measure`
- `thm-measurability-of-integration-against-a-kernel`

Additional nonnegative-integral suppliers checked for the repaired inequalities:

- `cor-additivity-of-the-nonnegative-lebesgue-integral`
- `def-integral-of-a-nonnegative-simple-function`
- `def-nonnegative-lebesgue-integral`
- `prop-the-nonnegative-integral-agrees-with-the-simple-integral`

In-run batch 2 suppliers:

- `def-supervised-learning-problem`
- `def-population-and-empirical-risk`
- `lem-population-and-empirical-risk-are-measurable`

## Review and repairs

- `def-source-target-distributions-and-shift`, `def-h-delta-h-divergence`, and `def-loss-discrepancy-between-domains`: definitions preserve their measurable-space and probability hypotheses; statements are complete before their reference sections. The disagreement-set range and finite-risk condition are sound.
- `lem-covariate-shift-joint-law-density` and `thm-covariate-shift-importance-weighting`: checked the Radon–Nikodym orientation, the target/source absolute-continuity condition, arbitrary-version handling, kernel equality on a target-null exceptional set, and the integrability conclusion. The rectangle-uniqueness argument and the loss-measurability interface supply the stated claims.
- `thm-target-risk-bound-by-source-risk-divergence-and-joint-error`: repaired the proof’s silent use of nonnegative-integral monotonicity, additivity, and the indicator-integral identity in the integrations of its pointwise event inequalities. Added the corresponding supplier dependencies and facts to the proof contract; the statement is unchanged.
- `thm-discrepancy-domain-adaptation-bound`: repaired the proof’s silent use of nonnegative-integral monotonicity and additivity when integrating the pointwise triangle inequalities. Added those supplier dependencies and facts to the proof contract; the statement is unchanged.
- `thm-discrepancy-domain-adaptation-bound`, `Statement references`: corrected the Mansour–Mohri–Rostamizadeh reference annotation. Their Theorem 8 states one discrepancy-based bound with one cross-term; this item derives the second route and takes the minimum locally. The prior annotation credited the source with both routes.
- `ex-support-mismatch-prevents-covariate-weighting`, `ex-unbounded-covariate-shift-weights`, and `ex-label-shift-identical-input-laws-has-large-joint-error`: checked the point masses, normalization sums, density ratio, risks, divergence, and joint-labeling error. The examples follow from the stated hypotheses.

No diagram occurs in the assigned pages or items. No other assigned item or A-page prose was edited. The two changed items had no `verification.judge` record to remove.

## Source checks

- Ben-David et al., *A Theory of Learning from Different Domains*, Definitions 2–3, Lemma 3, and Theorem 2 proof, printed pp. 156–158 (Springer PDF pp. 6–7): https://link.springer.com/content/pdf/10.1007/s10994-009-5152-4.pdf. Definition 3/Lemma 3 give the disagreement divergence bound; the Theorem 2 proof contains the population source/target triangle argument, before its sample-complexity term.
- Mansour, Mohri, and Rostamizadeh, *Domain Adaptation: Learning Bounds and Algorithms*, arXiv:0902.3430v3, Definition 4 and §4.1 Theorem 8, pp. 3–6: https://arxiv.org/abs/0902.3430. The theorem supplies one cross-term version; the repaired citation now leaves the additional route attributed to the local proof.
- Sugiyama, *Learning under Non-stationarity: Covariate Shift Adaptation by Importance Weighting*, §2, book pp. 928–930, and §3.1, pp. 930–931 (PDF pp. 3–5): https://www.ms.k.u-tokyo.ac.jp/sugi/2012/CSAreview.pdf. Section 2 states the shared conditional-law setup; §3.1 gives the input-density importance-weighting identity. The assigned proof supplies the general measurable-space and integrability details locally.

## Page verdicts

- `distribution-shift-and-domain-adaptation`: pass. The page is frontmatter only, has the seven assigned A-items, preserves its two required pages and `page_layout: compact-v1`, and has no generated summary.
- `distribution-shift-and-domain-adaptation-examples`: pass. The page is frontmatter only, has the three assigned examples, requires its A page, and has no generated summary.

## Defects outside scope

None found. No withdrawal was proposed.

## Validation and blocker

- `reflow.mts`: unchanged for both repaired items.
- `precheck.mts`: pass for both repaired items.
- `proof-layout.mjs`: `2 items, 9 steps, 0 defects`.
- Blocker: none. The batch dependency-input bundle records a dispatch scheduling-input hash conflict (`521cbd7e…` versus recomputed artifact input `e4d05960…`), but its current batch row reports dependency level 3 and `requires: [2,5]`; this did not limit the review.
