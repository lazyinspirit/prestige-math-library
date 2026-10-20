# Step 3a reader report — batch 18

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Opened on: 2026-10-19

## Opened inventory

Pages:

- `library/machine-learning/ml02-random-forests.md`
- `library/machine-learning/ml02-random-forests-examples.md`

Assigned items, reviewed supplier-first:

- `def-empirical-decision-tree`
- `thm-node-mean-minimizes-squared-error`
- `alg-cart-greedy-split`
- `alg-bagged-random-forest`
- `thm-infinite-forest-vote-limit`
- `thm-random-forest-strength-correlation-bound`
- `thm-regression-forest-risk-under-unbiased-randomized-trees`
- `ex-random-forest-out-of-bag-diagnostic`
- `ex-random-forest-zero-margin-vote-limit`
- `ex-random-forest-strength-correlation-tradeoff`

The first three items above are supplier context; the seven assigned carriers are the algorithm, three theorems, and three examples from the batch manifest.

Other dependency items opened to check the claims and cited facts:

- Linear algebra and empirical-tree support: `prop-standard-coordinate-inner-products`, `def-inner-product-space`, `def-monoid-finite-product`, `lem-standard-basis-of-f-n`, `lem-complex-conjugation-and-modulus-laws`, `thm-reals-ordered-field`, `lem-of-square-positive`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `thm-least-squares-solutions-and-normal-equation`, `thm-orthogonal-projection-is-the-unique-nearest-point`, `thm-adjoint-kernel-and-range-orthogonality`, `def-orthogonal-projection`, `prop-pythagorean-parallelogram-and-polarisation-identities`, `prop-adjoint-algebra`, `cor-double-orthogonal-complement-and-dimension`, `def-orthogonal-complement`.
- Independence and product-law support: `def-identically-distributed-and-iid-random-variables`, `def-independent-random-elements`, `def-law-or-distribution-of-a-random-element`, `def-random-element-and-real-random-variable`, `def-sigma-algebra-generated-by-a-function`, `def-independent-sigma-algebras-and-events`, `def-probability-measure`, `lem-measurable-functions-preserve-independence`, `thm-rectangle-criterion-for-independent-random-elements`, `thm-composition-with-borel-functions-preserves-measurability`, `thm-independent-random-elements-have-product-joint-law`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `lem-law-of-a-random-element-is-a-probability-measure`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-iterated-section-measures-agree-on-product-measurable-sets`.
- Strong-law and integration support: `thm-kolmogorov-iid-l1-strong-law`, `lem-iid-linear-truncation-occurs-only-finitely-often`, `lem-summability-of-truncated-normalized-variances`, `lem-cesaro-limit-of-truncated-means`, `thm-kolmogorov-strong-law-under-summable-normalized-variances`, `thm-dominated-convergence`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-moments-variance-and-covariance`, `cor-cauchy-schwarz-for-random-variables`, `cor-chebyshev-inequality-for-random-variables`.

I also inspected the seven records in `research/machine-learning-all-101-2026-10-19-batch-18.proof-contracts.json` against their current item sections, numbered steps, cited suppliers, and boundary cases. No contract mismatch requiring correction was found.

## Review results

- `def-empirical-decision-tree` defines nonempty axis-aligned splits, finite sample leaves, regression means, and ordered-class majority ties consistently. `thm-node-mean-minimizes-squared-error` correctly establishes the regression leaf optimum from its stated finite-dimensional least-squares facts.
- `alg-cart-greedy-split` has finite midpoint candidates, nonempty children, a deterministic coordinate/cut tie rule, and a depth cap. Its regression and classification scores match the supplied empirical-tree conventions. The procedure terminates at the cap and makes no global-optimality claim.
- `alg-bagged-random-forest` specifies the bootstrap and feature-subset draws, node construction, aggregation, tie rules, and the empty out-of-bag case. Its data-flow TikZ diagram matches those instructions; the text does not rely on the diagram as proof.
- `thm-infinite-forest-vote-limit` uses the zero-margin-null hypothesis where it is needed: finite-class vote proportions converge by the IID strong law, strict margins give eventual decisions, product integration transfers almost-everywhere convergence, and dominated convergence gives the conditional-risk limit. The bounded indicators and finite class set supply the needed integrability and maxima. Breiman’s *Random Forests*, Theorem 1.2 (printed p. 7) and Appendix I (printed pp. 29–30), states the corresponding limit; its finite-partition proof is not needed for the local argument.
- `thm-random-forest-strength-correlation-bound` identifies the independent-pair covariance average with `Var_P(m)`, bounds it using the raw-margin variance and Cauchy–Schwarz, then applies Chebyshev. Its separate `d=0` argument establishes the stated zero-error case. The covariance form agrees with Breiman’s weighted correlation formula in Theorem 2.3 (printed pp. 8–9).
- `thm-regression-forest-risk-under-unbiased-randomized-trees` applies its per-tree zero-mean and square-integrability assumptions to identify forest risk with the independent-pair covariance average, then uses `d² ≤ E_Q[sd²]`. Its zero-denominator case follows by nonnegative-integral and Fubini arguments. The hypotheses match Breiman’s unbiasedness condition in Theorem 11.2 (printed pp. 25–26).
- `ex-random-forest-out-of-bag-diagnostic` computes the count event probability as `1/16` and the full and out-of-bag predictions correctly. `ex-random-forest-zero-margin-vote-limit` computes a fair tree vote and odd-forest error expectation `1/2`, which rules out almost-sure convergence to zero by dominated convergence. Its two displayed root splits and leaf labels agree with the data and feature choices. `ex-random-forest-strength-correlation-tradeoff` gives margins `1/2` and `-1/2`, strength `1/4`, `d²=3/4`, covariance numerator `3/16`, `rho=1/4`, and bound value `15/4`; the arithmetic is correct.
- Statements, definitions, and example descriptions are uninterrupted by hyperlinks; references appear in the immediately following `Definition references`, `Statement references`, or `Example references` section. The proofs retain their supplier links. The relevant Breiman paper and MIT OCW decision-tree slides were opened for citation and diagram checks.

No confirmed defect was found in an assigned item or in a dependency used by the assigned claims. No item or page was edited. Accordingly, reflow, precheck, and proof-layout were not run; there are no changed item paths.

## Page verdicts

- `ml02-random-forests`: pass. Draft metadata and `page_layout: compact-v1` are retained; the item inventory, prerequisite list, and title match the manifest. The page has no Markdown body or summary.
- `ml02-random-forests-examples`: pass. Draft metadata and `page_layout: compact-v1` are retained; the examples inventory, companion prerequisite, and title match the manifest. The page has no Markdown body or summary.

## Uneditable findings and blocker

None. No blocker.

## Coverage limits

All seven assigned items, both pages, and every direct item dependency named by the assigned carriers were opened. I also checked the nested suppliers needed for the tree-optimum, independence, product-law, Fubini, and strong-law arguments listed above. I did not independently re-audit every deeper prerequisite of every published supplier. The Google Drive-hosted ESL book PDF could not be fetched with the available browser tool; no finding depends on that source, and the relevant local proofs and accessible primary sources were checked instead.
