# Step 3a reader report — batch 60

Run: `statistical-models-experiments-62`  
Batch: `60`  
Role: independent reader  
Blocker: none.

## Opened inventory

### Assigned pages

- `library/statistical-models-and-experiments/subgaussian-mixture-confidence-sequences.md` — A page.
- `library/statistical-models-and-experiments/subgaussian-mixture-confidence-sequences-examples.md` — B companion.

### Assigned items, in dependency order

- `def-conditional-subgaussian-increments`
- `def-gaussian-mixture-confidence-sequence-boundary`
- `lem-gaussian-exponential-mixture-integral`
- `lem-conditional-subgaussian-exponential-process`
- `lem-gaussian-mixture-boundary-crossing-equivalence`
- `thm-gaussian-mixture-test-supermartingale`
- `cex-marginal-subgaussianity-does-not-justify-mixture-confidence-sequence`
- `thm-subgaussian-mixture-confidence-sequence`
- `ex-independent-gaussian-increments-subgaussian-mixture-confidence-sequence`

### Dependency items opened

For the definitions, normal integral, conditional expectations, and measure changes I opened `def-filtration-and-filtered-probability-space`, `def-adapted-and-integrable-stochastic-process`, `def-conditional-expectation-given-a-sigma-algebra`, `lem-conditional-expectation-is-unique-almost-surely`, `def-axiom-of-choice`, `def-conditional-expectation-as-an-ae-class`, `def-countable-choice`, `thm-conditional-expectation-exists-by-radon-nikodym`, `thm-monotone-convergence-for-the-integral`, `cor-continuous-functions-are-borel-measurable`, `thm-of-square-roots`, `lem-normal-density-has-total-mass-one`, `def-standard-normal-and-normal-laws`, `thm-change-of-variables-for-expectation`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, and `thm-borel-sets-are-lebesgue-measurable`.

