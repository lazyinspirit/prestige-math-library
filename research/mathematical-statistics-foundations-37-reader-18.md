# Step 3a reader report — batch 18

Run: `mathematical-statistics-foundations-37`  
Reader: `reader-18`  
Date: 2026-10-14

## Opened inventory

Assigned pages:

- `library/mathematical-statistics/decision-theoretic-upper-bounds-and-oracle-risk.md`
- `library/mathematical-statistics/decision-theoretic-upper-bounds-and-oracle-risk-examples.md`

Page prerequisites opened for context:

- `library/mathematical-statistics/losses-risk-and-decision-rules.md`
- `library/mathematical-statistics/finite-sample-point-estimation-and-unbiased-optimality.md`
- `library/mathematical-statistics/concentration-inequalities-and-tail-bounds.md`
- `library/mathematical-statistics/minimax-lower-bounds-and-information-theoretic-methods.md`
- `library/functional-analysis/hilbert-space-geometry-and-riesz-representation.md`

All 16 assigned items were opened: `def-fixed-design-projection-estimator`,
`lem-binomial-support-count-bound`,
`lem-finite-dimensional-projection-is-linear-and-contractive`,
`lem-finite-support-projection-selection-is-borel`,
`lem-isotropic-gaussian-noise-is-subgaussian`,
`alg-bic-penalized-least-squares`, `alg-constrained-l0-least-squares`,
`thm-gaussian-projection-risk`, `thm-subgaussian-projection-risk`,
`thm-bic-fitted-risk-bound`, `thm-sparse-subset-risk-upper-bound`,
`thm-gaussian-sparse-sequence-minimax-lower-bound`,
`cor-matching-minimax-rate`,
`cex-collinear-design-coefficient-risk-unidentifiable`,
`ex-orthogonal-sequence-sparse-regression`, and
`ex-training-risk-versus-test-risk`.

The direct suppliers and cited results opened to check those claims were:

- Projection and measurability: `def-natural-numbers`,
  `def-euclidean-spheres-and-closed-balls`, `def-orthogonal-projection`,
  `thm-orthogonal-projection-is-the-unique-nearest-point`,
  `thm-finite-dimensional-orthogonal-decomposition`, `def-linear-subspace`,
  `def-orthogonality-and-orthogonal-complement`,
  `prop-pythagorean-parallelogram-and-polarisation-identities`,
  `lem-finite-dimensional-projection-is-linear-and-contractive`,
  `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`,
  `def-borel-sigma-algebra`, `def-topological-space`,
  `thm-continuity-characterisations-top`,
  `def-measurable-function-between-measurable-spaces`, `def-max-min`,
  `lem-finite-set-has-max`, `thm-cauchy-schwarz-finite`, and
  `cor-triangle-inequality-for-inner-product-norm`.
