# Frontier 6 batch 2 — Steps 1–2 scaffold notes

Beta-F6-2. The canonical page objects are in `research/frontier-6-batch-2.pages.json`. This artifact covers only the requested real-analysis pairs:

- `darboux-lhopital-and-taylor` and its examples page;
- `the-exponential-function` and its examples page;
- `the-riemann-integral-in-rn-and-jordan-content` and its examples page.

The user's “Riemann integral” has been interpreted as the still-unbuilt multidimensional (\mathbb R^m)/Jordan-content pair, not the published one-dimensional Riemann pair.

## 1. Result and validation snapshot

The scaffold has 6 pages and 91 unique planned items: 20+8 for Darboux/L'Hôpital/Taylor, 19+6 for exponential, and 30+8 for multidimensional Riemann/Jordan content.

Checks completed on 2026-08-01:

- JSON parses.
- A streamed splice replacing the six empty live-plan page objects passed `node tools/validate-plan.mjs /dev/stdin`: declared page order is acyclic and consistent, with no item-level cycles, unresolved IDs, forward references, or B-page dependency violations among scaffolded pages.
- `node tools/prosecheck.mjs research/frontier-6-batch-2.notes.md` reported 0 errors (only heuristic count-in-prose warnings).
- Every one of the 113 external item dependencies resolves to an existing item whose front matter says `status: published`.
- Every dependency on a new item points backward within its A page, backward within its B page, or from B to its required A page.
- There are no forward item dependencies, no B-to-B cross-page dependencies, no cross-pair item dependencies, and all three B-page `forwardRefs` lists are empty.
- The 53 newly minted Darboux/exponential item IDs have no match in `items/`, the live plan, or another scaffold artifact.
- The 38 multidimensional Riemann/Jordan IDs intentionally reproduce the coherent page objects already present in the user-owned, untracked `research/frontier-3-batch-3.pages.json`. They do not collide with `items/` or the live plan. Step 3 must designate the Frontier-6 object as canonical and exclude the dormant Frontier-3 candidate from any multi-artifact splice; do not delete or rewrite that user-owned file without authorization.
- A dependency-closure pass caught and removed three nonexistent names before this file was finalized: a nonexistent falling-factorial factorization lemma, a nonexistent finite-geometric-sum theorem, and a nonexistent support definition. Their required arguments are now explicitly assigned to local proof steps and published primitive dependencies.

The `strategy` field on every item is the exact Step-5 proof-obligation map. The inventory below is exact; it is not a topic sketch.

## 2. Working source ledger

Every URL below was opened successfully during this scaffold pass.

### Darboux, L'Hôpital, and Taylor

- **D1 — Lebl, Basic Analysis, Taylor section:** https://www.jirka.org/ra/html/sec_taylor.html
  Higher derivatives, Taylor polynomials, the Lagrange remainder, remainder bounds, and the second-derivative test.
- **D2 — Lebl, Basic Analysis I PDF:** https://jirka.org/ra/realanal.pdf
  Darboux's theorem with the auxiliary-extremum proof, Cauchy MVT, L'Hôpital exercises/forms, and Taylor development.
- **D3 — Rodríguez Cano, “Taylor's Expansion Revisited: A General Formula for the Remainder”:** https://onlinelibrary.wiley.com/doi/10.1155/2012/645736
  Primary-paper source for generalized classical Taylor remainders, including the Schlömilch family. The scaffold uses the natural-parameter Schlömilch–Roche formula and derives Lagrange and Cauchy as special cases.
- **D4 — MIT OCW 18.100B Spring 2025 lecture notes:** https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/
  Official course notes; Lectures 16–17 cover Rolle/Cauchy MVT, L'Hôpital, Taylor polynomials, and remainder terms.

### Exponential function

- **E1 — MIT OCW 18.100B full lecture notes:** https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf
  Lecture 10 defines the exponential by its power series, proves all-real convergence and the addition formula, and relates rational powers by density.
- **E2 — Lebl, Basic Analysis, logarithm and exponential:** https://www.jirka.org/ra/html/sec_logandexp.html
  Functional equation, ODE characterization, positivity, monotonicity, range, and inverse-roadmap checks. This page uses only the exponential portion and explicitly defers logarithms.
- **E3 — Lebl, Basic Analysis, analytic functions:** https://www.jirka.org/ra/html/sec_analfuncs.html
  Power-series smoothness and the analytic/nonanalytic boundary. It supports the flat-function warning; the actual bump proof is decomposed in the scaffold.

### Multidimensional Riemann integration and Jordan content

- **R1 — Lebl, rectangles and multivariable Riemann integration:** https://www.jirka.org/ra/html/sec_rirect.html
- **R2 — Lebl, null sets and outer measure-zero arguments:** https://www.jirka.org/ra/html/sec_outermeasure.html
- **R3 — Lebl, the Riemann–Lebesgue criterion:** https://www.jirka.org/ra/html/sec_riemannlebesgue.html
- **R4 — Lebl, Jordan measurable sets:** https://www.jirka.org/ra/html/sec_jordansets.html
- **R5 — Lebl, iterated integrals:** https://www.jirka.org/ra/html/sec_iteratedints.html
  Read only as a boundary source: Fubini belongs to the next page and is not used here.
- **R6 — Munkres, Analysis on Manifolds, accessible text mirror:** https://studylib.net/doc/28170627/analysis-on-manifolds--advanced-books-classics-----james-...
  Exact terminology check: Munkres deliberately uses “rectifiable” for a set having Jordan content and notes that “Jordan-measurable” is another usage. The companion remark must attach this URL or a better licensed copy if available at authoring time.

## 3. Exact page and item inventory

### 155: `darboux-lhopital-and-taylor` (A, 20 items)

Page requirements: `the-derivative-and-mean-value-theorems`, `finite-counting-and-binomial-coefficients`.

