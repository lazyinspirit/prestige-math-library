# Step 5a reader report — batch 1

Run: `frontier-37-owner-30`  
Role: reader  
Date: 2026-10-01

## Opened inventory

The live run status was recomputed from `.autopilot/frontier-37-owner-30`; the
run is active at Step 5a, with no worker currently in flight. I read the batch
manifest and both listed pages:

- A page: `library/probability/stationary-markov-chains-and-ergodic-limits.md`
- B page: `library/probability/stationary-markov-chains-and-ergodic-limits-examples.md`

I read all 22 A-page items:

- `def-invariant-and-stationary-distribution-for-a-markov-kernel`
- `thm-invariant-initial-law-makes-the-chain-stationary`
- `thm-every-finite-transition-matrix-has-a-stationary-distribution`
- `def-positive-recurrent-and-null-recurrent-state`
- `lem-return-cycle-occupation-measure-and-minimality`
- `thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains`
- `thm-kac-return-time-formula-for-a-state`
- `cor-uniqueness-of-the-stationary-distribution-for-an-irreducible-positive-recurrent-chain`
- `def-reversible-measure-and-detailed-balance`
- `lem-detailed-balance-implies-invariance`
- `thm-time-reversal-of-a-stationary-markov-chain`
- `thm-kac-return-time-formula-for-a-positive-mass-set`
- `def-total-variation-distance-for-probability-laws`
- `lem-total-variation-half-l1-formula-on-a-countable-space`
- `lem-aperiodic-return-times-are-eventually-positive`
- `thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains`
- `thm-markov-chain-ergodic-theorem`
- `thm-cesaro-convergence-for-irreducible-positive-recurrent-chains`
- `def-stationary-process-and-canonical-shift`
- `thm-stationary-process-birkhoff-ergodic-limit`
- `cor-stationary-irreducible-markov-shift-is-ergodic`
- `rem-aperiodicity-is-needed-for-ordinary-time-convergence-not-ergodic-averages`

I read all 10 B-page items:

- `ex-stationary-law-of-a-two-state-chain`
- `ex-stationary-distribution-of-a-finite-birth-and-death-chain`
- `ex-random-walk-on-a-finite-undirected-graph-is-reversible`
- `ex-doubly-stochastic-transition-matrix-has-uniform-stationary-law`
- `ex-empirical-state-frequencies-converge-to-stationary-masses`
- `ex-periodic-chain-has-cesaro-but-not-ordinary-convergence`
- `cex-a-null-recurrent-chain-has-no-stationary-probability`
- `cex-a-stationary-chain-need-not-be-ergodic`
- `cex-invariance-does-not-imply-reversibility`
- `cex-positive-recurrence-without-aperiodicity-does-not-give-total-variation-convergence`

I also read the statement or definition sections for the 45 external direct
dependencies named by the batch items:

- `cor-birkhoff-ergodic-theorem-for-ergodic-probability-systems`, `cor-bounded-convergence-on-a-finite-measure-space`, `cor-bounded-harmonic-functions-yield-markov-chain-martingales`, `cor-canonical-markov-chain-on-path-space`, `cor-recurrence-of-the-one-dimensional-simple-symmetric-random-walk`
- `def-accessibility-communication-and-irreducibility`, `def-aperiodic-chain`, `def-axiom-of-choice`, `def-common-divisor-and-gcd`, `def-conditional-expectation-given-a-sigma-algebra`, `def-ergodic-measure-preserving-system`, `def-finite-simple-graph`, `def-graph-adjacency-incidence-neighbourhood-and-degree`, `def-hitting-return-and-visit-times`, `def-initial-distribution-of-a-markov-chain`, `def-iterated-transition-kernels`, `def-measure-kernel-and-probability-kernel`, `def-measure-preserving-transformation-and-system`, `def-period-of-a-state`, `def-probability-measure`, `def-recurrent-and-transient-state`, `def-simple-symmetric-walk-on-zd`, `def-stochastic-process-and-finite-dimensional-distributions`, `def-strict-and-mod-null-invariant-sigma-algebras`, `def-transition-matrix-and-n-step-transition-probabilities`
- `lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces`, `lem-matrix-chapman-kolmogorov-equations`
- `thm-birkhoff-ergodic-theorem`, `thm-birkhoff-limit-identification-on-finite-measure-spaces`, `thm-bolzano-weierstrass`, `thm-chapman-kolmogorov-equations`, `thm-discrete-strong-markov-property`, `thm-dominated-convergence`, `thm-dynkin-pi-lambda`, `thm-finite-dimensional-laws-of-a-markov-chain`, `thm-handshake-lemma-for-finite-simple-graphs`, `thm-kolmogorov-iid-l1-strong-law`, `thm-levy-upward-convergence-of-conditional-expectations`, `thm-markov-property-for-bounded-future-path-functionals`, `thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums`, `thm-monotone-convergence-for-the-integral`, `thm-optional-sampling-for-bounded-stopping-times`, `thm-recurrence-and-transience-are-class-properties`, `thm-renewal-decomposition-at-successive-return-times`, `thm-tonelli-for-nonnegative-double-series`

