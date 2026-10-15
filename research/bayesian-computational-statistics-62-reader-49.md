# Step 3a reader report — batch 49

Run: `bayesian-computational-statistics-62`  
Role: reader  
Date: 2026-10-16

## Assignment and opened inventory

The live autopilot status reported this run as `running`, with batch 49 still
awaiting its Step 3a reader artifact. After both artifacts below were written,
the recomputed status no longer listed batch 49 under `3a-read` artifact-missing
IDs, but the run remains active and `3a-split` still lists batch 49's split
artifact as missing. No reader-scope blocker remains. The assigned manifest is
`research/bayesian-computational-statistics-62-batch-49.pages.json`.

Opened assigned pages:

- `library/bayesian-computational-statistics/abc-mcmc-and-sequential-abc.md` (A page)
- `library/bayesian-computational-statistics/abc-mcmc-and-sequential-abc-examples.md` (B page)

Opened assigned items in supplier-before-consumer order:

1. `def-abc-augmented-tolerance-target`
2. `lem-abc-augmented-target-has-tolerance-posterior-marginal`
3. `alg-abc-metropolis-hastings`
4. `alg-abc-sequential-smc`
5. `thm-abc-metropolis-hastings-invariance`
6. `thm-abc-sequential-smc-rn-weight-update`
7. `ex-abc-vanishing-acceptance`
8. `ex-abc-positive-tolerance-stationary-law`
9. `ex-abc-sequential-tolerance-schedule-and-rn-weights`
10. `ex-abc-smc-finite-particle-collapse`

Opened claim-critical suppliers and dependency context:

- ABC model and target: `def-approximate-bayesian-computation`,
  `def-bayesian-model-as-prior-and-sampling-kernel`,
  `lem-prior-and-model-kernel-define-joint-law`,
  `def-measure-kernel-and-probability-kernel`, `def-probability-measure`,
  `def-product-sigma-algebra-and-finite-product-sigma-algebras`,
  `def-standard-borel-space`, and
  `lem-finite-products-of-standard-borel-spaces-are-standard-borel`.
- ABC-MH: `def-axiom-of-choice`, `alg-metropolis-hastings-kernel`,
  `lem-common-submeasure-and-bounded-radon-nikodym-density`,
  `thm-metropolis-hastings-kernel-is-reversible-and-invariant`,
  `thm-measurability-of-integration-against-a-kernel`,
  `thm-general-state-reversibility-implies-invariance`,
  `thm-ionescu-tulcea-construction-of-a-markov-chain`, and
  `thm-change-of-variables-for-expectation`.
- ABC-SMC and its weight proof: `lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels`,
  `alg-multinomial-and-residual-offspring-resampling`,
  `thm-multinomial-and-residual-resampling-have-unbiased-offspring-counts`,
  `prop-closure-properties-of-measurable-functions-used-by-the-integral`,
  `thm-arithmetic-and-lattice-operations-preserve-measurability`,
  `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`,
  `thm-monotone-convergence-for-the-integral`,
  `thm-integration-against-a-radon-nikodym-derivative`,
  `thm-sections-of-product-measurable-functions-are-measurable`,
  `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`,
  `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`,
  `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`,
  `thm-composition-with-borel-functions-preserves-measurability`, and
  `cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras`.

Also read the batch-49 proof contracts and current cross-batch dependency ledger
as evidence, not verdicts. No defect was found in an unassigned dependency.

## Item review and repairs

| Item | Verdict |
| --- | --- |
| `def-abc-augmented-tolerance-target` | Sound: the prior-simulator joint law, measurable tolerance event, normalizer, and positive-normalizer condition match the cited ABC definition and joint-law supplier. |
| `lem-abc-augmented-target-has-tolerance-posterior-marginal` | Sound: the rectangle formula and common normalizer give the marginal identity for every measurable parameter set. |
| `alg-abc-metropolis-hastings` | Sound: it supplies a probability proposal kernel to the general accepted-flow MH construction and makes no unsupported convergence claim. |
| `alg-abc-sequential-smc` | Repaired: its proposal-mixture kernel measurability argument now establishes the variable coefficient products explicitly; it also states the Borel structure on the weight coordinates. |
| `thm-abc-metropolis-hastings-invariance` | Sound: the augmented target is a probability when its normalizer is positive, and the stated AC, state-space, and proposal hypotheses match the general reversibility result. |
| `thm-abc-sequential-smc-rn-weight-update` | Sound: the conditional identity concerns unnormalized weighted measures; the proof keeps it distinct from finite-N self-normalized estimates and treats zero-weight populations as degeneracy. |
| `ex-abc-vanishing-acceptance` | Sound: the acceptance probability is (2\epsilon) for (0<\epsilon\le1/2), and the zero-tolerance event has zero uniform probability. |
| `ex-abc-positive-tolerance-stationary-law` | Sound: the accepted mass, ABC marginal, exact-data posterior, and independence-proposal transition kernel are computed consistently. |
| `ex-abc-sequential-tolerance-schedule-and-rn-weights` | Sound: the two tolerance normalizers, proposal mixture, RN ratios, and expected unnormalized weight contributions are correct. |
| `ex-abc-smc-finite-particle-collapse` | Sound: the stated (9801/10000) event has positive weight on two particles at parameter 0 while the target gives parameter 1 mass (3/7). |