| # | ID | Kind | Direct dependencies | Source set |
|---:|---|---|---|---|
| 1 | `def-higher-derivatives-and-smoothness` | definition | `def-derivative`, `def-continuity-real`, `def-one-sided-limits`, `def-natural-numbers` | D1–D4 |
| 2 | `thm-general-leibniz-rule` | theorem | `def-higher-derivatives-and-smoothness`, `thm-algebra-of-derivatives`, `def-binomial-coefficient`, `thm-pascals-rule`, `def-factorial-and-falling-factorial`, `def-finite-sum`, `lem-finite-sum-laws`, `def-canonical-natural`, `thm-induction-principle` | D1–D4 |
| 3 | `lem-higher-order-rolle` | lemma | `def-higher-derivatives-and-smoothness`, `thm-rolle`, `thm-induction-principle` | D1–D4 |
| 4 | `thm-darboux-theorem-for-derivatives` | theorem | `def-derivative`, `cor-differentiable-implies-continuous`, `thm-extreme-value-r`, `thm-fermat-interior-extremum`, `thm-algebra-of-derivatives`, `lem-derivative-of-a-power`, `def-interval`, `def-intermediate-value-property` | D1–D4 |
| 5 | `cor-derivatives-have-no-removable-or-jump-discontinuities` | corollary | `thm-darboux-theorem-for-derivatives`, `def-classification-of-discontinuities`, `def-one-sided-limits` | D1–D4 |
| 6 | `lem-injective-darboux-function-is-strictly-monotone` | lemma | `def-interval`, `def-intermediate-value-property`, `def-monotone-function` | D1–D4 |
| 7 | `cor-injective-or-monotone-derivative-is-continuous` | corollary | `thm-darboux-theorem-for-derivatives`, `lem-injective-darboux-function-is-strictly-monotone`, `lem-monotone-with-interval-image-is-continuous`, `def-monotone-function` | D1–D4 |
| 8 | `lem-cauchy-mean-value-quotient-form` | lemma | `thm-cauchy-mean-value`, `thm-rolle`, `def-derivative`, `def-one-sided-limits` | D1–D4 |
| 9 | `thm-lhopital-zero-over-zero` | theorem | `lem-cauchy-mean-value-quotient-form`, `def-one-sided-limits`, `def-limits-at-infinity`, `def-extended-reals`, `thm-algebra-of-function-limits`, `def-function-limit`, `thm-chain-rule`, `thm-algebra-of-derivatives` | D1–D4 |
| 10 | `thm-lhopital-infinity-over-infinity` | theorem | `lem-cauchy-mean-value-quotient-form`, `def-one-sided-limits`, `def-limits-at-infinity`, `def-extended-reals`, `thm-algebra-of-function-limits`, `def-function-limit` | D1–D4 |
| 11 | `def-taylor-polynomial-and-remainder` | definition | `def-higher-derivatives-and-smoothness`, `def-factorial-and-falling-factorial`, `def-finite-sum`, `lem-finite-sum-laws`, `def-integer-power`, `def-canonical-natural`, `lem-of-naturals-positive` | D1–D4 |
| 12 | `lem-taylor-polynomial-derivatives` | lemma | `def-taylor-polynomial-and-remainder`, `lem-derivative-of-a-power`, `thm-algebra-of-derivatives`, `def-factorial-and-falling-factorial`, `lem-finite-sum-laws`, `def-canonical-natural`, `lem-of-naturals-positive` | D1–D4 |
| 13 | `thm-taylor-schlomilch-roche-remainder` | theorem | `def-taylor-polynomial-and-remainder`, `lem-taylor-polynomial-derivatives`, `lem-higher-order-rolle`, `thm-general-leibniz-rule`, `def-factorial-and-falling-factorial`, `def-integer-power`, `def-canonical-natural`, `lem-of-naturals-positive` | D1–D4 |
| 14 | `cor-taylor-lagrange-and-cauchy-remainders` | corollary | `thm-taylor-schlomilch-roche-remainder`, `def-factorial-and-falling-factorial`, `def-integer-power`, `def-canonical-natural` | D1–D4 |
| 15 | `thm-taylor-peano-remainder` | theorem | `def-taylor-polynomial-and-remainder`, `lem-taylor-polynomial-derivatives`, `lem-cauchy-mean-value-quotient-form`, `def-function-limit`, `thm-algebra-of-function-limits`, `thm-induction-principle` | D1–D4 |
| 16 | `cor-taylor-remainder-bound` | corollary | `cor-taylor-lagrange-and-cauchy-remainders`, `lem-of-abs-value`, `def-factorial-and-falling-factorial`, `def-canonical-natural`, `lem-of-naturals-positive` | D1–D4 |
| 17 | `thm-second-derivative-test` | theorem | `def-higher-derivatives-and-smoothness`, `thm-monotonicity-from-the-derivative`, `def-continuity-real`, `def-derivative` | D1–D4 |
| 18 | `thm-first-nonzero-derivative-test` | theorem | `thm-taylor-peano-remainder`, `def-taylor-polynomial-and-remainder`, `lem-power-monotone`, `lem-sign-preservation-near-a-limit`, `def-integer-power` | D1–D4 |
| 19 | `fs-zero-second-derivative-decides-extremum` | false-statement | `thm-second-derivative-test`, `thm-first-nonzero-derivative-test` | D1–D4 |
| 20 | `rem-darboux-lhopital-taylor-scope` | remark | `def-higher-derivatives-and-smoothness`, `thm-darboux-theorem-for-derivatives`, `thm-lhopital-zero-over-zero`, `thm-lhopital-infinity-over-infinity`, `thm-taylor-schlomilch-roche-remainder`, `thm-taylor-peano-remainder` | D1–D4 |

### 156: `darboux-lhopital-and-taylor-examples` (B, 8 items)

Page requirements: `darboux-lhopital-and-taylor`. Forward references: none.

