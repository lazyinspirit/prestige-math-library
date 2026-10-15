# Step 3a Reader Report — Batch 35

Run: `bayesian-computational-statistics-62`  
Role: reader  
Batch: `35`

## Opened inventory

Read the batch manifest `research/bayesian-computational-statistics-62-batch-35.pages.json`, its proof contracts, `briefs/reader.md`, the repository instructions, and both assigned pages. The run status was independently recomputed before review and again before handoff.

Assigned pages:

- A page `mcmc-ergodicity-and-mixing`, [library/bayesian-computational-statistics/mcmc-ergodicity-and-mixing.md](../library/bayesian-computational-statistics/mcmc-ergodicity-and-mixing.md).
- B page `mcmc-ergodicity-and-mixing-examples`, [library/bayesian-computational-statistics/mcmc-ergodicity-and-mixing-examples.md](../library/bayesian-computational-statistics/mcmc-ergodicity-and-mixing-examples.md).

All assigned items were opened and reviewed in dependency-level order.

- Level 0: `def-petite-set-for-markov-kernel`, `def-phi-irreducible-chain`, `def-small-set-minorization-and-drift`, `lem-countably-generated-kernel-lebesgue-decomposition`, `lem-positive-triple-set-yields-uniform-overlap`, `lem-total-variation-coupling-and-kernel-contraction`.
- Level 1: `def-general-state-aperiodic-markov-chain`, `def-harris-recurrent-markov-chain`, `lem-bivariate-drift-minorization-coupling-rate`, `lem-drift-sublevel-union-is-petite`, `lem-invariant-law-integrates-bounded-set-drift`, `lem-invariant-law-positive-set-and-almost-sure-hitting`, `lem-iterated-kernel-density-convolution-bounds`, `thm-uniform-ergodicity-from-whole-space-minorization`.
- Level 2: `lem-aperiodic-minorization-times-are-cofinite`, `lem-phi-irreducible-chain-has-small-set`, `ex-null-set-start-fails-total-variation-convergence`, `ex-periodic-finite-chain-fails-time-convergence`, `ex-uniformly-ergodic-chains-can-mix-arbitrarily-slowly`.
- Level 3: `lem-aperiodic-petite-set-with-accessible-small-set-is-small`, `lem-small-set-coupling-converges-from-almost-every-start`.
- Level 4: `lem-geometric-drift-minorization-reduces-to-bounded-small-set`, `thm-general-state-markov-chain-convergence-under-recurrence-conditions`.
- Level 5: `thm-geometric-ergodicity-under-drift-and-minorization`, `ex-gibbs-chain-invariant-but-reducible`, `ex-sticky-general-state-chain-is-not-geometrically-ergodic`.
- Level 6: `ex-drift-minorization-geometric-ergodicity-on-a-birth-death-chain`.

Also opened the local prerequisite definitions and results used by the proofs: `cor-canonical-markov-chain-on-path-space`, `cor-finite-nonnegative-integral-implies-finite-almost-everywhere`, `def-axiom-of-choice`, `def-finite-sigma-finite-and-semifinite-measures`, `def-invariant-and-stationary-distribution-for-a-markov-kernel`, `def-iterated-transition-kernels`, `def-measurable-space`, `def-measure-kernel-and-probability-kernel`, `def-measure-with-density`, `def-probability-measure`, `def-total-variation-distance-for-probability-laws`, `def-transition-matrix-and-n-step-transition-probabilities`, `lem-finite-measure-sets-are-approximable-by-a-generating-algebra`, `lem-finite-products-of-probability-kernels`, `thm-discrete-strong-markov-property`, `thm-dominated-convergence`, `thm-doob-submartingale-convergence`, `thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures`, `thm-levy-upward-convergence-of-conditional-expectations`, `thm-measurability-of-integration-against-a-kernel`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `thm-monotone-convergence-for-the-integral`, `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`, and `thm-tonelli-theorem-for-sigma-finite-product-spaces`.

