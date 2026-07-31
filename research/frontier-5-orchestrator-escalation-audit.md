# `frontier-5` orchestrator personal escalation audit

**Date:** 2026-07-31
**Scope:** the 22 ids flagged by `tools/touchlog.mjs audit` after the paired
judge/review cycles. This is the required personal review under `LEVELS.md` and
`WORKFLOW.md`; it reads the current proof, its stated facts, the cited route,
and the direct in-level consumers from disk. All in-flight text remains draft.

## Finding

No escalation item should be dropped or weakened. The confirmed defects were
dependency-citation or local-proof-licence errors, not false mathematical
statements. The current proofs have the cited bridge stated directly; their
statements remain supported. Where a model continued to allege an omitted
one-line algebra/triangle/reindexing bridge, the current thirty-second policy
classifies it as nonfatal. The full precheck/plan/dependency/render gates pass.

| id | personal finding on current text | ramification if dropped |
|---|---|---|
| `lem-abel-transform-of-cesaro-means` | Earlier defects were real: index `-1`, diagonal Cauchy-product, positivity, and comparison licences were incomplete. The current facts explicitly establish all four; its remaining triangle/shift observation is a routine nonfatal bridge. | `thm-frobenius-cesaro-implies-abel-summability` loses its transform identity; a weaker replacement would not support that theorem. |
| `thm-bipartite-iff-no-odd-cycle` | Earlier component/nonempty/path-biconditional citations were too weak. The current proof explicitly cites reachability equivalence and the full bipartition definition. | The graph-walk development loses its central structural characterisation; no direct weaker replacement serves the same role. |
| `lem-derived-and-integrated-power-series-have-the-same-radius` | The term-test/boundedness and distance/supremum route is now correctly stated. Repeated DeepSeek calls timed out on the latest context; Terra passed it. | Termwise differentiation and integration lose their common-radius bridge. |
| `thm-wilsons-theorem` | The current finite inverse-pair proof states the field, representative-product, and self-inverse cases needed to reach the factorial congruence. | The prime-modulus number-theory page loses Wilson's theorem; no downstream proof relies on it. |
| `thm-totient-of-a-prime-power` | The prime-greater-than-one and gcd/common-divisor inferences are now directly cited before the unit/nonunit partition. | `thm-euler-totient-product-formula` loses its prime-power factor. |
| `cor-power-series-sums-are-smooth-with-coefficient-formula` | The current induction, falling-factorial recursion, and centre evaluation match their sources. | Re-expansion, real-analytic smoothness, and the isolated-zero lemma lose their derivative coefficient formula. |
| `cex-a-non-locally-finite-poset` | The explicit relation now includes bottom below top and proves a poset; the infinite interval correctly shows convolution is undefined. | The incidence page loses its sharp local-finiteness boundary witness. |
| `ex-units-and-totient-modulo-twelve` | The residue-class multiplication/equality fact is now cited accurately; the computation is correct. | Only a worked illustration is lost. |
| `fs-power-series-uniform-on-its-open-interval` | The uniform-Cauchy criterion now licenses the refutation rather than a bare definition. | The examples page loses an important distinction between compact-subinterval and open-interval uniformity. |
| `lem-local-composition-of-real-power-series` | The absolute Cauchy-product bound is now cited at the precise radius used by the composition proof. | The analytic closure theorem loses its local-composition bridge. |
| `lem-tauber-block-estimate` | The rational-to-real tolerance conversion is now licensed; the estimate itself is unchanged and correct. | Tauber's converse loses its quantitative block control. |
| `lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical` | The continuity/sign-preservation route is now separated and correctly sourced. | The identity theorem loses its local zero-set dichotomy. |
| `thm-abel-limit-theorem` | Direct comparison now explicitly licenses absolute convergence of the transformed series. | The Abel examples and ordinary-to-Abel corollary lose their core limit theorem. |
| `thm-tauber-converse-for-abel-summability` | The reciprocal monotonicity and approach-to-one facts are stated before their use. | The page loses its Tauberian converse; no consumer requires it. |
| `fs-zero-product-property-modulo-n` | The witness and class-equality explanation are correct; the repeated tag objection is nonfatal. | Only a useful composite-modulus false-statement witness is lost. |
| `lem-graph-reachability-is-an-equivalence-relation` | Length-zero, reversal, concatenation, and path reduction are stated in its facts and prove the advertised equivalence. | Connected-component partition and bipartite characterisation lose their path/component foundation. |
| `lem-power-series-reexpansion-double-series` | The binomial row identity, absolute convergence, and Fubini regrouping now agree with their cited statements. | Interior re-expansion loses its double-series justification. |
| `thm-frobenius-cesaro-implies-abel-summability` | The current facts include bounded Cesaro means and the weights sum-to-one calculation; the weighted head/tail proof closes. | The summability page loses the Cesaro-to-Abel implication. |
| `ex-units-modulo-eight-are-not-cyclic` | The four unit classes square to identity, so no element has order four; the cited order criterion is adequate. | Only a compact noncyclic-unit-group example is lost. |
| `lem-straight-line-homotopies-are-continuous` | The proof reduces the formula coordinatewise and uses the subspace criterion correctly; the alleged constant-map gap is routine. | Four homotopy results/examples lose their continuity bridge. |
| `thm-identity-theorem-for-real-analytic-functions-on-an-interval` | The local subtraction, isolated-zero, relative-open-complement, and interval-connectedness route is valid. | The analytic page loses its identity theorem; no direct consumer depends on it. |
| `thm-power-series-reexpansion-at-an-interior-point` | The re-expansion coefficients follow from the current double-series lemma and derivative formula; factorial division is already licensed. | Real-analyticity and the geometric-series re-expansion example lose their central theorem. |

The only unresolved operational issue is not mathematical: DeepSeek suffered
transport resets on the latest contexts of `lem-abel-transform-of-cesaro-means`
and `lem-derived-and-integrated-power-series-have-the-same-radius`. Their Terra
verdicts and all actual paired rejections remain honestly recorded; no missing
DeepSeek pass is represented as a pass.