| # | ID | Kind | Direct dependencies | Source set |
|---:|---|---|---|---|
| 1 | `ex-piecewise-polynomial-periodic-oscillator` | example | `lem-integer-part`, `def-higher-derivatives-and-smoothness`, `thm-algebra-of-derivatives`, `lem-derivative-of-a-power`, `def-integer-power` | D1–D4 |
| 2 | `ex-differentiable-function-with-discontinuous-derivative` | example | `ex-piecewise-polynomial-periodic-oscillator`, `thm-algebra-of-derivatives`, `thm-chain-rule`, `lem-derivative-of-a-power`, `thm-darboux-theorem-for-derivatives`, `def-derivative` | D1–D4 |
| 3 | `ex-xk-abs-x-smoothness-threshold` | example | `def-higher-derivatives-and-smoothness`, `lem-derivative-of-a-power`, `def-abs-value`, `def-integer-power`, `def-canonical-natural` | D1–D4 |
| 4 | `ex-positive-derivative-at-zero-with-no-local-monotonicity` | example | `ex-piecewise-polynomial-periodic-oscillator`, `cor-mean-value-theorem`, `thm-algebra-of-derivatives`, `thm-chain-rule`, `def-derivative`, `def-monotone-function` | D1–D4 |
| 5 | `ex-lhopital-rational-removable-quotient` | example | `thm-lhopital-zero-over-zero`, `thm-algebra-of-derivatives`, `lem-derivative-of-a-power`, `thm-algebra-of-function-limits` | D1–D4 |
| 6 | `cex-lhopital-converse` | counterexample | `ex-piecewise-polynomial-periodic-oscillator`, `thm-lhopital-zero-over-zero`, `thm-chain-rule`, `thm-algebra-of-derivatives`, `lem-derivative-of-a-power` | D1–D4 |
| 7 | `ex-geometric-function-taylor-remainder` | example | `def-taylor-polynomial-and-remainder`, `cor-taylor-remainder-bound`, `lem-finite-sum-laws`, `thm-algebra-of-derivatives`, `def-factorial-and-falling-factorial`, `def-canonical-natural` | D1–D4 |
| 8 | `ex-zero-second-derivative-extremum-trichotomy` | example | `fs-zero-second-derivative-decides-extremum`, `thm-first-nonzero-derivative-test`, `lem-derivative-of-a-power`, `lem-power-monotone`, `def-integer-power` | D1–D4 |

### 175: `the-exponential-function` (A, 19 items)

Page requirements: `power-series-and-real-analytic-functions`.

| # | ID | Kind | Direct dependencies | Source set |
|---:|---|---|---|---|
| 1 | `def-real-exponential-function-and-e` | definition | `def-real-power-series-and-radius-of-convergence`, `def-factorial-and-falling-factorial`, `def-integer-power`, `def-canonical-natural`, `lem-of-naturals-positive`, `def-series` | E1–E3 |
| 2 | `lem-exponential-series-has-infinite-radius` | lemma | `def-real-exponential-function-and-e`, `thm-direct-comparison-test`, `thm-geometric-series`, `lem-absolute-convergence-implies-convergence`, `thm-of-archimedean`, `def-factorial-and-falling-factorial`, `def-canonical-natural` | E1–E3 |
| 3 | `thm-exponential-addition-formula` | theorem | `lem-exponential-series-has-infinite-radius`, `lem-cauchy-product-of-real-power-series`, `thm-binomial-theorem`, `def-binomial-coefficient`, `def-factorial-and-falling-factorial`, `def-canonical-natural`, `def-finite-sum`, `lem-finite-sum-laws` | E1–E3 |
| 4 | `cor-exponential-reciprocal-and-positivity` | corollary | `thm-exponential-addition-formula`, `def-real-exponential-function-and-e`, `lem-of-sign-rules`, `def-complete-ordered-field` | E1–E3 |
| 5 | `thm-derivative-of-exponential` | theorem | `lem-exponential-series-has-infinite-radius`, `thm-termwise-differentiation-of-a-real-power-series`, `cor-power-series-sums-are-smooth-with-coefficient-formula`, `def-factorial-and-falling-factorial`, `def-canonical-natural` | E1–E3 |
| 6 | `thm-exponential-is-strictly-increasing` | theorem | `thm-derivative-of-exponential`, `cor-exponential-reciprocal-and-positivity`, `cor-mean-value-theorem`, `cor-power-series-sums-are-continuous` | E1–E3 |
| 7 | `thm-exponential-limits-and-range` | theorem | `def-real-exponential-function-and-e`, `cor-exponential-reciprocal-and-positivity`, `def-limits-at-infinity`, `def-divergence-to-infinity` | E1–E3 |
| 8 | `cor-exponential-is-a-bijection-onto-positive-reals` | corollary | `thm-exponential-is-strictly-increasing`, `thm-exponential-limits-and-range`, `thm-intermediate-value`, `cor-power-series-sums-are-continuous` | E1–E3 |
| 9 | `thm-exponential-beats-every-polynomial` | theorem | `def-real-exponential-function-and-e`, `cor-exponential-reciprocal-and-positivity`, `def-limits-at-infinity`, `def-factorial-and-falling-factorial`, `def-canonical-natural`, `lem-finite-sum-laws` | E1–E3 |
| 10 | `thm-exponential-ivp-uniqueness` | theorem | `thm-derivative-of-exponential`, `cor-exponential-reciprocal-and-positivity`, `thm-algebra-of-derivatives`, `thm-chain-rule`, `cor-zero-derivative-implies-constant` | E1–E3 |
| 11 | `thm-normalized-exponential-functional-equation` | theorem | `thm-exponential-ivp-uniqueness`, `thm-exponential-addition-formula`, `cor-exponential-reciprocal-and-positivity`, `def-derivative`, `def-rational-power`, `thm-nth-roots-exist`, `lem-rat-embeds-dense`, `def-continuity-real` | E1–E3 |
| 12 | `lem-scaled-binomial-coefficients-converge` | lemma | `def-binomial-coefficient`, `def-factorial-and-falling-factorial`, `def-finite-sum`, `lem-finite-sum-laws`, `thm-algebra-of-limits`, `def-canonical-natural` | E1–E3 |
| 13 | `thm-exponential-product-limit` | theorem | `lem-scaled-binomial-coefficients-converge`, `thm-binomial-theorem`, `lem-exponential-series-has-infinite-radius`, `def-real-exponential-function-and-e`, `def-real-limit`, `lem-finite-sum-laws` | E1–E3 |
| 14 | `thm-picard-iterates-for-exponential` | theorem | `def-oriented-integral`, `thm-ftc-second-part`, `thm-uniform-limit-interchanges-riemann-integration`, `thm-power-series-uniform-on-compact-subintervals`, `def-real-exponential-function-and-e`, `def-factorial-and-falling-factorial`, `def-finite-sum`, `lem-finite-sum-laws`, `thm-induction-principle` | E1–E3 |
| 15 | `thm-exponential-definition-equivalence` | theorem | `def-real-exponential-function-and-e`, `thm-exponential-product-limit`, `thm-exponential-ivp-uniqueness`, `thm-normalized-exponential-functional-equation`, `thm-picard-iterates-for-exponential` | E1–E3 |
| 16 | `lem-exponential-factorial-tail-bound` | lemma | `def-real-exponential-function-and-e`, `thm-geometric-series`, `def-factorial-and-falling-factorial`, `def-finite-sum`, `lem-finite-sum-laws`, `def-canonical-natural`, `lem-of-naturals-positive` | E1–E3 |
| 17 | `cor-two-less-than-e-less-than-three` | corollary | `lem-exponential-factorial-tail-bound`, `def-real-exponential-function-and-e`, `def-finite-sum`, `lem-finite-sum-laws` | E1–E3 |
| 18 | `thm-e-is-irrational` | theorem | `lem-exponential-factorial-tail-bound`, `def-real-exponential-function-and-e`, `def-rationals`, `def-integers`, `def-factorial-and-falling-factorial`, `thm-of-archimedean`, `def-canonical-natural` | E1–E3 |
| 19 | `rem-exponential-roadmap-and-circularity` | remark | `thm-exponential-definition-equivalence`, `cor-exponential-is-a-bijection-onto-positive-reals`, `thm-exponential-beats-every-polynomial`, `thm-e-is-irrational` | E1–E3 |