## Findings and edits

1. **Repaired the time-reversal coordinate order** in
   `items/thm-time-reversal-of-a-stationary-markov-chain.md`, Statement 2 and
   proof step 4.1. The old formula asserted
   `L(X_{n_r},...,X_{n_0}) = L(X*_{n_r-n_0},...,X*_0)`. Step 3.1 already
   computes the consecutive-time reversal as
   `L(X_n,...,X_0) = L(X*_0,...,X*_n)`, so the old general formula applied the
   reverse-chain coordinates in the opposite order. The corrected tuple is
   `(X*_0, X*_{n_r-n_{r-1}}, ..., X*_{n_r-n_0})`; step 4.1 now obtains it by
   taking those coordinates from the consecutive-time identity.

   The assigned directed three-cycle counterexample independently confirms the
   error: for `p(i,i+1)=1` modulo 3, the reverse kernel moves from `i` to
   `i-1`. Thus `(X_1,X_0)` has the law of `(X*_0,X*_1)`, while the old
   `(X*_1,X*_0)` formula gives the opposite ordered pairs.

2. **Repaired the dependent Kac-set proof** in
   `items/thm-kac-return-time-formula-for-a-positive-mass-set.md`. Its fact
   `[F4]` now records the corrected reversal coordinates. Proof step 2.2 now
   explicitly matches `(X_n,...,X_0)` to `(X*_0,...,X*_n)` for `n≥1`; for
   `n=0`, both initial marginals are `π`. The hitting-time event is therefore
   correctly `T_A^*=n`. The theorem statement is unchanged.

3. **Corrected the A-page summary** in
   `library/probability/stationary-markov-chains-and-ergodic-limits.md`. It
   incorrectly said uniqueness was proved inside the positive-recurrence
   theorem. The current theorem proves existence; the statewise Kac formula
   yields the equality of invariant masses, and the subsequent corollary proves
   uniqueness. The summary now reflects that order.

4. Updated the affected entries for the time-reversal derivation and the
   Kac-set citation and derivation in
   `research/frontier-37-owner-30-proof-contracts.json`. Neither edited item had
   a `verification.judge` field, so there was no stale judge record to remove.

## Page verdicts

- **A page:** one false summary claim was repaired as above. Its remaining
  mathematical summary statements match the current items and dependencies.
- **B page:** no defect found. Its examples and counterexamples support the
  stated scope boundaries, including the periodic three-cycle and the
  invariant-but-not-reversible directed cycle.

## Validation and blocker

For each changed item, reflow reported `unchanged` and precheck passed:

- `thm-time-reversal-of-a-stationary-markov-chain`: direct precheck passed.
- `thm-kac-return-time-formula-for-a-positive-mass-set`: direct precheck passed.

No defect remained that I was not authorized to repair. No blocker.

## Coverage limitation

I reviewed all assigned page and item bodies and the relevant sections of every
external direct dependency. I did not audit the complete proofs of all 45
published dependencies or their transitive dependency proofs; no unresolved
finding in this batch depends on those further audits.
