# Step 3a reader report — batch 56

Run: `bayesian-computational-statistics-62`  
Role: `reader-56`

## Opened inventory

- Assigned manifest: `research/bayesian-computational-statistics-62-batch-56.pages.json`.
- Assigned A page: `library/bayesian-computational-statistics/cross-validation-risk-and-model-comparison.md`.
- Assigned B page: `library/bayesian-computational-statistics/cross-validation-risk-and-model-comparison-examples.md`.
- Required page context: `library/mathematical-statistics/delta-method-and-asymptotic-normality.md`.
- Assigned items, reviewed after their suppliers:
  1. `def-cross-validation-split-and-risk-target`
  2. `def-risk-estimation-versus-model-identification`
  3. `alg-holdout-loo-lpo-v-fold-and-repeated-cv`
  4. `thm-cross-validation-risk-bias-at-training-size`
  5. `lem-kfold-cv-variance-covariance-decomposition`
  6. `ex-random-row-split-leaks-group-information`
  7. `ex-cross-validation-risk-minimization-does-not-identify-model`
  8. `thm-no-universal-unbiased-k-fold-cv-variance-estimator`
  9. `ex-holdout-cv-training-size-bias`
  10. `ex-paired-kfold-model-comparison-uncertainty`
- Direct item dependencies opened: `def-statistic-and-estimator`, `def-loss-function-and-risk`, `def-identically-distributed-and-iid-random-variables`, `thm-independent-random-elements-have-product-joint-law`, `def-moments-variance-and-covariance`, `thm-factorization-of-expectations-for-independent-variables`, and `def-bernoulli-and-binomial-random-variables`.
- Current contracts opened: `research/bayesian-computational-statistics-62-batch-56.proof-contracts.json`. Its scope matches the ten assigned item IDs; the cited facts and step traces match the reviewed proof text.

## Mathematical review

- `def-cross-validation-split-and-risk-target`: measurability, integrability, independent-test risk, nonempty split constraints, and the weighted training-size target are stated with the needed domains. No defect found.
- `def-risk-estimation-versus-model-identification`: the risk criterion, finite tie rule, measurable selector, and model-consistency probability are distinguished correctly. No defect found.
- `alg-holdout-loo-lpo-v-fold-and-repeated-cv`: inputs, output, schedule constraints, weights, paired comparison, and named schedule variants are specified. The algorithm claims only to define estimates and does not assert a correctness or complexity theorem. No defect found.
- `thm-cross-validation-risk-bias-at-training-size`: each validation observation is independent of its disjoint training sample under IID sampling; the product-law supplier gives the stated training-size risk. Finite linearity, the full-sample bias identity, and conditioning on an independent finite-range schedule are justified. No defect found.
- `lem-kfold-cv-variance-covariance-decomposition`: permutation invariance and symmetric learning rules give the three covariance classes. The diagonal, within-fold, and between-fold ordered-pair counts yield the displayed formula, including the `m=1` convention. No defect found.
- `ex-random-row-split-leaks-group-information`: the same-fold probability, row-score calculation, and new-group risk are correct. The example states why the IID risk theorem does not apply to repeated dependent rows. No defect found.
- `ex-cross-validation-risk-minimization-does-not-identify-model`: both constant predictors have risk `1/2`; identical product data laws prevent consistency at both labels. No defect found.
- `thm-no-universal-unbiased-k-fold-cv-variance-estimator`: for the explicit Bernoulli construction, the score mean is `p^r`, while its second moment is a polynomial of degree at most `n`; since `2r-n=m(K-2)+2>0`, the variance has degree `2r`. Any sample-based estimator with fixed auxiliary randomness has expectation polynomial of degree at most `n`, proving the contradiction. The integrability of a purported unbiased estimator makes each conditional mean finite because every sample vector has positive probability for `0<p<1`. No defect found.
- `ex-holdout-cv-training-size-bias`: the sample-mean risk is `p(1-p)(1+1/k)`, giving `R_3-R_4=1/48` at `p=1/2`. No defect found.
- `ex-paired-kfold-model-comparison-uncertainty`: the four fold errors, common variance `7/64`, common covariance `3/64`, and variance `1/16` agree with both the covariance formula and the direct finite distribution. No defect found.

## Source evidence

- Arlot and Celisse, [“A survey of cross-validation procedures for model selection”](https://arxiv.org/pdf/0907.4728): §4 defines cross-validation as averaging holdout estimates across splits and describes LOO/V-fold; §5.1.1, equation (12), gives the training-size risk expectation; §5.2.3 records the nonexistence of a universal unbiased variance estimator; §§6.1 and 7.1 distinguish efficient model selection from identification; §8.3 discusses dependent observations and modified splits. The exact passages reviewed were PDF pages 13–16, 20–21, 24–25, and 27.
- Bengio and Grandvalet, [“No Unbiased Estimator of the Variance of K-Fold Cross-Validation”](https://jmlr.org/papers/volume5/grandvalet04a/grandvalet04a.pdf): §2.3, printed p. 1092, identifies the K-fold training-size target; §§2.5–3, printed pp. 1094–1096, give the covariance classes and three-term variance formula; §4, Theorem 6, printed pp. 1097–1098, states nonexistence of a universal unbiased estimator in its framework. The batch theorem's stronger raw-sample Bernoulli proof is established locally, not delegated to that citation.
- The cited ISLR PDF URL is present in the authored references. The browser could not extract that PDF (internal parser error); an official-site search result confirmed the book title and Chapter 5 cross-validation listing. The conclusions above were checked from the local arguments and the two survey/paper sources cited above.

## Page verdicts

- `cross-validation-risk-and-model-comparison` (A): pass. Its summary accurately states the training-size expectation, dependence of fold errors, and the scoped nonexistence result. No unsupported asymptotic or dependent-data conclusion appears. The manifest's required delta-method page was opened; no assigned claim relies on it.
- `cross-validation-risk-and-model-comparison-examples` (B): pass. All four summary bullets match the reviewed examples and their calculations.

## Edits, remaining defects, and blocker

- Edits: none. No confirmed defect was found in assigned item or A-page prose.
- Defects not editable in this assignment: none found.
- Blocker: none.
- No assigned source files changed. Accordingly, no proof-contract update, judge-stamp removal, reflow, precheck, or proof-layout run was required.

## Coverage note

Reviewed all ten assigned items, both assigned pages, the required delta-method page, the current batch proof contracts, and every direct item dependency listed by the batch. The full proof bodies of the product-joint-law and expectation-factorization suppliers were read; their own transitive dependency closures were not independently re-audited. The cited ISLR PDF could not be text-extracted as noted above, so source verification relied on the self-contained local arguments and the opened Arlot–Celisse and Bengio–Grandvalet sources.