For the supermartingale and boundary arguments I opened `def-martingale-submartingale-and-supermartingale`, `def-nonnegative-test-supermartingale`, `thm-taking-out-what-is-known`, `def-natural-logarithm`, `thm-natural-logarithm-laws`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-mixture-of-null-supermartingales`, and `def-confidence-sequence`.

For the assigned counterexample and example I opened `def-subgaussian-variable-and-vector`, `lem-conditioning-a-known-variable-and-an-independent-variable`, `lem-conditional-hoeffding-bound-for-bounded-martingale-differences`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `thm-exponential-two-point-convexity`, `thm-logarithm-derivative-and-integral`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, and `def-integrable-real-and-complex-functions-and-their-integrals`.

I also opened the current-run draft chain `lem-finite-horizon-test-supermartingale-crossing-bound` (batch 58) and `thm-discrete-ville-inequality` (batch 58), together with `def-discrete-stopping-time`, `thm-continuity-from-below-for-measures`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `cor-expectation-of-an-indicator-is-probability`, `lem-first-hitting-time-of-an-adapted-process-is-a-stopping-time`, and `thm-optional-sampling-for-bounded-stopping-times`. For the A-page variance sentence I opened the published `cex-finite-variance-does-not-imply-subgaussian-tail` and `thm-the-lebesgue-integral-respects-almost-everywhere-equality`.

## Review and page verdicts

### A page: `subgaussian-mixture-confidence-sequences`

Verdict: sound after the prose clarification below. The summary correctly describes the discrete-time conditional-mgf assumption, the fixed-parameter exponential processes, the Gaussian mixture, the closed boundary, and the time-uniform guarantee. The variance sentence was sharpened to distinguish finite variance from marginal sub-Gaussianity and now links to the published finite-variance counterexample.

The supplied proxy enters only as an upper mgf bound; the summary correctly disclaims independence, identical distribution, continuous-time validity, and conditional-on-covariates validity.

### B page: `subgaussian-mixture-confidence-sequences-examples`

Verdict: sound. The independent-Gaussian example and repeated-Rademacher counterexample match the current item arguments. The B-page prose was not edited.

## Item and page edits

- In `cex-marginal-subgaussianity-does-not-justify-mixture-confidence-sequence`, Proof 1.1 previously applied conditional Hoeffding and concluded an unconditional mgf bound without showing the conversion. It now states that, because `F_0` is trivial, the conditional expectation of each integrable `exp(λZ)` equals its expectation; the cited conditional Hoeffding inequality then yields the marginal sub-Gaussian bound.
- In `ex-independent-gaussian-increments-subgaussian-mixture-confidence-sequence`, the Example and Given now specify a common filtered measurable space, the family of laws, a common adapted observation process, and the residuals `Y_t^(θ)=X_t−θ` with the stated factorization against `F_(t−1)`. Verification fixes `θ,t,λ` and checks the common-space and adaptation hypotheses before applying the confidence-sequence theorem.
- In `subgaussian-mixture-confidence-sequences.md`, the page now links the finite-variance counterexample and says explicitly that finite variance alone need not imply even a marginal sub-Gaussian bound.
- Updated the two affected derivation entries in `statistical-models-experiments-62-batch-60.proof-contracts.json`. The edited items had no `verification.judge` record to remove.

Evidence for the variance clarification: the published counterexample constructs a symmetric law with mass proportional to `k^-4` at `±k`, giving finite second moment but no finite sub-Gaussian proxy.

## Mathematical source checks

- Steven R. Howard, Aaditya Ramdas, Jon McAuliffe, and Jasjeet Sekhon, *Time-uniform, nonparametric, nonasymptotic confidence sequences*, [arXiv PDF](https://arxiv.org/pdf/1810.08240), Appendix A.3, PDF pp. 26–27: the mixture lemma states the product-measurability condition and proves the mixture process is a supermartingale. Proposition 5, PDF p. 27, gives the two-sided normal-mixture boundary `sqrt((v+ρ) log(ℓ₀²(v+ρ)/(α²ρ)))` and simultaneous coverage. With `ℓ₀=1`, this is the assigned boundary.
- Aaditya Ramdas, *Martingales 1: Concentration Inequalities — Conjugate Mixtures*, [CMU lecture note](https://stat.cmu.edu/~aramdas/martingales18/L18-conjugate.pdf), Proposition 1, PDF p. 1, gives the same two-sided normal-mixture result; the method-of-mixtures argument is on PDF pp. 1–3.
- Howard et al., *Time-uniform Chernoff bounds via nonnegative supermartingales*, [arXiv PDF](https://arxiv.org/pdf/1808.03204), Lemma 1, PDF p. 14, and proof §6.1, PDF pp. 44–45: first-crossing probability is bounded using bounded optional sampling and a finite-horizon limit. The local draft Ville proof additionally handles the nonattained-supremum event by approaching the threshold from below.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/cex-marginal-subgaussianity-does-not-justify-mixture-confidence-sequence.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/cex-marginal-subgaussianity-does-not-justify-mixture-confidence-sequence.md` — pass.
- `node tools/tsx-run.mjs tools/reflow.mts items/ex-independent-gaussian-increments-subgaussian-mixture-confidence-sequence.md` — reflowed, then unchanged on the final pass.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-independent-gaussian-increments-subgaussian-mixture-confidence-sequence.md` — pass after the final edit.
- `node tools/proof-layout.mjs items/cex-marginal-subgaussianity-does-not-justify-mixture-confidence-sequence.md items/ex-independent-gaussian-increments-subgaussian-mixture-confidence-sequence.md` — 2 items, 7 steps, 0 defects.
- The updated proof-contract JSON parses.

## Uneditable nonfatal findings

- `thm-exponential-two-point-convexity`, Proof 2.1–3.1: the statement includes `t=0` and `t=1`, while the slope argument proves the inequality only for `0<t<1`; the endpoint equality cases should be stated explicitly. This is an immediate proof-only omission and does not affect the claim. Assigned consumer: `cex-marginal-subgaussianity-does-not-justify-mixture-confidence-sequence`.
- `thm-basic-algebra-and-order-properties-of-conditional-expectation`, Proof 2.1 and 4.1: the proof uses nonnegativity almost surely to apply nonnegative-integral facts stated for pointwise nonnegative functions, without naming the representative modification or the a.e.-invariance step. State that modification and cite/prove `thm-the-lebesgue-integral-respects-almost-everywhere-equality`. Assigned consumer: `cex-marginal-subgaussianity-does-not-justify-mixture-confidence-sequence`.
- `cor-expectation-linearity-monotonicity-and-modulus-bound`, Proof 2.1: its cited monotonicity result assumes pointwise order, but the proof has `X≤Y` only almost surely. Replace `Y−X` by a nonnegative representative and cite/prove the a.e.-invariance step before applying monotonicity. Assigned consumer: `thm-subgaussian-mixture-confidence-sequence`, through the batch-58 Ville chain.
- `lem-finite-horizon-test-supermartingale-crossing-bound`, Proof 1.1: the proof asserts `τ_a∧N` is a stopping time without writing the event test. This follows immediately from the stopping-time definition; adding `{τ_a∧N≤n}={τ_a≤n}` for `n<N` and the whole space for `n≥N` closes the short omission. Assigned consumer: `thm-subgaussian-mixture-confidence-sequence`. The observed current raw source SHA-256 is `bff4365d99a338f73ee880675e19960add49723c0249d0c8d0b10c9cbbe53157`.

## Coverage limitation

All assigned carriers and the direct dependency claims used in their arguments were opened. The current-run Ville chain was reviewed through its finite-horizon proof. I did not re-audit the full transitive proof closures of all already-published foundational suppliers beyond the exact cited claims and supporting proofs used here.
