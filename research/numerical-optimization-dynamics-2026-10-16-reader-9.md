# Reader report — batch 9

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader (`reader-9`)  
Scope: batch `9` only

## Inventory reviewed

Opened both assigned pages:

- `library/numerical-differential-equations-and-stochastic-dynamics/milstein-stochastic-taylor-and-iterated-integrals.md` (A page)
- `library/numerical-differential-equations-and-stochastic-dynamics/milstein-stochastic-taylor-and-iterated-integrals-examples.md` (B page)

Opened all 14 assigned items in dependency order:

- `def-milstein-scheme-and-iterated-integrals`
- `lem-event-weighted-ito-isometry`
- `lem-stochastic-local-to-global-rms-bound`
- `def-additive-noise-stochastic-heun-scheme`
- `lem-iterated-brownian-integral-identities`
- `lem-bounded-sde-increment-moments`
- `lem-additive-heun-one-step-weak-expansion`
- `ex-geometric-brownian-milstein-update`
- `lem-milstein-local-defect-bounds`
- `thm-additive-noise-stochastic-heun-weak-order-two`
- `ex-noncommuting-two-noise-milstein-area`
- `thm-commutative-milstein-strong-order-one`
- `ex-scalar-multiplicative-noise-milstein`
- `thm-milstein-mlmc-level-variance-and-cost`

Read the direct dependencies used in these claims: `def-continuous-brownian-ito-process`, `def-ito-integral-for-square-integrable-predictable-processes`, `thm-ito-isometry-and-linearity-in-predictable-l2`, `def-axiom-of-choice`, `def-continuous-time-filtration-and-all-pairs-martingale`, `def-elementary-predictable-brownian-integrand`, `def-ito-integral-of-an-elementary-predictable-process`, `def-filtration-and-filtered-probability-space`, `thm-multidimensional-ito-formula-for-brownian-driven-processes`, `def-conditional-expectation-given-a-sigma-algebra`, `def-standard-normal-and-normal-laws`, `thm-ito-integral-process-has-a-continuous-martingale-version`, `thm-fatou-lemma`, `thm-conditional-expectation-exists-by-radon-nikodym`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `thm-conditional-expectation-is-the-l2-orthogonal-projection`, `def-mlmc-hierarchy-and-coupled-corrections`, `thm-mlmc-complexity-under-rate-assumptions`, and `cor-cauchy-schwarz-for-random-variables`.

To verify Brownian endpoint and conditional-expectation conventions in those suppliers, also opened `def-brownian-motion`, `def-d-dimensional-brownian-motion`, `def-conditional-expectation-as-an-ae-class`, `cor-conditional-lp-contraction`, `thm-taking-out-what-is-known`, and `lem-conditioning-a-known-variable-and-an-independent-variable`.

## Review and verdicts

The item statements preserve the required coefficient, filtration, dimension, and grid hypotheses. The Milstein product identity and commutative reduction follow from the multidimensional Itô formula and the iterated-integral identity. The event-weighted isometry, bounded increment moments, local Taylor defect bounds, and stochastic recurrence supply the stated strong order-one proof. The additive Heun one-step moment expansion matches the backward expansion through order two, and its telescoping proof gives the stated global weak order. The geometric Brownian and scalar multiplicative-noise calculations are correct. The noncommuting example proves that its area term is not determined by the two endpoint increments. The MLMC theorem checks the bias, correction-variance, and work rates required by its cited complexity theorem.

**A page verdict:** no mathematical defect found in the assigned item prose or page summary. The summary accurately describes the scalar/commutative Milstein result, area qualification, additive-noise Heun result, and MLMC rate argument.

**B page verdict:** no defect found in the example prose or page summary. Its two-noise example and the endpoint-conditioning argument support the summary.

## Uneditable findings

No item or page prose defect was confirmed. Three issues remain in the batch proof-contract metadata, which this assignment did not authorize me to edit:

1. In `research/numerical-optimization-dynamics-2026-10-16-batch-9.proof-contracts.json`, `contracts["lem-milstein-local-defect-bounds"].derivations[step="2.1"].inputs` lists `step 3.1` as an input to proof step 2.1. In the current item, step 2.1 instead uses steps 1.2, 1.3, and 1.4; step 3.1 is the final conclusion. The contract's `axioms[0].uses` also lists nonexistent step 4.1. Correct the step mapping to match the current proof.

2. In the same file, `contracts["thm-additive-noise-stochastic-heun-weak-order-two"].axioms[0].uses` lists nonexistent step 2.2. The current proof has steps 1.1, 2.1, and 3.1; its explicit AC reference is in step 3.1. Update that contract reference.

3. `contracts["ex-noncommuting-two-noise-milstein-area"].finite_checks[0].expected.conditional_variance` records `h^2/4`. The item proof establishes the *unconditional* residual moment `E|I_{12}-UV/2|^2=h^2/4`, not a constant conditional variance. Jurek, “Generalized Lévy Stochastic Areas and Selfdecomposability,” §1 opening formula (arXiv PDF p. 1; *Statistics & Probability Letters* 64 (2003), pp. 213–222), gives the conditional characteristic function of `D=I_{12}-I_{21}` given the endpoint vector `(U,V)`. Expanding it at zero gives `Var(I_{12}-UV/2 | U,V)=h^2/12+h(U^2+V^2)/12`, whose expectation is `h^2/4`. Relabel the contract check as an unconditional residual second moment or record the endpoint-dependent conditional variance.

These findings are also recorded in `research/numerical-optimization-dynamics-2026-10-16-reader-findings-9.json`.

## Edits and checks

No item or page edits were made. Consequently, no proof contract or judge record was changed, and no item reflow, precheck, or proof-layout command was needed.

## Sources and coverage limits

Opened Higham, “An Algorithmic Introduction to Numerical Simulation of Stochastic Differential Equations,” §6, printed pp. 539–540; it gives the scalar Milstein update and discusses its strong-order-one correction. For the conditional area variance finding, the exact conditional characteristic-function formula is recorded in Jurek §1 and its Taylor expansion gives the variance stated above.

The linked Kloeden–Platen PDF could not be fetched by the browser because its 39.4 MB size exceeded the fetch limit. The linked Tretyakov PDF also failed to open. Their exact section and page references therefore were not independently checked against the complete PDFs. The assigned item proofs and relevant local dependency statements were read and independently checked; this source-access limitation did not block the mathematical review.

**Blocker:** none for batch 9 review. Contract-only findings remain for owner disposition.