- Counting, logarithms, exponentials, and integrals:
  `def-binomial-coefficient`, `thm-binomial-closed-formula`,
  `def-factorial-and-falling-factorial`, `def-finite-sum`,
  `lem-finite-sum-laws`, `def-natural-logarithm`,
  `thm-natural-logarithm-laws`,
  `thm-logarithm-derivative-and-integral`, `thm-algebra-of-derivatives`,
  `thm-ftc-first-part`, `thm-ftc-second-part`,
  `thm-monotonicity-of-the-integral`, `thm-continuous-implies-integrable`,
  `lem-integral-elementary-bounds`, `def-real-exponential-function-and-e`,
  `thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`,
  `cor-exponential-reciprocal-and-positivity`,
  `thm-derivative-of-exponential`, `thm-chain-rule`,
  `thm-exponential-beats-every-polynomial`, `def-integer-power`,
  `lem-power-laws`, `thm-geometric-series`, `thm-of-archimedean`,
  `def-integral-logarithm`,
  `cor-integral-logarithm-agrees-with-natural-logarithm`,
  `def-integral-exponential`, `thm-integral-exponential-agrees-with-exponential`,
  `lem-of-square-monotone`, `thm-of-square-roots`,
  `prop-order-and-scalar-rules-for-the-nonnegative-integral`,
  `def-nonnegative-lebesgue-integral`,
  `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, and
  `def-lebesgue-outer-measure`.
- Probability and decision theory: `def-axiom-of-choice`,
  `def-multivariate-normal-law`, `def-standard-normal-and-normal-laws`,
  `def-expectation-of-a-nonnegative-or-integrable-random-variable`,
  `def-subgaussian-variable-and-vector`,
  `lem-normal-density-has-total-mass-one`, `thm-integration-against-a-density`,
  `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`,
  `lem-ac-supplies-sequential-choices-for-probability-constructions`,
  `def-moments-variance-and-covariance`,
  `cor-expectation-linearity-monotonicity-and-modulus-bound`,
  `def-loss-function-and-risk`, `cor-layer-cake-formulas-for-random-variables`,
  `lem-probability-measure-basic-identities`,
  `def-randomized-procedure-as-a-markov-kernel`,
  `lem-statistic-induces-deterministic-procedure`,
  `lem-sparse-hamming-packing`, `lem-gaussian-location-kl-formula`,
  `thm-product-kl-additivity`, `thm-fano-packing`, `thm-pinsker`,
  `thm-two-point-le-cam-risk-bound`,
  `lem-characteristic-function-of-a-multivariate-normal-law`,
  `lem-measurable-functions-preserve-independence`,
  `cor-continuous-functions-are-borel-measurable`,
  `thm-composition-with-borel-functions-preserves-measurability`,
  `def-independent-random-elements`,
  `thm-factorization-of-expectations-for-independent-variables`,
  and `def-bias-and-mean-squared-error`.
- Finite-set cardinality and sub-Gaussian tails: `def-finite-cardinality`,
  `cor-cardinality-of-the-power-set`,
  `thm-finite-subgaussian-maximum-and-epsilon-net`.

## Repairs and evidence

- `lem-binomial-support-count-bound`: specified $d,m\in\mathbb N$, matching the
  domain of the binomial coefficient and factorial suppliers. Step 1.2 now
  establishes that the logarithm and comparison constants are integrable before
  applying integral monotonicity, and cites the product rule and logarithm
  derivative before using $t\log t-t$. The local support is
  `thm-natural-logarithm-laws`, `thm-continuous-implies-integrable`,
  `lem-integral-elementary-bounds`, `thm-logarithm-derivative-and-integral`,
  and `thm-algebra-of-derivatives`.
- `thm-subgaussian-projection-risk`: Step 1.1 now establishes that each
  projected coordinate is integrable and centered using expectation linearity.
  The logarithm definition and laws are explicit dependencies. The expected
  error proof now bounds the nonnegative random variable by capped sums and
  uses monotone convergence and a geometric series; the displayed expectation
  bound is consequently $8\sigma^2(r\log6+\log2+13/10)/n$. The original
  universal-constant conclusion remains valid.
- `thm-sparse-subset-risk-upper-bound`: Fact F3 now uses natural binomial
  indices. The proof states the logarithm laws used in the count estimate and
  bounds expected error with the same capped-sum argument. The sharpened
  support-count estimate keeps the stated constant
  $C=32(4+2\log6)$.
- `thm-bic-fitted-risk-bound`: added the logarithm definition and laws used in
  Step 7.1 to justify $\log(ed)=1+\log d\ge1$.
- Updated the batch-18 proof contracts for these four items, including the new
  source citations, derivation inputs, and the corrected binomial-domain quote.
  None of the four items had a stale `verification.judge` record.

All four changed items were reflowed and passed precheck. The final combined
proof-layout check reported 4 items, 24 steps, and 0 defects.

## Uneditable findings

- `def-orthogonal-projection`, Definition immediately after
  $V=W\oplus W^\perp$: the sentence continues “associates to every $v\in V$”
  without a grammatical subject. The decomposition is clear, but the definition
  prose is ill-formed. This published dependency reaches assigned consumer
  `def-fixed-design-projection-estimator`.
- `lem-gaussian-location-kl-formula`, Proof step 1.2: the displayed logarithm
  of a Gaussian-density ratio is attributed to direct exponent subtraction and
  Fact F6, which states only that $\log$ inverts $\exp$. The exact logarithm
  quotient/exponential addition identity is not cited in that fact. The needed
  law is available through the dependency closure, so this is a localized
  citation defect; cite `thm-natural-logarithm-laws` or the exponential addition
  formula. This draft dependency is in batch 17, outside this edit scope, and
  reaches assigned consumer `thm-gaussian-sparse-sequence-minimax-lower-bound`.
  Its raw source SHA-256 at split is
  `a03fc532ac0d0291163ea21d1e45cec27b56900819042859c8bc8accc85004d2`.

## Page verdicts

- `decision-theoretic-upper-bounds-and-oracle-risk`: pass. Its fitted-value
  scope, nonempty-support caveat for the penalized result, and sequence-model
  limitation match the item statements.
- `decision-theoretic-upper-bounds-and-oracle-risk-examples`: pass. Its summary
  accurately separates coefficient identification, constrained support search,
  and fresh-response prediction error.

## Blocker and coverage

No blocker prevented the assigned review or authorized repairs. The two defects
above remain outside this reader's edit scope. I opened every assigned carrier,
the five page prerequisites, and the direct suppliers/cited targets needed for
the reviewed inferences; I did not audit every transitive foundation beneath
those suppliers or unrelated content elsewhere in the library. No web source was
needed to resolve the reviewed claims.
