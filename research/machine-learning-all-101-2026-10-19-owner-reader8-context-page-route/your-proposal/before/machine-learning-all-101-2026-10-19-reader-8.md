# Step 3a reader report — batch 8

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Batch: `8`

## Opened inventory

The live batch manifest names two pages and 17 items. I followed its dependency levels; author notes that call this a 16-item batch are stale against the current manifest and contract inventory.

| Level | Opened items |
|---|---|
| 0 | `def-proper-scoring-rule`; `lem-jensen-for-simplex-pairs`; `lem-negative-root-power-is-convex` |
| 1 | `def-probability-calibration`; `lem-finite-label-conditional-probability-function`; `thm-log-and-brier-strict-propriety`; `thm-posterior-forecast-minimizes-scoring-risk` |
| 2 | `cor-any-feature-induces-calibrated-forecast`; `def-classification-calibration-of-a-surrogate`; `thm-binned-calibration-estimator-limits`; `ex-multiclass-calibration-notions-differ`; `ex-calibrated-constant-prior-forecast` |
| 3 | `lem-binary-zero-one-risk-excess-with-zero-tie`; `fs-unadjusted-surrogate-regret-bound`; `ex-fixed-bin-ece-underestimates-calibration-error`; `ex-calibrated-coarsened-risk-score-is-low-information` |
| 4 | `thm-surrogate-regret-controls-classification-regret` |

Assigned pages opened:

- `library/machine-learning/calibration-proper-losses-and-surrogate-classification.md`
- `library/machine-learning/calibration-proper-losses-and-surrogate-classification-examples.md`

Current batch context opened: the batch-8 manifest, dependency inputs, cross-batch dependency record, source-evidence bundle, proof-contract file, author notes, and owner addendum. The notes were treated as evidence only.

The three current-run batch-2 supplier items were opened before their consumers: `def-supervised-learning-problem`, `def-population-and-empirical-risk`, and `lem-population-and-empirical-risk-are-measurable`. I also opened the required page records `prediction-problems-risks-and-empirical-minimization` (draft, YAML only) and `conditional-distributions-and-regular-conditional-probability` (published; its body issue is recorded below).

I opened the current statement or definition interfaces for the published direct item dependencies used by this batch: `def-loss-function-and-risk`, `def-natural-logarithm`, `def-borel-sigma-algebra`, `def-probability-measure`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-measurable-function-between-measurable-spaces`, `def-integral-of-a-nonnegative-simple-function`, `thm-dominated-convergence`, `thm-heine-borel-rn`, `thm-heine-cantor-metric`, `def-real-power`, `thm-real-power-continuity-and-derivatives`, `thm-real-power-laws`, `thm-monotonicity-from-the-derivative`, `cor-second-derivative-characterises-convexity`, `def-conditional-expectation-given-a-sigma-algebra`, `thm-conditional-expectation-exists-by-radon-nikodym`, `def-axiom-of-choice`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality`, `prop-closure-properties-of-measurable-functions-used-by-the-integral`, `lem-conditional-expectation-is-unique-almost-surely`, `thm-logarithm-derivative-and-integral`, `thm-bayes-rule-minimizes-prior-risk`, `def-standard-borel-space`, `def-regular-conditional-distribution`, `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets`, `thm-disintegration-of-a-joint-law-on-standard-borel-spaces`, `thm-measurability-of-integration-against-a-kernel`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `cor-finite-nonnegative-integral-implies-finite-almost-everywhere`, `cor-additivity-of-the-nonnegative-lebesgue-integral`, `cor-integral-over-a-null-set-vanishes`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `cor-convex-functions-on-open-convex-sets-are-continuous`, `def-identically-distributed-and-iid-random-variables`, `lem-measurable-functions-preserve-independence`, `thm-kolmogorov-iid-l1-strong-law`, `lem-metrics-on-rn`, `thm-jensen-inequality-for-expectation`, `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`, `thm-monotone-convergence-for-the-integral`, and `prop-order-and-scalar-rules-for-the-nonnegative-integral`.

## Source checks