### 176: `the-exponential-function-examples` (B, 6 items)

Page requirements: `the-exponential-function`. Forward references: none.

| # | ID | Kind | Direct dependencies | Source set |
|---:|---|---|---|---|
| 1 | `ex-exponential-product-limit-at-negative-input` | example | `thm-exponential-product-limit`, `cor-exponential-reciprocal-and-positivity` | E1–E3 |
| 2 | `cex-exponential-product-limit-not-uniform-on-r` | counterexample | `thm-exponential-product-limit`, `thm-exponential-addition-formula`, `cor-two-less-than-e-less-than-three`, `def-pointwise-uniform-and-uniformly-cauchy-convergence`, `def-integer-power` | E1–E3 |
| 3 | `ex-flat-exponential-function` | example | `thm-exponential-beats-every-polynomial`, `thm-derivative-of-exponential`, `thm-chain-rule`, `thm-algebra-of-derivatives`, `cor-power-series-sums-are-smooth-with-coefficient-formula`, `cor-exponential-reciprocal-and-positivity`, `def-factorial-and-falling-factorial` | E1–E3 |
| 4 | `ex-smooth-compactly-supported-bump` | example | `ex-flat-exponential-function`, `thm-derivative-of-exponential`, `thm-chain-rule`, `thm-algebra-of-derivatives`, `cor-power-series-sums-are-smooth-with-coefficient-formula`, `def-metric-interior-closure-boundary` | E1–E3 |
| 5 | `cex-discontinuous-multiplicative-cauchy-solution` | counterexample | `thm-every-independent-set-extends-to-a-basis`, `def-vector-space`, `def-additive-function`, `cor-irrationals-uncountable`, `thm-normalized-exponential-functional-equation`, `thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`, `def-axiom-of-choice` | E1–E3 |
| 6 | `cex-exponential-not-uniformly-continuous-on-r` | counterexample | `thm-derivative-of-exponential`, `cor-mean-value-theorem`, `thm-exponential-beats-every-polynomial`, `def-uniform-continuity-real`, `thm-heine-cantor-r` | E1–E3 |

### 235: `the-riemann-integral-in-rn-and-jordan-content` (A, 30 items)

Page requirements: `the-riemann-integral`, `rn-as-a-normed-space`.