Repair evidence for `alg-abc-sequential-smc`: the old Definition attributed
measurability of (w_iQ_t(\theta_i,B)), a product of two variable measurable
functions, to `prop-closure-properties-of-measurable-functions-used-by-the-integral`.
That proposition supplies finite sums, scalar multiples, and indicator
restrictions, but not general variable products. The Definition now gives the
rational-superlevel-set identity for products of nonnegative measurable
functions, uses the proposition for finite sums, and notes that both branches
are probability mixtures. It also specifies the Borel sigma-algebra on
`[0,1]` and justifies its standard-Borel status by the usual Polish interval.
This closes the population-space and kernel prerequisites used by the kernel
RN lemma. The sampling steps and dependency list were not changed. The
algorithm’s `verification` had no `judge` record to remove.

The contract `research/bayesian-computational-statistics-62-batch-49.proof-contracts.json`
was updated with the repaired algorithm evidence and refreshed exact Definition
quotations for its three assigned consumers: the SMC theorem and the two SMC
examples. Their mathematical content was checked against the clarified
procedure; no consumer repair was needed.

## Page verdicts

- `abc-mcmc-and-sequential-abc` (A page): **PASS after repair.** The summary now
  states the positive-normalizer condition for the target, the AC / standard-Borel
  / probability-proposal hypotheses for MH invariance, and the positive-normalizer
  schedule and almost-sure mixture-dominance condition for SMC.
- `abc-mcmc-and-sequential-abc-examples` (B page): **PASS.** Its summary matches
  the finite and continuous calculations and does not claim general accuracy,
  convergence, or finite-particle unbiasedness.

No remaining defect was found in an assigned item or page, and no uneditable
finding remains. Blocker: none.

## Source checks

- [Lintusaari et al., *Fundamentals and Recent Developments in Approximate Bayesian Computation*](https://www.pure.ed.ac.uk/ws/files/27977065/Lintusaari2016b.pdf): §4, Eq. (5), gives the ABC tolerance-conditioned parameter law; the MCMC-ABC discussion, pp. 21–23, Eqs. (8)–(11), identifies the augmented target and simulator proposal; the SMC-ABC discussion, pp. 23–24, Eqs. (12)–(13), and Appendix Algorithms 3–4 give the proposal-mixture weighting and procedures. These locations support the algorithms' interfaces; the local items supply the general-measure proofs.
- [Turner and Van Zandt, *A Tutorial on Approximate Bayesian Computation*](https://www.stat.cmu.edu/~brian/rm/764-2016/week02/bad%20and%20good/papers/turner-vanzandt-2012-tutorial-on-ABC.pdf): §3.1.1, pp. 3–4, gives the ABC-MCMC tolerance rejection and MH correction; §3.2.3, p. 4, gives the ABC-SMC prior-to-mixture weight.
- [Fearnhead and Prangle, *Constructing Summary Statistics for Approximate Bayesian Computation: Semi-automatic ABC*](https://arxiv.org/pdf/1004.1112): §1.2, Eq. (1), defines the summary-based ABC posterior, while §§2–3 discuss calibration and choosing summary statistics.
- [Martin, Kumar, and Lao, *Bayesian Modeling and Computation in Python*, Chapter 8](https://bayesiancomputationbook.com/markdown/chp_08.html): §§8.1–8.2 describe the simulator/tolerance target and ABC rejection/SMC context. The direct URL timed out on its first open; the indexed chapter result subsequently opened and these passages were checked.
- [Chopin, *Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference*](https://arxiv.org/pdf/math/0508594): pp. 3–4 give the conditional expected offspring-count property and the multinomial/residual resampling construction used here.
- [Mathlib, `Probability.Kernel.RadonNikodym`](https://leanprover-community.github.io/mathlib4_docs/Mathlib/Probability/Kernel/RadonNikodym.html): the section “Radon-Nikodym derivative and Lebesgue decomposition for kernels” states joint measurability for finite kernels when the target is countably generated and describes the singular-part criterion. The local kernel-RN lemma proves the almost-everywhere dominated version used by this batch.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/alg-abc-sequential-smc.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/alg-abc-sequential-smc.md` — 0 checked, 0 failing; the algorithm has no phase proof.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-49.proof-contracts.json --strict --items alg-abc-sequential-smc,thm-abc-sequential-smc-rn-weight-update,ex-abc-sequential-tolerance-schedule-and-rn-weights,ex-abc-smc-finite-particle-collapse` — 0 errors, 0 warnings; 4/4 checked.
- `node tools/proof-layout.mjs items/alg-abc-sequential-smc.md` — 1 item, 0 steps, 0 defects.

No judge stamp or self-certification was added.