- Vaicenavicius et al., [*Evaluating Model Calibration in Classification* (PMLR 89, 2019)](https://proceedings.mlr.press/v89/vaicenavicius19a/vaicenavicius19a.pdf) and [supplement](https://proceedings.mlr.press/v89/vaicenavicius19a/vaicenavicius19a-supp.pdf), were checked at the finite-label reliability conditions in §2, Proposition 1 and its Appendix A.2 proof, calibration functions and expected miscalibration in §§3.1–3.2, estimator (6), and Theorems 1–2. The supplement's Appendix A.2 proof for Theorem 2 was also opened. These locations support the calibration definitions, the conditional-feature reliability result, and the binned-estimator context.
- Mohri, Rostamizadeh, and Talwalkar, [*Foundations of Machine Learning*, 2nd ed. (author's book page)](https://cs.nyu.edu/~mohri/mlbook/), Chapter 4 §4.7, Lemma 4.5 and Theorem 4.7 with proof, printed pp. 74–77 (PDF pp. 91–94), was retrieved from the author-linked [book PDF](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1) and read. Theorem 4.7 uses a c^s premise to obtain 2c, and the book's decision rule predicts +1 at zero. Its Lemma 4.5 displayed equality drops a tie contribution when h(x)=0 and eta(x)>1/2; the assigned local risk identity includes and proves the correction.
- Durrett, [*Probability: Theory and Examples*, 5th ed.](https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf), Theorem 1.6.2 and §4.1, printed pp. 29 and 205–215, was checked for scalar Jensen, event-integral conditional expectation, and regular conditional distributions. Durrett §2.4 was checked for the strong-law citation used by the fixed-bin example.
- Lebl, [*Basic Analysis*, §5.4.1](https://www.jirka.org/ra/html/sec_logandexp.html), Proposition 5.4.1 and proof, was checked for the logarithm's integral and derivative. The cited [*Scoring rule* article](https://en.wikipedia.org/wiki/Scoring_rule) was checked at its definitions, properness, and categorical logarithmic and Brier examples; its reward convention is negated in the library's loss definition, and strict propriety is proved locally.

## Edits and evidence

- `items/lem-jensen-for-simplex-pairs.md`: the Statement now specifies the subspace Borel structures on ΔK and its product. Proof step 1.2 now identifies the cells as Borel sets formed from relative-open balls before using them to construct the measurable finite-range approximation. The proof-contract Statement and step 1.2 claim were updated. This supplies the measurable codomain and cell measurability that the approximation argument uses. The affected consumers `thm-binned-calibration-estimator-limits` and `ex-fixed-bin-ece-underestimates-calibration-error` were checked; their uses are compatible.
- `items/lem-finite-label-conditional-probability-function.md`: the Statement now specifies the subspace Borel structure on ΔK. Proof step 1.1 spells out measurability of the piecewise clipped conditional-expectation version. Step 3.1 explains why the measurable coordinate functions give a Borel-measurable finite vector into ΔK. The proof-contract Statement and steps 1.1 and 3.1 were updated. Its direct consumers `cor-any-feature-induces-calibrated-forecast`, `def-classification-calibration-of-a-surrogate`, and `thm-surrogate-regret-controls-classification-regret`, and its indirect consumers `lem-binary-zero-one-risk-excess-with-zero-tie`, `fs-unadjusted-surrogate-regret-bound`, and `ex-calibrated-coarsened-risk-score-is-low-information` were checked against the clarified interface.
- `items/lem-binary-zero-one-risk-excess-with-zero-tie.md`: the Mohri locator now covers printed pp. 74–75 (PDF pp. 91–92). Its Statement references section records the source's (+1)-at-zero convention and the exact tie-case overcount, and states that the corrected identity is proved locally. The local step-by-step identity and witness remain unchanged.

The title of `thm-binned-calibration-estimator-limits` was checked and retained: the formal Statement conditions fixed-bin underestimation on joint convexity, and no title defect was confirmed.

No stale `verification.judge` record was present in the edited items. Reflow reported all four reviewed item paths unchanged. Precheck passed for all four. The final proof-layout command covered the three edited items and the binned-estimator title review: 4 items, 17 steps, 0 defects.

## Page verdicts and unedited defect

- `calibration-proper-losses-and-surrogate-classification`: **pass**. YAML frontmatter only; draft status, compact layout, item inventory, and required-page metadata agree with the batch manifest.
- `calibration-proper-losses-and-surrogate-classification-examples`: **pass**. YAML frontmatter only; draft status, compact layout, example inventory, and required-page metadata agree with the batch manifest.
- Unedited dependency defect: the published page `conditional-distributions-and-regular-conditional-probability` has narrative body paragraphs at lines 9–13 despite the YAML-only page policy. The assigned consumer `thm-posterior-forecast-minimizes-scoring-risk` depends on the regular-conditional-distribution definition, its standard-Borel existence theorem, and disintegration items inventoried on that page. This published page is outside reader write scope; it remains in the findings JSON for owner routing.

The proposed false statement `fs-unadjusted-surrogate-regret-bound` remains present for the owner. No TikZ or tikzcd diagrams occur in the assigned scope. No review blocker remains. Coverage was limited to direct item dependency interfaces and cited source passages; I did not audit the full proofs or page bodies of every transitive external dependency in the sidecar's 81-page inventory.