| # | ID | Kind | Direct dependencies | Source set |
|---:|---|---|---|---|
| 1 | `def-multidimensional-rectangle-and-volume` | definition | `lem-metrics-on-rn`, `def-p-norms-on-rn`, `def-finite-sum`, `lem-finite-sum-laws`, `def-interval`, `def-canonical-natural`, `lem-of-naturals-positive` | R1–R6 |
| 2 | `def-multidimensional-grid-partition` | definition | `def-multidimensional-rectangle-and-volume`, `def-partition-and-refinement`, `thm-induction-principle`, `def-finite-sum`, `lem-finite-sum-laws`, `def-p-norms-on-rn`, `lem-p-norms-are-norms-and-induce-the-published-metrics`, `lem-finite-set-has-max`, `def-max-min` | R1–R6 |
| 3 | `def-multidimensional-darboux-sums` | definition | `def-multidimensional-grid-partition`, `def-multidimensional-rectangle-and-volume`, `def-bounded-set`, `def-complete-ordered-field`, `def-infimum`, `lem-sup-unique`, `lem-finite-sum-laws` | R1–R6 |
| 4 | `lem-multidimensional-refinement-inequalities` | lemma | `def-multidimensional-darboux-sums`, `def-multidimensional-grid-partition`, `def-multidimensional-rectangle-and-volume`, `def-finite-sum`, `lem-finite-sum-laws`, `thm-induction-principle`, `def-canonical-natural` | R1–R6 |
| 5 | `def-multidimensional-darboux-integral` | definition | `def-multidimensional-darboux-sums`, `lem-multidimensional-refinement-inequalities`, `def-multidimensional-grid-partition`, `def-complete-ordered-field`, `def-infimum`, `lem-sup-unique`, `def-bounded-set` | R1–R6 |
| 6 | `thm-multidimensional-riemann-criterion` | theorem | `def-multidimensional-darboux-integral`, `def-multidimensional-darboux-sums`, `lem-multidimensional-refinement-inequalities`, `def-multidimensional-grid-partition`, `lem-sup-epsilon`, `lem-inf-epsilon` | R1–R6 |
| 7 | `def-multidimensional-tagged-partition-and-riemann-sum` | definition | `def-multidimensional-grid-partition`, `def-multidimensional-darboux-sums`, `def-multidimensional-rectangle-and-volume`, `lem-finite-choice`, `def-choice-function`, `def-bounded-set` | R1–R6 |
| 8 | `thm-multidimensional-darboux-equals-riemann` | theorem | `def-multidimensional-tagged-partition-and-riemann-sum`, `def-multidimensional-darboux-integral`, `thm-multidimensional-riemann-criterion`, `lem-multidimensional-refinement-inequalities`, `def-multidimensional-darboux-sums`, `def-multidimensional-grid-partition`, `lem-sup-epsilon`, `lem-inf-epsilon`, `lem-finite-choice` | R1–R6 |
| 9 | `cor-one-dimensional-and-multidimensional-riemann-agree` | corollary | `thm-multidimensional-darboux-equals-riemann`, `def-multidimensional-darboux-integral`, `def-multidimensional-tagged-partition-and-riemann-sum`, `def-darboux-integral`, `def-tagged-partition-and-riemann-sum`, `thm-darboux-equals-riemann`, `lem-metrics-on-rn`, `lem-p-norms-are-norms-and-induce-the-published-metrics` | R1–R6 |
| 10 | `thm-multidimensional-integral-properties` | theorem | `def-multidimensional-darboux-integral`, `thm-multidimensional-riemann-criterion`, `def-multidimensional-darboux-sums`, `def-multidimensional-grid-partition`, `lem-finite-sum-laws`, `def-abs-value`, `lem-of-abs-value` | R1–R6 |
| 11 | `thm-continuous-on-a-rectangle-is-riemann-integrable` | theorem | `thm-multidimensional-riemann-criterion`, `def-multidimensional-darboux-sums`, `def-multidimensional-grid-partition`, `def-multidimensional-rectangle-and-volume`, `thm-heine-borel-rn`, `thm-heine-cantor-metric`, `def-metric-continuity`, `def-metric-compactness`, `lem-p-norms-are-norms-and-induce-the-published-metrics`, `thm-continuous-image-of-a-compact-space-is-compact`, `thm-extreme-value-metric`, `def-bounded-set` | R1–R6 |
| 12 | `def-null-and-content-zero-in-rn` | definition | `def-multidimensional-rectangle-and-volume`, `def-series`, `thm-nonnegative-series-bounded-partial-sums`, `def-finite-sum`, `lem-finite-sum-laws`, `def-countable`, `def-complete-ordered-field` | R1–R6 |
| 13 | `cor-one-dimensional-null-and-content-zero-agree` | corollary | `def-null-and-content-zero-in-rn`, `def-measure-zero-and-content-zero`, `def-multidimensional-rectangle-and-volume`, `lem-metrics-on-rn`, `lem-p-norms-are-norms-and-induce-the-published-metrics` | R1–R6 |
| 14 | `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions` | lemma | `def-null-and-content-zero-in-rn`, `def-countable-choice`, `thm-n-cross-n-countable`, `thm-geometric-series`, `def-series`, `thm-nonnegative-series-bounded-partial-sums`, `def-finite-sum`, `lem-finite-sum-laws`, `def-integer-power` | R1–R6 |
| 15 | `lem-compact-null-iff-content-zero-in-rn` | lemma | `def-null-and-content-zero-in-rn`, `thm-heine-borel-rn`, `def-metric-compactness`, `def-metric-topology`, `def-multidimensional-rectangle-and-volume`, `thm-geometric-series`, `def-finite-sum`, `lem-finite-sum-laws` | R1–R6 |
| 16 | `def-oscillation-in-rn` | definition | `def-oscillation`, `def-extended-reals`, `lem-extended-reals-complete`, `def-metric-ball`, `lem-metrics-on-rn`, `lem-p-norms-are-norms-and-induce-the-published-metrics`, `def-bounded-set`, `def-infimum`, `lem-of-abs-value` | R1–R6 |
| 17 | `lem-oscillation-characterisation-in-rn` | lemma | `def-oscillation-in-rn`, `def-metric-continuity`, `def-metric-ball`, `def-metric-topology`, `lem-p-norms-are-norms-and-induce-the-published-metrics`, `def-bounded-set` | R1–R6 |
| 18 | `lem-finite-cube-covers-admit-grid-control` | lemma | `def-null-and-content-zero-in-rn`, `def-multidimensional-grid-partition`, `def-multidimensional-rectangle-and-volume`, `def-finite-sum`, `lem-finite-sum-laws`, `def-integer-power`, `thm-algebra-of-continuous-functions`, `def-continuity-real`, `lem-finite-set-has-max`, `def-max-min`, `thm-induction-principle`, `cor-archimedean-reciprocal` | R1–R6 |
| 19 | `thm-lebesgue-criterion-in-rn` | theorem | `thm-multidimensional-riemann-criterion`, `def-multidimensional-darboux-sums`, `def-multidimensional-darboux-integral`, `def-multidimensional-grid-partition`, `def-null-and-content-zero-in-rn`, `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions`, `lem-compact-null-iff-content-zero-in-rn`, `def-oscillation-in-rn`, `lem-oscillation-characterisation-in-rn`, `lem-finite-cube-covers-admit-grid-control`, `thm-heine-borel-rn`, `def-countable-choice`, `cor-archimedean-reciprocal`, `lem-integer-part` | R1–R6 |
| 20 | `def-jordan-inner-and-outer-content` | definition | `def-multidimensional-rectangle-and-volume`, `def-multidimensional-grid-partition`, `def-finite-sum`, `lem-finite-sum-laws`, `def-bounded-set`, `def-complete-ordered-field`, `def-infimum`, `lem-sup-unique` | R1–R6 |
| 21 | `thm-jordan-content-and-indicator-integrability` | theorem | `def-jordan-inner-and-outer-content`, `def-multidimensional-darboux-integral`, `def-multidimensional-darboux-sums`, `thm-multidimensional-riemann-criterion`, `def-multidimensional-grid-partition`, `lem-multidimensional-refinement-inequalities`, `def-bounded-set` | R1–R6 |
| 22 | `thm-jordan-boundary-criterion` | theorem | `thm-jordan-content-and-indicator-integrability`, `thm-lebesgue-criterion-in-rn`, `def-metric-interior-closure-boundary`, `thm-heine-borel-rn`, `lem-compact-null-iff-content-zero-in-rn`, `def-null-and-content-zero-in-rn`, `def-jordan-inner-and-outer-content` | R1–R6 |
| 23 | `def-riemann-integral-over-a-jordan-set` | definition | `def-jordan-inner-and-outer-content`, `thm-jordan-content-and-indicator-integrability`, `def-multidimensional-darboux-integral`, `def-multidimensional-rectangle-and-volume`, `def-bounded-set` | R1–R6 |
| 24 | `lem-jordan-set-integral-well-defined` | lemma | `def-riemann-integral-over-a-jordan-set`, `thm-multidimensional-integral-properties`, `def-multidimensional-grid-partition`, `def-multidimensional-rectangle-and-volume` | R1–R6 |
| 25 | `thm-continuous-functions-on-compact-jordan-sets-are-integrable` | theorem | `def-riemann-integral-over-a-jordan-set`, `lem-jordan-set-integral-well-defined`, `thm-jordan-boundary-criterion`, `thm-lebesgue-criterion-in-rn`, `def-metric-continuity`, `def-metric-interior-closure-boundary`, `def-metric-compactness`, `thm-continuous-image-of-a-compact-space-is-compact`, `def-bounded-set` | R1–R6 |
| 26 | `cor-jordan-content-finite-additivity` | corollary | `thm-jordan-content-and-indicator-integrability`, `thm-multidimensional-integral-properties`, `def-jordan-inner-and-outer-content`, `def-null-and-content-zero-in-rn`, `lem-finite-sum-laws` | R1–R6 |
| 27 | `thm-lipschitz-images-of-null-sets-in-rn-are-null` | theorem | `def-null-and-content-zero-in-rn`, `def-lipschitz-holder-contraction`, `def-p-norms-on-rn`, `lem-p-norms-are-norms-and-induce-the-published-metrics`, `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`, `def-multidimensional-rectangle-and-volume`, `def-integer-power`, `def-canonical-natural`, `lem-finite-sum-laws` | R1–R6 |
| 28 | `thm-graphs-of-continuous-functions-have-content-zero` | theorem | `def-null-and-content-zero-in-rn`, `def-multidimensional-grid-partition`, `def-multidimensional-rectangle-and-volume`, `thm-heine-borel-rn`, `thm-heine-cantor-metric`, `def-metric-continuity`, `lem-p-norms-are-norms-and-induce-the-published-metrics`, `lem-integer-part`, `def-canonical-natural`, `lem-finite-sum-laws` | R1–R6 |
| 29 | `lem-product-lower-bound-for-jordan-content` | lemma | `def-jordan-inner-and-outer-content`, `def-multidimensional-rectangle-and-volume`, `def-multidimensional-grid-partition`, `def-finite-sum`, `lem-finite-sum-laws`, `def-interval` | R1–R6 |
| 30 | `rem-multidimensional-riemann-conventions-and-scope` | remark | `cor-one-dimensional-and-multidimensional-riemann-agree`, `cor-one-dimensional-null-and-content-zero-agree`, `thm-lebesgue-criterion-in-rn`, `thm-jordan-boundary-criterion`, `def-riemann-integral-over-a-jordan-set`, `thm-lipschitz-images-of-null-sets-in-rn-are-null`, `thm-graphs-of-continuous-functions-have-content-zero` | R1–R6 |