For the Gibbs example and its invariance dependency, also opened `alg-gibbs-block-update`, `alg-gibbs-scan-schemes`, `def-finite-markov-chain-reducible`, `def-gibbs-full-conditional-kernel`, `def-gibbs-reversibility-for-a-markov-kernel`, `lem-gibbs-block-update-is-a-probability-kernel`, `lem-gibbs-block-update-is-reversible-and-invariant`, `lem-gibbs-scan-schemes-are-probability-kernels`, `lem-prior-and-model-kernel-define-joint-law`, and `thm-random-scan-gibbs-is-reversible-and-invariant`.

## Repairs and evidence

- `lem-countably-generated-kernel-lebesgue-decomposition`: its [F4] suppliers, `thm-doob-submartingale-convergence` and `thm-levy-upward-convergence-of-conditional-expectations`, each state an AC hypothesis. The proof contract and `axiom_use` metadata listed AC but [A1] only identified the sectionwise decomposition and support choices, and step 2.1 did not identify AC at the point of use. [A1] now also records AC as the hypothesis for [F4], and step 2.1 cites [A1]. The batch proof contract now records [A1] among step 2.1's inputs.
- `lem-phi-irreducible-chain-has-small-set`: the proof uses φ-irreducibility in [F1] and in applying the iterated-density supplier, but the Statement did not assume it. The Statement now explicitly requires `P` to be φ-irreducible. The proof derivation map is unchanged; the batch contract records this reconciliation.
- `ex-sticky-general-state-chain-is-not-geometrically-ergodic`: the original proof selected one `x` with `1 - sqrt(x) > r`, which did not ensure the selected state was in the full-π-measure set where a standard geometric bound's multiplier is finite. Roberts and Rosenthal define geometric ergodicity using a common rate `rho` with `M(x) < infinity` for π-almost every `x` ([§3.4, p. 22](https://www.probability.ca/jeff/ftpdir/probsurv.pdf)). The Statement now names that convention. For each `r in (0,1)`, the proof uses `B_r = (0,(1-r)^2)`, with `π(B_r) = 1-r > 0`, so it intersects any proposed full-measure set of finite multipliers; on that intersection the atom lower bound contradicts rate `r`. The existing source reference now records this locator, and the proof contract derivation was updated. Roberts and Rosenthal's Appendix Lemma 34 (pp. 55–56) also gives the cofinite minorization-time result used in the assigned chain of arguments; their Theorem 19 (p. 38) and Lemma 20 (pp. 38–40) state the small-set existence and stationary almost-sure hitting results reviewed here.
- `ex-drift-minorization-geometric-ergodicity-on-a-birth-death-chain`: Step 1.1 had a tag group before a second calculation in the same step. The calculation remains intact and the justification tags now terminate the complete step.

No other item or page prose was edited. None of the four changed items had a `verification.judge` record to remove.

## Page verdicts

- `mcmc-ergodicity-and-mixing`: the title, item list, and summary accurately describe the repaired draft results and their quantifiers. No remaining page-prose defect found.
- `mcmc-ergodicity-and-mixing-examples`: the title, example list, and summary accurately describe the examples. The repaired sticky-chain argument now supports the stated standard π-almost-everywhere geometric-ergodicity convention. No remaining page-prose defect found.

## Checks

For each of the four changed items, `tools/reflow.mts` reported `unchanged`; `tools/precheck.mts` passed. One batched `node tools/proof-layout.mjs` run on all four paths reported `4 items, 15 steps, 0 defects`.

## Unedited findings and blockers

No confirmed defect remains unedited in the assigned batch. There is no batch-local mathematical blocker or unresolved source uncertainty.

At the final status readback, autopilot reported the run as **PAUSED**. Batch 35 was still listed as missing in `3a-read` and `3a-split`, so native coverage and the mechanical split are not yet confirmed. The status also reports existing failures `collect-23` (covers 23) in `3a-collect` and `split-25` (covers 25) in `3a-split`. I did not change run control.
