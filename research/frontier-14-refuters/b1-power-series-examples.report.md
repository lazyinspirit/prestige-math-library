<!-- Recovered by Alpha-a from research/frontier-14-dispatch/refuter-refuter-b1-power-series-examples.log.
     Refuters are read-only and could not write this file; the brief was wrong.
     Text below is the agent's own report. -->

### B1-POWER-SERIES-EXAMPLES-1

- **Item:** `ex-real-rational-function-with-finite-taylor-radius`
- **Location:** `items/ex-real-rational-function-with-finite-taylor-radius.md:36`, `[L2]`, used at proof step 1.2 on line 48.
- **Defect:** `[L2]` drops the cited theorem’s differentiability hypotheses. Step 1.2 then uses the enlarged fact to begin an all-orders differentiation argument, although no stated input establishes that the constant, identity, or polynomial functions forming \(1+x^2\) are differentiable. The algebra-of-derivatives theorem preserves differentiability; it does not supply the base case.
- **Evidence:** `items/thm-algebra-of-derivatives.md:41-52` states:

  > “Let \(A\subseteq\mathbb R\), let \(c\in A\) be a limit point of \(A\), let \(f,g:A\to\mathbb R\) be differentiable at \(c\) … Then … \(f+g\), \(\alpha f\), and \(fg\) are differentiable at \(c\) … [and] if \(g(c)\ne0\) … the quotient … is differentiable at \(c\).”

  The scoped `[L2]` merely says, “Sums, products, and quotients with nonzero denominator obey the derivative algebra and quotient rule,” omitting that the inputs must already be differentiable. Step 1.2 cites only `[L2]`, `[L3]`, and algebra; `[L3]` supplies continuity, not differentiability. The directly relevant `lem-derivative-of-a-power` is not a dependency or stated fact.
- **Severity:** **fatal**.

## Nonfatal findings

These are false proof-contract dispositions. The mathematical arguments handle the relevant cases, but the mandatory boundary worksheet is inaccurate.

### B1-POWER-SERIES-EXAMPLES-2

- **Item:** `ex-alternating-harmonic-power-series-at-the-boundary`
- **Location:** `research/frontier-14-batch-1.proof-contracts.json:2762-2764`, boundary case `one`.
- **Defect:** The row says `not_applicable`, yet `items/ex-alternating-harmonic-power-series-at-the-boundary.md:26` asserts \(F(z)\to\log2\) as \(z\to1\), and line 30 explicitly starts the coefficients at \(n=1\). The `one` axis plainly applies.
- **Severity:** **nonfatal**.

### B1-POWER-SERIES-EXAMPLES-3

- **Item:** `cex-complex-power-series-not-uniform-on-its-open-disc`
- **Location:** `research/frontier-14-batch-1.proof-contracts.json:2943-2945`, boundary case `one`.
- **Defect:** The row says no distinguished value one occurs. The counterexample uses the open unit disc at item line 30, and its decisive calculation at line 40 is exactly \(\sup_{z\in D}|z^n|=1\) for every \(n\ge1\).
- **Severity:** **nonfatal**.

### B1-POWER-SERIES-EXAMPLES-4

- **Item:** `cex-radius-does-not-determine-boundary-convergence-of-a-complex-power-series`
- **Location:** `research/frontier-14-batch-1.proof-contracts.json:3047-3049`, boundary case `one`.
- **Defect:** The row says `not_applicable`, but item lines 42-46 give both series radius \(1\) and compare their convergence specifically at \(z=1\).
- **Severity:** **nonfatal**.

### B1-POWER-SERIES-EXAMPLES-5

- **Item:** `ex-real-rational-function-with-finite-taylor-radius`
- **Location:** `research/frontier-14-batch-1.proof-contracts.json:3258-3260`, boundary case `one`.
- **Defect:** The row says no distinguished value one occurs. Item lines 26-28 state the expansion on \(|x|<1\) and assert radius \(1\); the unit radius is central to the example.
- **Severity:** **nonfatal**.

### B1-POWER-SERIES-EXAMPLES-6

- **Item:** `ex-abel-limit-along-a-nonradial-stolz-approach`
- **Location:** `research/frontier-14-batch-1.proof-contracts.json:3353-3355`, boundary case `one`.
- **Defect:** The row says `not_applicable`, while item lines 26-27 explicitly assert \(z_k\to1\) within a Stolz region at \(1\), and step 2.1 verifies that approach.
- **Severity:** **nonfatal**.

### B1-POWER-SERIES-EXAMPLES-7

- **Item:** `fs-convergence-at-one-noncentral-point-forces-entire-convergence`
- **Location:** `research/frontier-14-batch-1.proof-contracts.json:3442-3444`, boundary case `zero`.
- **Defect:** The row says no zero-sensitive case occurs. The false claim requires a point other than the centre, the witness series is centred at \(0\) (`items/fs-convergence-at-one-noncentral-point-forces-entire-convergence.md:26,30`), and step 1.1 must ensure \(z=1/2\ne0\). The witness satisfies the condition, but the `zero` disposition is false.
- **Severity:** **nonfatal**.

## Coverage

Opened and read all 11 assigned items in full and opened every directly cited dependency’s actual Statement or Definition. Checked every `[L#]`, title against Statement/proof, every numbered step, all eight boundary rows, dependency provenance, and the six `ai-generated` Statements for counterexamples. No unstated Choice use was found.

Fully clean, including contract rows:

- `ex-geometric-series-reexpanded-about-an-arbitrary-complex-point`
- `ex-harmonic-complex-power-series-on-the-unit-circle`
- `ex-square-summable-coefficient-power-series-on-the-closed-disc`
- `ex-lacunary-factorial-exponent-power-series`
- `fs-complex-sine-and-cosine-are-bounded`

The mathematical content of the five items with only boundary-contract findings was otherwise clean. No mathematical check was omitted; only creation of the required report file was blocked.
tokens used
196,646