### 236: `the-riemann-integral-in-rn-and-jordan-content-examples` (B, 8 items)

Page requirements: `the-riemann-integral-in-rn-and-jordan-content`. Forward references: none.

| # | ID | Kind | Direct dependencies | Source set |
|---:|---|---|---|---|
| 1 | `ex-unit-box-volume-and-integral` | example | `def-multidimensional-rectangle-and-volume`, `def-multidimensional-grid-partition`, `def-multidimensional-darboux-sums`, `def-multidimensional-darboux-integral`, `lem-finite-sum-laws`, `def-finite-sum` | R1–R6 |
| 2 | `cex-rational-points-in-unit-square-have-no-jordan-content` | counterexample | `thm-jordan-boundary-criterion`, `def-null-and-content-zero-in-rn`, `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions`, `thm-rationals-countable`, `thm-n-cross-n-countable`, `def-countable`, `lem-q-and-irrationals-dense-r`, `def-metric-interior-closure-boundary`, `lem-compact-null-iff-content-zero-in-rn`, `thm-jordan-content-and-indicator-integrability`, `ex-unit-box-volume-and-integral` | R1–R6 |
| 3 | `cex-compact-set-without-jordan-content` | counterexample | `def-fat-cantor-set`, `thm-fat-cantor-set-has-positive-measure`, `lem-product-lower-bound-for-jordan-content`, `thm-jordan-boundary-criterion`, `thm-heine-borel-rn`, `def-metric-interior-closure-boundary`, `def-jordan-inner-and-outer-content` | R1–R6 |
| 4 | `cex-bounded-open-set-with-nonnull-boundary` | counterexample | `cex-compact-set-without-jordan-content`, `def-fat-cantor-set`, `thm-fat-cantor-set-has-positive-measure`, `lem-product-lower-bound-for-jordan-content`, `thm-jordan-boundary-criterion`, `def-metric-interior-closure-boundary`, `def-jordan-inner-and-outer-content` | R1–R6 |
| 5 | `ex-parabola-graph-has-content-zero` | example | `thm-graphs-of-continuous-functions-have-content-zero`, `thm-algebra-of-continuous-functions`, `def-integer-power`, `def-canonical-natural`, `lem-of-naturals-positive`, `def-null-and-content-zero-in-rn` | R1–R6 |
| 6 | `ex-triangle-has-jordan-content-one-half` | example | `def-jordan-inner-and-outer-content`, `thm-jordan-content-and-indicator-integrability`, `thm-jordan-boundary-criterion`, `thm-graphs-of-continuous-functions-have-content-zero`, `def-multidimensional-grid-partition`, `def-multidimensional-rectangle-and-volume`, `def-finite-sum`, `lem-finite-sum-laws`, `def-canonical-natural`, `lem-of-naturals-positive`, `thm-induction-principle` | R1–R6 |
| 7 | `ex-cantor-slab-has-content-zero` | example | `thm-cantor-set-properties`, `def-measure-zero-and-content-zero`, `def-jordan-inner-and-outer-content`, `thm-jordan-content-and-indicator-integrability`, `def-multidimensional-rectangle-and-volume`, `lem-integer-part`, `def-canonical-natural`, `cex-compact-set-without-jordan-content` | R1–R6 |
| 8 | `rem-jordan-rectifiable-terminology` | remark | `thm-jordan-boundary-criterion`, `def-jordan-inner-and-outer-content` | R1–R6 |

