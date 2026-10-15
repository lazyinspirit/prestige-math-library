# Step 3a reader report — batch 40

Run: `statistical-models-experiments-62`  
Dispatch: `reader-40`

## Opened inventory

Assigned pages:

- `library/statistical-models-and-experiments/stationary-time-series-moments-and-autocovariance.md` (A)
- `library/statistical-models-and-experiments/stationary-time-series-moments-and-autocovariance-examples.md` (B)

Assigned items, reviewed with the A-page suppliers first and the B-page example/counterexample after their definitions:

- `def-strict-and-weak-stationarity-for-time-series`
- `def-autocovariance-and-sample-autocovariance`
- `cor-ergodic-time-series-sample-mean-converges-a-s-and-l1`
- `thm-sample-acvf-properties-and-summable-covariance-mean-consistency`
- `ex-pairwise-uncorrelated-dependent-triple`
- `cex-pair-count-normalized-sample-acvf-not-positive-semidefinite`

Opened dependency items used to check the page contracts, definitions, proofs, and examples:

- Process and probability interfaces: `def-stochastic-process-and-finite-dimensional-distributions`, `def-consistent-family-of-finite-dimensional-distributions`, `def-random-element-and-real-random-variable`, `def-law-or-distribution-of-a-random-element`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, and `def-moments-variance-and-covariance`.
- Canonical shift and ergodic-mean chain: `def-stationary-process-and-canonical-shift`, `def-measure-preserving-transformation-and-system`, `thm-dynkin-pi-lambda`, `def-ergodic-measure-preserving-system`, `def-strict-and-mod-null-invariant-sigma-algebras`, `prop-invariant-families-are-sigma-algebras`, `def-axiom-of-choice`, `def-conditional-expectation-given-a-sigma-algebra`, `thm-birkhoff-ergodic-theorem`, `thm-birkhoff-limit-identification-on-finite-measure-spaces`, `lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces`, `cor-birkhoff-ergodic-theorem-for-ergodic-probability-systems`, and `thm-stationary-process-birkhoff-ergodic-limit`.
- Sample-mean and covariance chain: `cor-expectation-linearity-monotonicity-and-modulus-bound` and `lem-variance-and-covariance-identities-for-random-variables`.
- Page model-record and finite-example interfaces: `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-borel-sigma-algebra`, `def-scientific-statistical-model-contract`, `def-finite-probability-space-and-event`, `def-finite-real-random-variable-and-distribution`, `def-expectation-on-a-finite-probability-space`, `def-variance-and-covariance`, and `def-independence-of-finite-random-variables`.

The batch proof-contract file `research/statistical-models-experiments-62-batch-40.proof-contracts.json` was checked against the current item text; its quotations, derivation inputs, and boundary notes did not change the mathematical verdict. The `\prod_{j<n}` indexing in the published finite-dimensional-distribution definition is consistent with the library convention: `def-product-sigma-algebra-and-finite-product-sigma-algebras` takes the base case `i<1` to be the factor `A_0`, so `j<n` here supplies all n coordinates.

## Source checks and mathematical evidence

- Meinshausen, [*Time Series Analysis: Notes for the course HS 2022*](https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf), §§1.3–1.5: §1.3 gives strict stationarity as invariance of all finite-dimensional laws and weak stationarity through finite variance, constant mean, and shift-invariant covariance; §1.5 uses the $1/n$ centered lag-product estimator with zero extension; §1.4 establishes nonnegative definiteness of the population autocovariance.
- Wang, [*STAT 720 Time Series Analysis*](https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf), §2.1 and the sample-ACVF discussion around Lemma 2.3 (PDF pp. 45–46): the notes state the strict/weak stationarity conventions, define the biased $1/n$ sample ACVF, and prove its nonnegative definiteness. The discussion distinguishes the known-mean pair-count estimator from replacing the mean by the sample mean; the assigned definition therefore correctly avoids claiming unbiasedness for its rescaling.
- The Birkhoff supplier chain was read locally through its statements and relevant proofs. The assigned corollary restricts the integer-indexed process to $Y_k=X_{k+1}$; strict stationarity supplies one-sided stationarity and integrability, and the assumed canonical-shift ergodicity matches the supplier's ergodic case. The Axiom of Choice is explicit in both the assigned statement and the supplier.
- In the sample-mean theorem, finite covariance bilinearity expands the variance into a double sum. For lag $h=s-t$, exactly $n-|h|$ ordered pairs contribute, giving the stated triangular sum. Absolute summability yields the stated $n^{-1}\sum_h|\gamma(h)|$ bound, and centering at the established mean gives $L^2$ consistency.
- For the biased sample ACVF, extending the centered data by zero gives the quadratic-form identity $\sum_{j,k}a_ja_k\widehat\gamma_n(j-k)=n^{-1}\sum_u(\sum_j a_jy_{u+j})^2\ge0\); finite support makes all sums finite.
- The uncorrelated/dependent example has coordinate means zero, each pair-product mean zero, and $P(X_1=X_2=X_3=1)=1/4\ne(1/2)^3$.
- For the pair-count counterexample $x=(1,0,0)$, the centered values are $(2/3,-1/3,-1/3)$, giving $\widetilde\gamma(0)=2/9$, $\widetilde\gamma(1)=-1/18$, and $\widetilde\gamma(2)=-2/9$. The displayed vector $(1,1/2,1)^T$ yields Toeplitz quadratic form $-1/18$, so it refutes the universal positive-semidefiniteness claim.

## Edits and uneditable defects

No assigned item or page was edited. No confirmed defect requiring repair or escalation was found. Proof contracts, judge records, and other artifacts were not changed; reflow, precheck, and proof-layout were not run because there was no repair or formatter change.

## Page verdicts

- **A — `stationary-time-series-moments-and-autocovariance`: pass.** The summary accurately separates strict and weak stationarity, the summable-covariance $L^2$ result, biased-sample-ACVF positivity, and the ergodic mean limit. The model-record prose states the finite coordinate record and its law context without asserting application adequacy.
- **B — `stationary-time-series-moments-and-autocovariance-examples`: pass.** Its summary accurately describes the exact pairwise-uncorrelated/dependent example and the negative Toeplitz-form counterexample; it makes no asymptotic claim.

## Blockers

None.

## Coverage note

All assigned pages and items and the direct/necessary suppliers listed above were opened. This review did not audit unrelated transitive foundational proofs or re-derive every cited measure-theory result from its original source.
