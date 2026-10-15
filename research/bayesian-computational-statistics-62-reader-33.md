# Step 3a reader report — batch 33

Run: `bayesian-computational-statistics-62`  
Batch: `33`  
Role: `reader-33`

## Opened inventory

Read the batch manifest `research/bayesian-computational-statistics-62-batch-33.pages.json`, the reader brief, current proof contracts, and both assigned pages:

- A page: `library/bayesian-computational-statistics/metropolis-hastings-algorithm-and-invariance.md`
- B companion page: `library/bayesian-computational-statistics/metropolis-hastings-algorithm-and-invariance-examples.md`

Read all nine assigned items in supplier-before-consumer order:

1. `lem-common-submeasure-density-is-pointwise-minimum`
2. `lem-common-submeasure-and-bounded-radon-nikodym-density`
3. `alg-metropolis-hastings-kernel`
4. `lem-metropolis-hastings-density-ratio`
5. `thm-metropolis-hastings-kernel-is-reversible-and-invariant`
6. `ex-random-walk-metropolis-hastings`
7. `ex-independence-metropolis-hastings`
8. `ex-metropolis-hastings-proposal-support-failure`
9. `ex-metropolis-hastings-rejected-self-transition`

Opened the cited local suppliers used to check their hypotheses and inferences: `def-axiom-of-choice`, `def-measure`, `def-finite-sigma-finite-and-semifinite-measures`, `def-absolutely-continuous-with-respect-to-a-positive-measure`, `def-radon-nikodym-derivative`, `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`, `lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `cor-additivity-of-the-nonnegative-lebesgue-integral`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `cor-integral-over-a-null-set-vanishes`, `thm-nonnegative-weighted-sums-of-measures`, `thm-integration-against-a-radon-nikodym-derivative`, `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`, `thm-monotone-convergence-for-the-integral`, `prop-closure-properties-of-measurable-functions-used-by-the-integral`, `def-extended-real-valued-measurable-function`, `def-standard-borel-space`, `def-polish-space`, `def-separable-space`, `def-probability-measure`, `def-measure-kernel-and-probability-kernel`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `thm-measurability-of-integration-against-a-kernel`, `lem-prior-and-model-kernel-define-joint-law`, `thm-sections-of-product-measurable-functions-are-measurable`, `def-invariant-and-stationary-distribution-for-a-markov-kernel`, `def-general-state-reversibility-by-symmetric-flow-measure`, `thm-general-state-reversibility-implies-invariance`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-composition-with-borel-functions-preserves-measurability`, `lem-coordinate-maps-and-permutations-are-measurable-on-finite-products`, `def-counting-measure`, `prop-counting-measure-is-a-measure`, and `def-transition-matrix-and-n-step-transition-probabilities`.

Also opened the A-page's three required page summaries: `general-state-mcmc-kernels-and-reversibility`, `dominated-experiments-likelihood-and-sufficiency`, and `conformal-prediction-and-exchangeable-ranks`.

## Review and edits

The two common-submeasure lemmas, the general-flow algorithm, the common-density ratio lemma, and the reversibility/invariance theorem have sound statements and proofs. The density-ratio proof handles forward-flow zero sets by a chosen version and asserts equality of versions only almost everywhere. Each finite example's acceptance calculation, transition matrix, and flow calculation is correct.

Repaired five in-flight items:

- In each of the four examples (`ex-random-walk-metropolis-hastings`, `ex-independence-metropolis-hastings`, `ex-metropolis-hastings-proposal-support-failure`, and `ex-metropolis-hastings-rejected-self-transition`), the common-density lemma was applied with counting measure without stating that it is a sigma-finite positive measure. The examples now cite the counting-measure proposition and sigma-finiteness definition, and explain why finite counting measure is sigma-finite. Their kernel checks now also state why the specified rows are probability measures and why event evaluations are measurable on the finite discrete state space.
- In `thm-metropolis-hastings-kernel-is-reversible-and-invariant`, step 4.1 used maximality for the transpose of the accepted measure without first establishing that this transpose is a measure. The proof now verifies the pushforward measure conditions from measurability of the coordinate swap and the measure definition; `def-measure` is added as a dependency and the contract cites it.

Updated `research/bayesian-computational-statistics-62-batch-33.proof-contracts.json` for the changed steps and citations. The five draft items had no `verification.judge` record to remove. No page prose was changed.

## Source check

- Roberts and Rosenthal, *General State Space Markov Chains and MCMC Algorithms*, §2.1 and Proposition 2, printed pp. 4–6, gives the usual density acceptance ratio, the forward-zero convention, and the symmetric minimum-flow calculation. This supports the common-density specialization; the general-kernel claims are established by the local proofs. [Source PDF](https://probability.ca/jeff/ftpdir/probsurv.pdf)
- Hunter, *Measure Theory*, §6.8, Theorem 6.27 and proof, printed pp. 75–77, supplies the Radon–Nikodym density existence and uniqueness result used by the local common-submeasure proofs. It does not itself state the pointwise-minimum common-submeasure formula; the assigned lemmas prove that formula. [Source PDF](https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf)
- The cited Owen PDF, *Monte Carlo Theory, Methods and Examples*, Ch. 11 §11.4, printed pp. 16–20, returned HTTP 403 when opened, so that location could not be independently checked. Roberts–Rosenthal's directly inspected Proposition 2 corroborates the cited density-ratio and reversibility specialization.

## Page verdicts

- `metropolis-hastings-algorithm-and-invariance`: sound. Its general-flow construction, almost-everywhere version caveat, self-transition rule, and limitation of the invariance conclusion agree with the assigned items. Its link to the general-state reversibility page is accurate.
- `metropolis-hastings-algorithm-and-invariance-examples`: sound. Its four-example inventory and claims about detailed balance, disconnected support, and non-uniqueness agree with the examples.

## Unedited defects and blockers

No confirmed defect remains in the assigned items or pages. No uneditable dependency defect was found. There is no batch-33 blocker. The recomputed run status showed unrelated `3a-collect` and `3a-split` blockers for batches 23 and 25.

## Validation

Reflow and precheck were run for all five changed items. All five prechecks passed. The batched final proof-layout check reported `5 items, 26 steps, 0 defects`.