## 4. Binding proof and dependency obligations

### 4.1 Darboux/L'Hôpital/Taylor

- `thm-darboux-theorem-for-derivatives` proves the intermediate-value property from EVT and Fermat. It must not cite the ordinary IVT as though differentiability implied continuity of the derivative.
- `cor-injective-or-monotone-derivative-is-continuous` is the valid partial converse. The source-plan clause “Darboux + Baire-1 implies continuous” is false: every derivative is Baire class one and Darboux, while `ex-differentiable-function-with-discontinuous-derivative` supplies a discontinuous derivative. Keeping that clause would create an internal contradiction and is a fatal credibility defect.
- `thm-lhopital-zero-over-zero` reduces limits at (\pm\infty) by (t=1/x). A fixed-basepoint Cauchy-MVT proof does **not** work for (0/0) at infinity because the basepoint constants are not negligible compared with a denominator tending to zero.
- `thm-lhopital-infinity-over-infinity` may use a fixed remote basepoint because its denominator diverges. The two L'Hôpital theorems must give finite and infinite target limits by separate real order estimates; no arithmetic with (\pm\infty) is allowed.
- `thm-taylor-peano-remainder` uses induction plus Cauchy MVT. Repeated L'Hôpital would silently require continuity of (f^{(n)}), stronger than the stated (n)-times-differentiable hypothesis.
- `thm-taylor-schlomilch-roche-remainder` restricts the parameter (p) to naturals (1\le p\le n+1). This prevents undefined real powers of a possibly negative base. With the scaffold's degree-(n) indexing, (p=n+1) is Lagrange and (p=1) is Cauchy.
- `def-taylor-polynomial-and-remainder`, the Leibniz rule, and every Taylor formula must distinguish the natural factorial/binomial coefficients from their real embeddings `iota`.
- The corrected smoothness-threshold family is (x^k|x|), which is (C^k) and not (C^{k+1}). The prose-plan family (x^{k+1}|x|) is off by one and would state a false classification.
- The spline oscillator is polynomial plus floor only. It avoids undeclared sine/cosine dependencies and lets the discontinuous derivative, no-local-monotonicity, and L'Hôpital-converse examples share one audited construction.
- The integral Taylor remainder is deferred to `properties-of-the-integral-and-the-working-ftc`; Borel's theorem and Dini derivatives are not dependency-closed here.

### 4.2 Exponential function

