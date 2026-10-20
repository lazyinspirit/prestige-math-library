# Step 3a reader report — batch 100

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Coverage: batch `100`

## Opened inventory

Assigned pages:

- `library/machine-learning/active-querying-version-spaces-and-abstention.md`
- `library/machine-learning/active-querying-version-spaces-and-abstention-examples.md`

Required page context:

- `library/machine-learning/finite-class-pac-learning-and-erm.md`
- `library/machine-learning/prediction-problems-risks-and-empirical-minimization.md`
- `library/machine-learning/vc-dimension-growth-and-pac-classification.md`

Assigned items, reviewed in dependency order:

- `def-pool-based-realizable-active-learning`
- `alg-finite-pool-version-space-query`
- `thm-active-version-space-invariant-and-query-bound`
- `thm-disagreement-abstention-correctness`
- `rem-active-label-complexity-and-noisy-oracles`
- `ex-threshold-median-query-binary-search`
- `ex-star-class-linear-disagreements`
- `ex-active-learning-boundary-cases`

Dependency and supporting items opened:

- `def-realizable-and-agnostic-pac`
- `def-supervised-learning-problem`
- `def-natural-logarithm`
- `def-population-and-empirical-risk`
- `thm-natural-logarithm-laws`
- `lem-population-and-empirical-risk-are-measurable`
- `def-measurable-space`
- `def-measurable-function-between-measurable-spaces`
- `def-product-sigma-algebra-and-finite-product-sigma-algebras`
- `def-probability-measure`
- `def-loss-function-and-risk`
- `def-expectation-of-a-nonnegative-or-integrable-random-variable`
- `def-identically-distributed-and-iid-random-variables`
- `def-extended-real-valued-measurable-function`
- `prop-closure-properties-of-measurable-functions-used-by-the-integral`
- `cor-exponential-is-a-bijection-onto-positive-reals`
- `thm-exponential-addition-formula`
- `cor-exponential-reciprocal-and-positivity`
- `thm-exponential-is-strictly-increasing`
- `thm-continuous-inverse`

## Review and edit

The finite-pool definition, algorithm, invariants, query bounds, abstention result, and examples were checked against their stated hypotheses and suppliers. The median-query diagram in `ex-threshold-median-query-binary-search` matches the threshold convention: label 1 selects indices below the query index, label 0 selects indices at or above it; the displayed splits at `x4`, `x2`, and `x6` are consistent. No other assigned item contains a TikZ/tikzcd diagram.

Repaired `items/rem-active-label-complexity-and-noisy-oracles.md`, Proof 1.1. The witness now specifies the classifier class, zero-one loss, fresh-feature law as the input marginal of the joint law, the pool point, target, and exact oracle. This makes the zero-risk comparison and the null-probability pool-point claim explicit. The relevant supplier statements are `def-realizable-and-agnostic-pac`, Definition, and `def-pool-based-realizable-active-learning`, Definition.

Updated derivation 1.1 in `research/machine-learning-all-101-2026-10-19-batch-100.proof-contracts.json`; parsed the JSON and confirmed that the contract claim matches the current step. The item had no `verification.judge` record. Reflow exited successfully and left the item unchanged. Precheck passed (`1 checked, 0 failing`). The final proof-layout run reported `1 items, 5 steps, 0 defects`.

## Unedited finding

Published dependency `thm-natural-logarithm-laws`, Proof 3.1 (line 57), asserts `exp(0)=1` but cites only [L1], which gives continuity, strict increase, bijectivity, and the inverse relation; those facts do not state the normalization. The available [L3] reciprocal identity and positivity do yield it by setting `u=0` and doing a short algebraic derivation, so this is nonfatal, but the step should cite and supply that derivation (or establish `exp(0)=1` explicitly). The affected direct assigned consumers are `thm-active-version-space-invariant-and-query-bound` (Proof 4.1), `rem-active-label-complexity-and-noisy-oracles` (Proof 2.1), and `ex-star-class-linear-disagreements` (Proof 3.1). The source is published and outside this reader's edit scope; it is listed in the findings JSON.

## Page verdicts

- `active-querying-version-spaces-and-abstention`: pass. Draft page is frontmatter-only with `page_layout: compact-v1`; its five items match the assigned page manifest.
- `active-querying-version-spaces-and-abstention-examples`: pass. Draft companion page is frontmatter-only with `page_layout: compact-v1`; its three examples match the assigned page manifest and it requires the A page.

No page summary was added. No other assigned-item defect was confirmed. No blocker remains for this reader report; the published dependency finding remains for owner routing. No external source search was needed for the finite-class and elementary logarithm arguments reviewed here.
