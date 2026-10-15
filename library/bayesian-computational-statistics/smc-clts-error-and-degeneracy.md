---
page: smc-clts-error-and-degeneracy
title: Finite-horizon SMC error, CLTs, and degeneracy
status: draft
items:
  - def-dobrushin-coefficient-for-probability-kernels
  - lem-dobrushin-contraction-from-density-ratios
  - def-smc-clt-function-classes-and-variance-recursions
  - lem-smc-backward-operator-oscillation-bound
  - lem-smc-finite-horizon-empirical-law
  - lem-smc-multinomial-variance-unrolls
  - lem-smc-centered-filtering-feynman-kac-contraction
  - lem-smc-multinomial-resampling-clt
  - lem-smc-mutation-and-weighted-correction-clt
  - lem-smc-residual-resampling-clt-away-from-integer-weights
  - thm-smc-time-uniform-variance-bound-under-uniform-incremental-weights
  - thm-smc-multinomial-fixed-horizon-clt
  - thm-smc-residual-fixed-horizon-clt-away-from-integer-weights
examples: []
---

## Objective

Give the finite-horizon empirical-law and particle-count CLTs for sequential importance resampling, with multinomial selection and the residual-selection branch where finite-sample floor counts have a stable limit. State the source weighted-moment class and the recursive target-second-moment conditions needed for the post-resampling CLTs. The page records the exact variance recursions and separate time-uniform asymptotic-variance bounds under actual uniform incremental weights and multistep centered-image control. A proved last-state filtering branch uses positive finite density versions, true-transition mixing, bounded likelihood, target/proposal domination and an initial-weight bound. Weighted-only initialization needs only an L2 centered numerator and a normalized L1 denominator; recursively selected outputs retain the stated stronger target-moment conditions. It makes no finite-particle accuracy claim uniform in time.