- `def-real-exponential-function-and-e` must carry `justified_by: [lem-exponential-series-has-infinite-radius]` when authored, because convergence is discharged by the following lemma.
- The construction order is binding: series convergence → Cauchy-product addition → reciprocal/positivity → derivative → monotonicity/range → IVP and functional characterizations. Reversing these arrows risks circular proofs.
- `thm-exponential-addition-formula` must perform the embedded-natural coefficient calculation. It cannot simply identify the Cauchy product with the exponential series in prose.
- `thm-exponential-product-limit` uses a fixed finite head and an exponential-series tail. Coefficientwise convergence alone is insufficient to interchange the growing finite sum and limit.
- `thm-normalized-exponential-functional-equation` states its normalization in both clauses. Without (F'(0)=1), or alternatively (F(1)=e) plus continuity, the multiplicative Cauchy equation has a one-parameter family of regular solutions.
- `thm-picard-iterates-for-exponential` proves each iterate is the exact partial sum before taking a compact-uniform limit. The uniform-limit integration theorem, not pointwise convergence, passes the limit through the integral.
- The flat-function derivative estimate must reduce odd powers of (1/x) to an integer-power bound; it may not use undeveloped arbitrary real powers.
- The discontinuous multiplicative solution spends full Choice through a Hamel basis. Choose the additive map with (h(1)=1), so (F(1)=e); if (F) were continuous, the normalized characterization and injectivity of `exp` would force (h(x)=x), contradicting construction.
- A general smooth partition of unity and a smooth nowhere-analytic function are omitted. The compactly supported bump is dependency-closed; those broader constructions are not necessary for this pair.

### 4.3 Multidimensional Riemann/Jordan content

- Fix (m\ge1). The published (\mathbb R^m) metric and compactness statements do not cover (m=0).
- Cell sums are recursively nested `def-finite-sum` operations. The fixed page prerequisites do not license an undeclared abstract finite-index-set summation API.
- The grid definition must prove coverage, disjointness of interiors, volume additivity, refinement, common refinement, and mesh facts before Darboux sums use them.
- The tagged/Darboux agreement depends on the quantitative boundary-slab estimate. Closed grid cells overlap on faces; “the cells are disjoint” is not a valid estimate.
- The (m=1) integration and nullity dictionaries are load-bearing. (\mathbb R^1) is isometric to, but not literally identical with, (\mathbb R).
- Nullity/content zero use countable/finite **cube** covers, while Jordan outer content uses finite listed rectangles. Graph and Cantor-slab arguments must explicitly convert their geometry into cube covers.
- `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions` spends countable choice and must say so.
- `thm-lebesgue-criterion-in-rn` needs `lem-finite-cube-covers-admit-grid-control`; skipping that lemma leaves the cover-to-Darboux direction unjustified.
- `def-riemann-integral-over-a-jordan-set` must carry `justified_by: [lem-jordan-set-integral-well-defined]` when authored.
- Density proves that the rational points have full boundary, but not that the unit square is nonnull. The counterexample must use compact-null/content-zero equivalence plus the computed unit-box content.
- The planned “(C^1) images of null sets are null” is deferred: the total derivative and the compact local-Lipschitz theorem are not in the declared closure. The scaffold proves the honest equal-dimensional Lipschitz-image theorem instead; it does not claim a dimension-changing result.
- Fubini and iterated integrals are next-page material and are not used even for the triangle computation.

## 5. Boundary and convention ledger

- (mathbb N) contains (0). Thus (C^0) is continuity, the exponential sum starts at (n=0), and all reciprocal mesh indices use shifts such as (n+1) when positivity is needed.
- Natural factorials, falling factorials, binomial coefficients, and finite counts are sets/naturals; real formulas use their canonical embeddings. This is explicit in every relevant strategy.
- Darboux/Taylor statements include (n=0), (x=a), and one-sided interval endpoints separately. L'Hôpital always works on a punctured approach region and verifies denominator nonvanishing before division.
- Multidimensional integration uses (m\ge1) and nondegenerate rectangles for the main integral. Degenerate rectangles have zero volume and are handled as a convention, not allowed to break mesh definitions.
- Infinity is not a real endpoint. `def-limits-at-infinity` supplies direct quantifiers; `def-extended-limits` is sequence-only and is deliberately **not** cited for function limits.
- The exponential page defines neither logarithm nor arbitrary real powers. `def-rational-power` is used only where its published rational-exponent statement is exact.
- B pages are leaves. They depend only on their A page, published backward items, and earlier items on the same B page.

## 6. Step-3 recommendations

1. Adopt the six page objects unchanged unless Alpha deliberately narrows scope.
2. Remove the stale `sine-cosine-and-the-definition-of-pi` forward reference from the Darboux B page; the new oscillator makes it unnecessary.
3. Amend RA-16 prose to delete the false Darboux+Baire-one claim, correct (x^{k+1}|x|) to (x^k|x|), and record the dependency-closed deferrals of integral remainder, Borel, and Dini derivatives.
4. Amend RA-26 prose to retain E1/E2/E3/E6/E11, the factorial tail and irrationality of (e), the flat and compact bump, the discontinuous multiplicative solution, and nonuniform convergence; explicitly defer general partitions of unity and nowhere-analytic (C^\infty) examples.
5. Amend RA-37 prose with the cube-cover, (m=1) dictionary, equal-dimensional Lipschitz replacement, and Fubini boundary described above.
6. Consider adding `compactness-in-metric-spaces` to the RA-37 A-page `requires`: `thm-continuous-on-a-rectangle-is-riemann-integrable` directly cites metric Heine–Borel/Heine–Cantor machinery. The item dependencies are already published and exact, so this is a page-level provenance improvement, not an item-closure blocker.
7. When splicing artifacts, include `research/frontier-6-batch-2.pages.json` once and exclude the duplicate RA-37 objects in the dormant Frontier-3 candidate file.

## 7. Deferred claims, forward references, and confidence

Forward item/page references retained: **none**.

Deferred until their prerequisites are built:

- Taylor's integral remainder;
- Borel's theorem and Dini derivatives;
- logarithms and arbitrary real powers;
- general smooth partitions of unity and smooth nowhere-analytic constructions;
- (C^1) images of null sets in the multivariable setting;
- Fubini, iterated integration, and change of variables.

Confidence:

- Darboux/L'Hôpital/Taylor: **high**, after correcting two source-plan falsehoods and two proof-strategy traps.
- Exponential: **high**; the proof order is acyclic and every construction is log-free.
- Multidimensional Riemann/Jordan: **high on mathematical scope, medium-high on Step-5 workload**. The 30-item A page is intentionally decomposed because collapsing grid well-definedness, cover conversion, or Jordan independence would create fatal gaps.
