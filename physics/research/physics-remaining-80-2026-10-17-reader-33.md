# Step 3a reader report — batch 33

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Batch: `33`

## Opened inventory

Assigned pages:

- `csm-stochastic-response` — A page.
- `csm-stochastic-response-examples` — B page.

Assigned items, read in supplier-before-consumer order where they had assigned
dependencies:

- `def-csm-dk-finite-reversible-rate-model`
- `post-csm-dk-selected-thermal-langevin-bath`
- `post-csm-dk-selected-reversible-bath-rates`
- `thm-csm-dk-nonexplosive-ctmc-and-gap`
- `thm-csm-dk-ou-velocity-diffusion-response`
- `pthm-csm-dk-ou-green-kubo-einstein`
- `rem-csm-dk-hard-limit-dispositions`
- `thm-csm-dk-finite-rate-fluctuation-response`
- `thm-csm-dk-markov-entropy-and-strong-averages`
- `thm-csm-dk-strong-lumpability`
- `pthm-csm-dk-finite-bath-response`
- `cex-csm-dk-hidden-state-rate-obstruction`

Read the assigned pages' prerequisite pages `csm-collision-transport`,
`csm-mean-field-hierarchy`, and `cm01-framework-quantities-and-geometry`.
Opened the item dependencies used to verify the assigned claims, including the
draft suppliers `thm-csm-dk-integrable-covariance-green-kubo` (batch 30),
`def-csm-dk-periodic-mean-field-model` (batch 31), and
`def-csm-dk-reflection-collision-gain` and
`lem-csm-dk-reflection-measure-and-gain-identities` (batch 32), together with
`def-csm-dk-hamiltonian-flow-measure`. The exact published item context opened
was `def-choice-function`, `def-axiom-of-choice`, `def-countable-choice`,
`thm-ionescu-tulcea-construction-of-a-markov-chain`,
`cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `post-cm01-frames`,
`post-cm01-spacetime`, `def-cm-affine-time-space`, `def-cm01-units`,
`def-brownian-motion`, `def-tdmath-ornstein-uhlenbeck-equation`,
`thm-tdmath-ornstein-uhlenbeck-model`,
`def-integrable-real-and-complex-functions-and-their-integrals`,
`cor-cauchy-schwarz-inequality-for-l-two`,
`thm-tonelli-and-fubini-for-completed-product-measures`, `thm-dominated-convergence`,
`thm-completion-measurable-functions-have-base-measurable-representatives`,
`cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure`,
`def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, and
`thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`.

## Review and repairs

The finite reversible rate definition has positive normalized Gibbs weights,
positive exit rates, a well-defined row generator, and consistent detailed
balance. The finite-chain proof constructs the chain by uniformization, proves
nonexplosion, identifies its semigroup, and derives the reversible spectral gap
and two-sided stationary extension. The covariance-limit, entropy/time-average,
response, lumpability, and hidden-state counterexample arguments preserve their
stated hypotheses and conclusions. The response and entropy results establish
model consequences; they do not report measurements.

The scalar Langevin postulate now describes only its modeled coordinate, limits
the differentiability claim to a probability-one event, and makes the initial
velocity's `F_0` measurability explicit. This follows the `F_0`-measurable
initial-data condition in `items/def-tdmath-ornstein-uhlenbeck-equation.md`;
`items/def-brownian-motion.md` states path continuity on a common event of
probability one, and `items/thm-tdmath-ornstein-uhlenbeck-model.md` supplies a
continuous adapted solution version. The OU response theorem now states the same
initial-data hypothesis. Its assigned consumer
`pthm-csm-dk-ou-green-kubo-einstein` was checked against the revised assumption.

`items/pthm-csm-dk-ou-green-kubo-einstein.md` now states the Green–Kubo integral
`D = integral_0^infinity C_VV(tau) d tau`; its proof evaluates
`(k_B T_b/m) integral_0^infinity exp(-gamma tau) d tau` and equates it to the
displacement-variance limit. This makes the Green–Kubo title precise. The rates
postulate and finite-rate response theorem now quantify a finite horizon
`t_f > 0`; `pthm-csm-dk-finite-bath-response` states the corresponding time
domain. The finite-rate mathematical and physical theorems now define the
perturbed Gibbs vectors by explicit normalized finite sums.

Updated `research/physics-remaining-80-2026-10-17-batch-33.proof-contracts.json`
for the changed items and refreshed its citations to the changed local
statements. No edited item had a `verification.judge` record to remove. Reviewed
the direct and indirect consumers of the changed thermal and rate assumptions,
including `post-csm-dk-selected-reversible-bath-rates`,
`pthm-csm-dk-ou-green-kubo-einstein`, and
`pthm-csm-dk-finite-bath-response`; their conclusions remain supported by the
revised inputs.

## Source checks

The source locators were checked against the cited works: [Aldous and Fill,
*Reversible Markov Chains and Random Walks on Graphs*](https://www.stat.berkeley.edu/users/aldous/RWG/book.pdf),
Chapter 2 §2.1.2 gives the finite continuous-time rate/jump-and-hold formulation
and Chapter 3 §3.1 states detailed balance for reversible chains; [Seifert,
“Stochastic thermodynamics, fluctuation theorems, and molecular
machines”](https://arxiv.org/abs/1205.4176), §2.6.1 gives underdamped Langevin
dynamics with noise covariance, while §§6.1 and 8.2 cover the master equation
and response framework; [Pavliotis, *Stochastic Processes and
Applications*](https://www.ma.imperial.ac.uk/~pavl/PavliotisBook.pdf),
Chapter 4 §4.4 gives the stationary OU law and covariance used here. The
specialized rate identities, convergence claims, and finite-chain extensions
are established by the local proofs reviewed above.

## Page verdicts

- `csm-stochastic-response`: **Accept after repairs.** Its summary accurately
  separates the finite mathematical rate model, adopted thermal couplings, and
  conditional physical predictions. No measured rate or universal transport
  claim is made.
- `csm-stochastic-response-examples`: **Accept.** The three-state path is
  reversible, and the two microscopic states in the same observed block have
  distinct first-order exit rates to the other block, refuting the
  all-preparations claim.

## Remaining defects and blockers

No confirmed defect remains unedited in the assigned pages or items. No blocker
was encountered. No edits were made to the batch 30–32 draft suppliers, published
items, root mathematics, or B-page prose.

## Validation

- Reflow: all six changed items reported `unchanged`.
- Precheck: all six changed items passed.
- Final proof-layout command: 6 items, 15 proof steps, 0 defects.

Coverage limitation: this review checked the exact supplier statements and
mathematical hypotheses needed for batch 33, including the relevant source
sections; it did not re-audit every transitive proof dependency of the published
mathematical library.
