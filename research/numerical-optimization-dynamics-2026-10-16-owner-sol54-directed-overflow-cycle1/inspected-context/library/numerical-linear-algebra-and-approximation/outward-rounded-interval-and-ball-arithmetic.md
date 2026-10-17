---
page: outward-rounded-interval-and-ball-arithmetic
title: Outward rounded interval and ball arithmetic
status: draft
items:
  - def-complete-ordered-real-field
  - def-continuity-and-derivative-on-real-interval
  - def-dyadic-floating-point-format-and-directed-rounding
  - lem-archimedean-property-from-completeness
  - lem-closed-interval-compactness-from-completeness
  - lem-nonnegative-square-root-exists-and-unique
  - alg-dyadic-square-root-bisection
  - def-intervals-rectangles-and-complex-balls
  - lem-directed-dyadic-rounding-enclosure-and-error
  - def-outward-rounded-interval-and-ball-operations
  - lem-real-and-complex-modulus-rules
  - thm-dyadic-square-root-bisection-encloses
  - def-centered-taylor-model-with-derivative-interval
  - lem-absolutely-convergent-series-cauchy-product
  - lem-derivative-algebra-and-chain-rules
  - lem-elementary-power-series-converge-uniformly-on-bounded-sets
  - lem-extreme-value-theorem-from-compactness
  - lem-power-series-termwise-differentiation
  - thm-outward-rounded-operations-are-isotone-and-dag-sound
  - lem-continuous-functions-riemann-integrable
  - lem-rolle-theorem-from-extreme-values
  - def-real-elementary-functions-and-domains
  - lem-mean-value-theorem-on-closed-interval
  - lem-riemann-integral-linearity
  - lem-fundamental-theorem-and-integration-by-parts
  - lem-range-reduced-exp-log-and-arctan-series-enclosures
  - lem-taylor-lagrange-remainder-from-mean-value
  - lem-taylor-integral-remainder
  - lem-trigonometric-identities-machin-and-range-reduction
  - alg-certified-elementary-range-evaluation
  - thm-centered-taylor-model-encloses-function-range
  - alg-budgeted-validated-range-evaluation
  - thm-real-elementary-range-enclosures
  - thm-complex-elementary-range-enclosures
  - thm-budgeted-range-evaluation-terminates-and-is-sound
examples: []
---

This page develops finite dyadic endpoint formats and directed rounding before
defining real intervals, complex rectangles, and midpoint-radius balls. Real
interval and complex-rectangle arithmetic applies its displayed endpoint
formulas and rounds the endpoints outward. Ball operations use conservative
modulus bounds and round their output radii outward. Division across zero,
branch-cut ambiguity, overflow, and exhausted budgets return explicit
non-finite statuses.

Elementary exponential, logarithm, arctangent, trigonometric, square-root, and
complex exponential/logarithm evaluations use local range reductions and
explicit series or bisection remainders. A topological induction proves sound
range propagation through finite expression DAGs. The page also proves a
centered Taylor-model enclosure from a derivative interval and distinguishes a
certified width result from an inconclusive finite-budget output.

Natural interval evaluation preserves inclusion while it can overestimate
when a shared input appears more than once. The B page gives the subtraction
dependency, division-at-zero, and near-periodic sine cases.


The earlier finite-precision direct-factorization page is retained as reading
context. This page's item proofs use their displayed local directed-rounding,
root, interval and series suppliers; they consume no NA-02 factorization,
solve bound or round-to-nearest success model. Its retained page requirement
does not turn that unrelated model into a mathematical premise here.
