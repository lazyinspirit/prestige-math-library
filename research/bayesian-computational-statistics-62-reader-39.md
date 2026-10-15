# Step 3a reader report — batch 39

Run: `bayesian-computational-statistics-62`  
Role: reader  
Date: 2026-10-15

## Opened inventory

Assigned pages:

- `library/bayesian-computational-statistics/adaptive-mcmc-convergence-and-limitations.md` (A-page)
- `library/bayesian-computational-statistics/adaptive-mcmc-convergence-and-limitations-examples.md` (B-page)

Required-page context:

- `library/bayesian-computational-statistics/mcmc-ergodicity-and-mixing.md`

All nine assigned items were opened: `def-diminishing-adaptation`,
`def-adaptive-mcmc-containment`,
`lem-adaptive-mcmc-block-perturbation-bound`,
`lem-adaptive-mcmc-uniform-drift-minorization-bound`,
`thm-adaptive-mcmc-converges-under-uniform-ergodicity-or-containment`,
`cor-adaptive-mcmc-containment-from-uniform-drift-minorization`,
`cex-diminishing-adaptation-alone-does-not-imply-strong-law`,
`ex-adaptive-mcmc-loss-of-containment`, and
`ex-uniformly-ergodic-adaptive-mcmc-family`.

Direct or specifically cited supplier items opened to check the assigned claims:

- `def-measurable-space`
- `def-measure-kernel-and-probability-kernel`
- `def-total-variation-distance-for-probability-laws`
- `def-invariant-and-stationary-distribution-for-a-markov-kernel`
- `def-probability-measure`
- `def-small-set-minorization-and-drift`
- `def-expectation-of-a-nonnegative-or-integrable-random-variable`
- `def-countable-choice`
- `def-dependent-choice`
- `def-general-state-reversibility-by-symmetric-flow-measure`
- `thm-measurability-of-integration-against-a-kernel`
- `thm-monotone-convergence-for-the-integral`
- `thm-countable-product-of-probability-spaces`
- `thm-finite-and-countable-subadditivity-of-measures`
- `thm-linearity-of-the-lebesgue-integral-on-l-one`
- `thm-general-state-reversibility-implies-invariance`
- `cor-markov-inequality-for-random-variables`
- `lem-total-variation-coupling-and-kernel-contraction`
- `lem-finite-products-of-probability-kernels`
- `lem-prior-and-model-kernel-define-joint-law`
- `thm-dynkin-pi-lambda`
- `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`
- `prop-closure-properties-of-measurable-functions-used-by-the-integral`
- `thm-sections-of-product-measurable-functions-are-measurable`
- `def-product-sigma-algebra-and-finite-product-sigma-algebras`
- `thm-tonelli-theorem-for-sigma-finite-product-spaces`

## Repairs and evidence

- `def-adaptive-mcmc-containment`, Definition: replaced the purported
  equivalence between Dirac initialization and conditioning on a fixed initial
  event with the direct Dirac-law formulation. Under an arbitrary initial law
  that event can be null, so its conditional probability is not a version-free
  description of the fixed-start process.
- `thm-adaptive-mcmc-converges-under-uniform-ergodicity-or-containment`, title:
  named the theorem's uniform-ergodicity or containment condition alongside
  diminishing adaptation. Its Statement requires one of those alternatives;
  diminishing adaptation alone is not sufficient.
- `cor-adaptive-mcmc-containment-from-uniform-drift-minorization`, title:
  recorded the essential diminishing-adaptation, strong-aperiodicity, and
  finite-initial-moment conditions. The Statement requires all three in
  addition to the common drift/minorization hypotheses.
- `cex-diminishing-adaptation-alone-does-not-imply-strong-law`, Counterexample
  and step 1.1: specified the power-set sigma-algebras on the finite state and
  parameter spaces. Joint measurability is then immediate for the finite
  family. The matrices, block probabilities, independence, and almost-sure
  subsequence argument were checked directly; their conclusions remain
  unchanged.
- `ex-adaptive-mcmc-loss-of-containment`, Example and Verification 1.1:
  specified the power-set state sigma-algebra and Borel sigma-algebra on the
  parameter interval, and verified joint measurability from the affine matrix
  entries.
- `ex-uniformly-ergodic-adaptive-mcmc-family`, Example and Verification 1.1:
  specified the power-set state sigma-algebra and Borel sigma-algebra on the
  parameter interval, and verified joint measurability from the continuous
  matrix entries.

Updated the corresponding rows in
`research/bayesian-computational-statistics-62-batch-39.proof-contracts.json`.
The edited draft items had no `verification.judge` record to remove.

## Page verdicts

- **A-page `adaptive-mcmc-convergence-and-limitations`: pass.** Its summary
  accurately describes the finite-block comparison, the marginal-convergence
  alternatives, the drift/minorization route, and the distinction from strong
  laws and central limit theorems.
- **B-page `adaptive-mcmc-convergence-and-limitations-examples`: pass.** Its
  summaries match the checked constructions. The rare-block counterexample
  satisfies simultaneous uniform ergodicity; this also gives containment by a
  deterministic uniform bound on every fixed-kernel convergence time.

## Validation and unresolved issues

Reflow and precheck were run for each changed item. The containment definition
was unchanged by reflow and its precheck reported 0 checked, 0 failing; the
other five changed items reflowed and each precheck passed. The final proof
layout command checked all six changed items: 25 proof steps, 0 defects.

No uneditable mathematical defects or batch-39 blocker remain. At the final
status check the run was paused; autopilot still reported `3a-collect` blocked
on batch 23 and `3a-split` blocked on batch 25, both outside this dispatch. No
run transition was attempted. The prerequisite MCMC page was read as context,
not independently audited. The full foundational dependency closures beneath
general-purpose published suppliers were not re-audited; their local statements
and the specific support claims used here were opened and checked where
relevant.
