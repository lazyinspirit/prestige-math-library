<!-- Recovered by Alpha-a from research/frontier-14-dispatch/refuter-refuter-b1-power-series-core.log.
     Refuters are read-only and could not write this file; the brief was wrong.
     Text below is the agent's own report. -->

### B1-POWER-SERIES-CORE-1

- **Item:** `cor-complex-power-series-sums-have-derivatives-of-all-orders`
- **Location:** `items/cor-complex-power-series-sums-have-derivatives-of-all-orders.md:36`, used at line 46.
- **Defect:** `[L2]` strengthens a one-derivative radius theorem to “every successive formal derivative.” The cited Statement only covers an arbitrary series, its first derivative, and its antiderivative (`items/lem-derived-complex-power-series-has-the-same-radius.md:24-26`). The induction must apply that one-step lemma at each stage rather than attribute the iterated conclusion to it.
- **Severity:** fatal.

### B1-POWER-SERIES-CORE-2

- **Item:** `cor-complex-power-series-coefficient-formula`
- **Location:** `items/cor-complex-power-series-coefficient-formula.md:35`, used at line 43.
- **Defect:** `[L2]` attributes \(0^m=0\) for every positive \(m\) to `def-complex-integer-powers`. Its Definition gives only the recursion \(z^0=1,\ z^{n+1}=z^nz\) and explicitly records \(0^0=1\) (`items/def-complex-integer-powers.md:27-44`). Positive-power vanishing requires an induction not supplied by the cited Definition.
- **Severity:** fatal.

### B1-POWER-SERIES-CORE-3

- **Item:** `thm-complex-trigonometric-and-hyperbolic-power-series`
- **Location:** `items/thm-complex-trigonometric-and-hyperbolic-power-series.md:35`, used at line 47.
- **Defect:** `[L1]` claims the cited exponential Definition states that its series is everywhere absolutely convergent. `items/def-complex-exponential.md:36-47` states the defining series and says convergence is discharged elsewhere, but does not assert absolute convergence. Step 1.1 relies on absolute convergence to separate even and odd subseries. The actual supporting Statement is `items/lem-complex-exponential-series-converges-everywhere.md:26-28`.
- **Severity:** fatal.

### B1-POWER-SERIES-CORE-4

- **Item:** `def-stolz-approach-region-at-one`
- **Location:** `items/def-stolz-approach-region-at-one.md:27`.
- **Defect:** The definition omits that the net or sequence must converge to \(1\). Eventual membership in a fixed \(S_C\) is insufficient.
- **Counterexample:** The constant sequence \(z_n=0\) lies in \(S_1\), since \(|1-0|=1=1-|0|\), but does not converge to \(1\).
- **Severity:** fatal.

## Nonfatal findings

### B1-POWER-SERIES-CORE-5

- **Item:** `thm-uniform-limit-continuous-complex-functions`
- **Location:** `items/thm-uniform-limit-continuous-complex-functions.md:40,44`.
- **Defect:** `[L2]` concerns maps into \(\mathbb R^m\), but the steps apply it directly to complex-valued maps. The cited Statement explicitly assumes \(f:A\to\mathbb R^m\) (`items/thm-componentwise-limits-and-continuity.md:39-45`). The missing bridge is the isometric identification \(\mathbb C=\mathbb R^2\) from `items/def-complex-metric-convergence-and-continuity.md:27-40`.
- **Severity:** nonfatal; this is a sub-30-second identification gap.

### B1-POWER-SERIES-CORE-6

- **Item:** `thm-complex-trigonometric-and-hyperbolic-power-series`
- **Location:** `items/thm-complex-trigonometric-and-hyperbolic-power-series.md:51`.
- **Defect:** Step 3.1 asserts without an input or derivation that the factorial coefficient sequences have root limsup \(0\). `[L4]` only converts \(L=0\) into infinite radius; it does not prove \(L=0\). A short estimate such as \(n!\ge(n/2)^{\lfloor n/2\rfloor}\) closes the gap.
- **Severity:** nonfatal.

### B1-POWER-SERIES-CORE-7

- **Item:** `thm-complex-sine-and-cosine-zero-sets`
- **Location:** `research/frontier-14-batch-1.proof-contracts.json:2389-2396`.
- **Defect:** The `iff-forward` and `iff-reverse` rows are marked `not_applicable`, although the Statement contains two explicit biconditionals (`items/thm-complex-sine-and-cosine-zero-sets.md:26-29`) and line 49 explicitly proves both converses.
- **Severity:** nonfatal; the proof covers both directions, but the contract dispositions are false.

All 29 scoped items were opened. The other 23 were clean:

`def-complex-analytic-function`, `def-uniform-convergence-of-complex-valued-functions`, `thm-uniform-cauchy-criterion-complex-functions`, `thm-weierstrass-m-test-for-complex-function-series`, `thm-complex-power-series-converge-locally-uniformly`, `lem-derived-complex-power-series-has-the-same-radius`, `thm-termwise-differentiation-of-complex-power-series`, `cor-uniqueness-of-complex-power-series-coefficients`, `thm-complex-analytic-functions-are-holomorphic`, `lem-complex-power-series-reexpansion-double-series`, `thm-complex-power-series-reexpansion-at-an-interior-point`, `cor-complex-power-series-sums-are-analytic`, `prop-sums-and-scalar-multiples-of-complex-power-series`, `prop-cauchy-products-of-complex-power-series`, `lem-local-composition-of-complex-power-series`, `lem-local-reciprocal-of-complex-power-series`, `thm-complex-analytic-functions-closed-under-algebra-quotients-and-composition`, `cor-complex-analytic-functions-have-local-primitives`, `cor-complex-trigonometric-and-hyperbolic-derivatives`, `cor-complex-trigonometric-and-hyperbolic-addition-formulas`, `thm-complex-sine-and-cosine-are-unbounded`, `lem-abel-summation-for-complex-series`, and `thm-abel-limit-theorem-for-complex-series-in-stolz-regions`.

Nothing in scope was unavailable for checking; only report persistence was blocked.
