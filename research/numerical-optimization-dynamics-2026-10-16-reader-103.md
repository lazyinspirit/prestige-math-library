# Step 3a reader report — batch 103

Run: numerical-optimization-dynamics-2026-10-16  
Role: reader (reader-103)

## Opened inventory

Assigned pages:

- library/numerical-optimization-inverse-problems-and-uncertainty-quantification/simulation-gradient-estimation-and-simultaneous-perturbation.md
- library/numerical-optimization-inverse-problems-and-uncertainty-quantification/simulation-gradient-estimation-and-simultaneous-perturbation-examples.md

Assigned items:

- cex-uniform-payoff-convergence-does-not-imply-gradient-convergence
- def-simulation-gradient-objective-and-payoff-oracle
- alg-two-evaluation-spsa-gradient-estimator
- def-coupled-simulation-finite-difference-estimator
- def-pathwise-simulation-gradient-estimator
- thm-likelihood-ratio-gradient-identity-on-fixed-support
- prop-coupled-simulation-difference-variance-identity
- thm-pathwise-simulation-gradient-is-unbiased-under-envelope
- thm-spsa-gradient-bias-is-second-order
- thm-spsa-gradient-has-inverse-step-variance-bound
- thm-spsa-stochastic-approximation-has-stationary-limit-points
- thm-discrete-sde-adjoint-gradient-interchange
- ex-moving-support-score-estimator-misses-boundary-term
- ex-two-call-spsa-biological-simulator
- ex-coupled-differences-reduce-variance
- ex-gaussian-reparameterization-and-score-gradient

Required page context opened:

- numerical-differentiation-and-derivative-error-control
- stochastic-approximation-and-stochastic-gradient-methods
- discrete-continuous-and-pde-adjoint-sensitivities
- fisher-information-and-finite-sample-information-bounds
- conformal-prediction-and-exchangeable-ranks

I also opened the direct dependency statements used by the assigned proofs and inspected the draft in-run proofs before their consumers. These included the finite-difference error theorem, stochastic-gradient and conditional-variance interfaces, Robbins–Siegmund and Lipschitz-descent lemmas, finite state-step and reverse-mode suppliers, and discrete-adjoint recursion. Published measure, calculus, conditional-expectation, Gaussian, and measurability suppliers were checked at the statements used.

## Repairs

- thm-likelihood-ratio-gradient-identity-on-fixed-support: the Fréchet remainder step used linearity of the density integral without naming or deriving it. Added thm-linearity-of-the-lebesgue-integral-on-l-one, stated coordinatewise integrability from the envelope, and explicitly integrated the remainder identity. The proof-contract derivation and citation row now include the linearity fact.
- thm-pathwise-simulation-gradient-is-unbiased-under-envelope: the proof took expectations of a pointwise remainder and moved a finite inner product through expectation without a cited linearity/modulus result. Added cor-expectation-linearity-monotonicity-and-modulus-bound and the objective definition, and made both uses explicit in the proof and contract.
- thm-spsa-gradient-bias-is-second-order: the noise term required taking an unbounded reciprocal perturbation out of conditional expectation and then using the tower property; the cross-term cancellation also used that expectation depends only on law. Added the conditional-expectation definition and linearity/tower theorem, the law-of-a-random-element definition and expectation change-of-variables theorem, and cited each use. The weighted integrability hypothesis supplies the required integrability for the reciprocal products.
- thm-spsa-gradient-has-inverse-step-variance-bound: the conditional second-moment inequality needed conditional monotonicity, and integrability follows from the finite conditional bound and tower property. Added the basic conditional-expectation theorem and cited both uses.
- thm-discrete-sde-adjoint-gradient-interchange: the proof derived measurability of the state/payoff process from measurable simulation inputs, but the statement did not require those inputs to be measurable random elements or specify their measurable spaces. The statement now names the probability space and input measurable spaces, requires each input to be a measurable random element, specifies product measurability, and states a common measurable null set. The proof contract now records that premise.
- ex-coupled-differences-reduce-variance and ex-gaussian-reparameterization-and-score-gradient: each used the change-of-variables theorem under countable choice while assuming only AC and naming the definition of countable choice. Added thm-choice-implies-dependent-implies-countable-choice as a supplier and cited the implication.
- ex-gaussian-reparameterization-and-score-gradient: Fact F1 attributed the shifted-normal density to the normal-law definition alone. It now cites lem-normal-location-scale-density. Fact F8 was narrowed to the nonnegative density-integration statement actually supplied by its citation.

No item verification.judge records were present on the repaired carriers. Proof contracts were updated for every material item repair.

## Page verdicts

- **simulation-gradient-estimation-and-simultaneous-perturbation — no page-level defect.** Its summary matches the item claims and retains the fixed-support, domination, covariance, SPSA bias/variance, summability, and zero-gradient-liminf qualifications.
- **simulation-gradient-estimation-and-simultaneous-perturbation-examples — no page-level defect.** Its summary accurately describes the four examples and limits the biological-model computation to estimator arithmetic.

## Source checks

Fu’s author-hosted chapter supports the simulation-objective framing and pathwise/score distinction in §3 (pp. 6–8, equations (10)–(18)); its §3.2 equation (8) gives the shared-numerator two-evaluation SPSA estimator. Spall’s JHU/APL overview gives the simultaneous perturbation evaluation and coordinate update in the implementation steps on printed p. 490, and the independent zero-mean/inverse-moment conditions on printed pp. 488–490. Hager’s paper was inspected at §3 (printed pp. 254–255) for its transformed discrete adjoint system. These citations provide method context; the reviewed claims are proved in the local items.

## Unedited defects and blocker

No confirmed defects remained outside the authorized repair scope. No blocker.

## Validation

Reflow and precheck passed for all seven repaired items. The final batched proof-layout command reported 7 items, 27 steps, 0 defects.

## Coverage note

All 16 assigned items, both assigned pages, the five required page summaries, and the dependency statements needed for the checked arguments were opened. I did not re-prove the full transitive proofs of published foundations. The scanned Glasserman PDF exceeded the web fetch size limit; Springer chapter metadata and indexed section excerpts were available, and the local likelihood-ratio and pathwise proofs were checked directly against their explicit hypotheses and dependencies. No unresolved mathematical uncertainty remains for the assigned claims.
