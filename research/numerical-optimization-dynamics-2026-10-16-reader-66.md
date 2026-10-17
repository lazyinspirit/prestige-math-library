# Step 3a reader report — batch 66

Run: `numerical-optimization-dynamics-2026-10-16`  
Assignment: `reader-66`

## Opened inventory

Pages:

- `certified-stationary-distribution-and-hitting-statistic-numerics` (A)
- `certified-stationary-distribution-and-hitting-statistic-numerics-examples` (B)

Assigned A items, reviewed in dependency order:

- `def-finite-column-stochastic-matrix-and-law`
- `lem-finite-transient-block-geometric-escape`
- `alg-finite-markov-closed-class-decomposition`
- `lem-column-stochastic-l1-nonexpansive`
- `thm-finite-transient-hitting-and-mean-exit-residual-bound`
- `thm-irreducible-finite-class-has-unique-invariant-vector`
- `lem-dobrushin-zero-sum-l1-coefficient`
- `thm-finite-markov-closed-class-decomposition-correctness`
- `alg-corrected-stationary-residual-certificate`
- `thm-finite-chain-closed-class-cesaro-weight-decomposition`
- `thm-m-step-dobrushin-stationary-residual-bound`
- `thm-one-closed-class-augmented-stationary-system-is-nonsingular`
- `thm-corrected-stationary-residual-certificate-soundness`
- `cor-uniformized-generator-stationary-residual-certificate`
- `thm-stationary-generator-solve-and-model-error-ledger`

Assigned B examples:

- `ex-xd-finite-credit-absorption-hitting-statistics`
- `ex-xd-nearly-reducible-chain-residual-and-ill-conditioning`
- `ex-xd-periodic-iteration-versus-stationarity`
- `ex-xd-reducible-absorbing-class-weights`
- `ex-xd-birth-death-uniformization-detailed-balance`

Dependencies opened for the reviewed claims included the published row-transition and invariant-law definitions, finite-chain stationary-existence theorem, Bolzano–Weierstrass theorem and its monotone-subsequence prerequisites, the published detailed-balance lemma, and the current-run generator chain `def-xd-finite-column-generator`, `lem-xd-uniformized-matrix-is-stochastic`, and `thm-xd-finite-generator-master-equation-uniformization`. I also opened the directly used matrix, matrix-exponential, Poisson, mean-value, and derivative-rule suppliers.

## Review and evidence

The finite-step escape lemma constructs a positive escape probability for each state, takes a finite positive minimum, and obtains the stated geometric decay. Its use in the hitting-statistic theorem supports convergence of the Neumann series, the inverse norm bound, path normalization, mean exit time, and residual estimates. The matrix conventions and all row/column transposes agree across the assigned items.

The graph procedure's reachability update, strongly connected components, closed-class test, and transient escape conclusion are proved. The irreducible-class proof establishes existence, positivity, and uniqueness without assuming aperiodicity. The closed-class theorem proves the stationary mixture classification and identifies the initial-law-dependent Cesàro weights through the first-entry equations.

The zero-sum coefficient proof establishes both the pairwise column-distance and overlap formulas. Its exact-rational algorithm states the `s=0`, `q>=1`, and `q<1` branches; the m-step theorem and soundness theorem use the coefficient only when it is strictly below one. The one-closed-class augmented-system argument handles an empty transient block and proves nonsingularity for each replacement row.

The uniformization corollary's hypotheses match the batch-47 generator definition and stochasticity lemma. The master-equation supplier proves the required uniqueness for each initial vector; the corollary then identifies generator-stationary probabilities and substitutes `Qx/nu = Px-x`. The model-error theorem uses the exact residual decomposition and its positive denominator. The five example calculations were checked directly, including the credit-reserve escape and residual values, the nearly reducible sharp bound, the periodic lazy chain, the two absorbing-class weights, and the three-state birth–death stationary law.

The cited Dobrushin formulas were checked in Ipsen–Selee, §3, Theorem 3.7 and Corollary 3.9 (PDF pp. 12–13): the source gives the row convention and the assigned lemma correctly transposes it to columns. Grinstead–Snell, §11.2, Theorem 11.3 (printed pp. 417–418) gives geometric loss of transient mass; Theorems 11.4–11.6 (printed pp. 418–420) cover the fundamental matrix, mean absorption time, and absorption probabilities. The assigned proofs supply the more general block and residual conclusions locally. Liu, §1 equation (1.3) and §2.1 Lemma 2.1 were checked as related stationary-perturbation and skeleton-chain results; the assigned residual and model-error inequalities are proved locally.

## Edits and unresolved defects

No item or page prose edits were needed. No confirmed defect remains, including no uneditable defect. Since no item changed, reflow, precheck, and proof-layout were not run.

## Page verdicts

- `certified-stationary-distribution-and-hitting-statistic-numerics`: **Pass.** The summary preserves the row/column conventions, correction branches, scope of the exact certificate, transient-block condition, and caveat that solver convergence is not claimed.
- `certified-stationary-distribution-and-hitting-statistic-numerics-examples`: **Pass.** The summary matches the assigned exact examples and their stated scope.

## Blocker and coverage note

There is no batch-66-specific blocker. The live run status also reports `split-25 failed 3x` in `3a-split`; that blocker is outside this assignment and was not changed. This review checked the assigned items/pages and the proof dependencies used for their claims, but did not re-audit unrelated branches of the suppliers' wider library dependency closures.
