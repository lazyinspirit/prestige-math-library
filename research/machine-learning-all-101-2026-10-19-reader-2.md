# Step 3a reader report — batch 2

Run: `machine-learning-all-101-2026-10-19`  
Role: `reader-2`  
Scope: batch `2`

## Opened inventory

Assigned pages:

- `library/machine-learning/prediction-problems-risks-and-empirical-minimization.md`
- `library/machine-learning/prediction-problems-risks-and-empirical-minimization-examples.md`

Assigned items, read in dependency order:

- `def-supervised-learning-problem`
- `def-population-and-empirical-risk`
- `def-empirical-risk-minimizer`
- `lem-population-and-empirical-risk-are-measurable`
- `thm-conditional-bayes-rule-minimizes-population-risk`
- `lem-standard-borel-label-kernel-over-arbitrary-instance-space`
- `def-bayes-predictor-and-excess-risk`
- `alg-finite-list-empirical-risk-minimizer`
- `alg-approximate-erm`
- `lem-finite-list-empirical-risk-selector-is-measurable`
- `ex-binary-zero-one-loss`
- `ex-squared-loss-conditional-mean`
- `ex-absolute-loss-conditional-median`
- `ex-nonattained-risk-infimum`

Direct suppliers opened to check these claims:

- `def-measurable-space`
- `def-measurable-function-between-measurable-spaces`
- `def-product-sigma-algebra-and-finite-product-sigma-algebras`
- `lem-of-naturals-positive`
- `def-probability-measure`
- `def-statistical-experiment`
- `def-parametric-statistical-model`
- `def-measure-kernel-and-probability-kernel`
- `def-extended-real-valued-measurable-function`
- `lem-of-inverse-positive`
- `lem-q-and-irrationals-dense-r`
- `prop-closure-properties-of-measurable-functions-used-by-the-integral`
- `def-expectation-of-a-nonnegative-or-integrable-random-variable`
- `def-loss-function-and-risk`
- `def-axiom-of-choice`
- `cor-archimedean-reciprocal`
- `def-standard-borel-space`
- `def-regular-conditional-distribution`
- `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets`
- `thm-disintegration-of-a-joint-law-on-standard-borel-spaces`
- `thm-measurability-of-integration-against-a-kernel`
- `thm-bayes-rule-minimizes-prior-risk`
- `thm-change-of-variables-for-expectation`
- `lem-finite-event-conditional-expectation-formula`
- `def-complete-ordered-real-field`

Additional proof-critical indirect suppliers opened for the conditional-kernel and Bayes arguments:

- `lem-simultaneous-rational-conditional-distribution-function-versions`
- `lem-rational-conditional-distribution-functions-produce-real-regular-kernels`
- `lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable`
- `lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions`
- `thm-sections-of-product-measurable-functions-are-measurable`
- `lem-prior-and-model-kernel-define-joint-law`
- `thm-tonelli-theorem-for-sigma-finite-product-spaces`
- `cor-additivity-of-the-nonnegative-lebesgue-integral`
- `prop-order-and-scalar-rules-for-the-nonnegative-integral`

The batch proof contract covers the eight proof-bearing assigned items. Its fact citations and step mappings were checked against the current source. Kallenberg's *Foundations of Modern Probability*, 2nd ed., Theorem 6.3, p. 107, states that a Borel target and arbitrary measurable conditioning space admit a conditional-distribution kernel; this supports the arbitrary-conditioning-sigma-algebra use in the standard-Borel RCD chain ([source](https://djvu.online/file/t4FlvxuKFFZGW), theorem text at lines 6470–6473 in the online text).

## Review and repair

The definitions preserve the measurable-space and risk domains, the extended nonnegative-risk cases, and the distinction between a supplied approximate-ERM selector and a selector whose existence is not asserted. The conditional Bayes proof uses the conditional kernels in the correct directions and reduces the result to the supplied prior-risk theorem. The arbitrary-instance-space kernel lemma's section argument factors every kernel evaluation through the instance coordinate and verifies the rectangle identity. The finite-list selector proof covers both finite and all-infinite empirical risks. The four examples' probability tables, conditional moments, minimizers, and nonattainment calculation check out.

One formatting defect was repaired in `items/lem-population-and-empirical-risk-are-measurable.md`, immediately before step 1.1: `## Proof` lacked the required `**Given:**` line. I added the problem hypotheses there. The argument and numbered steps did not change. I regenerated the batch-2 proof-contract entry; its citations and derivations remain current. The item had no `verification.judge` record to remove.

No TikZ, tikzcd, or other diagrams occur in the assigned items.

## Page verdicts

- `prediction-problems-risks-and-empirical-minimization` (A): pass. Its item inventory matches the batch manifest; the Markdown body is empty and `page_layout: compact-v1` is present.
- `prediction-problems-risks-and-empirical-minimization-examples` (B): pass. Its examples inventory and page prerequisites match the batch manifest; the Markdown body is empty and `page_layout: compact-v1` is present.

## Validation and remaining defects

- `node tools/regen-contract-entries.mjs research/machine-learning-all-101-2026-10-19-batch-2.proof-contracts.json lem-population-and-empirical-risk-are-measurable` — regenerated the affected entry.
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-population-and-empirical-risk-are-measurable.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-population-and-empirical-risk-are-measurable.md` — pass, 1 checked, 0 failing.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-2.proof-contracts.json --strict --items lem-population-and-empirical-risk-are-measurable` — 0 errors, 0 warnings.
- `node tools/proof-layout.mjs items/lem-population-and-empirical-risk-are-measurable.md` — 1 item, 2 steps, 0 defects.

No uneditable defect was identified in the reviewed sources. No blocker remains.

## Coverage limit

The computed transitive `deps`/`justified_by` context contains 574 items. This review read all 14 assigned items, all 25 distinct direct unassigned suppliers, and the nine additional proof-critical indirect suppliers listed above; it did not individually re-audit every remaining upstream proof in that closure. The findings artifact records this limit.
